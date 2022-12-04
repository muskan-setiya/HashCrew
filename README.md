# NFTDocs

## Use-case : 
- To overcome traditional method of issuing marksheet
- Maintain integrity of data and transparency of process (of issuing marksheets without tempering) 
- Save Paper, Save Trees
- Securing metadata of NFT by encryption
- Application of Digital Signature for authentication


## Overview

The project NFTDocs has 3 user roles.
-  Student
-  Generator 
-  Verifier

We can assume that the college or institution is the issuer, student having wallet is the holder and verifier is a third-party which verifies and thus providing authenticity and integrity. The institutions store the student's data in thefirebase.

The generator fetches information from the firebase, applies digital signature and encrypts the metadata, Further he mints it.
On the otherhand, student is able to create it's own identity, then he decrypts his data.

Also the institutions claims a certain range for cgpa (like above 8.0) and if the student satisfies the condition then and then only he would be able to scan, proceed further and give the assessments required by party.
Verifier would be the third party(Usually HR of the company) that will verify the marksheet sent by student and if the verification is successful, then the third party would generate a claim using Polygon ID stating that student is verified.

NOTE : Third Party company is the one who wants to hire the student for job.


## Technology Stack and Tools

* Solidity 
* Javascript 
* React.Js
* Ethereum
* NFTPort
* IPFS (NFT.Storage)
* Polygon 
* Polygon ID
* Push Chat 
* Firebase

### Requirements For Initial Setup
* Install NodeJS, should work with any node version below 1*0
* Install Firebase
* Install Material UI
* Install Metamask Extension in Web browser
* Install web*storage
* Install Polygon
* Install crypto
* Install crypto-browserify

### Setting up
```
$ npm install
```
```
$ npm install @mui/material @emotion/react @emotion/styled
```
```
$ npm install @mui/material @mui/styled-engine-sc styled-components
```
### 4. Connect development blockchain accounts to Metamask
- Copy private key of the addresses and import to Metamask
- Connect your metamask to hardhat blockchain, network 127.0.0.1:8545.
- If you have not added hardhat to the list of networks on your metamask, open up a browser, click the fox icon, then click the top center dropdown button that lists all the available networks then click add networks. A form should pop up. For the "Network Name" field enter "Hardhat". For the "New RPC URL" field enter "http://127.0.0.1:8545". For the chain ID enter "31337". Then click save.  



### 5. Migrate Smart Contracts
```
$ npx hardhat run src/backend/scripts/deploy.js --network localhost
```

### 6. Launch Application
```
$ npm run start
```
