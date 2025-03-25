import { useAuth } from "./AuthContext";

export function CartItemList({ order }) { // Sada primamo `order`, a ne `item`
  const { handleDelete } = useAuth();
  console.log("Iz footera: ", order.orderId)

  return (
    <div className="cart-item-list">
      <div className="cart-item-list-name">
        <p>{order.quantity} X {order.name}</p>
      </div>

      <div className="cart-item-list-remove">
        <p onClick={() => handleDelete(order.orderId)}><strong>x</strong></p>
      </div>
    </div>
  );
}
