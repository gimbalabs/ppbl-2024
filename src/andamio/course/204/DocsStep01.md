---
 {
	"title": "",
	"slt": [""],
	"type": "Lesson",
	"description": "",
	"videoURL": "",
	"lastEdited": "2024-01-08",
	"author": "Gimbalabs"
}
---
 
 

## Step 1: Compile a parameterized validator

In this project, you will not write any new Plutus code. Instead, you will compile your own ***instance*** of a spending validator by changing one parameter. The validator is a token-gated faucet that allows any holder of the PPBL 2023 Contributor Token to withdraw some "Faucet Tokens" from a faucet UTxO.

In ***your instance*** of the smart contract, you get to decide what the Faucet Token is. Before getting started with this step, you will need to mint a token for distribution. You can use a token that you minted earlier in this course, or you can mint a new one just for this project. You can mint a token using any method you like, you can give it any name you want, and you can mint as many as you'd like. Just make sure you have enough to share!

When you're ready to compile your own instance of the Faucet contract, you will use the Policy ID of your Faucet Token as the new validator parameter.


## What to do:
Compile a parameterized faucet smart contract that distributes a token you've minted to anyone holding the PPBL 2023 Contributor token.


## What's new in this lesson?
In this course, you have seen how to compile a Plutus script. Here, we introduce the concept of a ***parameterized smart contract***. By changing only the parameters of a validator, we can re-use validation logic across many instances of the same contract.

In this example, you will create a token-gated faucet that allows holders of the PPBL 2023 Contributor Token to claim a token that you have minted. To use it, you will only need to change one parameter - and then you will have your very own instance of the contract.


## How to do it:
1. Pull the latest changes to [PPBL 2023 Plutus Template repo](https://gitlab.com/gimbalabs/ppbl-2023/ppbl2023-plutus-template). As usual, you can open this project [on your own computer](/modules/101/1012) or in [Demeter.run](/modules/101/1013).

2. Open the file [`/ppbl2023-plutus-template/src/FaucetMiniProject/Compiler.hs`](https://gitlab.com/gimbalabs/ppbl-2023/ppbl2023-plutus-template/-/blob/main/src/FaucetMiniProject/Compiler.hs)

3. `FaucetMiniProject.Validator` takes the parameter `FaucetParams`, which consists of two fields: an `accessTokenSymbol` and a `faucetTokenSymbol`:

```haskell
faucetParams :: FaucetParams
faucetParams =
  FaucetParams
    {
      accessTokenSymbol = "05cf1f9c1e4cdcb6702ed2c978d55beff5e178b206b4ec7935d5e056",
      faucetTokenSymbol = "<THE POLICY ID OF YOUR FAUCET TOKEN GOES HERE!>"
   }

```

Here, the `accessTokenSymbol` is the Policy ID of the PPBL 2023 Contributor Token. For this project, do not change it.

Change the `faucetTokenSymbol` to match the Policy ID of a token that you have minted.

That's all you need to change in the source code. By changing this single parameter, you can compile a unique `.plutus` script with a unique contract address!

4. Run `cabal repl` locally in `nix-shell`, or Demeter.run.

5. When the repl is open, load `FaucetMiniProject.Compiler` like this:
```bash
...
Ok, 10 modules loaded.
AlwaysSucceeds.Compiler> :l FaucetMiniProject.Compiler
FaucetMiniProject.Compiler>
```

6. Run `writeFaucetValidatorScript` to write a new `.plutus` script to the `/output` directory.

7. Remember that you can use `cardano-cli address build` to generate the address of this new spending validator.


## What to think about:
- Is it possible to unintentionally create the exact same contract as someone else? Why or why not?
- You might suspect that the concept of parameterized validators is a big deal, and YOU WOULD BE RIGHT! In Module 301, we will take a closer look at this important idea.
