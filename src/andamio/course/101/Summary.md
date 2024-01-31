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

 import SLTSmall from "@/src/components/ui/Text/SLTSmall";

## Learning Target Review

SLT Component: Replace - either with MDX or App Component
```
<SLTSmall moduleNumber={101} id={"101.1"} />
```
After trying some of the approaches outlined in Lessons 101.3 through 101.7, can you compile a validator to UPLC?

Every time you write a new smart contract, you will need to compile it, so as you keep learning, you will continue to use this new skill.

```
<SLTSmall moduleNumber={101} id={"101.2"} />
```

We have some UPLC ready to be used, but we haven't seen it in action. We will continue to think about this learning target in the next few modules.

## No Proof (Yet!)
Hopefully, you followed at least one of the approaches to building Always Succeeds, as outlined in Lessons 101.3 thru 101.7. You may have noticed that we did not interact with the Cardano blockchain in this Module - and therefore we did not create any on-chain "proof" that you have mastered any of these Student Learning Targets.

In Modules 102 and 201, we will begin to use these contracts on-chain, which will generate mastery evidence for this module.

## Four Always Succeeds Scripts
We looked at four ways to write a validator and build it to Plutus Core. If you were successful, you should now have one or more `always-succeeds.plutus` files like the ones below.

As we built our first plutus scripts, a new problem emerged. Our Always Succeeds scripts did not look the same:


## Always Succeeds PlutusTx from Demeter.run
```json
{
    "type": "PlutusScriptV2",
    "description": "",
    "cborHex": "49480100002221200101"
}
```


## Always Succeeds PlutusTx from local environment
```json
{
    "type": "PlutusScriptV2",
    "description": "",
    "cborHex": "49480100002221200101"
}
```


## Always Succeeds Aiken
```json
{
    "type": "PlutusScriptV2",
    "description": "",
    "cborHex": "583b0100003232323232323222253330064a22930b180080091129998030010a4c26600a6002600e0046660060066010004002ae695cdaab9f5742ae89"
}
```


## Always Succeeds plu-ts
```json
{
    "type": "PlutusScriptV2",
    "description": "",
    "cborHex": "56550100002225333573466644494400c0080045261601"
}
```


## Always Succeeds OpShin
```json
{
  "type": "PlutusScriptV2",
  "description": "opshin 0.12.1 Smart Contract",
  "cborHex": "58bf58bd01000022232498c8c8cccc00401401000c0094cc00522101000013263357389201144e616d654572726f723a2076616c696461746f7200498c8c8c8894ccd5cd19b8f002488101000011003133004002001222232498c8004ccc888894ccd5cd19b8f00248810103001100315333573466e3c00922010102001100415333573466e3c009220101010011005133006002001004003002323200232491190a54686520506c757475735632206c6564676572204150490a00001001220011"
}
```

We will investigate this problem at [PPBL Live Coding on 2023-03-23](/live-coding)

## Closing Concept: Plutus Scripts are Shareable Code
After everything we do to write Cardano Smart Contracts, in any language, the end result is simply a text string: the `cborHex` in the examples above. This means that our Plutus scripts can be easily shared. It is easy to share a `.plutus` script with `git`...or even in a Discord DM.

If the terms UPLC and CBOR feel intimidating to you, just remember this: the reason we use them is the simple shareability of the end result.

As you'll see, this is just the first step in building a dapp on Cardano. In Module 102, we'll start to use our `.plutus` scripts!
