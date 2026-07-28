export type MenuItem = {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
};

export type Quantities = Record<number, number>;

export type OrderMessage = {
  text: string;
  type: "success" | "error";
};
