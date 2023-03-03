import React from 'react'

const Signup = () => {
    return (
        <>
            <div className='container' style={{ marginTop: "10%", width: "45%" }}>
                <h1 align="center">REGISTER</h1>

                <div class="mb-3 mt-2">
                    <label for="exampleInputEmail1" class="form-label">Full Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3 mt-2">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll share confirmation code on your email.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div align='center' className='mt-4'>
                    <button type="submit" class="btn btn-primary">Register</button>
                </div>
            </div>
        </>
    )
}

export default Signup