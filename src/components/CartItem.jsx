import { CartItemList } from "./CartItemList";
import { useAuth } from "./AuthContext";

export function CartItem() {
  const { cart } = useAuth();

  return (
    <div className="cart-item">
      {cart.flatMap((cartItem) => 
        cartItem.orders.map((order) => (
          <CartItemList key={order.id} order={order} /> 
        ))
      )}
    </div>
  );
}