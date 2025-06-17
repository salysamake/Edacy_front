export type PaymentMethod = 'orange-money' | 'wave-money';

export interface PaymentDetails {
  method: PaymentMethod;
  phoneNumber: string;
  amount: number;
  reference: string;
}

export interface PaymentResponse {
  success: boolean;
  transactionId?: string;
  error?: string;
}