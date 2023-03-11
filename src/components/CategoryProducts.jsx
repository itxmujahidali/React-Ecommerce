import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../config';

const CategoryProducts = () => {
    // Get ID from URL
    const params = useParams();
    const [data, setData] = useState([]);

    const getItems = () => {
        axios.get(`${API_BASE_URL}shop/category-filter?category__cat_name=${params.cat_name}&sub_name=${params.sub_cat}`)
            .then(function (response) {
                setData(response.data)
            })
            .catch(function (error) {
                console.log("Error Occured");
            });
    }

    useEffect(() => {
        getItems();
        // eslint-disable-next-line
    }, [params])

    return (
        <>
            <div className='container'>
                <h2 className='mt-5 mb-5' align='center'>{params.sub_cat}</h2>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {
                        data.map((apiData) => {
                            return apiData.item_subCategory.map((apiData2) => {
                                return <div className="col" key={apiData2.id}>
                                    <div className="card h-100">
                                        <img src={apiData2.image_url} className="card-img-top" alt="..." />
                                        <div className="card-body d-grid gap-2" align='center'>
                                            <h5 className="card-title">{apiData2.item_name}</h5>
                                            <p className="text-muted">{apiData.sub_name}</p>

                                            <p className="card-text"><b>Rs/ {apiData2.item_price}</b></p>
                                            <Link to={`/purchasing/${apiData2.id}`} type="button" className="btn btn-outline-primary rounded-pill "> Buy
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            })

                        })
                    }

                </div>
            </div>

        </>
    )
}

export default CategoryProducts