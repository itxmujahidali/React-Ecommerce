import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="https://shop.app/cdn/shopifycloud/arrive_website/assets/marketing/global/shop-app-logo-purple-2355fa626947c074acd0299cac7f0e038e430ebc9a70e75a48b5d6616d508497.svg" alt="Bootstrap" width="30" height="24" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={"/"} style={{textDecoration: "none"}}>
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Shop
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                    <Link to={"/"} style={{textDecoration: "none"}}>
                                        <a className="dropdown-item" href="/">Men</a>
                                    </Link>
                                    </li>
                                    <li><a className="dropdown-item" href="/">Women</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Electronics</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                            <Link to={"/myorder"} style={{textDecoration: "none"}}>
                                <a className="nav-link" href="/myorder">My Order</a>
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link to={"/contactus"} style={{textDecoration: "none"}}>
                                <a className="nav-link" href="/contactus">Contact</a>
                            </Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-sm btn-outline-success rounded-pill " type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar