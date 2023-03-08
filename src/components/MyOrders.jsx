import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';




const MyOrders = () => {

    const [data, setData] = useState([])

    const getData = () => {
        axios.get('http://127.0.0.1:8000/shop/myorder/')
            .then(function (response) {
                setData(response.data)
            })
            .catch(function (error) {
                console.log("Error Occured");
            });
    }

    const handleDelete = (id) => {
        axios.delete(`https://63ff76bc9f844910297eee5b.mockapi.io/basic-react/${id}`)
            .then(() => {
                getData();
            })
        alert("Order has been deleted!")
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
            <div class="container mt-5" style={body}>
                <div class="row">
                    <div class="col-12 col-sm-8 col-lg-12">
                        <h6 class="text-muted">All Orders</h6>
                        {
                            data.map((apiData) => {
                                return <ul class="list-group mb-2">
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        <Link to={"/invoice"} style={{ textDecoration: "none" }}>
                                            <span class="btn btn-outline-secondary"> {apiData.order_item} </span>
                                        </Link>
                                        <span class="text-muted disabled">{apiData.delivered === true ? <button style={{ width: "100px" }} type="button" class="btn btn-warning">Delivered</button>
                                            : <button style={{ width: "100px" }} type="button" onClick={handleDelete} class="btn btn-danger">Cancel</button>}
                                        </span>
                                        <Link to={"/invoice"} style={{ textDecoration: "none" }}>
                                            <div style={imageParent}>
                                                <img src={apiData.image} class="img-fluid" alt="image_not_load" />
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








/*
JSON DATA FOR THIS FILE
[
 {
  "order_id": "1",
  "item_title": "3d Astronaut Face Nft",
  "item_price": "2499",
  "item_status": "Packed",
  "item_image": "https://cdn.dribbble.com/users/1787323/screenshots/15243081/media/b8b04784517c7c6b466f97d713b615d9.png?compress=1&resize=400x300&vertical=top"
 },
 {
  "order_id": "2",
  "item_title": "Space Agency Nft",
  "item_price": "5699",
  "item_status": "Delivered",
  "item_image": "https://i.pinimg.com/736x/77/6e/30/776e301a0314cecd6107c21e7d984ee6.jpg"
 },
 {
  "order_id": "3",
  "item_title": "NASA Nft",
  "item_price": "1965",
  "item_status": "Ordered",
  "item_image": "https://www.shutterstock.com/image-illustration/pointing-you-astronaut-3d-illustration-260nw-1657687021.jpg"
 }
]


*/
