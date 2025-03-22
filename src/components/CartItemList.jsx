import { useAuth } from "./AuthContext";

export function CartItemList({ item }) {
    const {handleDelete} = useAuth();

  return (
    <>
      <div className="cart-item-list">
        <div className="cart-item-list-name">
          <p>{item.order.quantity} X {item.order.name}</p>
        </div>

        <div className="cart-item-list-remove">
          <p onClick={()=> handleDelete(item.order.orderId)}><strong>x</strong></p>
        </div>
      </div>
    </>
  );
}
