# Blockchain

Blockchain layer for Cerberus project. Module 06.

## How to Test

1. git clone
2. npm install
3. npm test

## How to Run

1. git clone
2. npm install
3. check package.json's node script
4. npm run node
5. open another terminal
6. npm run deploy:test
7. see backend and frontend folders' README for more instructions

## How to Deploy

1. git clone
2. npm install
3. create MetaMask wallet, take funds from faucet
4. create Infura node, take API Key and network name.
5. copy .env.example as .env
6. fill .env variables
7. npm run deploy
8. take the address and ABI for each contract deployed
9. npx hardhat verify --network <network name> <contract address>
10. see backend and frontend folders' README for more instructions
