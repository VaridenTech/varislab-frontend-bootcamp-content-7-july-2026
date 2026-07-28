import { useState } from "react";

import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import MenuSection from "./components/MenuSection.tsx";
import Cart from "./components/Cart.tsx";
import OrderSummary from "./components/OrderSummary.tsx";
import Footer from "./components/Footer.tsx";

import { menuItems, initialQuantities, TAX_RATE } from "./data.ts";
import { formatPrice } from "./utils.ts";
import type { OrderMessage } from "./types.ts";

function App() {
  const [quantities, setQuantities] = useState(initialQuantities);
  const [customerName, setCustomerName] = useState("");
  const [orderMessage, setOrderMessage] = useState<OrderMessage | null>(null);

  function increaseQuantity(itemId: number) {
    setQuantities((currentQuantities) => {
      const currentQuantity = currentQuantities[itemId] || 0;

      if (currentQuantity >= 10) {
        return currentQuantities;
      }

      return { ...currentQuantities, [itemId]: currentQuantity + 1 };
    });
  }

  function decreaseQuantity(itemId: number) {
    setQuantities((currentQuantities) => {
      const currentQuantity = currentQuantities[itemId] || 0;

      if (currentQuantity <= 0) {
        return currentQuantities;
      }

      return { ...currentQuantities, [itemId]: currentQuantity - 1 };
    });
  }

  // ทุกครั้งที่ state เปลี่ยน React จะ render ใหม่ ค่าพวกนี้จึงคำนวณสดทุกรอบ
  const subtotal = menuItems.reduce(
    (sum, item) => sum + item.price * (quantities[item.id] || 0),
    0,
  );
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;
  const totalItems = menuItems.reduce(
    (sum, item) => sum + (quantities[item.id] || 0),
    0,
  );

  function placeOrder() {
    const trimmedName = customerName.trim();

    if (trimmedName === "") {
      setOrderMessage({ text: "Please enter your name", type: "error" });
      return;
    }

    if (totalItems === 0) {
      setOrderMessage({
        text: "Please add items to your cart",
        type: "error",
      });
      return;
    }

    setOrderMessage({
      text: `ขอบคุณคุณ ${trimmedName} ระบบได้รับ order จำนวน ${totalItems} รายการ ยอดรวมก่อน tax คือ ${formatPrice(subtotal)}`,
      type: "success",
    });
  }

  return (
    <>
      <Header />

      <main>
        <Hero />

        <MenuSection
          menuItems={menuItems}
          quantities={quantities}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
        />

        <section id="order" className="order-section">
          <Cart menuItems={menuItems} quantities={quantities} />

          <OrderSummary
            customerName={customerName}
            onCustomerNameChange={setCustomerName}
            subtotal={subtotal}
            tax={tax}
            total={total}
            orderMessage={orderMessage}
            onPlaceOrder={placeOrder}
          />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
