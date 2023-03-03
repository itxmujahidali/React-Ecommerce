import axios from 'axios';
import React, { useState } from 'react';


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function loginPost(e) {

        e.preventDefault();
        axios.post('https://6401efb53779a86262614504.mockapi.io/login', {

            email: email,
            password: password,
        });
        setEmail("");
        setPassword("");
        alert("Login has been sent!")
    }



    return (
        <>
        <div className='container' style={{marginTop: "10%", width: "45%"}}>
            <h1 align="center">LOGIN </h1>
            <div class="mb-3 mt-2">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" value={email} onChange={ (e)=>setEmail(e.target.value) } />
                <div class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" value={password} onChange={ (e)=>setPassword(e.target.value) } />
                <a href='/#'>Forget account</a>
            </div>
            <div align='center' className='mt-4'>
            <button onClick={loginPost} class="btn btn-primary">Submit</button>
            </div>
        </div>
        </>
    )
}

export default Login