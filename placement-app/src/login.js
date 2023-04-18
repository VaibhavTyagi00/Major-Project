import { auth } from './firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';
import { useState } from 'react';
const Login=()=>{
    const [email,setEmail]=useState()
  const [password,setPassword]=useState()

  function handlesubmit(e){
    e.preventDefault()
    signInWithEmailAndPassword(auth,email,password).then(res=>console.log(res)).catch((e)=>{console.log("sign in error")})
  }
    return(
        <form onSubmit={handlesubmit}>
        <label >Email</label>
        <input onChange={(e)=>setEmail(e.target.value)}type='email'/>
        <label >Password</label>
        <input onChange={(e)=>setPassword(e.target.value)} type='password'/>
        <button type='submit'>Sign-In</button>
       </form>
    )
}
export default Login