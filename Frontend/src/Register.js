import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";



const Register= () => {

const navigate=useNavigate()

const handleclick=()=>{


    if(username&&password)
    { axios.post("http://localhost:5000/user/register",{username:username,password:password}).then(function(response){
        console.log(response)
       }).catch(function(error){
          console.log(error)
       })
   
     navigate("/")}
     else{alert('input empty')}

   
}

 const [username, setuseername] = useState('')
const [password, setpaassword] = useState('')
    return (
        <div className="cover">
            <h1>register</h1>
            <input type="text" placeholder="username"   onChange={(e)=>setuseername(e.target.value)} />
            <input type="password" placeholder="password"  onChange={(e)=>setpaassword(e.target.value)}   />

     <div class="details">
<button onClick={()=>handleclick()}  >Register</button>
<Link  to={'/'}  ><button className="lien">Login</button></Link></div></div>
    )
}

export default Register 