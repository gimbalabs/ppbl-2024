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
 
 

### Assignment 301
# Build + Test a Spending Validator

## Step 1: Write a Spending Validator
Your task is to write a spending validator that works as follows:

- The `datum` is a list of integers.
- The `redeemer` is a single integer.
- The validator allows anyone to withdraw **exactly 7.5 tAda** from the contract UTxO, if the integer in the redeemer is included in the datum.
- The validator fails if someone tries to withdraw any amount other than 7.5 tAda, or if the redeemer does not match one of the integers in the datum.

## Step 2: Lock tAda at your contract address
Build a transaction that locks tAda at your new contract address. Include valid datum in the locking UTxO. You can decide whether to use inline datum or hashed datum - it's up to you!

## Step 3: Submit a Valid Unlocking Transaction
Now build, sign, and submit a valid unlocking transaction that shows that your spending validator works as expected.

## Step 4: Share Evidence of Success
Fill out [this form](https://forms.gle/Z6bpTs6LpWbgfTCd9), then Commit to Module 301 using the button on this page.

**Congratulations on finishing your first 300-Level Module!**

Commit button (add Module301 to Treasury)


## Tips:
- As a starting point, you can use the [Plutus2023 Plutus Template](https://gitlab.com/gimbalabs/ppbl-2023/ppbl2023-plutus-template), the [PPBL Plutus Starter 2023](https://gitlab.com/gimbalabs/ppbl-2023/ppbl-plutus-starter-2023), or your own template.
- Use your results from the "Try This!" task in [Lesson 301.2](/modules/301/3012).
- Ask questions on Discord and at [Live Coding](/live-coding).
