import React, {useState,useEffect} from 'react'
import {collection, onSnapshot, query, orderBy,updateDoc,doc} from "firebase/firestore";
import {db} from "../firebaseConfig";
import { ethers } from 'ethers';
import {getDownloadURL, ref} from 'firebase/storage'
import {storage} from '../firebaseConfig';
import { Components } from 'react';
import { Link, Switch, useNavigate, Route, Routes,  BrowserRouter as Router, Redirect } from 'react-router-dom';
import Info from './Info';
import  Student  from "./StudentDetails";
import firebase from 'firebase/app';
import 'firebase/firestore';
import {encrypt} from '../utils/encryption'
import { mintNFT } from '../utils/mintNFT';
import './TickMark.css'
import { Button, Input, Row, Col, Radio, Steps } from "antd";
import { FormOutlined, DatabaseOutlined, LockFilled , FileProtectOutlined } from '@ant-design/icons';
const {Step} = Steps;

export default function Results() {
    const [walletAddress, setWalletAddress] = useState('');
    const [message,setMessage] = useState('');
    const [signature,setSignature] = useState('');
    const [signerAddress,setSignerAddress] = useState('');
    const [results,setResults] = useState([])
    const [Id,setId] = useState('');
    const [modal, setModal]=useState(false);
    const [file, setFile]=useState(null);
    const [status, setStatus] = useState(0);
    const userCollectionRef = collection(db,'Results')

   


    // const identity = EthCrypto.createIdentity();
    // console.log(identity);
  
    const encryptedData={Name:'',signature:'',feedback:'',id:''}

    const encryptingData = async(signature,feedback,studentKey,Name,id) =>{
  
      //1. structuring data for payload
      encryptedData.Name=Name;
      encryptedData.signature=signature;
      encryptedData.feedback=feedback;
      encryptedData.id=id;

      console.log(encryptedData.signature);
      console.log(signature);

      const payload={
        message: encryptedData,
        signature
      };

      setStatus(0);

      //2. encryption
      const encryptedString= await encrypt(studentKey,payload);
      console.log(encryptedString);
      setStatus(2);

      //3. store encrypted metadata on nft storage
      // const metadata = await uploadMetadata(encryptedString);
      // console.log(metadata.data.image.pathname);
      // const imgUrl = (metadata.data.image.href)
      // console.log('Image Url :' ,imgUrl)
      // const sliced = imgUrl.slice(7,imgUrl.length-8);
      // console.log('sliced :',sliced)
      // console.log(id)


      //4. Mint NFT
      const _mintedRes = await mintNFT(encryptedString,id,studentKey,Name);
      console.log('Minted : ',_mintedRes);
      console.log('contract address',_mintedRes.data.contract_address);
      setStatus(3);

      const userDoc1 = doc(db,'Results',id);
        const newfield1 = {transactionHash : _mintedRes.data.transaction_hash}
        await updateDoc(userDoc1,newfield1)

        const userDoc2 = doc(db,'Results',id);
        const newfield2 = {generatorCheck : true}
        await updateDoc(userDoc2,newfield2)


  }



const onClickConnect = async() =>{
    if(window?.ethereum){        
      const accounts = await window.ethereum.request({method : 'eth_requestAccounts'});
      setWalletAddress(accounts?.[0]);
    }
    else{
      alert('Browser wallet connection not supported!');
    }
  }

  const updateSignature = async(id,signedHash,signedSignature) =>{
    const userDoc = doc(db,'Results',id);
    const newfield = {signedHash : signedSignature}
    await updateDoc(userDoc,newfield)
  };

  const onSubmitFormSignMsg = async(message,studentKey,Name,feedback,id,signedHash,event) =>{
    console.log('You proceeded to Sign Message');
    console.log(message);
    event.preventDefault();
    console.log(studentKey);
    if(!message) 
      return;

    if(window?.ethereum){
       const provider = new ethers.providers.Web3Provider(window.ethereum);
       console.log(provider);
       const signer = provider.getSigner();
       console.log(signer);
       const signedSignature = await signer.signMessage(message);
       console.log(signedSignature);
       setStatus(1)
      console.log(id);
      setId(id);
      console.log(id);

      updateSignature(id,signedHash,signedSignature)

       const address = await signer.getAddress();
       console.log(address);

       encryptingData(signedSignature,feedback,studentKey,Name,id);
     
    }
    else {
      alert('Browser wallet connection not supported!');
    }
  
  }


  const navigate =useNavigate();

  const goToDetails =() =>{
    console.log("todetails")
    //web3Handler()
    navigate("/results/details")
};

//Fetch data from firebase 
useEffect( ()=>{
    const resultRef = collection(db,"Results");
    
    const q = query(resultRef, orderBy("createdAt","desc"));
    onSnapshot(q,(snapshot)=>{
        const results = snapshot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data(),
            
        }
        ));
      
        setResults(results);
        console.log(results);   
        
    });
},[]);


   return(
     <div>
      <br/><br/><br/>
         <div>
                
                {/* <Steps current={status} labelPlacement='vertical' responsive='true' >
                  <Step title='Collecting Data' icon={<DatabaseOutlined />}></Step>
                  <Step title='Signing' icon={<FormOutlined />}></Step>
                  <Step title='Encrypting Data' icon={<LockFilled />}></Step>
                  <Step title='Sent' icon={<FileProtectOutlined />}></Step>
                </Steps> */}

                <Steps current={status} labelPlacement='vertical' responsive='true' >
                  <Step title='Collecting Data'></Step>
                  <Step title='Signing' ></Step>
                  <Step title='Encrypting Data' ></Step>
                  <Step title='Sent' ></Step>
                </Steps> 
            
          </div>

      
         {
results.map((result)=> <div className='border mt-3 p-3 bg-light' key={result.id}>
                    <div className=' mt-3 p-3 bg-' key={result.id}>
                        <div className='col-9 ps-3' style={{ display: "flex" }}>
                          {console.log("Generator Check : ",result.generatorCheck)}

                            <Link to ={`/results/${result.id}`} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                            <div className='col-9 ps-3'>
                            <img src='https://cdn-icons-png.flaticon.com/128/3177/3177440.png' width="35" height="20" ></img>
                            </div>
                            <div className='col-9 ps-3' >
                            <Info result={result} onSubmitFormSignMsg={onSubmitFormSignMsg} style={{color:"#000000"}}/>
                            </div>
                            </Link>
                           
                            </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        {result.generatorCheck === false?
                        <button style={{ marginLeft: "auto" }} className='btn btn-primary btn-md'  onClick={event => onSubmitFormSignMsg(result.hash,result.studentKey,result.Name,result.feedback,result.id,result.signedHash,event)} >
                          Sign
                        </button>:
                        <div>
                        <h6>Already Signed <div id="tick-mark"></div></h6>
                        </div>
                        }
                        </div>
                        </div>
                    </div>
                )
                      }
             
              

     </div>

   )

}