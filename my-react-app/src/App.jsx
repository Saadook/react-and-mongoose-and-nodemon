import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
function App (){
const [data,setData] = useState([])

  function getAll (){
    axios.get("http://localhost:3000/user/users")
    .then((res)=>{
setData(res.data);
    })
    .catch(err=>{
      console.log(err);
      
    })
  }
 useEffect(()=>{
getAll()

 },[])

  return(
    <>
    {
      data.map((ele)=>(
        <div key={ele}>
          <h1>{ele.firstName}</h1>
          <p>{ele.lastName}</p>
          <p>{ele.email}</p>
          <p>{ele.age}</p>
        </div>
      ))
    }
    </>
  )
}
  


export default App
