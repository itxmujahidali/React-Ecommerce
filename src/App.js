import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import ItemCard from './components/ItemCard';
import Footer from './components/Footer';
import PurchasingCard from './components/PurchasingCard';
import OrderInvoice from './components/OrderInvoice';
import MyOrders from './components/MyOrders';
import Contact from './components/Contact'

let title = "Latest Products";
let title2 = "Hot Products";


function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route exact path="/" element={
            [
              <Navbar />,
              <Carousel />,
              <ItemCard data={title} />,
              <ItemCard data={title2} />,
              <Footer />
            ]}>
          </Route>

          <Route exact path="/purchasing" element={[<Navbar />, <PurchasingCard />]}> </Route>
          <Route exact path="/invoice" element={[<Navbar />, <OrderInvoice />]}> </Route>
          <Route exact path="/myorder" element={[<Navbar />, <MyOrders />]}> </Route>
          <Route exact path="/contactus" element={[<Navbar />, <Contact />]}> </Route>



        </Routes>
      </BrowserRouter>



      <div className='container'>








      </div>
    </>
  );
}

export default App;
