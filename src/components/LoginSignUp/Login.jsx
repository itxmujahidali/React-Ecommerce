import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isAuth, setIsAuth] = useState("")
    const navigate = useNavigate(); // useNavigate hook


    async function loginPost(e) {

        e.preventDefault();
        axios.post('http://127.0.0.1:8000/users/login/', {

            username: userName,
            password: password,
            
        }).then(response => {
            localStorage.clear();
            localStorage.setItem("token", response.data.token)
            setIsAuth(response.data.token)
            setTimeout(() => {
                navigate('/', { replace: true }); // redirect to home page and replace the current entry in the history stack
            }, 1000); // wait for 2 seconds

        })
            .catch(error => {
                console.error(error);
            });

        setUserName("");
        setPassword("");
    }

    
    

    return (
        <>
            <div className='container' style={{ marginTop: "10%", width: "45%" }}>
                <h1 align="center">LOGIN </h1>
                <div className="mb-3 mt-2">
                    <label for="exampleInputEmail1" className="form-label">username</label>
                    <input type="text" className="form-control" value={userName} onChange={(e) => setUserName(e.target.value)} />

                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <span>
                    <a href='/#'>Forget account</a>
                    </span>
                    <span style={{float: "right"}}>
                    <a href='/signup'>Create Account?</a>
                    </span>
                </div>
                <div align='center' className='mt-4'>
                
                    <button onClick={loginPost} className="btn btn-primary">Submit</button>
                    
                </div>
            </div>
        </>
    )
}

export default Login