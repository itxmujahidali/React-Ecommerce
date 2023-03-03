import axios from 'axios';
import React, { useState } from 'react';


const Signup = () => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");


    const registerPost = (e) => {
        if (password1 === password2) {
            e.preventDefault();
            axios.post('https://6401efb53779a86262614504.mockapi.io/register', {

                full_name: name,
                email: email,
                password1: password1,
                password2: password2,
            });

            setName("");
            setEmail("");
            setPassword1("");
            setPassword2("");
            alert("Register has been sent!")
        }
        else {
            return alert("Your Password is not same!")
        }
    };






    return (
        <>
            <div className='container' style={{ marginTop: "10%", width: "45%" }}>
                <h1 align="center">REGISTER</h1>

                <div class="mb-3 mt-2">
                    <label for="exampleInputEmail1" class="form-label">Full Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" class="form-control" />
                </div>
                <div class="mb-3 mt-2">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" />
                    <div id="emailHelp" class="form-text">We'll share confirmation code on your email.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input value={password1} onChange={(e) => setPassword1(e.target.value)} type="password" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                    <input value={password2} onChange={(e) => setPassword2(e.target.value)} type="password" class="form-control" />
                </div>
                <div align='center' className='mt-4'>
                    <button onClick={registerPost} class="btn btn-primary">Register</button>
                </div>
            </div>
        </>
    )
}

export default Signup