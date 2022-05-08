import { expect } from 'chai';
import { ethers, waffle } from 'hardhat';
import { deployContract } from 'ethereum-waffle';
import { Contract, BigNumber, constants, Signer } from 'ethers';
import GreeterArtifact from '../artifacts/contracts/Greeter.vy/Greeter.json'
import { Greeter } from '../src/types/Greeter'
import {Address} from 'cluster'

describe("Greeter", function () {
  let deployer: Signer
  let greeter: Greeter

  it("Should return the new greeting once it's changed", async function () {
    const accounts = await ethers.getSigners();
    [deployer] = accounts;

    greeter = (await deployContract(deployer, GreeterArtifact, ["Hello, world!"])) as Greeter

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
