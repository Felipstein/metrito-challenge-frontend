const paymentsType = ['BILLET', 'CASH_PAYMENT', 'CREDIT_CARD', 'DIRECT_BANK_TRANSFER', 'DIRECT_DEBIT', 'FINANCED_BILLET', 'FINANCED_INSTALLMENT', 'GOOGLE_PAY', 'HOTCARD', 'HYBRID', 'MANUAL_TRANSFER', 'PAYPAL', 'PAYPAL_INTERNACIONAL', 'PICPAY', 'PIX', 'SAMSUNG_PAY', 'WALLET'] as const;

export type PaymentType = typeof paymentsType[number];

export const paymentTypeLabel: Record<PaymentType, string> = {
  BILLET: 'Boleto',
  CASH_PAYMENT: 'Em Dinheiro',
  CREDIT_CARD: 'Crédito',
  DIRECT_BANK_TRANSFER: 'Transferência',
  DIRECT_DEBIT: 'Débito',
  FINANCED_BILLET: 'Parcelado no Boleto',
  FINANCED_INSTALLMENT: 'Parcelamento Financiado',
  GOOGLE_PAY: 'Google Play',
  HOTCARD: 'Cartão de Acesso',
  HYBRID: 'Híbrido',
  MANUAL_TRANSFER: 'Transferência Manual',
  PAYPAL: 'PayPal',
  PAYPAL_INTERNACIONAL: 'PayPal Internacional',
  PICPAY: 'PicPay',
  PIX: 'PIX',
  SAMSUNG_PAY: 'Samsung Pay',
  WALLET: 'Carteira',
};
