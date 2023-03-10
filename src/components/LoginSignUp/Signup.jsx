import axios from 'axios';
import React, { useState } from 'react';


const Signup = () => {


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");


    const registerPost = (e) => {
        if (password1 === password2) {
            e.preventDefault();
            axios.post('http://127.0.0.1:8000/users/register/', {

                first_name: firstName,
                last_name: lastName,
                username: userName,
                email: email,
                password: password1,
                password2: password2,
            }).then(response => {
                localStorage.clear();
                localStorage.setItem("token", response.data.token)
            })
                .catch(error => {
                    console.error(error);
                });

            setFirstName("");
            setLastName("");
            setUserName("");
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
            <div className='container' style={{ marginTop: "3%", width: "45%" }}>
                <h1 align="center">SIGN-UP</h1>

                <div className="mb-3 mt-2">
                    <label className="form-label">First Name</label>
                    <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control" />
                </div>
                <div className="mb-3 mt-2">
                    <label className="form-label">Last Name</label>
                    <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" className="form-control" />
                </div>
                <div className="mb-3 mt-2">
                    <label className="form-label">Username</label>
                    <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" className="form-control" />
                </div>
                <div className="mb-3 mt-2">
                    <label className="form-label">Email address</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" />
                    <div id="emailHelp" className="form-text">We'll share confirmation code on your email.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input value={password1} onChange={(e) => setPassword1(e.target.value)} type="password" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input value={password2} onChange={(e) => setPassword2(e.target.value)} type="password" className="form-control" />
                </div>
                <span>
                    <a href='/login'>Login?</a>
                    </span>
                <div align='center' className='mt-4 mb-4'>
                    <button onClick={registerPost} className="btn btn-primary">Register</button>
                </div>
            </div>
        </>
    )
}

export default Signup