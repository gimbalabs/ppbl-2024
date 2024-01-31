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
 
 

## Step 5: Write metadata to register with aggregator

Here is another really big idea. We're just going to introduce it to you. Then, we're going to spend the next few months exploring it together.

Ready?

At the start of this project, you created an ***instance*** of a Plutus validator. Other PPBL students have done the same. This means that the same PlutusTx source code is being used by a variety of people who are each independently responsible for administering a version of the Faucet contract. None of these depends on another, but at a certain point, it might be nice to collect a set of similar instances in one place, so that someone who wants to claim tokens from a variety of sources can do so.

Aggregation can be a third-party service, independent of contract adminstration. In this project, we provide one example of how aggregation can work.

However, it is really important to understand that someone else could:
1. Provide an independent user interface for the very same contracts.
2. Provide an aggregator of some or all of the existing instances of a contract.
3. Choose to advertise one instance and not another...

...all without asking for permission from anyone else!


## What to do:

Register your instance of the PPBL Faucet with our PPBL Faucet Aggregator.


## How to do it:
- Post metadata to Cardano Preprod with the metadata key `161803398875`.
- If you'd like, you can use this bash script: [bash-scripts/send-tx-with-any-metadata.sh](https://gitlab.com/gimbalabs/ppbl-2023/ppbl2023-plutus-template/-/blob/main/bash-scripts/send-tx-with-any-metadata.sh).

### The metadata must look like this:
```json
{
    "161803398875": {
        "contractAddress": "<address of your faucet contract>",
        "policyId": "<policy id of faucet token>",
        "tokenName": "<token name>",
        "withdrawalAmount": <number of tokens in a withdrawal>,
        "refUTxOHash": "<TxHash of reference UTxO>",
        "refUTxOIx": <TxIx of reference UTxo>,
        "aboutToken": [
            "One or more strings about your token",
            "*Keep in mind that string must not exceed 56 characters*"
        ]
   }
}
```

### Here is a working example:
```json
{
    "161803398875": {
        "contractAddress": "addr_test1wrfjp0t656rpm8wq67mh5zy7kjhw7qz82l82xjka2lzmlacjn0aeg",
        "policyId": "a4af431031b91e9130aa6b920c3b8b5c18befeb79e9e16d473205396",
        "tokenName": "tScaffold",
        "withdrawalAmount": 100,
        "refUTxOHash": "4dd9ed21500f44da9b8e520be3f158a97672a904f0dab7a17b2eccba05a6a350",
        "refUTxOIx": 0,
        "aboutToken": ["an impermanent scaffold"]
   }
}
```


## Viewing Metadata in GraphQL Playground
In a [Cardano Preprod GraphQL Playground](https://d.graphql-api.iohk-preprod.dandelion.link/), run this query to see the resulting metadata:

```graphql
query TransactionsWithMetadataKey {
  transactions(where: { metadata: { key: { _eq: "161803398875"}}}) {
    hash
    includedAt
    metadata {
      key
      value
   }
 }
}
```


## What to think about:
- How does aggregation connect to standards, as discussed in Module 203?
- What role will aggregation play in distributed networks? How do you distinguish between aggregation and centralization?
- Bring your questions and ideas to Live Coding.
