import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Query from '../PushChat/query';

export default function ImgCard(props) {
  return (

<div class="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={props.image} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name: {props.name}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Feedback: {props.feedback}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Feedback: {props.sign}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Feedback: {props.wallet}</p>
    </div>
    </div>




  );
}

