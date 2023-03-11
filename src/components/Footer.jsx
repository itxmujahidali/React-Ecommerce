import React from 'react'

const Footer = () => {
    return (
        <>

            <footer className="my-5 pt-5 text-muted text-center text-small">
                <p className="mb-1">© 202-2023 All rights reserved.</p>
                <li className="list-inline-item">
                    Made with
                    <span style={{padding: "4px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                    </svg>
                    </span>
                    by 
                    <a style={{ textDecoration: "none", hover: "red" }} href="https://itxmujahidali.github.io" target={"_blank"}> Mujahid Ali</a>
                </li>
            </footer>
        </>
    )
}

export default Footer