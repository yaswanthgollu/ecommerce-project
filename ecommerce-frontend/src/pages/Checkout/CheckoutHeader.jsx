import './CheckoutHeader.css';
import { Link } from 'react-router';
export function CheckoutHeader({ cart }) {
  let totalQuantity = 0;

  cart.forEach(() => {
    totalQuantity = totalQuantity+1;
  });
  
  return (
    <div className="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <Link to="/">
            <span className="checkout-brand-name">Shop<span>Wise</span></span>
          </Link>
        </div>

        <div className="checkout-header-middle-section">
          Checkout (
          <Link className="return-to-home-link" to="/">
            {totalQuantity} items
          </Link>
          )
        </div>

        <div className="checkout-header-right-section">
          <img src="images/icons/checkout-lock-icon.png" />
        </div>
      </div>
    </div>
  );
}
