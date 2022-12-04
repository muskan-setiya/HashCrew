import { useState } from "react";
import { fetchNFT } from "./fetchNFT";
import { decrypt } from "../utils/decryption";
import ImgCard  from "./imgCard.js";
import { db1 } from "../firebaseConfig";
import {useEffect } from "react";
import { FetchTokenID } from "./fetchToken";
import { ShieldCheckIcon, ShieldExclamationIcon } from "@heroicons/react/solid";
import {db} from "../firebaseConfig";
import {collection, onSnapshot, query, orderBy,updateDoc,doc} from "firebase/firestore";
import { LockClosedIcon } from "@heroicons/react/solid";

export default function Student(props){

  console.log('in student');
    const [isWalletConnected, setIsWalletConnected] = useState(true);
   // const [walletAddress, setWalletAddress] = useState();

   const wallet = props.wallet;
   console.log(wallet);

    //data 
    const [owner,setOwner] = useState('');
    const [description,setDescription]  = useState('');
    const [timestamp,setTimestamp] = useState('');
    const [data ,setData] = useState('');
    const [tx,setTx] = useState('');
    const [singleDoc,setSingleDoc]=useState({});
    const [results,setResults] = useState([]);
    const [id,setId] = useState('');
    const [rawData,setRawData] = useState('');

    //form fields
    const [pk , setPk] = useState('');

    //display details
    const [name,setName] = useState('');
    const [imgUrl,setImgUrl] = useState('');
    const [sign,setSign]  = useState('');
    const [feedback,setFeedback] = useState('');
    

    const onClickDecrypt = async(e) => {
      e.preventDefault(); 

      if(window?.ethereum){        
        //const accounts = await window.ethereum.request({method : 'eth_requestAccounts'});
        //const w = accounts?.[0];
        
        //setWalletAddress(accounts?.[0]);
        //setIsWalletConnected(true);   

        const token = await FetchTokenID(wallet)
        console.log(token)
        const response = await fetchNFT(token);
        console.log(response);
        

        //img url
        console.log(response.data.nft.metadata.image);
        setImgUrl(response.data.nft.metadata.image);

        //get description
        console.log(response.data.nft.metadata.description);
        setDescription(response.data.nft.metadata.description);

        //get owner
        console.log(response.data.owner);
        setOwner(response.data.owner);
        
        //get timestamp
        console.log(response.data.nft.mint_date);
        setTimestamp(response.data.nft.mint_date);

        // get name
        console.log(response.data.name);
        setName(response.data.name);

      console.log('des..',response.data.nft.metadata.description)  
      console.log('pk..',pk)
      const decrypted = await decrypt(pk,response.data.nft.metadata.description);
      console.log(decrypted);
      setRawData(decrypted);
      setName(decrypted.message.Name);
      setFeedback(decrypted.message.feedback);
      setSign(decrypted.message.signature);
        
      }
      else{
        alert('Browser wallet connection not supported!');
      }

      
    }

  if(!rawData)
 return (
  <div>
  { !isWalletConnected 
    ? <div></div>:
    <div align="center">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <center>
    <form onSubmit={onClickDecrypt} >
            {console.log('form')}
            <p className="mt-1 text-sm text-gray-10">
              This certificate is encrypted use your public key to decrypt it
            </p>
            <center>
           <input type="text" align='center'
           required
           value={pk} 
           placeholder='Enter Private Key' 
           onChange={(e) => setPk(e.target.value)}></input>
           </center>
           <br></br>
           
    
    {/* <div className=" items-center justify-center">
        <div className="space-y-1"> */}
        
          <div style={{width:'200px'}} className="flex justify-center">
            <LockClosedIcon className="text-gray-10 w-0" aria-hidden="true" />
          </div>
          <center><button type="submit">View Marksheet</button></center>
           </form>
           </center>            
          </div>
        // </div>
        // </div>
        
      }</div>
  );
  if(rawData)
  return (
    <div>
      
    { !isWalletConnected 
       ? <div></div>
       : <div>
        <br/><br/><br/> 
           
           <h5>Your NFTs</h5>
           {/* <h5>{id}</h5> */}
           <div>
            
            <ImgCard  name={name} image={imgUrl} feedback={feedback} sign={sign} wallet={wallet}/>
            
            </div>
      </div> 

    }
</div>    

  )
}

