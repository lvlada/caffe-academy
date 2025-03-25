import { ModalConfirmation } from "./Modal";

export function CartItemList({ order }) { // Sada primamo `order`, a ne `item`
  console.log("Iz footera: ", order.orderId)

  return (
    <div className="cart-item-list">
      <div className="cart-item-list-name">
        <p>{order.quantity} X {order.name}</p>
      </div>


      <ModalConfirmation order ={order}/>
    </div>
  );
}
