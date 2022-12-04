import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AddResult from '../components/AddResult';
import { ButtonGroup, Stack, View, styled} from '@mui/material';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Verifier from '../Verifier';
import './Login.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


function Login({account, web3Handler, studentAccount, generatorAccpunr, verifierAccount}){
    const navigate =useNavigate();

    const goToStudent =() =>{
        console.log("tostudent")
        web3Handler()
        navigate("/student")
    };

    const goToGenerator = async () => {
        web3Handler()
        console.log("teacherAccount")
        navigate("/addresult")
    };

    const goToVerifier = () => {
        web3Handler()
        navigate("/results")
    };


    return(
        <main>
          <div>
            <div className='background'></div>
            </div>
            <div></div>

    <div style={{padding: 30}}>
      <Container sx={{ py: 4 }} maxWidth="md" spacing={3}>
        < Grid container spacing={4}>

        <Grid xs={4}>
        <Link to={`/student_profile`} style={{ textDecoration: 'none' }}>
      <CardActionArea>
        <CardContent>
          <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
  <div class="flex justify-center md:justify-end -mt-16">
    <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://cdn-icons-png.flaticon.com/512/579/579681.png"/>
  </div>
  <div>
    <h2 class="text-gray-800 text-3xl font-semibold">Student</h2>
    <p class="mt-2 text-gray-600"><CheckCircleIcon/>   Create Identity</p>
    <p class="mt-2 text-gray-600"><CheckCircleIcon/>   Ownership of the 
    Marksheet</p>
    <p class="mt-2 text-gray-600"><CheckCircleIcon/>   Has Digitally Verified Documents</p>
    <p class="mt-2 text-gray-600"><CheckCircleIcon/>   Polygon</p>
  </div>
</div>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Link>
    </Grid>
    

    <Grid xs={4}>
    <Link to={`/results`} style={{ textDecoration: 'none' }}>

      <CardActionArea>
        <CardContent>
        <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
  <div class="flex justify-center md:justify-end -mt-16">
    <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://cdn-icons-png.flaticon.com/512/1802/1802979.png"/>
  </div>
  <div>
    <h2 class="text-gray-800 text-3xl font-semibold">Generator</h2>
    <p class="mt-2 text-gray-600"><CheckCircleIcon/>   Digitally Sign the Marksheets</p>
    <p class="mt-2 text-gray-600"><CheckCircleIcon/>   Encrypt the Data</p>
    <p class="mt-2 text-gray-600"><CheckCircleIcon/>   Mint the NFTs</p>
    <p class="mt-2 text-gray-600"><CheckCircleIcon/>   Send Marksheets to Students</p>
  </div>
</div>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Link>
    </Grid>

    <Grid xs={12} sm={6} md={4}>
    <Link to={`/verifier`} style={{ textDecoration: 'none' }}>
      <CardActionArea>
        <CardContent>
        <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
  <div class="flex justify-center md:justify-end -mt-16">
    <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://cdn-icons-png.flaticon.com/512/2601/2601879.png"/>
  </div>
  <div>
    <h2 class="text-gray-800 text-3xl font-semibold">Verifier</h2>
    <p class="mt-2 text-gray-600"><CheckCircleIcon/>   Create Identity</p>
    <p class="mt-2 text-gray-600"><CheckCircleIcon/>   Ownership of the Marksheet</p>
    <p class="mt-2 text-gray-600"><CheckCircleIcon/>   Has Digitally Verified Documents</p>
    <p class="mt-2 text-gray-600"><CheckCircleIcon/>   Polygon</p>
  </div>
</div>
        </CardContent>
      </CardActionArea>
      <CardActions>     
      </CardActions>
    </Link>
    </Grid>
    </Grid>
      </Container>
    </div>

    </main>
      
    );
  }


export default Login