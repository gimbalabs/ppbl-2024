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
 
 

## Step 2: Deploy a reference script

Now that you have your own version of the `my-faucet-script.plutus` script, you can deploy it on-chain. When we first introduced [contract unlocking transactions in Lesson 102.5](/modules/102/1025), we showed you how to include a `--tx-in-script-file` in `cardano-cli transaction build`.

But it can be inefficient to follow this method. Including the Plutus CBOR again and again in many transactions leads to repeated work and expensive transactions. Instead of including the whole script file in every unlocking transaction, it is possible to write a `.plutus` script to the blockchain once, and then to "reference" it every time we need it.

In this step, you will deploy `my-faucet-script.plutus` to Preprod. In [Step 4: Test an Unlocking Tx](/modules/204/project-step-04), you will see how to use this new reference script.


## What to do:

Deploy the contract by creating a "Reference UTxO" with the Plutus script you compiled in Step 1.


## What's new in this lesson?

Reference Scripts! You can write a `.plutus` script directly to the blockchain by including it in a UTxO. This is called a Reference Script.

Reference Scripts were a new addition to Cardano at the [Vasil Hard Fork](https://cardanofoundation.org/en/news/the-vasil-hard-fork-a-new-update-to-scale-and-optimize-the-cardano-blockchain/) in September 2022. The idea of Reference Scripts was originally refined in [CIP-33](https://cips.cardano.org/cips/cip33/).


## How to do it:

Use this script: [bash-scripts/faucet-mini-project/deploy-reference-script.sh](https://gitlab.com/gimbalabs/ppbl-2023/ppbl2023-plutus-template/-/blob/main/bash-scripts/faucet-mini-project/deploy-reference-script.sh)

Look at this `transaction build` - it's only a little bit different from the simple transaction you build in [Lesson 102.3](/modules/102/1023):

```bash
cardano-cli transaction build \
--babbage-era \
--testnet-magic 1 \
--tx-in $TX_IN \
--tx-out $ADDRESS+$MIN_UTXO \
--tx-out-reference-script-file $PLUTUS_SCRIPT \
--change-address $ADDRESS \
--protocol-params-file protocol.json \
--out-file create-reference-utxo.draft
```

### Two things to note:

1. `--tx-out-reference-script-file` can be included in a transaction build along with any valid `--tx-out`. In this example `$PLUTUS_SCRIPT` must be the path to `my-faucet-script.plutus`, as compiled in Step 1. This new reference UTxO can be sent to any kind of address. In this example, you get to choose.

2. `$MIN_UTXO` is calculated in the provided bash script. See if you can figure out how it works! Because there will be a lot of data in the output UTxO, the minUTxO will be higher than usual.


## Important - After the Tx is Confirmed:

Take note the `TxHash` and `TxIx` of your new reference UTxO. You'll need them.

### Tip

Use this command to save all UTxOs at the reference address to a file called `ref.json` (this file name can be anything you'd like):

```bash
cardano-cli query utxo --testnet-magic 1 --address $YOUR_REFERENCE_ADDRESS --out-file ref.json
```

Then, open the `ref.json` file and find your reference script.


## What to think about:

- It can be a good idea to store your reference scripts at an address that is different from one that you typically use. If you inadvertently spend a reference UTxO, it can break any dapps using that script.
- What kind of address is best for holding a reference UTxO? Why?
