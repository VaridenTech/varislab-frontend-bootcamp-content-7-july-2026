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
  void workshopId;
  return undefined;
}

// STEP 1: Update the selected seat quantity for a workshop.
function decreaseQuantity(workshopId: number): void {
  void workshopId;
}

function increaseQuantity(workshopId: number): void {
  void workshopId;
}

// STEP 2: Render workshop cards from workshops.
function renderWorkshopItems(): void {
  if (!workshopGrid) return;

  void workshops;
  void getQuantity;
  workshopGrid.innerHTML = '<p class="starter-message">เริ่มต้นด้วยการแสดงการ์ดเวิร์กช็อปจากข้อมูล workshops</p>';
}

// STEP 3: Respond to clicks on the workshop quantity controls.
function setupWorkshopClickEvents(): void {
  if (!workshopGrid) return;

  void decreaseQuantity;
  void increaseQuantity;
}

// STEP 4: Calculate the booking subtotal from selected workshops.
function calculateSubtotal(): number {
  return 0;
}

// STEP 5: Calculate the service fee and final total.
function calculateServiceFee(subtotal: number): number {
  void subtotal;
  void SERVICE_FEE_RATE;
  return 0;
}

function calculateTotal(subtotal: number, serviceFee: number): number {
  void subtotal;
  void serviceFee;
  return 0;
}

function calculateTotalSeats(): number {
  return 0;
}

// STEP 6: Render the workshops included in the booking.
function renderBookingItems(): void {
  if (!bookingItems || !emptyBookingMessage) return;

  bookingItems.textContent = "";
  emptyBookingMessage.style.display = "block";
}

// STEP 7: Render the current booking summary.
function renderSummary(): void {
  if (!subtotalElement || !serviceFeeElement || !totalElement) return;

  const subtotal = calculateSubtotal();
  const serviceFee = calculateServiceFee(subtotal);
  const total = calculateTotal(subtotal, serviceFee);

  subtotalElement.textContent = formatPrice(subtotal);
  serviceFeeElement.textContent = formatPrice(serviceFee);
  totalElement.textContent = formatPrice(total);
}

// STEP 8: Validate and confirm the booking.
function setupConfirmBookingButton(): void {
  if (
    !(confirmBookingButton instanceof HTMLButtonElement) ||
    !(customerNameInput instanceof HTMLInputElement) ||
    !bookingMessage
  ) {
    return;
  }

  void calculateTotalSeats;
}

function renderApp(): void {
  renderWorkshopItems();
  renderBookingItems();
  renderSummary();
}

void findWorkshop;
setupWorkshopClickEvents();
setupConfirmBookingButton();
renderApp();
