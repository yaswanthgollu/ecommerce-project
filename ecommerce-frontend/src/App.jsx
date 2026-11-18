import { Routes, Route } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { HomePage } from './pages/home/Homepage';
import { CheckoutPage } from './pages/Checkout/CheckoutPage';
import { OrdersPage } from './pages/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';
import './App.css';

function App() {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("/api/cart-items?expand=product").then((response) => {
      setCart(response.data);
    });
  }, []);

  return (
    <Routes>
      <Route path = "/" element={<HomePage cart = {cart}/>} />
      <Route path ="/checkout" element={<CheckoutPage cart = {cart}/>}></Route>
      <Route path = "/orders" element ={<OrdersPage cart={cart} />} ></Route>
      <Route path = "/tracking" element ={<TrackingPage />} ></Route>
    </Routes>
  );
}

export default App
