import React from "react"
import { Row, Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import { ethers } from "ethers"


//import AccessControl from '../artifacts/contracts/AccessControl.sol/AccessControl.json'

//const AccessControlAddr='0xDaA0DD4D1E8906F48Cd3bF9675530e682bB21f19';
let student_array=[];
let generator_array=[];
let verifier_array=[];

export const Admin=({accesscontrol,account})=> {
  console.log('inside')
  const [address, setAddress] = useState('')
  //const [account, setAccount] = useState(null)
  // const [accesscontrol, setAccessControl] = useState({})
  const [loading, setLoading] = useState(true)
 // const {ethereum}=window;

  // const connectMetamask = async () => {
  //   if(window.ethereum!=="undefined"){
  //     const accounts=await window.ethereum.request({ method: "eth_requestAccounts"});
  //     setAccount(accounts[0]);
  //     console.log('accounts:',accounts)
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     console.log('provider:',provider)
  //     const signer = provider.getSigner()
  //     console.log('signer:',signer)
  //     loadContracts(signer)
  //   }
  //   }
  //   const loadContracts = async (signer) => {
  //     // Get deployed copies of contracts
  //     const accesscon = new ethers.Contract(AccessControlAddr,AccessControl.abi, signer)
  //     setAccessControl(accesscon)
  //     console.log(accesscon)
  //     setLoading(false);
  //   }
 

  // const updateAddress = (value) =>{
  //   setAddress({...address, value: value})
    
  // }
  const grantStudRole = async () => { 
    console.log('inside stud block')
    //accesscontrol.grantRole('STUDENT',address);
    //accesscontrol.g
    console.log(accesscontrol);
    console.log(accesscontrol.grantRole);
    console.log(address);
    await accesscontrol.grantRole('0xc951d7098b66ba0b8b77265b6e9cf0e187d73125a42bcd0061b09a68be421810',address);
    //const stud_array= await accesscontrol.stud_addr()
    //console.log(stud_array);
    student_array=await accesscontrol.getStudAddresses();
    console.log(student_array);

  }
  const grantGenRole = async () => { 
    console.log('inside gen block')
    console.log(address);
    await accesscontrol.grantRole('0xddfd3036e1eb6a4af67ba89b65b13a4c179e1ffbf33ac5f3c45ef9007b2cfc0f',address);
    generator_array=await accesscontrol.getGenAddresses();
    console.log(generator_array);

  }
  const grantVerRole = async () => { 
    console.log('inside ver block')
    console.log(address);
    await accesscontrol.grantRole('0xa48c898f5241be426b79d4b5a3c206f9c9a06576e1b72c338c3ec849771d5686',address);
    verifier_array=await accesscontrol.getVerAddresses();
    console.log(verifier_array);

  }

  return (
  <div>
    <br></br>
    <br></br>
    <br></br>
    <div >ADMIN TASK:-<br></br>
      <Form.Control className="text-center"
        size="lg"
        onChange={(e) => setAddress(e.target.value)}
        required type="text"
        placeholder="Enter address" />
       
      <Button onClick={grantStudRole} variant="primary" >STUDENT</Button>
      <Button onClick={grantGenRole} variant="primary">GENERATOR</Button>
      <Button onClick={grantVerRole} variant="primary">VERIFIER</Button>
      {/* <button onClick={connectMetamask}>CONNECT TO METAMASK</button> */}
      <p>{account}</p>
    </div>
    </div>
  );
}
export {student_array,verifier_array,generator_array};