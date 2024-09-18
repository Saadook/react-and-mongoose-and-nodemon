import React, { useState } from "react";
import axios from 'axios';

function signUp(){
    const [data,setData]= useState([])

    function postUser(){
        axios.post('http://localhost:3000/user/users')
        .then(()=>{
            setData(res.data);
        })
        .catch(err=>{
            console.log(err);
            
        })
    }
}
export default signUp 