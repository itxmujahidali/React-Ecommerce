import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import ItemCard from './components/ItemCard';
import Footer from './components/Footer';
import PurchasingCard from './components/PurchasingCard';
import OrderInvoice from './components/OrderInvoice';
import MyOrders from './components/MyOrders';
import Contact from './components/Contact';
import Login from './components/LoginSignUp/Login';
import Signup from './components/LoginSignUp/Signup';
import CategoryProducts from './components/CategoryProducts';


function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={
            [
              <Navbar />,
              <Carousel />,
              <ItemCard />,
              <Footer />
            ]}>
          </Route>
          <Route path="items" element={
            [
              <ItemCard />,
              <Footer />
            ]}>
          </Route>

          <Route exact path="/:cat_name/:sub_cat/?" element={[<Navbar />, <CategoryProducts />, <Footer />]}> </Route>
          <Route exact path="/purchasing/:id/" element={[<Navbar />, <PurchasingCard />, <Footer />]}> </Route>
          <Route exact path="/invoice/" element={[<OrderInvoice />]}> </Route>
          <Route exact path="/myorder" element={[<Navbar />, <MyOrders />, <Footer />]}> </Route>
          <Route exact path="/contactus" element={[<Navbar />, <Contact />, <Footer />]}> </Route>
          <Route exact path="/login" element={<Login />}> </Route>
          <Route exact path="/signup" element={<Signup />}> </Route>

        </Routes>
      </BrowserRouter>



      <div className='container'>








      </div>
    </>
  );
}

export default App;
