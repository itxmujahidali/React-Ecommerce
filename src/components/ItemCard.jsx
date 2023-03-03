import React from 'react';
import { Link } from "react-router-dom";

import product1 from '../images/products/product1.jpg';
import product2 from '../images/products/product2.jpg';
import product3 from '../images/products/product3.jpg';
import product4 from '../images/products/product4.jpg';
import product5 from '../images/products/product5.jpg';
import product7 from '../images/products/product7.jpg';
import product8 from '../images/products/product8.jpg';
import product9 from '../images/products/product9.jpg';


const ItemCard = (props) => {
    return (
        <>
        <div className='container'>

        
            <h2 className='mt-5 mb-5' align='center'>{props.data}</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src={product1} className="card-img-top" alt="..." />
                        <div className="card-body d-grid gap-2" align='center'>
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text"><b>Rs/ 1500.</b></p>
                            <Link to="/purchasing" type="button" className="btn btn-outline-primary rounded-pill "> Buy</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={product2} className="card-img-top" alt="..." />
                        <div className="card-body d-grid gap-2" align='center'>
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text"><b>Rs/ 1500.</b></p>
                            <Link to="/purchasing" type="button" className="btn btn-outline-primary rounded-pill "> Buy</Link>
                        </div>
                    </div>
                </div><div className="col">
                    <div className="card h-100">
                        <img src={product3} className="card-img-top" alt="..." />
                        <div className="card-body d-grid gap-2" align='center'>
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text"><b>Rs/ 1500.</b></p>
                            <Link to="/purchasing" type="button" className="btn btn-outline-primary rounded-pill "> Buy</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={product4} className="card-img-top" alt="..." />
                        <div className="card-body d-grid gap-2" align='center'>
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text"><b>Rs/ 1500.</b></p>
                            <Link to="/purchasing" type="button" className="btn btn-outline-primary rounded-pill "> Buy</Link>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={product5} className="card-img-top" alt="..." />
                        <div className="card-body d-grid gap-2" align='center'>
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text"><b>Rs/ 1500.</b></p>
                            <Link to="/purchasing" type="button" className="btn btn-outline-primary rounded-pill "> Buy</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={product9} className="card-img-top" alt="..." />
                        <div className="card-body d-grid gap-2" align='center'>
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text"><b>Rs/ 1500.</b></p>
                            <Link to="/purchasing" type="button" className="btn btn-outline-primary rounded-pill "> Buy</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={product7} className="card-img-top" alt="..." />
                        <div className="card-body d-grid gap-2" align='center'>
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text"><b>Rs/ 1500.</b></p>
                            <Link to="/purchasing" type="button" className="btn btn-outline-primary rounded-pill "> Buy</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={product8} className="card-img-top" alt="..." />
                        <div className="card-body d-grid gap-2" align='center'>
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text"><b>Rs/ 1500.</b></p>
                            <Link to="/purchasing" type="button" className="btn btn-outline-primary rounded-pill "> Buy</Link>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>

        </>
    )
}

export default ItemCard