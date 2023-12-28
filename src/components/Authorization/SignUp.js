import React, { useState } from 'react'
import './Authorization.css'
import axios from 'axios'
function SignUp() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confpass, setConfPass] = useState("")

    const handleName = (e) =>{
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleNumber = (e) =>{
        setNumber(e.target.value);
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }
    const handleConfPass = (e) =>{
        setConfPass(e.target.value);
    }

    const doSignUp = () => {
        if (name === "" || email === "" || number===""|| password=== "") {
        return alert("Please fill all fields");
    }
    else if(password !== confpass) {
        return alert("Both passwords must be the same.")
    }else {
        axios.post('http://localhost:5000/auth/signup',{name, email, number, password})
        .then((res) => {
            console.log('Sign up successful:', res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    }
 }
 
        // const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        // if(!emailregex.test(email)){
        //     document.getElementById('emailvalidate').innerHTML="Invalid Email";
        //     document.getElementById('emailvalidate').style.color='red';
        // }
    

    // const doSignUp = () => {
    //     axios.post('http://localhost:5000/auth/signup',{name, email, number, password})
    //     .then((res) => {
    //         console.log('Sign up successful:', res.data);
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //     })
    // }

  return (
    <div className='signup-box d-flex flex-column p-3 rounded-3'  >
        <h3>Signup</h3>
        <label htmlFor="">Name</label>
        <input type="text" name='fullname' value={name} onChange={handleName}  />

        <label htmlFor="">Email</label>
        <input type="email" name='email' value={email}  onChange={handleEmail} />
        {/* <div id='emailvalidate' className='small'></div> */}

        <label htmlFor="">Mobile Number</label>
        <input type="tel"name='number'  value={number} onChange={handleNumber} maxLength={10} pattern='^[0-9]+$'/>

        <label htmlFor="">Password</label>
        <input type="password" name='password' value={password} onChange={handlePassword} minLength={5}/>

        <label htmlFor="">Confirm Password</label>
        <input type="password" name='confirm-password' value={confpass} onChange={handleConfPass} minLength={5} />
         
        <button className='btn btn-primary mt-3 ' onClick={doSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp