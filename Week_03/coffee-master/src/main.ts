type MenuItem = {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
};

const TAX_RATE = 0.07;

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Americano",
    description: "กาแฟดำเข้ม หอม ชัด เหมาะสำหรับเริ่มวันใหม่",
    price: 80,
    category: "Coffee",
  },
  {
    id: 2,
    name: "Latte",
    description: "กาแฟนมนุ่ม ดื่มง่าย เหมาะกับทุกช่วงเวลา",
    price: 90,
    category: "Coffee",
  },
  {
    id: 3,
    name: "Mocha",
    description: "กาแฟผสมช็อกโกแลต เข้ม หวาน ละมุน",
    price: 95,
    category: "Coffee",
  },
  {
    id: 4,
    name: "Cold Brew",
    description: "กาแฟสกัดเย็น รสสะอาด สดชื่น",
    price: 100,
    category: "Coffee",
  },
  {
    id: 5,
    name: "Croissant",
    description: "ครัวซองต์เนยสด อบหอม กินคู่กับกาแฟได้ดี",
    price: 75,
    category: "Bakery",
  },
  {
    id: 6,
    name: "Matcha Latte",
    description: "มัทฉะเข้มข้นผสมนมสด สำหรับคนไม่ดื่มกาแฟ",
    price: 95,
    category: "Non-Coffee",
  },
];

const quantities: Record<number, number> = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
};

const menuGridElement = document.getElementById("menuGrid");

function formatPrice(price: number): string {
  return `฿${price.toFixed(2)}`;
}

function getQuantity(itemId: number): number {
  return quantities[itemId] || 0;
}

function renderMenuItems() {
  if (!menuGridElement) {
    return;
  }

  menuGridElement.innerHTML = "";

  menuItems.forEach((item) => {
    // 1st item
    /*
          {
            id: 1,
            name: "Americano",
            description: "กาแฟดำเข้ม หอม ชัด เหมาะสำหรับเริ่มวันใหม่",
            price: 80,
            category: "Coffee",
        },
        */
    // 2nd item
    /*
            {
                id: 2,
                name: "Latte",
                description: "กาแฟนมนุ่ม ดื่มง่าย เหมาะกับทุกช่วงเวลา",
                price: 90,
                category: "Coffee",
            },
        */

    const quantity = getQuantity(item.id);
    const menuCard = document.createElement("article");

    menuCard.classList.add("menu-card");

    menuCard.innerHTML = `
            <div class="menu-card-header">
                <div>
                    <p class="menu-category">${item.category}</p>
                    <h3>${item.name}</h3>
                </div>

                <p class="menu-price">${formatPrice(item.price)}</p>
            </div>

            <p class="menu-description">${item.description}</p>

            <div class="quantity-control">
                <button data-action="decrease" data-id="${item.id}">-</button>
                <span>${quantity}</span>
                <button data-action="increase" data-id="${item.id}">+</button>
            </div>
        `;

    menuGridElement.appendChild(menuCard);
  });
}

function decreaseQuantity(itemId: number): void {
    const currentQuantity = getQuantity(itemId);

    if (currentQuantity <= 0) {
        return;
    }

    quantities[itemId] = currentQuantity - 1;
}

function increaseQuantity(itemId: number): void {
    const currentQuantity = getQuantity(itemId);

    if (currentQuantity >= 10) {
        return;
    }

    quantities[itemId] = currentQuantity + 1;
}

function setupMenuClickEvents(): void {
  if (!menuGridElement) {
    return;
  }

  menuGridElement.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    const button = target.closest("button");

    if (!(button instanceof HTMLButtonElement)) {
        return;
    }

    const action = button.dataset.action;
    const itemId = Number(button.dataset.id);

    if (action === "decrease") {
        decreaseQuantity(itemId);
    }
    
    if (action === "increase") {
        increaseQuantity(itemId);
    }

    renderMenuItems();
  });
}

setupMenuClickEvents();
renderMenuItems();
