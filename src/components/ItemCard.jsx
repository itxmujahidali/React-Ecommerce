import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ItemCard = (props) => {

    const [data, setData] = useState([])

    const getItems = () => {

        axios.get('https://6401efb53779a86262614504.mockapi.io/Products')
            .then(function (response) {
                setData(response.data)
            })
            .catch(function (error) {
                console.log("Error Occured");
            });
    }

    useEffect(() => {

        getItems();

    }, [])




    return (
        <>
        <div className='container'>

        
            <h2 className='mt-5 mb-5' align='center'>{props.data}</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                
                {
                    data.map((apiData)=>{
                        return <div className="col">
                        <div className="card h-100">
                            <img src={apiData.item_image} className="card-img-top" alt="..." />
                            <div className="card-body d-grid gap-2" align='center'>
                                <h5 className="card-title">{apiData.item_title}</h5>
                                <p className="card-text"><b>Rs/ {apiData.item_price}</b></p>
                                <Link to="/purchasing" type="button" className="btn btn-outline-primary rounded-pill "> Buy</Link>
                            </div>
                        </div>
                    </div> 
                    })
                }           
                
            </div>
        </div>

        </>
    )
}

export default ItemCard