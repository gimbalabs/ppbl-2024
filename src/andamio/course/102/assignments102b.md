---
 {
	"title": "Assignment 102.2: Change Your Lucky Number",
	"slt": ["102.1", "102.2", "102.3", "102.4", "102.5", "102.6"],
	"type": "Assignment",
	"description": "",
	"videoURL": "",
	"lastEdited": "2024-01-08",
	"author": "Gimbalabs"
}
---

## Module 102, Mastery Assignment #2

# Change Your Lucky Number


## This is a guided Mastery Assignment


## In this assignment you will demonstrate mastery of these learning targets:

<SLTSmall moduleNumber={102} id='102.4' />
<SLTSmall moduleNumber={102} id='102.5' />


## Introduction

When you minted your PPBL 2023 Contributor Token in [Lesson 100.4](/modules/100/1004), **two** tokens were minted.

We minted one of the tokens to your Browser Wallet, and we minted the other token to this Contract Address: [addr_test1wr6ewsvtmdjv8znh7wxvw9qezgwvju5rdk9gmgefvrvrhug7zrfe0](https://preprod.cardanoscan.io/address/addr_test1wr6ewsvtmdjv8znh7wxvw9qezgwvju5rdk9gmgefvrvrhug7zrfe0)

These two tokens have a relationship, and they have similar names:

- The token in your browser wallet has the name `222PPBL2023<YOUR ALIAS>`
- The token at the contract address has the name `100PPBL2023<YOUR ALIAS>`

This token pair partially implements the design pattern suggested in [CIP 68 - Datum Metadata Standard](https://cips.cardano.org/cips/cip68/). Throughout PPBL 2023, we will work together to build our understanding of CIP 68 and decide whether it sufficiently supports the design of the PPBL 2023 Token. Then, we will determine whether to fully adopt the CIP, suggest changes, or draft a CIP of our own.


## What is a "CIP"?

[CIP stands for "Cardano Improvement Proposal"](https://cips.cardano.org/), and the CIP process is an essential feature of Cardano.

We will continue to investigate different CIPs in this course. We will encounter new questions about protocol governance, standards, and more when we do.


## Which parts of CIP-68 does PPBL 2023 Token implement?

The PPBL 2023 Token implements only some of the core concepts outlined in CIP-68.

### Concept #1: "Reference NFTs" and "User Tokens":

Here is a description from CIP-68:

_"The basic idea is to issue two assets, one referencing the other. We call these two a reference NFT and a user token, where the token can be an NFT, FT, or any other asset class that is transferable and represents any value. So, the user token is the asset that lives in a user's wallet."_

### Concept #2: Updating Token Metadatum

We can update the metadatum associated with your PPBL 2023 Token. In this Mastery Assignment, you will see how.

### Concept #3: Programmability

When information is stored on-chain in `datum`, it can be referenced by a smart contract. We will investigate the implications of this as we continue through PPBL 2023.


## Which parts of CIP-68 does the PPBL 2023 Token not implement?

At [Live Coding on 2023-0000](/live-coding), we will discuss how CIP-68 is _not_ currently applied to the PPBL 2023 Token.

Make sure to [read the CIP](https://cips.cardano.org/cips/cip68/) and bring your ideas.


## What does the datum on your PPBL 2023 Token look like?

On-chain, the PPBL 2023 reference datum looks like this:

```json
"inlineDatum": {
    "constructor": 0,
    "fields": [
        {
            "int": 5
       },
        {
            "list": []
       }
    ]
}
```

In PlutusTx, it looks like this:

```haskell
data ContributorReferenceDatum = ContributorReferenceDatum
  { luckyNumber         :: !Integer,
    completedModules    :: ![BuiltinByteString]
 }
```

In upcoming modules, we will examine the above in detail.

For now, here is what we want you to notice:

1. `"int": 5` in the on-chain datum corresponds to `luckyNumber` in the Plutus type.
2. `"list": []` in the on-chain datum corresponds to `completedModules` in the Plutus type.

We minted your PPBL 2023 Token with the lucky number `5` and an empty list `[]` of completed modules.

- In this assignment, you will change your lucky number.
- We will add completed modules to your list as this course progresses.


## Your Task: Update your lucky number.

A Plutus validator stipulates that you can change the Lucky Number for ONLY YOUR token. Review the [source code of the validator here](https://gitlab.com/gimbalabs/ppbl-2023/ppbl-plutus-starter-2023/-/blob/main/src/ContribToken/Validator.hs). For now, you do not need to understand everything written in this PlutusTx validation code.

This assignment will use the compiled validation script to build a transaction.

As we dive deeper into `PlutusTx`, we will use `ContribToken.Validator` as a case study.


## Step by Step:

### Before you get started:

1. Send your PPBL 2023 Token to your CLI Wallet.
2. Create a new directory for `/transactions`


### Step 1. Write Redeemer File:

In your `/transactions` directory, create a new file called `UpdateNumber.json`, with the following contents:

```json
{ "constructor": 1, "fields": [{ "int": 5}]}
```

Change the number `5` to whatever Lucky Number you'd like. Just make sure it's a number different than 5.


### Step 2. Write Datum File

Also, in `/transactions`, create a new file called `NewDatum.json`, with the following contents:

```json
{
	"constructor": 0,
	"fields": [{ "int": 5}, { "list": []}]
}
```

Change the number `5` to match the lucky number you chose in `UpdateNumber.json`.


### Step 3. Set Variables

Set your CLI wallet address and signing key:

```bash
SENDER_ADDRESS=
SENDER_KEY=
CONTRACT_ADDRESS=addr_test1wr6ewsvtmdjv8znh7wxvw9qezgwvju5rdk9gmgefvrvrhug7zrfe0
```


### Step 4. Select UTxOs and Asset IDs

- An Asset Id looks like this: `05cf1f9c1e4cdcb6702ed2c978d55beff5e178b206b4ec7935d5e056.3130305050424c32303233446973636f44616e`
- Before the `.` is the Policy ID of a token. The Policy ID of **ALL** PPBL 2023 Tokens is `05cf1f9c1e4cdcb6702ed2c978d55beff5e178b206b4ec7935d5e056`
- After the `.` is the token name, represented as a hexadecimal string. Every PPBL 2023 Token has a unique name.

Use `cardano-cli query utxo --testnet-magic 1 --address $SENDER_ADDRESS` to see the list of UTxOs in your CLI Wallet, then set these variables:

```bash
CONTRIBUTOR_TOKEN_TX_IN=
FEES_AND_COLLATERAL_TX_IN=
CONTRIBUTOR_TOKEN_ASSET=
```

Use `cardano-cli query utxo --testnet-magic 1 --address $CONTRACT_ADDRESS` find the UTxO with your reference token, then set these variables:

```bash
CONTRACT_TX_IN=
CONTRIBUTOR_REFERENCE_ASSET=
```

Which `CONTRIBUTOR_REFERENCE_ASSET` is yours? There are a few ways to find out; we will leave that to you. Note that there are web-based tools [like this that convert from hexadecimal to text strings](https://string-functions.com/hex-string.aspx)


### Step 5. Build the Transaction

You can build this transaction if you complete steps 1 through 4 correctly. You might have to double-check some of the variables if you get errors. As always, please bring your questions to Live Coding or Gimbalabs Discord.

```bash
cardano-cli transaction build \
--babbage-era \
--testnet-magic 1 \
--tx-in $CONTRIBUTOR_TOKEN_TX_IN \
--tx-in $FEES_AND_COLLATERAL_TX_IN \
--tx-in-collateral $FEES_AND_COLLATERAL_TX_IN \
--tx-in $CONTRACT_TX_IN \
--spending-tx-in-reference e4155f5ef706a87611a99c16fc030ad8efa276cb2f59a1332bcee564736eb547#0 \
--spending-plutus-script-v2 \
--spending-reference-tx-in-inline-datum-present \
--spending-reference-tx-in-redeemer-file UpdateNumber.json \
--tx-out $CONTRACT_ADDRESS+"2000000 + 1 $CONTRIBUTOR_REFERENCE_ASSET" \
--tx-out-inline-datum-file NewDatum.json \
--tx-out $SENDER_ADDRESS+"2000000 + 1 $CONTRIBUTOR_TOKEN_ASSET" \
--change-address $SENDER_ADDRESS \
--protocol-params-file protocol.json \
--out-file contrib-updates-lucky-number.draft
```


### Step 6. Sign and Submit

```bash
 cardano-cli transaction sign \
--signing-key-file $SENDER_KEY \
--testnet-magic 1 \
--tx-body-file contrib-updates-lucky-number.draft \
--out-file contrib-updates-lucky-number.signed

cardano-cli transaction submit \
--tx-file contrib-updates-lucky-number.signed \
--testnet-magic 1
```


## Unlocking and Locking in the Same Tx

As you can see, it takes just one transaction to update your lucky number. The transaction unlocks a UTxO from the [Contributor Reference Address](https://preprod.cardanoscan.io/address/addr_test1wr6ewsvtmdjv8znh7wxvw9qezgwvju5rdk9gmgefvrvrhug7zrfe0), and create a new UTxO with updated datum to send back to the Contributor Reference Address.

When building applications on Cardano, it is common to build complex transactions with multiple contract inputs and/or outputs. If this is your first complex transaction with `cardano-cli`, congratulations!


## Reference Scripts

You just built a transaction using an on-chain reference to a Plutus Script. Another big idea that we will discuss in the coming weeks!




;
