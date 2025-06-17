export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  categoryName: string;
  imageUrl: string;
  stockQuantity: number;
}

export type Category = 'ordinateurs' | 'telephones' | 'televisions' | 'electromenager';