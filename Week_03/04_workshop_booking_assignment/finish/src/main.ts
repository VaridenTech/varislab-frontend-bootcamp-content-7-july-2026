type Workshop = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  maxSeats: number;
};

const SERVICE_FEE_RATE = 0.03;

const workshops: Workshop[] = [
  { id: 1, title: "ปั้นแก้วเซรามิก", description: "เรียนรู้การขึ้นรูปและตกแต่งแก้วเซรามิกด้วยมือ", price: 1200, category: "Craft", maxSeats: 6 },
  { id: 2, title: "ถ่ายภาพ Street", description: "ฝึกมองแสง จังหวะ และเล่าเรื่องผ่านภาพถ่ายในเมือง", price: 950, category: "Photography", maxSeats: 8 },
  { id: 3, title: "ทำพาสต้าเส้นสด", description: "นวดแป้ง รีดเส้น และทำซอสจานโปรดตั้งแต่ต้น", price: 1450, category: "Cooking", maxSeats: 5 },
  { id: 4, title: "จัดดอกไม้สไตล์อิสระ", description: "เรียนรู้องค์ประกอบ สี และการจัดช่อที่มีเอกลักษณ์", price: 1100, category: "Floral", maxSeats: 7 },
  { id: 5, title: "วาดภาพสีน้ำ Botanical", description: "ฝึกผสมสีและวาดรูปพืชแบบเป็นขั้นตอน", price: 850, category: "Art", maxSeats: 10 },
  { id: 6, title: "ทำเทียนหอม", description: "ออกแบบกลิ่น เทเทียน และสร้างฉลากของตัวเอง", price: 790, category: "Craft", maxSeats: 9 },
];

const quantities: Record<number, number> = {};

const workshopGrid = document.getElementById("workshopGrid");
const bookingItems = document.getElementById("bookingItems");
const emptyBookingMessage = document.getElementById("emptyBookingMessage");
const subtotalElement = document.getElementById("subtotal");
const serviceFeeElement = document.getElementById("serviceFee");
const totalElement = document.getElementById("total");
const customerNameInput = document.getElementById("customerName");
const confirmBookingButton = document.getElementById("confirmBookingButton");
const bookingMessage = document.getElementById("bookingMessage");

function formatPrice(price: number): string {
  return `฿${price.toFixed(2)}`;
}

function getQuantity(workshopId: number): number {
  return quantities[workshopId] || 0;
}

function findWorkshop(workshopId: number): Workshop | undefined {
  return workshops.find((workshop) => workshop.id === workshopId);
}

function decreaseQuantity(workshopId: number): void {
  const currentQuantity = getQuantity(workshopId);
  if (currentQuantity <= 0 || !findWorkshop(workshopId)) return;
  quantities[workshopId] = currentQuantity - 1;
}

function increaseQuantity(workshopId: number): void {
  const workshop = findWorkshop(workshopId);
  if (!workshop) return;
  const currentQuantity = getQuantity(workshopId);
  if (currentQuantity >= workshop.maxSeats) return;
  quantities[workshopId] = currentQuantity + 1;
}

function renderWorkshopItems(): void {
  if (!workshopGrid) return;

  workshopGrid.textContent = "";

  workshops.forEach((workshop) => {
    const workshopCard = document.createElement("article");
    workshopCard.className = "workshop-card";
    workshopCard.innerHTML = `
      <div class="workshop-card-header">
        <p class="workshop-category">${workshop.category}</p>
        <span class="workshop-price">${formatPrice(workshop.price)}</span>
      </div>
      <h3>${workshop.title}</h3>
      <p class="workshop-description">${workshop.description}</p>
      <div class="seat-meta">
        <span>รับสูงสุด ${workshop.maxSeats} ที่นั่ง</span>
        <span>เลือก ${getQuantity(workshop.id)} ที่นั่ง</span>
      </div>
      <div class="quantity-control" aria-label="เลือกจำนวนที่นั่งสำหรับ ${workshop.title}">
        <button type="button" data-action="decrease" data-id="${workshop.id}" aria-label="ลดจำนวนที่นั่ง ${workshop.title}">−</button>
        <span aria-live="polite">${getQuantity(workshop.id)}</span>
        <button type="button" data-action="increase" data-id="${workshop.id}" aria-label="เพิ่มจำนวนที่นั่ง ${workshop.title}">+</button>
      </div>
    `;
    workshopGrid.append(workshopCard);
  });
}

function setupWorkshopClickEvents(): void {
  if (!workshopGrid) return;

  workshopGrid.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;

    const button = event.target.closest("button");
    if (!(button instanceof HTMLButtonElement)) return;

    const workshopId = Number(button.dataset.id);
    if (!Number.isFinite(workshopId)) return;

    if (button.dataset.action === "increase") {
      increaseQuantity(workshopId);
    } else if (button.dataset.action === "decrease") {
      decreaseQuantity(workshopId);
    } else {
      return;
    }

    renderApp();
  });
}

function calculateSubtotal(): number {
  return workshops.reduce((subtotal, workshop) => {
    return subtotal + workshop.price * getQuantity(workshop.id);
  }, 0);
}

function calculateServiceFee(subtotal: number): number {
  return subtotal * SERVICE_FEE_RATE;
}

function calculateTotal(subtotal: number, serviceFee: number): number {
  return subtotal + serviceFee;
}

function calculateTotalSeats(): number {
  return workshops.reduce((total, workshop) => total + getQuantity(workshop.id), 0);
}

function renderBookingItems(): void {
  if (!bookingItems || !emptyBookingMessage) return;

  const selectedWorkshops = workshops.filter((workshop) => getQuantity(workshop.id) > 0);
  bookingItems.textContent = "";
  emptyBookingMessage.style.display = selectedWorkshops.length === 0 ? "block" : "none";

  selectedWorkshops.forEach((workshop) => {
    const quantity = getQuantity(workshop.id);
    const bookingItem = document.createElement("article");
    bookingItem.className = "booking-item";
    bookingItem.innerHTML = `
      <h3>${workshop.title}</h3>
      <p>${quantity} × ${formatPrice(workshop.price)}</p>
      <p>${formatPrice(workshop.price * quantity)}</p>
    `;
    bookingItems.append(bookingItem);
  });
}

function renderSummary(): void {
  if (!subtotalElement || !serviceFeeElement || !totalElement) return;

  const subtotal = calculateSubtotal();
  const serviceFee = calculateServiceFee(subtotal);
  const total = calculateTotal(subtotal, serviceFee);

  subtotalElement.textContent = formatPrice(subtotal);
  serviceFeeElement.textContent = formatPrice(serviceFee);
  totalElement.textContent = formatPrice(total);
}

function setupConfirmBookingButton(): void {
  if (
    !(confirmBookingButton instanceof HTMLButtonElement) ||
    !(customerNameInput instanceof HTMLInputElement) ||
    !bookingMessage
  ) {
    return;
  }

  confirmBookingButton.addEventListener("click", () => {
    const customerName = customerNameInput.value.trim();
    const totalSeats = calculateTotalSeats();
    const subtotal = calculateSubtotal();
    const serviceFee = calculateServiceFee(subtotal);
    const total = calculateTotal(subtotal, serviceFee);

    if (customerName === "") {
      bookingMessage.textContent = "กรุณากรอกชื่อผู้จอง";
      bookingMessage.className = "booking-message error";
      return;
    }

    if (totalSeats === 0) {
      bookingMessage.textContent = "กรุณาเลือกเวิร์กช็อปอย่างน้อย 1 ที่นั่ง";
      bookingMessage.className = "booking-message error";
      return;
    }

    bookingMessage.textContent = `ขอบคุณคุณ ${customerName} ยืนยันการจอง ${totalSeats} ที่นั่ง ยอดรวม ${formatPrice(total)}`;
    bookingMessage.className = "booking-message success";
  });
}

function renderApp(): void {
  renderWorkshopItems();
  renderBookingItems();
  renderSummary();
}

setupWorkshopClickEvents();
setupConfirmBookingButton();
renderApp();
