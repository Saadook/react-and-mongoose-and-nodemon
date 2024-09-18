import React, { useState } from "react";
import axios from "axios";

function Update(){
    const [data,setData]=useState([])

    function UpdateUser(){
        axios.Update('http://localhost:3000/user/users')
        .then(()=>{
            setData(res.data);
        })
        .catch(err=>{
            console.log(err);
            
        })
    }
}
export default Update