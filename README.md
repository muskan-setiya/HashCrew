# NFTDocs

#Verifier code using Polygon ID
https://github.com/pikachua7/Polygon-ID-On-Chain-Verification-CGPA

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

The generator fetches student information from the firebase which is the local DB of the college, applies digital signature and encrypts the metadata with students public key, Further he mints the document and the feedback in the form of encrypted metadata to the respective student.
On the otherhand, student decrypts the data with his private key and is able to see his result.
Generator sends a CGPA claim which tells about how much CGPA student got along with the encrypted data which is useful for student while sitting for his placements. 

Student is given the functionality to create his own identity using the create Identity functionality which makes it easy for the student to store the credentials in his metamask wallet.

After getting his marksheet, suppose if student sits for the placements in the company then he needs to verify his credentials with the company. Company sets a criteria of CGPA>8 allowing only those students to sit for placements who have their CGPA > 8.(This criteria can differ for every company)

Company here acts as an Verifier which sets up the request of CGPA>8 which student should satisfy via his CGPA claim. Here on chain verification of student takes place and If students satisifies the criteria then he is able to visit the Documents verification page where his digital signature is checked and if it verifier successfully student is given a Verification claim stating he is eligible to sit for the company's online assessment by proving on chain he has the verification claim.

NOTE : company is the one who wants to hire the student for job.


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

### Migrate Smart Contracts
```
$ npx hardhat run src/backend/scripts/deploy.js --network polygon
```

### Launch Application
```
$ npm run start
```
