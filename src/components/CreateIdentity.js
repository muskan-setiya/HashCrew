import React from "react"
import { Row, Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import { ethers } from "ethers"
import { createIdentity } from "eth-crypto"
import EthCrypto from 'eth-crypto';
import { useEffect } from "react";



export const CreateIdentity=()=> {
  
  const identityData={privateKey:'',publicKey:'',address:''}
    const createId=()=>{
        const identity = EthCrypto.createIdentity();
        console.log(identity);
        identityData.address=identity.address;
        identityData.privateKey=identity.privateKey;
        identityData.publicKey=identity.publicKey;
        console.log('Private key: ',identityData.privateKey)
    }
  return (
  <div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div >CREATE YOUR IDENTITY!<br></br>
      <button onClick={createId}>CREATE</button>
      <div>Private key: {identityData.privateKey}</div>
      <div>Public key: {identityData.publicKey}</div>
      <div>Address: {identityData.address}</div>
    </div>
    
    </div>
  );
}