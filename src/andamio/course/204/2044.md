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
 
 # Step 4: Test an unlocking Tx

It's testing time! You compiled a smart contract, you deployed it as a reference script, and you locked some tokens at the contract address.

So: does everything work as expected?


## What to do:

Before deploying any application, we should always test it to confirm that it works as expected. In a blockchain application handling potentially valuable tokens, the stakes are especially high. A good idea can quickly become a really bad idea when things don't work.

In this case, you will deploy your instance of the PPBL Faucet by adding your instance to the [Faucet Aggregator](/modules/204/faucet-aggregator). That's the [next step](/modules/204/project-step-05). In this step, you'll run a quick test to make sure that your faucet contract works.

One way to test a contract like the PPBL Faucet is by running a series of tests with cardano-cli. This does not constitute a full "smart contract audit" (more on that later), but it's a really good first step.


## How to do it:
Use this script: [bash-scripts/faucet-mini-project/test-unlock-tokens-at-faucet-address.sh](https://gitlab.com/gimbalabs/ppbl-2023/ppbl2023-plutus-template/-/blob/main/bash-scripts/faucet-mini-project/test-unlock-tokens-at-faucet-address.sh)

### Prerequisites

#### Prepare Datum:
`FaucetMiniProject.Validator` has a validation rule that says the datum at the contract address cannot change. Therefore, the output UTxO back to the Faucet contract address must include the same [datum file you created in Step 3](/modules/204/project-step-03). You can re-use the same file:
```json
{
    "constructor": 0,
    "fields": [
        {
            "int": <QUANTITY>
       },
        {
            "bytes": "<TOKEN NAME as HEX>"
       }
    ]
}
```


### Prepare Redeemer

Redeemer is defined like in [FaucetMiniProject.Types](https://gitlab.com/gimbalabs/ppbl-2023/ppbl2023-plutus-template/-/blob/main/src/FaucetMiniProject/Types.hs):
```haskell
data FaucetRedeemer = FaucetRedeemer
  { senderPkh       :: !PubKeyHash,
    accessTokenName :: !TokenName
 }
```

So an example of `faucet-redeemer.json` will look like this:

```json
{
    "constructor": 0,
    "fields": [
        {
            "bytes": "fac9d66b9ad9e31d0dcadc47a7a85b1c6c0f1df7dbace04bf05b17ce"
       },
        {
            "bytes": "3232325050424c3230323347464b"
       }
    ]
}
```

You must:
1. Replace `fac9d66b9ad9e31d0dcadc47a7a85b1c6c0f1df7dbace04bf05b17ce` with the PubKeyHash of your CLI Wallet address.
2. Replace `3232325050424c3230323347464b` with the name of your PPBL 2023 Contributor Token. Your PPBL 2023 Contributor Token must be available in your CLI wallet in order to successfully build this unlocking transaction.
3. See "Note on Token Name" below. `323232` is the required prefix to the token name in the `faucet-redeemer.json` file.

### Note on Token Name:
You may have noticed that your PPBL Contributor Token name starts with "PPBL2023", and also that there is also a "222" prefix in front of that. In all, the name of your Contributor Token looks like this: `222PPBL2023<YOUR ALIAS>`. The "222" is used to match your token with a "Reference Token" at the contract address [addr_test1wr6ewsvtmdjv8znh7wxvw9qezgwvju5rdk9gmgefvrvrhug7zrfe0](https://preprod.cardanoscan.io/address/70f597418bdb64c38a77f38cc71419121cc972836d8a8da32960d83bf1).

The `hex` version of your token name starts with `323232`, which translates to the string `222`. This is followed by `5050424c32303233`, which translates to `PPBL2023`.


## Add Datum and Redeemer file paths to bash script:

In `test-unlock-tokens-at-faucet-address.sh`, find these lines:

```bash
# Instead of prompting for input in the terminal (which can get annoying during a testing phase!),
# you can add the file paths to Datum and Redeemer files here.
DATUM_FILE="faucet-datum.json"
REDEEMER_FILE="faucet-redeemer.json"
```

Change `faucet-datum.json` and `faucet-redeemer.json` to match the file paths to your datum and redeemer files.


## What to think about: Confirm that errors work as expected
There are seven error messages written in `FaucetMiniProject.Validator`. Even if you have never written a line of PlutusTx, you might be able to understand where some of these errors are coming from. Find each one [in the source code](https://gitlab.com/gimbalabs/ppbl-2023/ppbl2023-plutus-template/-/blob/main/src/FaucetMiniProject/Validator.hs):
```haskell
...

Nothing -> traceError "faucet input missing"

...

_ -> traceError "expected exactly one faucet output"

...

traceIfFalse "Input must include PPBL 2023 token" inputHasAccessToken &&
traceIfFalse "Must send PPBL 2023 token back to sender" outputHasAccessToken &&
traceIfFalse "Sender must receive faucet tokens" outputHasFaucetToken &&
traceIfFalse "Must return remaining faucet tokens to contract address" faucetContractGetsRemainingTokens &&
traceIfFalse "Cannot change datum" checkDatum
```

Then try to change the `transaction build` in `test-unlock-tokens-at-faucet-address.sh` so that you build an unsuccessful transaction, and can see each error message in your terminal.

### Pro Tip:
At the end of `test-unlock-tokens-at-faucet-address.sh`, delete or comment out the `sign` and `submit` steps so that an unexpectedly successful Tx is not signed and submitted.
```bash
cardano-cli transaction sign \
--tx-body-file test-a-faucet.draft \
--testnet-magic 1 \
--signing-key-file $SKEY \
--out-file test-a-faucet.signed

cardano-cli transaction submit \
--testnet-magic 1 \
--tx-file test-a-faucet.signed
```

In [VSCode, you can comment out a block of code](https://vscode.one/comment-vscode/) by highlighting it and pressing `CTRL + /`


## What to think about: Shell script as blueprint
A benefit of writing a working shell script is that it can be your blueprint for implementing off-chain code in another system, like with Mesh or Lucid. If you are interested in off-chain code and user-facing applications, try to compare `test-unlock-tokens-at-faucet-address.sh` with the [source code for the same transaction written with React + TypeScript + Mesh](https://gitlab.com/gimbalabs/ppbl-2023/ppbl-front-end-template-2023/-/blob/main/src/components/course-modules/204/components/FaucetTestInstance.tsx).
