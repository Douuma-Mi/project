import React, { useState} from "react";


import "./loginform.css"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {

    const navigate=useNavigate()
    const handleclick=()=>{
        if(username&&password){
        console.log('first')
            axios.post("http://localhost:5000/user/login",{username:username,password:password}).then(function(response){
                console.log(response)
                navigate("/weather")
               }).catch(function(error){
                  console.log(error.response.data.msg)
                  seterror(error.response.data.msg)
               })
        
             }
           else{alert('input empty')}
        
        }
        const [error, seterror] = useState('')
        const [username, setuseername] = useState('')
        const [password, setpaassword] = useState('')
    return (
        <div className="cover" style={error?{ body:'red'}:null}  >
            <h1>Login</h1>
            <input type="text" placeholder="username"   onChange={(e)=>setuseername(e.target.value)} />
            <input type="password" placeholder="password"  onChange={(e)=>setpaassword(e.target.value)}   />
{error ? <p  className="ERR" >{error}</p>:null}
<div class="details">
<button  onClick={()=>handleclick()}  >login</button>
<Link  to={'/register'}  ><button className="lien">register</button></Link></div></div>
    )
}

export default LoginForm 