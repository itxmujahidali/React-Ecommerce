import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    function sendMessage(e) {

        e.preventDefault();
        axios.post('http://127.0.0.1:8000/shop/contactus/', {

            name: name,
            email: email,
            message: message,
        });
        setName("");
        setEmail("");
        setMessage("");
        alert("Message has been sent!")
    }

    return (
        <>
            <div className='container mt-5'>
                <h1 align='center' className='mt-5 mb-5'>Contact Us</h1>
                <div class="form-group col-md-4" style={{ float: "left", marginLeft: "12%" }}>
                    <label for="inputEmail4">
                        <b>Name</b>
                    </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} class="form-control" placeholder="Name" />
                </div>
                <div class="form-group col-md-4" style={{ float: "left", marginLeft: "16%" }}>
                    <label for="inputEmail4">
                        <b>Email</b>
                    </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" placeholder="Email" />
                </div>
                <div class="form-group col-md-10 mt-4 mb-5" style={{ float: "left", marginLeft: "12%" }}>
                    <label for="inputEmail4">
                        <b>Message</b>
                    </label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} class="form-control" placeholder="Enter Your Message" />
                </div>
                <div align='center'>
                    <button onClick={sendMessage} class="btn btn-primary mb-2 rounded-pill">Send Message</button>
                </div>

            </div>
        </>
    )
}

export default Contact

