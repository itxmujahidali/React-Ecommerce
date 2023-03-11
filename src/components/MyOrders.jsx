import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {API_BASE_URL} from '../config';




const MyOrders = () => {

    const [data, setData] = useState([])

    const getData = () => {
        axios.get(`${API_BASE_URL}shop/myorder/`, {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`
            }
        })
            .then(function (response) {
                setData(response.data)
            })
            .catch(function (error) {
                console.log("Error Occured");
            });
    }

    const handleDelete = (id) => {
        axios.delete(`${API_BASE_URL}shop/myorder/${id}/`,{
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`
            }
        }).then(() => {
            getData();
        })
        .catch(function (error) {
            console.log("Error Occured");
        });
        alert("Order has been deleted!");
    }

    useEffect(() => {

        getData();

    }, [])

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
            <div className="container mt-5" style={body}>
                <div className="row">
                    <div className="col-12 col-sm-8 col-lg-12">
                        <h6 className="text-muted">All Orders</h6>
                        {
                            data.map((apiData) => {
                                return <ul className="list-group mb-2">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <Link to={`/invoice/${apiData.id}`} style={{ textDecoration: "none" }}>
                                            <span className="btn btn-outline-secondary"> {apiData.order_item} </span>
                                        </Link>
                                        <span className="text-muted disabled">{apiData.delivered === true ? <button style={{ width: "100px" }} type="button" className="btn btn-warning">Delivered</button>
                                            : <button style={{ width: "100px" }} type="button" onClick={() => { handleDelete(apiData.id) }} className="btn btn-danger">Cancel</button>}
                                        </span>
                                        <Link to={`/invoice/${apiData.id}`} style={{ textDecoration: "none" }}>
                                            <div style={imageParent}>
                                                <img src={apiData.image} className="img-fluid" alt="image_not_load" />
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            })
                        }

                    </div>
                </div>
            </div>

        </>
    )
}

export default MyOrders
