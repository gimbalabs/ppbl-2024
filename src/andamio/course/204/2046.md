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
 
 

## Step 6: Submit a merge request to the PPBL course

It's still the early days of Cardano development, and there is still plenty to build.

For example: even though you can deploy an on-chain reference script, there are a limited number of tools for reading Plutus CBOR from chain. In this dapp, we are using Mesh and GraphQL, and these tools do not allow us to read CBOR directly from the blockchain.

So as a temporary fix, we'll use the [PPBL Course Repo](https://gitlab.com/gimbalabs/ppbl-2023/ppbl-front-end-template-2023) to store student submissions to this project. What's nice is that this allows us to make sure you've mastered [SLT 103.1](/modules/103/1031).

## What to do:
Add the contract address and CBOR of your faucet instance to the [Git repo for this PPBL Course](https://gitlab.com/gimbalabs/ppbl-2023/ppbl-front-end-template-2023), so that anyone can view and interact with your faucet from the [PPBL Faucet Aggregator](/modules/204/faucet-aggregator).


## How to do it:
- Create a fork of [https://gitlab.com/gimbalabs/ppbl-2023/ppbl-front-end-template-2023](https://gitlab.com/gimbalabs/ppbl-2023/ppbl-front-end-template-2023)
- Look at how data is structured in [/src/cardano/faucet-mini-project/faucets-plutus.json](https://gitlab.com/gimbalabs/ppbl-2023/ppbl-front-end-template-2023/-/blob/main/src/cardano/faucet-mini-project/faucets-plutus.json):
```json
{
    "faucets" : {
        "<contract address>": "<cbor string>",
        "<contract address>": "<cbor string>",
        "<contract address>": "<cbor string>"
   }
}
```
- Add a `"key": "value"` pair to `faucets` where the key is the address of your faucet contract, and the value is the `CBORHex` corresponding to that address
- Submit a merge request to the [`main` branch](https://gitlab.com/gimbalabs/ppbl-2023/ppbl-front-end-template-2023) that adds exactly one line to the file `/src/cardano/faucet-mini-project/faucets-plutus.json`
- After the merge request is approved, you'll be able to see your Faucet in the [Faucet Aggregator](/modules/204/faucet-aggregator)


## What to think about:
- Research: what are some current examples of services that provide the CBOR in a reference script?
- Development: how could you create a service that provides CBOR strings of deployed contracts?
