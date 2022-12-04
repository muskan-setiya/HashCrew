// import { FirebaseError } from "firebase/app";
import React, {useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import {db1} from "../firebaseConfig";
// import  firebase from 'firebase';
import { Box,Typography } from '@mui/material';
import PropTypes from 'prop-types';
import './StudentDetails.css';
import FlexShrink from './Details'; 


export default function StudentDetails(){
    let params = useParams();
    let id = params.id;
    console.log(id)

    const [singleDoc,setSingleDoc]=useState({});

    useEffect( ()=>{  
        db1.collection("Results")
        .doc(id)
        .get()
        .then((snapshot)=>{
            if(snapshot){
                setSingleDoc(snapshot.data());
            }
        });
        console.log(singleDoc); 
        
    },[]);
    console.log(singleDoc); 

return(
    <div className='content-container'>
        <div className='row'>

        <div className='left-panel box'>
        
        <FlexShrink  name={singleDoc.Name} feedback={singleDoc.feedback}/>

        {/* <p>Name: {singleDoc.Name}&emsp;</p>
        <p>Feedback: {singleDoc.feedback}&emsp;</p> */}
        </div>

        <div className='right-panel box'><embed type="application/pdf" src={singleDoc.fileUrl} width={100+'%'} height={100+'%'}/></div>
        
        
        </div></div>

        
)

}


