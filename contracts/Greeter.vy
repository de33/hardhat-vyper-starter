# @version 0.3.3
greeting: String[32]

@external
def __init__(_greeting: String[32]):
    print("Deploying a Greeter")
    self.greeting = _greeting


@view
@external
def greet() -> String[32]:
    return self.greeting


@external
def setGreeting(_greeting: String[32]):
    print("Changing greeting")
    self.greeting = _greeting


