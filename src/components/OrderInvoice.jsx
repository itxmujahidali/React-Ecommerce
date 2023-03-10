import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const OrderInvoice = () => {

  // Get the userId param from the URL.
  const params = useParams();
  const [data, setData] = useState([])



  const getInvoice = () => {

    axios.get(`http://127.0.0.1:8000/shop/invoice/${params.id}/`, {
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


  useEffect(() => {

    getInvoice();


  }, [])

  let status;

  if (data.delivered === true) {
    status = "Delivered"
  }
  else {
    status = "Not Delivered"
  }

  if (data.order_updated_at) {

    const dateTime = data.order_updated_at;
    let year = dateTime.slice(0, 4);
    let month = dateTime.slice(5, 7);
    let day = dateTime.slice(8, 10);
    var modifiedDate = day + "-" + month + "-" + year;
  }


  return (
    <>
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee;" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="card border-top border-bottom border-3" style={{ borderColor: "#f37a27 !important;" }}>


                <div className="card-body p-5">

                  <p className="lead fw-bold mb-5" style={{ color: "#f37a27" }}>Purchase Reciept</p>

                  <div className="row">
                    <div className="col mb-3">
                      <p className="small text-muted mb-1">Date</p>
                      <p>{modifiedDate}</p>
                    </div>
                    <div className="col mb-3">
                      <p className="small text-muted mb-1">Order No.</p>
                      <p>{data.id}</p>
                    </div>
                  </div>

                  <div className="mx-n5 px-5 py-4" style={{ backgroundColor: "#f2f2f2" }}>
                    <div className="row">
                      <div className="col-md-8 col-lg-9">
                        <p><b>{data.order_item}</b></p>
                      </div>
                      <div className="col-md-4 col-lg-3">
                        <p>Rs {data.order_price}</p>
                      </div>
                    </div>
                    {/* <div className="row">
                      <div className="col-md-8 col-lg-9">
                        <p className="mb-0">Shipping</p>
                      </div>
                      <div className="col-md-4 col-lg-3">
                        <p className="mb-0">Rs 0</p>
                      </div>
                    </div> */}
                    <div className="row mt-3">
                      <div className="col-md-8 col-lg-9">
                        <p className="mb-0">Total Amount</p>
                      </div>
                      <div className="col-md-4 col-lg-3">
                        <p className="mb-0">Rs <b>{data.order_price}</b></p>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: "4%" }}>
                    <span>
                      <p className="lead fw-bold mb-4 pb-2" style={{ color: "#f37a27", float: "left" }}>Tracking Order</p>
                    </span>
                    <span>
                      <p style={{ float: "right" }}>{status}</p>
                    </span>
                  </div>


                </div>
                <span align='center' style={{ marginBottom: "8%" }}>
                  <p className="mt-4 pt-2 mb-0">
                    Want any help?
                    <a href="/contactus" style={{ color: "#f37a27" }}>
                      Please contact us
                    </a>
                  </p>
                </span>



              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OrderInvoice