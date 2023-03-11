import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const PurchasingCard = () => {
    // Get ID from URL
    const params = useParams();
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");

    // States for helper function

    const [data, setData] = useState([]);



    const getItems = () => {
        axios.get(`http://127.0.0.1:8000/shop/items/${params.id}/`)
            .then(function (response) {
                setData(response.data)
            })
            .catch(function (error) {
                console.log("Error Occured");
            });
    }

    // Helper Function for checking Phone number is valid or not
    function isNumeric(value) {
        return /^\d+$/.test(value);
    }

    // Helper Function for Billing Form Validation
    function formValidation() {
        // if (firstName.length < 2 && lastName.length < 2 && email.length < 1 && phone.length < 6 && 
        //     address1.length < 2 && address2.length < 2 && city.length < 2 && zip.length < 1){
        //         return alert('Please enter correct data OR you missing some values!');
        // }
        if(!localStorage.getItem('token')) {
            alert("You must be login first before placing any order!")
        }
        else if (firstName.length < 2) {
            alert("Please enter valid data for order!")
        }
        else if (lastName.length < 2) {
            alert("Please enter valid data for order!")

        }
        else if (email.length < 2) {
            alert("Please enter valid data for order!")

        }
        else if (phone.length < 10) {
            alert("Please enter valid data for order!")

        }
        else if (address1.length < 2) {
            alert("Please enter valid data for order!")

        }
        else if (address2.length < 2) {
            alert("Please enter valid data for order!")

        }
        else if (city.length < 2) {
            alert("Please enter valid data for order!")

        }
        else if (zip.length < 4 || zip.length > 6) {
            alert("Zip code must be less than 6 digit and greater than 4 digits!")

        }
        else {
            return submitAddress();
        }
    };

    function submitAddress() {
        if (isNumeric(phone)) { //using (isNumeric) helper function

            // e.preventDefault();
            axios.post('http://127.0.0.1:8000/shop/purchasing/', {
                order_item: data.id,
                first_name: firstName,
                last_name: lastName,
                phone_number: phone,
                order_email: email,
                address1: address1,
                address2: address2,
                city: city,
                zip_code: zip,
            }, {
                headers: {
                    Authorization: `Token ${localStorage.getItem('token')}`
                }
            })
                .then(function (response) {
                    alert("Your Order has been placed!");
                    navigate('/myorder/');
                    setFirstName("");
                    setLastName("");
                    setEmail("");
                    setPhone("");
                    setAddress1("");
                    setAddress2("");
                    setCity("");
                    setZip("");
                })
                .catch(function (error) {
                    console.log("Error Occured");
                });

        }
        else {
            alert("Please Enter Valid Phone Number!")
        }


    }


    useEffect(() => {
        window.scrollTo(0, 0);
        getItems();
        // eslint-disable-next-line
    }, [])

    // console.log('***********************>', data);

    return (
        <>

            <div className="container">
                <div className="py-5 text-center">
                    <h2>Order Details</h2>
                </div>

                <div className="row">
                    <div className="col-md-4 order-md-2 mb-4">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted">Your cart</span>                        </h4>
                        <ul className="list-group mb-3">
                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div className='mt-2' >

                                    <h6 className="my-0 text-primary">{data.item_name}</h6>
                                    <small className="text-muted">${data.item_price}</small>
                                </div>
                                <span>
                                    <img className="d-block mx-auto" src={data.image_url} alt="" width="60" height="60" />
                                </span>
                            </li>

                            <li className="list-group-item d-flex justify-content-between bg-light">
                                <div className="text-secondary">
                                    <h6 className="my-0">Item Description</h6>
                                    <small>{data.item_desc}</small>
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-between text-success">
                                <span>Total (USD)</span>
                                <strong>${data.item_price}</strong>
                            </li>
                        </ul>

                        {/* <div className="card p-2">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Promo code" />
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-secondary rounded-pill">Redeem</button>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-md-8 order-md-1">
                        <h4 className="mb-3">Billing address</h4>
                        <div className="needs-validation" novalidate="">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label for="firstName">First name</label>
                                    <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control" placeholder="John" required="" />
                                    <div className="invalid-feedback" />
                                    {
                                        (firstName.length > 2 || firstName.length === 0) ? null : <span style={{ color: 'red' }}> Valid first name is required. </span>
                                    }
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="lastName">Last name</label>
                                    <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" className="form-control" placeholder="Smith" required="" />
                                    {
                                        (lastName.length > 2 || lastName.length === 0) ? null : <span style={{ color: 'red' }}> Valid last name is required. </span>
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label>Phone Number </label>
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" className="form-control" placeholder="0900 1234567" required />
                            {
                                (phone.length > 10 || phone.length === 0) ? null : <span style={{ color: 'red' }}> Please enter a valid phone number for shipping updates. </span>
                            }

                        </div>

                        <div className="mb-3">
                            <label for="email">Email <span className="text-muted">(We will contact with this email!)</span></label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="you@example.com" required />
                            {
                                (email.length > 2 || email.length === 0) ? null : <span style={{ color: 'red' }}> Please enter a valid email address for shipping updates. </span>
                            }

                        </div>

                        <div className="mb-3">
                            <label for="address">Address</label>
                            <input value={address1} onChange={(e) => setAddress1(e.target.value)} type="text" className="form-control" placeholder="Province, City/Village" required="" />

                            {
                                (address1.length > 2 || address1.length === 0) ? null : <span style={{ color: 'red' }}> Please enter valid shipping address. </span>
                            }

                        </div>

                        <div className="mb-3">
                            <label for="address2">Address 2</label>
                            <input value={address2} onChange={(e) => setAddress2(e.target.value)} type="text" className="form-control" placeholder="Apartment or suite" required />
                            {
                                (address2.length > 2 || address2.length === 0) ? null : <span style={{ color: 'red' }}> Please enter valid shipping address. </span>
                            }
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6 mb-2">
                                <label for="inputCity"> Major City</label>
                                <input value={city} onChange={(e) => setCity(e.target.value)} type="text" className="form-control" placeholder='Lahore' required />
                                {
                                    (city.length > 2 || city.length === 0) ? null : <span style={{ color: 'red' }}> Valid city name is required. </span>
                                }
                            </div>

                            <div className="form-group col-md-4">
                                <label for="inputZip">Zip</label>
                                <input value={zip} onChange={(e) => setZip(e.target.value)} type="text" className="form-control" placeholder='123ABC' required />
                                {
                                    (zip.length > 4 || zip.length === 0) ? null : <span style={{ color: 'red' }}> Valid Zip Code is required. </span>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div align='center' style={{ marginBottom: "5%" }}>
                <hr className="mb-4" />
                <button type='submit' onClick={formValidation} className="btn btn-primary btn-lg btn-block rounded-pill" >Continue to billing</button>
            </div>





        </>
    )
}
export default PurchasingCard