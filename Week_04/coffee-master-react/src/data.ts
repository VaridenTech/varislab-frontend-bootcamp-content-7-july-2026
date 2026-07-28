import type { MenuItem, Quantities } from "./types.ts";

export const TAX_RATE = 0.07;

export const menuItems: MenuItem[] = [
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

export const initialQuantities: Quantities = {
  1: 0,
  2: 0,
  3: 3,
  4: 0,
  5: 0,
  6: 0,
};
