import { Routes, Route } from 'react-router';
import { HomePage } from './pages/Homepage';
import { Checkoutpage } from './pages/CheckoutPage';
import { OrdersPage } from './pages/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';
import './App.css';

function App() {

  return (
    <Routes>
      <Route path = "/" element={<HomePage />} />
      <Route path ="/checkout" element={<Checkoutpage />}></Route>
      <Route path = "/orders" element ={<OrdersPage />} ></Route>
      <Route path = "/tracking" element ={<TrackingPage />} ></Route>
    </Routes>
  );
}

export default App
