import React, { useState } from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../config';

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    function sendMessage(e) {

        e.preventDefault();
        axios.post(`${API_BASE_URL}shop/contactus/`, {

            name: name,
            email: email,
            message: message,
        }).then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log("Error Occured");
        });
        setName("");
        setEmail("");
        setMessage("");
        alert("Message has been sent!")
    }

    return (
        <>
            <div className='container mt-5' key={email}>
                <h1 align='center' className='mt-5 mb-5'>Contact Us</h1>
                <div className="form-group col-md-4" style={{ float: "left", marginLeft: "12%" }}>
                    <label htmlFor="inputEmail4">
                        <b>Name</b>
                    </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Name" />
                </div>
                <div className="form-group col-md-4" style={{ float: "left", marginLeft: "16%" }}>
                    <label htmlFor="inputEmail4">
                        <b>Email</b>
                    </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" />
                </div>
                <div className="form-group col-md-10 mt-4 mb-5" style={{ float: "left", marginLeft: "12%" }}>
                    <label htmlFor="inputEmail4">
                        <b>Message</b>
                    </label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="form-control" placeholder="Enter Your Message" />
                </div>
                <div align='center'>
                    <button onClick={sendMessage} className="btn btn-primary mb-2 rounded-pill">Send Message</button>
                </div>

            </div>
        </>
    )
}

export default Contact

