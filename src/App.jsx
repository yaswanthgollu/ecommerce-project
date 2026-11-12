import { Routes, Route } from 'react-router';
import { HomePage } from './pages/Homepage';
import { Checkoutpage } from './pages/CheckoutPage';
import './App.css';

function App() {

  return (
    <Routes>
      <Route path = "/" element={<HomePage />} />
      <Route path ="/checkout" element={<Checkoutpage />}></Route>
    </Routes>
  );
}

export default App
