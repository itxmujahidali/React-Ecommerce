import React from 'react'

const Contact = () => {
    return (
        <>

            <div className='container mt-5'>
                <h1 align='center' className='mt-5 mb-5'>Contact Us</h1>
                <div class="form-group col-md-4" style={{float: "left", marginLeft: "12%"}}>
                    <label for="inputEmail4">
                        <b>Name</b>
                    </label>
                    <input type="text" class="form-control" id="inputEmail4" placeholder="Name" />
                </div>
                <div class="form-group col-md-4" style={{float: "left", marginLeft: "16%"}}>
                    <label for="inputEmail4">
                        <b>Email</b>
                    </label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                </div>
                <div class="form-group col-md-10 mt-4 mb-5" style={{float: "left", marginLeft: "12%"}}>
                    <label for="inputEmail4">
                        <b>Message</b>
                    </label>
                    <textarea class="form-control" placeholder="Enter Your Message"/>
                </div>
                <div align='center'>
                <button type="submit" class="btn btn-primary mb-2 rounded-pill">Send Message</button>
                </div>

            </div>
        </>
    )
}

export default Contact