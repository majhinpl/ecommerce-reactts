import { Status } from "./types";

interface User {
  id: string;
  email: string;
  username: string;
}

interface Category {
  id: string;
  categoryName: string;
}

export interface Product {
  id: string;
  productName: string;
  productDescription: string;
  productPrice: number;
  productTotalStockQty: number;
  productImageUrl: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  categoryId: string;
  User: User;
  Category: Category;
}

export interface ProductState {
  Product: Product[];
  status: Status;
}

export interface ProductState {
  product: Product[];
  state: Status;
  singleProduct: Product | null;
}
