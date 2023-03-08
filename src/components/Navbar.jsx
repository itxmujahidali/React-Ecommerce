import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [data, setData] = useState([])
    const [search, setSearch] = useState([])

    const getCategory = () => {

        axios.get('http://127.0.0.1:8000/shop/category/')
            .then(function (response) {
                setData(response.data)
                
            })
            .catch(function (error) {
                console.log("Error Occured");
            });
    }

    const handleSearchData = () => {

        axios.get(`http://127.0.0.1:8000/shop/items?search=${search}`)
            .then(function (response) {
                setSearch(response.data)
            })
            .catch(function (error) {
                console.log("Error Occured");
            });
            
        }  
        
    useEffect(() => {

        getCategory();

    }, [])
    console.log('-------------->', search);
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="https://thedownloadworld.com/web/wp-content/uploads/2021/05/shop.png" alt="Bootstrap" width="54" height="36" />
                    </a>
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

                                    return <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {apiData.cat_name}
                                        </a>

                                        {
                                            apiData.Sub_Category.map((apiData2) => {

                                                return apiData2.sub_name.length !== 0 ? <ul className="dropdown-menu">
                                                    <li>
                                                        <Link to={`/${apiData.cat_name}/${apiData2.sub_name}`} style={{ textDecoration: "none" }}>
                                                            <button className="dropdown-item">{apiData2.sub_name}</button>

                                                        </Link>
                                                    </li>
                                                </ul> : undefined;
                                            })
                                        }



                                    </li>
                                })
                            }


                            <li className="nav-item">
                                <Link to={"/myorder"} style={{ textDecoration: "none" }}>
                                    <a className="nav-link" href="/myorder">My Order</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/contactus"} style={{ textDecoration: "none" }}>
                                    <a className="nav-link" href="/contactus">Contact</a>
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex" role="search">
                            <input className="form-control me-2" placeholder="Search" aria-label="Search"  onChange={(e) => setSearch(e.target.value)} />
                            <button className="btn btn-sm btn-outline-success rounded-pill" onClick={handleSearchData} >Search</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar