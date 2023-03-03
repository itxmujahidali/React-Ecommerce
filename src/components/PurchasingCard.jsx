import React from 'react';
import { Link } from 'react-router-dom';
import product1 from '../images/products/product1.jpg';

const PurchasingCard = () => {
    return (
        <>

            <div className="container">
                <div className="py-5 text-center">
                    <h2>Order Details</h2>
                </div>

                <div className="row">
                    <div className="col-md-4 order-md-2 mb-4">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted">Your cart</span>
                            <span className="badge badge-secondary badge-pill">3</span>
                        </h4>
                        <ul className="list-group mb-3">
                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div className='mt-2' >

                                    <h6 className="my-0">Product name</h6>
                                    <small className="text-muted">$12</small>
                                </div>
                                <span>
                                    <img className="d-block mx-auto" src={product1} alt="" width="60" height="60" />
                                </span>
                            </li>

                            <li className="list-group-item d-flex justify-content-between bg-light">
                                <div className="text-success">
                                    <h6 className="my-0">Promo code</h6>
                                    <small>EXAMPLECODE</small>
                                </div>
                                <span className="text-success">-$5</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>$20</strong>
                            </li>
                        </ul>

                        <div className="card p-2">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Promo code" />
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-secondary">Redeem</button>
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
                                    <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
                                    <div className="invalid-feedback" />
                                    Valid first name is required.
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="lastName">Last name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="" value="" required="" />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label>Phone Number </label>
                            <input type="text" className="form-control" id="phone_nummber" placeholder="0900 1234567" />
                            <div className="invalid-feedback">
                                Please enter a valid phone number for shipping updates.
                            </div>
                        </div>

                        <div className="mb-3">
                            <label for="email">Email <span className="text-muted">(Optional)</span></label>
                            <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                            <div className="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>

                        <div className="mb-3">
                            <label for="address">Address</label>
                            <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>

                        <div className="mb-3">
                            <label for="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                            <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                        </div>
                    </div>
                </div>
            </div>
            <div align='center' style={{marginBottom: "5%"}}>
                <hr className="mb-4" />
                <Link to={"/invoice"}>
                <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to billing</button>
                </Link>
            </div>





        </>
    )
}

export default PurchasingCard