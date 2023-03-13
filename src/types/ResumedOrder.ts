import { PaymentType } from './PaymentType';
import { TransactionStatus } from './TransactionStatus';

export interface ResumedOrder {
  identification: {
    data_source: string;
    order_id: string;
  };
  transaction: {
    id: string;
    created_date: string;
    status: TransactionStatus;
    value: number;
    currency_code: string;
    payment_type: PaymentType;
  };
  product: {
    id: number;
    name: string;
  } | null;
  producer: {
    id: number;
    name: string;
  } | null;
  customer: {
    name: string;
    email: number;
    ucode: string;
  } | null;
}
