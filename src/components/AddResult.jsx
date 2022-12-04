import { addDoc , collection , Timestamp } from 'firebase/firestore'
import { getDownloadURL , ref , uploadBytesResumable } from 'firebase/storage';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { db , db1, storage } from '../firebaseConfig';
import { ethers } from 'ethers';
import {Buffer} from 'buffer';
import EthCrypto from 'eth-crypto';
const crypto = require('crypto');


export default function AddResult(props) {
  const wallet = props.wallet;

const[formData,setFormData] = useState({
    Name: "",
    feedback: "",
    file: "",
    hash : "",
    createdAt: Timestamp.now().toDate(),
    studentKey:"",
    generatorCheck: false,
    signatureHash:"",
    transactionHash:"",
    cgpa:"",
})

const [progress,setProgress] = useState(0);
const [message,setMessage] = useState(null);

const handleChange=(e)=>{
    setFormData({ ...formData, [e.target.name]: e.target.value});
}

    const storageRef = ref(storage,`${Date.now()}${formData.file.name}`);
    

    const onUploadFile = async(event) =>{
        var CryptoJS = require("crypto-js");
          console.log('File is Uploading');
          event.preventDefault();
          const uploadedfile = {...formData, file: event.target.files[0]};
          setFormData(uploadedfile)

          console.log(uploadedfile);

        const file1 = event.target.files[0];
        console.log(file1);
        console.log(wallet);
    
          const reader = new window.FileReader()
          console.log(reader);
          reader.readAsArrayBuffer(file1);
          
           reader.onloadend = () => {
          
            const buffer = Buffer(reader.result);
            console.log(buffer);
            const hash = crypto.createHash('sha256')
            const message = hash.update(buffer).digest('hex');
            console.log(message);
            setMessage(message);
           } 
        }
    const uploadImage = uploadBytesResumable(storageRef,formData.file);

    const setMessageHash = (e)=>{
      setMessage(e.target.value);
    }

    const handleCreate = ()=>{
        if(!formData.Name || !formData.feedback || !formData.file || !formData.studentKey || !formData.cgpa){
            alert('Please fill all the fields!');
            return;
        }

    
    
    uploadImage.on("state_changed",
    (snapshot)=>{
        const progressPercent = Math.round( (snapshot.bytesTransferred / snapshot.totalBytes)*100);
        setProgress(progressPercent);
        //console.log(progressPercent);
    },
    (err)=>{
        console.log(err);

    },
    ()=>{
        setFormData({
            Name: "",
            feedback: "",
            file: "",
            hash: "",
            studentKey: "",
            signedHash: "",
            transactionHash: "",
            cgpa:"",
        });
        console.log(formData);
        getDownloadURL(uploadImage.snapshot.ref)
        .then((url)=>{
          console.log(url)
          console.log(formData.studentKey)
          const address = (EthCrypto.publicKey.toAddress(formData.studentKey)).toLowerCase();
          console.log(address);
          
          db1.collection("Results").doc(address)
          .set({
              Name: formData.Name,
            feedback: formData.feedback,
            fileUrl: url,
            createdAt: Timestamp.now().toDate(),
            studentKey: formData.studentKey,
            hash: message,
            generatorCheck: formData.generatorCheck,
            signedHash:"",
            transactionHash: "",
            cgpa: formData.cgpa,

          })
          
          // const resultRef = collection(db,"Results",formData.Name);  
          // addDoc(resultRef,{
          //   Name: formData.Name,
          //   feedback: formData.feedback,
          //   fileUrl: url,
          //   createdAt: Timestamp.now().toDate(),
          //   studentKey: formData.studentKey,
          //   hash: message,
          //   generatorCheck: formData.generatorCheck,
          //   signedHash:"",
          //   transactionHash: "",
          // })
          .then(()=>{
            toast("Result added successfully",{type:"success"});
            setProgress(0);
          })
          .catch(err=>{
            toast("Error adding Result", {type:"error"});
          });
        });
    }
    );

    

}


  return (
    <div className='border p-3 mt bg-light' style={{position: "fixed"}}>
        <h2>Create Marksheet</h2>
        <label htmlFor="">Name</label>
        <input type="text" 
        name="Name" 
        className="form-control" 
        value={formData.Name}
        onChange={(e)=>handleChange(e)}
        />

        <label htmlFor="">Feedback</label><br></br>
        <textarea name="feedback" 
        className='from-control'
        value={formData.feedback}
        onChange={(e)=>handleChange(e)}
        />
      


        <br></br>
        <label htmlFor="">File</label>
        <input type="file" 
        name='file' 
        className='form-control'
        onChange={(e)=> onUploadFile(e)}
        />


        <label htmlFor="message">Hash:</label>
        <input id="message" className="form-control" type="text" placeholder="Ex:hello world" value={message} onChange={(e) => setMessageHash(e)}/>

        <label htmlFor="">Student Key</label>
        <input type="text" 
        name="studentKey" 
        className="form-control" 
        value={formData.studentKey}
        onChange={(e)=>handleChange(e)}
        />

       <label htmlFor="">CGPA</label>
        <input type="text" 
        name="cgpa" 
        className="form-control" 
        value={formData.cgpa}
        onChange={(e)=>handleChange(e)}
        />

       
      

        <button className='form-control btn-primary mt-2' onClick={handleCreate}>Create</button>
        </div>
        
  )
        }