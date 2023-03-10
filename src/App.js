import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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


const withAuth = (Component) => {
  const token = localStorage.getItem('token');
  var isAuthenticated;
  (token)? isAuthenticated = true : isAuthenticated = false;
  
  const AuthRoute = (props) => {
    if (isAuthenticated) {
      return <Component {...props} />;
    } else {
      // return <Route to="/login" />;
      return <Navigate to="/login" />
    }
  }

  return AuthRoute;
}




function App() {
  // const ProtectedNavbar = withAuth(Navbar);
  // const ProtectedCarousel = withAuth(Carousel);
  // const ProtectedItemCard = withAuth(ItemCard);
  // const ProtectedPurchasingCard = withAuth(PurchasingCard);
  const ProtectedOrderInvoice = withAuth(OrderInvoice);
  const ProtectedMyOrders = withAuth(MyOrders);
  // const ProtectedContact = withAuth(Contact);
  // const ProtectedCategoryProducts = withAuth(CategoryProducts);

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
            ]
          } />
          <Route path="items" element={
            [
              <ItemCard />,
              <Footer />
            ]
          } />
          <Route exact path="/:cat_name/:sub_cat/?" element={[<Navbar />, <CategoryProducts />, <Footer />]} />
          <Route exact path="/purchasing/:id/" element={[<Navbar />, <PurchasingCard />, <Footer />]} />

          <Route exact path="/invoice/:id" element={[<ProtectedOrderInvoice />]} />
          <Route exact path="/myorder" element={[<Navbar />, <ProtectedMyOrders />, <Footer />]} />

          <Route exact path="/contactus" element={[<Navbar />, <Contact />, <Footer />]} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
