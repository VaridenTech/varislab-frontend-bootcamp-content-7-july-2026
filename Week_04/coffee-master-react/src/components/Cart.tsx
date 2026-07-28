import type { MenuItem, Quantities } from "../types.ts";
import { formatPrice } from "../utils.ts";

type CartProps = {
  menuItems: MenuItem[];
  quantities: Quantities;
};

function Cart({ menuItems, quantities }: CartProps) {
  const selectedItems = menuItems.filter(
    (item) => (quantities[item.id] || 0) > 0,
  );

  return (
    <div className="cart-card">
      <h2>Your Order</h2>

      <div className="cart-items">
        {selectedItems.map((item) => {
          const quantity = quantities[item.id] || 0;
          const lineTotal = item.price * quantity;

          return (
            <article className="cart-item" key={item.id}>
              <div>
                <h3>{item.name}</h3>
                <p>
                  {quantity} x {formatPrice(item.price)}
                </p>
              </div>

              <strong>{formatPrice(lineTotal)}</strong>
            </article>
          );
        })}
      </div>

      {selectedItems.length === 0 && (
        <p className="empty-cart">ยังไม่มีรายการใน order</p>
      )}
    </div>
  );
}

export default Cart;
