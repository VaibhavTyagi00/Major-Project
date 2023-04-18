import logo from './logo.svg';
import './App.css';
import { auth } from './firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { useState } from 'react';
import Login from './login';
import SignUp from './Component/signUp'
import SignIn from './Component/signIn'

function App() {

  const [email,setEmail]=useState()
  const [password,setPassword]=useState()

  function handlesubmit(e){
    e.preventDefault()
    createUserWithEmailAndPassword(auth,email,password).then(res=>console.log(res)).catch((e)=>{console.log("sign up error")})
  }
  return (
    <div>
    {/*<form onSubmit={handlesubmit}>
    <label >Email</label>
    <input onChange={(e)=>setEmail(e.target.value)}type='email'/>
    <label >Password</label>
    <input onChange={(e)=>setPassword(e.target.value)} type='password'/>
    <button type='submit'>Sign-Up</button>
    </form>
    <Login />*/}
    <h1>Hero</h1>
    <SignUp />
    </div>
  );
}
export default App;
