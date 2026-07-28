import type { MenuItem, Quantities } from "../types.ts";
import MenuCard from "./MenuCard.tsx";

type MenuSectionProps = {
  menuItems: MenuItem[];
  quantities: Quantities;
  onIncrease: (itemId: number) => void;
  onDecrease: (itemId: number) => void;
};

function MenuSection({
  menuItems,
  quantities,
  onIncrease,
  onDecrease,
}: MenuSectionProps) {
  return (
    <section className="menu-section">
      <div className="section-header">
        <p className="eyebrow">Menu</p>
        <h2>เลือกเมนู</h2>
        <p>กด + เพื่อเพิ่มรายการ และกด - เพื่อลดจำนวน</p>
      </div>

      <div className="menu-grid">
        {menuItems.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
            quantity={quantities[item.id] || 0}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          />
        ))}
      </div>
    </section>
  );
}

export default MenuSection;
