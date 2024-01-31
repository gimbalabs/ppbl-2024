---
 {
	"title": "",
	"slt": [""],
	"type": "Summary",
	"description": "",
	"videoURL": "",
	"lastEdited": "2024-01-08",
	"author": "Gimbalabs"
}
---


# Module 202 Summary

## Learning Target Review



## What are your biggest questions about each of these learning targets?
<SLTSmall moduleNumber={202} id={"202.1"} />
<SLTSmall moduleNumber={202} id={"202.2"} />
<SLTSmall moduleNumber={202} id={"202.3"} />
<SLTSmall moduleNumber={202} id={"202.4"} />
<SLTSmall moduleNumber={202} id={"202.5"} />


## Key Ideas

![summary](/module202/summary.jpg)

In [Lesson 202.2](/modules/202/2022), you minted a token that only you can mint, because you used a Native Script the requires your signature to mint a token.

Lessons [202.4](/modules/202/2024) and [202.5](/modules/202/2025) were different. By using Plutus validators, we created Policy IDs that allow anyone to mint, as long as they know what number to use for the Redeemer.


## How do you want to keep exploring?
Here are some ideas:
1. Create a multi-sig minting policy with a native script
2. To learn more about minting transactions in Mesh, try the [Getting Started guide, Minting on Node.js](https://meshjs.dev/guides/minting-on-nodejs).
3. You can also see an example of a Mesh + Plutus minting transaction in [the source code](https://gitlab.com/gimbalabs/ppbl-2023/ppbl-front-end-template-2023/-/blob/main/src/components/course-modules/100/ContributorMinter/ContributorPairMintingComponent.tsx) for [Lesson 100.4](/modules/100/1004). The [`ContributorPairMintingComponent`](https://gitlab.com/gimbalabs/ppbl-2023/ppbl-front-end-template-2023/-/blob/main/src/components/course-modules/100/ContributorMinter/ContributorPairMintingComponent.tsx) uses a Plutus Script very similar to the one introduced in [Lesson 202.4](/modules/202/2024). Use `ContributorPairMintingComponent` as an example to implement your own Plutus minting component in a NextJS project. If you want, you can continue to use the [PPBL Playground](https://gitlab.com/gimbalabs/ppbl-2023/ppbl-2023-playground) page that you first created in [Lesson 201.5](/modules/201/2015).
4. To learn more about Aiken and Lucid, try the [Aiken Gift Card Tutorial](https://aiken-lang.org/example--gift-card).
5. Compare the transaction fee for minting with the PlutusTx script vs. the Aiken Script


## Want to talk about any of these ideas? Suggest a Breakout Room at [Live Coding](/live-coding)!
