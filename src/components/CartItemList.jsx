import { CartItem } from "./CartItem";
import { useAuth } from "./AuthContext";

export function CartItemList() {
  const { cart } = useAuth();

  return (
    <div className="cart-item">
      {cart.flatMap((cartItem) => 
        cartItem.orders.map((order) => (
          <CartItem key={order.id} order={order} /> 
        ))
      )}
    </div>
  );
}