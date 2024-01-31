---
 {
	"title": "Five Ways to Mint a Token",
	"slt": [""],
	"type": "ModuleOverview",
	"description": "",
	"videoURL": "",
	"lastEdited": "2024-01-08",
	"author": "Gimbalabs"
}
---

## Introduction

If you are going to build an application on Cardano, at some point you will mint and use new tokens. In this module, you will build background knowledge about **native assets** on Cardano.

Before we get started, it is important to understand that Cardano Native Assets are very different from tokens on other blockchains. What follows is an introduction to some key concepts about Cardano Native Assets.

## What is a "Native Asset"?
On Cardano, tokens are called "Native Assets", because they exist directly on the Cardano blockchain. This represents a major difference from how, for example, the [ERC-20 Token Standard](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/) works on Ethereum.

With Ethereum, when you want to create new tokens, you must do so by writing a smart contract that applies an agreed-upon standard (in this case ERC-20) to build a new [account](https://ethereum.org/en/developers/docs/accounts/) that must be referenced every time tokens are exchanged from one owner to another.

Cardano is different because tokens exist directly, or "natively", on the blockchain. That is why they are called "Native Assets". Once minted, Cardano Native Assets can move freely, and for any purpose, without any need for interacting with an original minting contract.

## Standards vs. Native Capabilities
The distinction between native capabilities and agreed-upon standards is important. Native capabilities are built into the rules of how a blockchain works. Standards are agreements that people can make about how to use a blockchain.

As we will see in Module 203, community standards do exist on Cardano. However, when it comes to minting tokens, we will interact directly with the Cardano blockchain.

## All Cardano Native Assets have a Policy ID
Cardano Native Assets can move freely, but there are still rules for *how* tokens are minted. The rules for minting a native asset are used to generate a unique Policy ID for each token.

Similar to how a Cardano address can be created from [a public key or from a Plutus script, as shown in Lesson 102.2](/modules/102/1022), a Policy ID can be created using a "native script" or a "Plutus script". We will investigate both kinds of scripts in this module. You will see how to use a native script or a Plutus script to create a new Policy ID, and then how to build minting transactions with each.

We will continue to explore these ideas in lessons to come. As always, bring your ideas + questions to [Live Coding](/live-coding).


## Module 202 Outline: Five Ways to Mint a Token



## Ready to jump in? In this Module, you can try up to five ways of minting a native asset on Cardano:

- [Lesson 202.1](/modules/202/2021): Quickly minting tokens with Gamechanger Wallet
- [Lesson 202.2](/modules/202/2022): Writing a native script and using it to mint tokens with Cardano CLI
- [Lesson 202.3](/modules/202/2023): Minting with a native script in Mesh
- [Lesson 202.4](/modules/202/2024): Create a Plutus minting script with PlutusTx
- [Lesson 202.5](/modules/202/2025): Create a Plutus minting script with Aiken
