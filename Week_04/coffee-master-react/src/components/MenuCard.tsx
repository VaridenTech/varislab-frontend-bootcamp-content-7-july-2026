import type { MenuItem } from "../types.ts";
import { formatPrice } from "../utils.ts";

type MenuCardProps = {
  item: MenuItem;
  quantity: number;
  onIncrease: (itemId: number) => void;
  onDecrease: (itemId: number) => void;
};

function MenuCard({ item, quantity, onIncrease, onDecrease }: MenuCardProps) {
  return (
    <article className="menu-card">
      <div className="menu-card-header">
        <div>
          <p className="menu-category">{item.category}</p>
          <h3>{item.name}</h3>
        </div>

        <p className="menu-price">{formatPrice(item.price)}</p>
      </div>

      <p className="menu-description">{item.description}</p>

      <div className="quantity-control">
        <button onClick={() => onDecrease(item.id)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => onIncrease(item.id)}>+</button>
      </div>
    </article>
  );
}

export default MenuCard;
