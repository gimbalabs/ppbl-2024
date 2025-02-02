---
 {
	"title": "Assignment 103: Make a Commitment",
	"slt": [""],
	"type": "Assignment",
	"description": "",
	"videoURL": "",
	"lastEdited": "2024-01-08",
	"author": "Gimbalabs"
}
---

## Introducing our Next Project
# Gimbal Project Treasury + Escrow

Gimbal Project Treasury and Escrow (GPTE) was featured in the Plutus PBL 2022 Course.

We will continue to explore GPTE in PPBL 2023.

### How GPTE works:

GPTE allows Contributors to make Commitments to working on Projects. When a Contributor completes a Project, GPTE creates an on-chain record of a successful Commitment.

1. To Commit to a Project, you can lock your PPBL 2023 Contributor Token in a "Commitment UTxO". In this case, the "Project" you are committing to is Module 103.
2. When you Commit to a Project, a claim is made on a "Treasury Contract". The Treasury Contract provides tokens that are locked with the Contributor Token, in the Commitment UTxO.
3. The Commitment UTxO is locked at an "Escrow Contract" address.
4. When you complete a Project, the Commitment UTxO is unlocked, and sent back to you in a "Distribute Transaction".
5. The Distribute Tx also updates the Datum for your PPBL 2023 Token, providing an on-chain record of what you have completed in this course.


### Welcome, Contributor!
In this case, our "Project" is Module 103. This is just an introduction to GPTE. In this course, you will learn how to build GPTE. We will investigate the smart contracts and explore how to create front-end components.

Most importantly, we will continue to ask tough questions about how GPTE should be built in the first place.

### How your Mastery Status will be updated
For additional details about how your Mastery Status will be updated in the Distribute Tx, please read the [Module 103 Summary](/modules/103/summary).


## PPBL 2023 Component: Commit to Module 103
> To be replaced with Andamio functionality.
```
{ppblContext.connectedContribToken && (
<Text pb="3" fontWeight="bold" color="theme.yellow">
	Connected PPBL 2023 Token: {ppblContext.connectedContribToken}
</Text>
)}
<Box mb="3" p="3" bg="theme.yellow" color="theme.dark">
<Text>
	You can Commit to Module 103 in one of two ways. You can complete the assigment in Lesson 103.1, or you
	can skip it. If you do not complete Lesson 103.1, you can still see how GPTE works by choosing
	&quot;Module103 no GitLab&quot;.
</Text>
</Box>
<Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]} gap="5">
<Button key={null} colorScheme="green" onClick={() => handleChooseProject("Module103 with GitLab")}>
	Module103 with GitLab
</Button>
<Button key={null} colorScheme="green" onClick={() => handleChooseProject("Module103 no GitLab")}>
	Module103 no GitLab
</Button>
```