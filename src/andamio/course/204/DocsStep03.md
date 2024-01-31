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
 
 

## Step 3: Lock Tokens in Your Faucet

Now that you have your own instance of a PPBL Faucet Contract, it's time to lock some tokens in it, so that other people can claim them.

Before getting started, make sure that you have minted enough tokens to share. Your tokens can have any name, but the Policy ID must match the `faucetTokenSymbol` parameter you used in [Step 1](/modules/204/project-step-01).


## What to do:
Lock tokens at your new faucet address. You already specified the faucet token's Policy ID in `FaucetParams`. Now in `FaucetDatum` you will specify the `TokenName`, along with the number of tokens that can be withdrawn each time someone unlocks tokens from the faucet.

### What is your new faucet address?
You can use `cardano-cli address build` to generate an address from the `.plutus` script you compiled in [Step 1](/modules/204/project-step-01).


## How to do it:
A script is provided to help you complete this step: [bash-scripts/faucet-mini-project/lock-tokens-at-faucet-address.sh](https://gitlab.com/gimbalabs/ppbl-2023/ppbl2023-plutus-template/-/blob/main/bash-scripts/faucet-mini-project/lock-tokens-at-faucet-address.sh)

### Before using lock-tokens-at-faucet-address.sh:
1. Create a `faucet-datum.json` file
2. Get the path to the `.plutus` script you compiled in [Step 1](/modules/204/project-step-01)
3. Make sure you have enough tokens to lock at the contract address, with the Policy ID you specified in `FaucetParams`


## Prepare a faucet-datum.json file
In [FaucetMiniProject.Types](https://gitlab.com/gimbalabs/ppbl-2023/ppbl2023-plutus-template/-/blob/main/src/FaucetMiniProject/Types.hs), `FaucetDatum` is defined like this:

```haskell
data FaucetDatum = FaucetDatum
  {
    withdrawalAmount :: !Integer, -- the number of tokens that can be withdrawn in each unlocking tx
    faucetTokenName  :: !TokenName -- the name of the token locked in the faucet
 }
```

To add `FaucetDatum` to a transaction, you must create a `.json` file. The file name can be anything you'd like, so suppose you call it `faucet-datum.json`. Here is an example `faucet-datum.json` file that sets `withdrawalAmount` to 100 "tScaffold" tokens. (`7453636166666f6c64` is the hex string of "tScaffold")
```json
{
    "constructor": 0,
    "fields": [
        {
            "int": 100
       },
        {
            "bytes": "7453636166666f6c64"
       }
    ]
}
```

## Look at this transaction build:
Compare this example to the `transaction build` in [Lesson 102.4](/modules/102/1024).
- What's similar?
- What's new?

```bash
 cardano-cli transaction build \
 --babbage-era \
 --testnet-magic 1 \
 --tx-in $TX_IN \
 --tx-in $TX_IN_TOKEN \
 --tx-out $FAUCET_ADDRESS+\"2000000 + $TOKENS_TO_FAUCET $FAUCET_ASSET\" \
 --tx-out-inline-datum-file $PATH_TO_DATUM_FILE \
 --tx-out $ADDRESS+\"2000000 + $TOKENS_BACK_TO_ISSUER $FAUCET_ASSET\" \
 --change-address $ADDRESS \
 --protocol-params-file protocol.json \
 --out-file open-a-faucet-tx.draft
```


## What to think about:
- What are some advantages/opportunities of storing `withdrawalAmount` and `faucetTokenName` in Datum?
- What might be some advantages/opportunities of storing `withdrawalAmount` and `faucetTokenName` in the `FaucetParams`?
