import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {API_BASE_URL} from '../config';


const Navbar = () => {

    const [data, setData] = useState([])
    const [search, setSearch] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const token = localStorage.getItem('token')

    const getCategory = () => {

        axios.get(`${API_BASE_URL}shop/category/`)
            .then(function (response) {
                setData(response.data)

            })
            .catch(function (error) {
                console.log("Error Occured");
            });
    }

    const handleLogout = () => {
        axios.post(`${API_BASE_URL}users/logout/`, {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`
            }
        })
            .then(function (response) {
                // Remove token from local storage
                localStorage.removeItem('token');
                setIsLoggedIn(false)
                alert("Logout Successfully!");
                navigate("/login");
            })
            .catch(function (error) {
                console.log("Error Occured");
            });
    }

    useEffect(() => {
        getCategory();
        setIsLoggedIn(!!token); // set the login status based on the presence of the token
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        setIsLoggedIn(!!token); // update the login status when the token changes
    }, [token]);


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                <Link to={"/"}>
                    <a className="navbar-brand" href="/">
                        <img src="https://thedownloadworld.com/web/wp-content/uploads/2021/05/shop.png" alt="Bootstrap" width="54" height="36" />
                    </a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={"/"} style={{ textDecoration: "none" }}>
                                    <a className="nav-link active" aria-current="page">Home</a>
                                </Link>
                            </li>

                            {
                                data.map((apiData) => {

                                    return <li className="nav-item dropdown" key={apiData.id}>
                                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {apiData.cat_name}
                                        </a>

                                        <ul className="dropdown-menu">
                                            {
                                                apiData.Sub_Category.map((apiData2) => {
                                                    return <li key={apiData2.id}>
                                                        <Link to={`/${apiData.cat_name}/${apiData2.sub_name}`} style={{ textDecoration: "none" }}>
                                                            <button className="dropdown-item">{apiData2.sub_name}</button>

                                                        </Link>
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    </li>
                                })
                            }

                            {
                                (isLoggedIn) ? <li className="nav-item">
                                    <Link to={"/myorder/"} style={{ textDecoration: "none" }}>
                                        <a className="nav-link">My Orders</a>
                                    </Link>
                                </li> : <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={ ()=> alert('You must be login first!')}>My Orders</a>
                                </li>

                            }

                            <li className="nav-item">
                                <Link to={"/contactus"} style={{ textDecoration: "none" }}>
                                    <a className="nav-link" href="/contactus">Contact</a>
                                </Link>
                            </li>

                        </ul>
                        {
                            (token) ? <div className='d-flex' style={{ marginRight: "2%" }}>

                                <button onClick={handleLogout} type='button' className="btn rounded-pill btn-sm btn-outline-danger">Logout</button>

                            </div> :
                                <div className='d-flex' style={{ marginRight: "2%" }}>
                                    <Link to={"/login"} style={{ textDecoration: "none" }}>
                                        <button type='button' className="btn rounded-pill btn-sm btn-outline-success">Login/Signup</button>
                                    </Link>
                                </div>
                        }


                        <div className="d-flex" role="search">
                            <input className="form-control me-2" placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
                            {
                                search.length > 0 ? <Link to={{
                                    pathname: '/items',
                                    search: `?search=${search}`
                                }}
                                    style={{ textDecoration: "none" }}>

                                    <button className="btn btn-sm btn-outline-success rounded-pill" >Search</button>
                                </Link> : <button className="btn btn-sm btn-outline-success rounded-pill" >Search</button>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar