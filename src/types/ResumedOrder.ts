export interface ResumedOrder {
  identification: {
    data_source: string;
    order_id: string;
  };
  transaction: {
    id: string;
    created_date: string;
    status: string;
    value: number;
    currency_code: string;
    payment_type: string;
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
