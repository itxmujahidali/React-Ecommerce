import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ItemCard = (props) => {

    const [data, setData] = useState([]);


    const getItems = () => {

        axios.get('http://127.0.0.1:8000/shop/items/')
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
                        data.map((apiData) => {
                            return <div className="col">
                                <div className="card h-100">
                                    <img src={apiData.image_url} className="card-img-top" alt="..." />
                                    <div className="card-body d-grid gap-2" align='center'>
                                        <h5 className="card-title">{apiData.item_name}</h5>
                                        <p className="text-muted">{apiData.sub_category.sub_name}</p>
                                        <p className="card-text"><b>Rs/ {apiData.item_price}</b></p>
                                        


                                        <Link to= {`/purchasing/${apiData.id}`} type="button" className="btn btn-outline-primary rounded-pill "> Buy
                                        </Link>
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
