---
 {
	"title": "Assignment 102.1: Build Two Transactions",
	"slt": ["102.1", "102.2", "102.3", "102.4", "102.5", "102.6"],
	"type": "Assignment",
	"description": "",
	"videoURL": "",
	"lastEdited": "2024-01-08",
	"author": "Gimbalabs"
}
---

## Module 102, Mastery Assignment #1:

# Build Two Transactions


## This is a guided Mastery Assignment.

This documentation will help you get started on a task, and you will have a chance to demonstrate mastery of some SLTs.

Hopefully, you will learn some things along the way. In addition, we will encounter some questions about how the blockchain works.

After finishing, you will leave on-chain evidence of your success!


## In this assignment, you will demonstrate mastery of these learning targets:

<SLTSmall moduleNumber={102} id='102.1' />
<SLTSmall moduleNumber={102} id='102.2' />
<SLTSmall moduleNumber={102} id='102.3' />


## How will I demonstrate mastery?

Great question. We've been wondering the same thing.

For example, if we consider SLT 102.2:

- How will we know that you created a particular address?
- How will we know that the address is actually "yours"?

This assignment will investigate these questions using your **PPBL2023 Contributor Token**.


## Do This First: Send Your PPBL 2023 Token to Your CLI Wallet

Send your PPBL 2023 Token from your **Browser Wallet** to the **CLI Wallet** you created in [Lesson 102.2](/modules/102/1022).

### After you do, check the status of your CLI Wallet here:

<CheckAddressHasContributorToken />


## What Does It Prove?

In [Lesson 100.4](/modules/100/1004), you saw that we could check if a browser wallet holds a token. The form above shows we can do the same for _any_ blockchain address - even if it is not the connected wallet.

If anyone can drop any address into this form, how can we know whether an address belongs to "you"?

Additionally, the form above only looks for **_any_** PPBL2023 token, not yours.

If you understand these problems, welcome to an exciting frontier of blockchain development! Now we are ready to think more about on-chain proof.


## Check whether the address has sent the Tx

Instead of looking at the UTxOs that are _currently_ at a wallet address, we can look at the transactions sent to and from that address.

### UTxO = current state

Remember that UTxOs are _currently unspent_. So UTxOs represent the status right now of all values on the blockchain.

### Transaction = historical record

If we want to look at the history of blockchain, we must look at transactions. We can look at the record of any Tx, the UTxO inputs it consumed, and the new UTxO outputs it created.

### We can check whether an address has ever sent the token:

<CheckTxFromAddressWithPolicyID />


## Still, what does _that_ prove?

Keep thinking about it as you work on the assignment below. In this course, we will keep asking.


## Here is your assignment:

Build two transactions with the **CLI wallet** you built in [Lesson 102.2](/modules/102/1022). By completing this assignment, you will create evidence that you know how to build a transaction with multiple output UTxOs. In addition, you will create an on-chain record that your Browser Wallet and CLI Wallet are associated.

1. Send a "Split UTxO" transaction from your CLI Wallet and back to itself with three outputs. Create one UTxO output with exactly 10 tADA, another with exactly 15 tADA, and one more with exactly 25 tADA.
2. Send your PPBL2023 Contributor Token from your CLI wallet to your browser wallet.


## Tx #1: How to build a split UTxO Transaction:

Set all necessary variables so that you can successfully `build`, `sign`, and `submit` this transaction. Ensure there are three output UTxOs, each containing exactly 10, 15, and 25 tADA.

```bash
cardano-cli transaction build \
--babbage-era \
--testnet-magic 1 \
--tx-in $TXIN_LOVELACE \
--tx-out $SENDER_ADDRESS+10000000 \
--tx-out $SENDER_ADDRESS+15000000 \
--tx-out $SENDER_ADDRESS+25000000 \
--change-address $SENDER_ADDRESS \
--out-file split-utxo.raw

cardano-cli transaction sign \
--signing-key-file $SENDER_KEY \
--testnet-magic 1 \
--tx-body-file split-utxo.raw \
--out-file split-utxo.signed

cardano-cli transaction submit \
--tx-file split-utxo.signed \
--testnet-magic 1
```


## Tx #2: How to send a Cardano Native Asset in a transaction:

When you send your PPBL 2023 Token between two wallets, you create some on-chain evidence that there is a relationship between these two wallets. So let's generate evidence that your Browser Wallet and your CLI Wallet are somehow related.

### About Asset Ids:

- An Asset Id looks like this: `05cf1f9c1e4cdcb6702ed2c978d55beff5e178b206b4ec7935d5e056.3232325050424c32303233446973636f44616e`
- Before the `.` is the Policy ID of a token. The Policy ID of **ALL** PPBL 2023 Tokens is `05cf1f9c1e4cdcb6702ed2c978d55beff5e178b206b4ec7935d5e056`
- After the `.` is the token name, represented as a hexadecimal string. Every PPBL 2023 Token has a unique name.

Set all necessary variables so that you can successfully `build`, `sign`, and `submit` this transaction:

```bash
cardano-cli transaction build \
--babbage-era \
--testnet-magic 1 \
--tx-in $TXIN_LOVELACE \
--tx-in $TXIN_WITH_PPBL2023_TOKEN \
--tx-out $BROWSER_ADDRESS+"1500000 + 1 $PPBL2023_ASSET_ID" \
--change-address $SENDER_ADDRESS \
--out-file send-contrib-token.raw

cardano-cli transaction sign \
--signing-key-file $SENDER_KEY \
--testnet-magic 1 \
--tx-body-file send-contrib-token.raw \
--out-file send-contrib-token.signed

cardano-cli transaction submit \
--tx-file send-contrib-token.signed \
--testnet-magic 1
```


import MDXLessonLayout from "@/src/components/lms/Lesson/MDXLessonLayout.tsx";
export default ({ children}) => <MDXLessonLayout>{children}</MDXLessonLayout

>
