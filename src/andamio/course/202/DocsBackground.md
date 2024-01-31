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
 
 # PPBL Course Section 201.2: Viewing and Sending Native Assets on cardano-cli

## Check that your Testnet Node is up to date
```
cardano-cli query tip --testnet-magic 1097911063
```

## Query UTXOs with `cardano-cli`
```
cardano-cli query utxo --testnet-magic 1097911063 --address $SENDER
```

## In a `/transactions` directory, get Protocol Parameters
```
cardano-cli query protocol-parameters --testnet-magic 1097911063 --out-file protocol.json
```

## Send a Transaction with Native Assets
```
cardano-cli transaction build \
--babbage-era \
--testnet-magic 1097911063 \
--tx-in $TXIN1 \
--tx-in $TXIN2 \
--tx-out $SENDER+"1500000 + <NUMBER OF TOKENS> <POLICY ID>.<TOKEN NAME>" \
--change-address $SENDER \
--protocol-params-file protocol.json \
--out-file send-tokens.raw

cardano-cli transaction sign \
--signing-key-file $SENDERKEY \
--testnet-magic 1097911063 \
--tx-body-file send-tokens.raw \
--out-file send-tokens.signed

cardano-cli transaction submit \
--tx-file send-tokens.signed \
--testnet-magic 1097911063
```

## Convert between String and Hex:
https://string-functions.com/
