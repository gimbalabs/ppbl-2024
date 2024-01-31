---
 {
	"title": "",
	"slt": [""],
	"type": "Assignment",
	"description": "",
	"videoURL": "",
	"lastEdited": "2024-01-08",
	"author": "Gimbalabs"
}
---

 import SLTSmall from "@/src/components/ui/Text/SLTSmall";

# Assignment 203.1

In this guided mastery assignment, you will mint a PPBL 2023 NFT with a Plutus minting script.

### You will apply what you learned previously about these SLTs:
<SLTSmall moduleNumber={102} id={"102.5"} />
<SLTSmall moduleNumber={102} id={"102.6"} />
<SLTSmall moduleNumber={202} id={"202.4"} />

You will also see some new concepts. In particular, the provided bash script uses an on-chain [reference script](https://github.com/input-output-hk/cardano-node/blob/master/doc/reference/plutus/babbage-script-example.md) instead of a `.plutus` file compiled on your computer. This means that you can complete this assignment without compiling any new contracts. The concept of reference scripts was originally introduced in [CIP-33](https://cips.cardano.org/cips/cip33/).


## Use Shell Script


### Prerequisites
Before you start this assignment, you must:
1. Send your PPBL 2023 Token to your CLI wallet
2. Prepare a ppbl-nft.json file, as shown below.

### A Bash Script is Provided
Pull the latest changes to [PPBL Plutus Template](https://gitlab.com/gimbalabs/ppbl-2023/ppbl2023-plutus-template). In `/bash-scripts`, find the file `mint-ppblnft.sh`.

This bash script will guide you through the process of minting a PPBL 2023 NFT. To use it successfully, you must follow the validation rules specified in the [PPBL NFT minting validator](https://gitlab.com/gimbalabs/ppbl-2023/ppbl2023-plutus-template/-/blob/main/src/PPBLNFT/Minter.hs). This validator will only allow a token to be minted if:
- A PPBL 2023 Token is included in the transaction
- Exactly ONE new token is minted
- The name of the PPBL 2023 NFT must match the name of the PPBL 2023 Token.
- The name of the NFT must be specified in the minting redeemer

Try to break these rules and see how the validator returns an error message - and does not allow you to mint a token.

### What's New Here?
- A reference script is provided. This is a new concept. It means that you don't have to compile the contract. You'll learn more about reference scripts in Module 204, for now, take a look at the provided bash script to see how this works.


## Create the Transaction Metadata
- Create a new file in `ppbl2023-plutus-template/bash-scripts/metadata` named `ppbl-nft.json`.
- Copy the following metadata into `ppbl-nft.json`:
```json
{
  "721": {
    "2a384dc205a97463577fc98b704b537f680c0eba84126eb7d5857c86": {
      "<YOUR TOKEN NAME>": {
        "name": "PPBL 2023 Commemorative Token",
        "image": ["ipfs://", "bafkreic4mhxteblizsibkaxdbh3jfxpslhvgcl73n27uia4zyd44dukiea"],
        "mediaType": "image/png",
        "description": "Minted for Assignment 203.1",
        "files": [
          {
            "mediaType": "image/png",
            "src": ["ipfs://", "bafkreic4mhxteblizsibkaxdbh3jfxpslhvgcl73n27uia4zyd44dukiea"]
         }
        ]
     }
   }
 }
}
```

You must replace `<YOUR TOKEN NAME>` with the name of your PPBL2023 Token. Do not include any numbers at the beginning of your token name. Start with `PPBL2023`, followed by the alias chosen in [Lesson 100](/modules/100/1004).

For example, if you hold a PPBL 2023 Contributor Token named "**222PPBL2023LiveCoding**", your NFT token name would be "**PPBL2023LiveCoding**".

### Optional: Change the image
A placeholder image is provided, but it's not too exciting! If you'd like to change the image, go for it! Remember that if the source URL for your image is longer than 56 characters, it must be split up into an array of strings, just like in the example above.


## What about Aiken and Plu-TS?

This minting script is written in PlutusTx. Could we write it in another smart contract language? Yes we could! If you'd like to explore how, let's give it a try at [Live Coding](/live-coding).
