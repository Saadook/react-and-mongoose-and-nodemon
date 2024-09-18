import React, { useState } from "react";
import axios from "axios";

function deleteUser(){
  const [data,setData]=useState([])

  function delUser(){
   axios.delete('http://localhost:3000/user/users')
   .then(()=>{
    setData(res.data);
   })
   .catch(err=>{
     console.log(err);
     
   })
  }


}
export default deleteUser