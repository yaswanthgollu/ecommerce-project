import { Order } from "./Order";

export function OrdersGrid({ orders, loadCart }) {
  return (
    <div className="orders-grid">
      {orders.map((order) => {
        return (
          <Order key={order.id} order={order} loadCart={loadCart} />
        );
      })}
    </div>
  );
}
