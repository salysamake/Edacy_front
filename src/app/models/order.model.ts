export interface Order {
  id?: number;
  createdAt?: string;
  total: number;
  status: string;
  paymentMethod: string;
  transactionId: string;
  items: OrderItem[];
}

export interface OrderItem {
  id?: number;
  product: number; // Product ID
  quantity: number;
  price: number;
}

export interface CreateOrderRequest {
  total: number;
  paymentMethod: string;
  transactionId: string;
  items: {
    product: number;
    quantity: number;
    price: number;
  }[];
}