import AddResult from "./components/AddResult";
import Results from "./components/Results";
import Login from "./frontend/Login";
import StudentDetails from "./components/StudentDetails";
import { Admin } from "./components/Admin";
import { CreateIdentity } from "./components/CreateIdentity";
import Navigation from './frontend/NavBar';
import Verifier from "./Verifier";
import Student from './studentPages/student';
import "./styles.css";



//import {BrowserRouter, Route, Routes, Switch, useHistory} from  'react-router-dom';

//hooks
import {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ethers } from "ethers"

import AccessControl from './artifacts/contracts/AccessControl.sol/AccessControl.json'
import Query from "./PushChat/query";
let account;

const AccessControlAddr='0xA28050eC216c5535323b0DC8b173f4eE3Ab5A25d';

function App() {
  const [loading, setLoading] = useState(true)

  const [accesscontrol, setAccessControl] = useState({})
  const web3Handler = async () => {
    

    //fetch account from metamask wallet
    //it will return array of accounts
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    //setAccount(accounts[0])
    account=accounts[0];
    console.log(account);
    //get provider from metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    //set signers
    const signer = provider.getSigner()

    // window.ethereum.on('chainChanged', (chainId) => {
    //   window.location.reload();
    // })

    // window.ethereum.on('accountsChanged', async function (accounts) {
    //   //setAccount(accounts[0])
    //   account=accounts[0]
    //   await web3Handler()
    // })

    loadContracts(signer)


  }

  const loadContracts = async (signer) => {
     // Get deployed copies of contracts
     const accesscon = new ethers.Contract(AccessControlAddr,AccessControl.abi, signer)
     setAccessControl(accesscon)
     console.log(accesscon)
     setLoading(false);
  }


  return (

    <BrowserRouter>
    

 
<Navigation web3Handler={web3Handler} account={account} />

<div>
    {/* <AddResult wallet={account}/> */}


  
    <Routes>
    <Route exact path="/" element={
        <Login Results={Results}  />
         //<Query wallet = {account} />
          } />

     <Route path="/verifier" element={
            <Verifier Results={Results}  />
          } />

    <Route path="/results" element={
            <Results />
          } />

    <Route path="/student_profile" element={
      
            <Student wallet={account}/>
          } /> 

    {/* <Route path="/addresults" element={
            <AddResult  />
          } />
        {console.log(account)} */}

    {/* <Route path="/results/info" 
    element={<Results />}
    /> */}

    <Route path="/results/:id"   element={<StudentDetails />}   />

    <Route path="/admin"    element={<Admin accesscontrol={accesscontrol}/>}   />
    <Route path="/createIdentity"    element={<CreateIdentity/>}   />

    < Route path="/verifier/dasboard" element={
            <Verifier Results={Results}/> }/> 
    

    </Routes>


    </div>
    
      
    </BrowserRouter>
    
    
  );
}

export default App;