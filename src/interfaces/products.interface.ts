export interface Post {
  products: Product[];
}

export interface Product {
  id: string;
  createdBy: null;
  title: string;
  description: string;
  image: string;
  createdAt: Date;
  price: number;
  stock: number;
}
