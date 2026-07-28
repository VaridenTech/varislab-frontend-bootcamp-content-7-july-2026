import type { OrderMessage } from "../types.ts";
import { formatPrice } from "../utils.ts";

type OrderSummaryProps = {
  customerName: string;
  onCustomerNameChange: (customerName: string) => void;
  subtotal: number;
  tax: number;
  total: number;
  orderMessage: OrderMessage | null;
  onPlaceOrder: () => void;
};

function OrderSummary({
  customerName,
  onCustomerNameChange,
  subtotal,
  tax,
  total,
  orderMessage,
  onPlaceOrder,
}: OrderSummaryProps) {
  return (
    <div className="summary-card">
      <h2>Order Summary</h2>

      <label htmlFor="customerName">Customer Name</label>
      <input
        id="customerName"
        type="text"
        placeholder="เช่น Man"
        value={customerName}
        onChange={(event) => onCustomerNameChange(event.target.value)}
      />

      <div className="summary-row">
        <span>Subtotal</span>
        <span>{formatPrice(subtotal)}</span>
      </div>

      <div className="summary-row">
        <span>Tax 7%</span>
        <span>{formatPrice(tax)}</span>
      </div>

      <div className="summary-row final-total">
        <span>Total</span>
        <span>{formatPrice(total)}</span>
      </div>

      <button id="placeOrderButton" onClick={onPlaceOrder}>
        Place Order
      </button>

      {orderMessage && (
        <p className={`order-message ${orderMessage.type}`}>
          {orderMessage.text}
        </p>
      )}
    </div>
  );
}

export default OrderSummary;
