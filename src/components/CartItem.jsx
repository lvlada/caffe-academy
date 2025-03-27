import { ModalDeleteConfirmation } from "./ModalDeleteConfirmation";

export function CartItem({order }) {
  return (
    <div className="cart-item-list">
      <div className="cart-item-list-name">
        <p>
          {order.quantity} X {order.name}
        </p>
      </div>

      <ModalDeleteConfirmation order={order} />
    </div>
  );
}
