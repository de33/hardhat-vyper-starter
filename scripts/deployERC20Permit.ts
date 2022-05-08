import { ethers } from 'hardhat';

async function main() {
    const ERC20Permit = await ethers.getContractFactory('ERC20Permit');
    const erc20Permit = await ERC20Permit.deploy("Test", "TEST", 18, "10000000000000000000");
    await erc20Permit.deployed();
  
    console.log('ERC20Permit deployed to:', erc20Permit.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });