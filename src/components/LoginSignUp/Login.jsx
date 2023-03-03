import React from 'react'

const Login = () => {
    return (
        <>
        <div className='container' style={{marginTop: "10%", width: "45%"}}>
            <h1 align="center">LOGIN </h1>
            <div class="mb-3 mt-2">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
                <a href='/#'>Forget account</a>
            </div>
            <div align='center' className='mt-4'>
            <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
        </>
    )
}

export default Login