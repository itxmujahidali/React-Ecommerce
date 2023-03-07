import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const PurchasingCard = () => {
    // Get ID from URL
    const params = useParams();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
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

    function submitAddress(e) {
        e.preventDefault();
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
        });
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setAddress1("");
        setAddress2("");
        setCity("");
        setZip("");
    }


    useEffect(() => {

        getItems();
        // eslint-disable-next-line
    }, [])


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

                                    <h6 className="my-0">{data.item_name}</h6>
                                    <small className="text-muted">${data.item_price}</small>
                                </div>
                                <span>
                                    <img className="d-block mx-auto" src={data.image_url} alt="" width="60" height="60" />
                                </span>
                            </li>

                            <li className="list-group-item d-flex justify-content-between bg-light">
                                <div className="text-success">
                                    <h6 className="my-0">Promo code</h6>
                                    <small>Not Available</small>
                                </div>
                                <span className="text-success">-$0</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>${data.item_price}</strong>
                            </li>
                        </ul>

                        <div className="card p-2">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Promo code" />
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-secondary rounded-pill">Redeem</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 order-md-1">
                        <h4 className="mb-3">Billing address</h4>
                        <div className="needs-validation" novalidate="">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label for="firstName">First name</label>
                                    <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control" placeholder="" required="" />
                                    <div className="invalid-feedback" />
                                    Valid first name is required.
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="lastName">Last name</label>
                                    <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" className="form-control" placeholder="" required="" />
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label>Phone Number </label>
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" className="form-control" placeholder="0900 1234567" />
                            <div className="invalid-feedback">
                                Please enter a valid phone number for shipping updates.
                            </div>
                        </div>

                        <div className="mb-3">
                            <label for="email">Email <span className="text-muted">(Optional)</span></label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="you@example.com" />
                            <div className="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>

                        <div className="mb-3">
                            <label for="address">Address</label>
                            <input value={address1} onChange={(e) => setAddress1(e.target.value)} type="text" className="form-control" placeholder="1234 Main St" required="" />
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>

                        <div className="mb-3">
                            <label for="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                            <input value={address2} onChange={(e) => setAddress2(e.target.value)} type="text" className="form-control" placeholder="Apartment or suite" />
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6 mb-2">
                                <label for="inputCity">City</label>
                                <input value={city} onChange={(e) => setCity(e.target.value)} type="text" class="form-control" />
                            </div>

                            <div class="form-group col-md-4">
                                <label for="inputZip">Zip</label>
                                <input value={zip} onChange={(e) => setZip(e.target.value)} type="text" class="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div align='center' style={{ marginBottom: "5%" }}>
                <hr className="mb-4" />
                <Link to={"/invoice/"}>
                    <button onClick={submitAddress} className="btn btn-primary btn-lg btn-block rounded-pill" >Continue to billing</button>
                </Link>
            </div>





        </>
    )
}

export default PurchasingCard