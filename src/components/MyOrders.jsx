import React from 'react';
import { Link } from 'react-router-dom';
import product5 from '../images/products/product5.jpg';
import product3 from '../images/products/product3.jpg';



const MyOrders = () => {

    //CSS styling
    const body = {
        padding: "2rem 0rem"    
    };
    const imageParent = {
        maxWidth: "40px",    
    };
    // CSS Styling End


    return (
        <>
            <div class="container mt-5" style={body}>
                <div class="row">
                    <div class="col-12 col-sm-8 col-lg-12">
                        <h6 class="text-muted">All Orders</h6>

                        <ul class="list-group mb-2">
                            <Link to={"/invoice"} style={{textDecoration: "none"}}>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                <span class="btn btn-outline-secondary rounded-pill"> Wumpale Bear NFT </span>    
                                    <span class="text-muted"> Rs/ 1499 </span>
                                    <span class="text-muted">Delivered</span>
                                    <div style={imageParent}>
                                        <img src={product5} class="img-fluid" alt="quixote" />
                                    </div>
                                </li>
                            </Link>
                        </ul><ul class="list-group mb-2">
                            <Link to={"/invoice"} style={{textDecoration: "none"}}>
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                <span class="btn btn-outline-secondary rounded-pill"> Facebook Metaverse</span>    
                                    <span class="text-muted"> Rs/ 1499 </span>
                                    <span class="text-muted">Delivered</span>
                                    <div style={imageParent}>
                                        <img src={product3} class="img-fluid" alt="quixote" />
                                    </div>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MyOrders