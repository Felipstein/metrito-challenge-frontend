import { TagStatusColor } from '../components/TagStatus/types';

const transactionStatus = ['APPROVED', 'BLOCKED', 'CANCELLED', 'CHARGEBACK', 'COMPLETE', 'EXPIRED', 'NO_FUNDS', 'OVERDUE', 'PARTIALLY_REFUNDED', 'PRE_ORDER', 'PRINTED_BILLET', 'PROCESSING_TRANSACTION', 'PROTESTED', 'REFUNDED', 'STARTED', 'UNDER_ANALISYS', 'WAITING_PAYMENT'] as const;

export type TransactionStatus = typeof transactionStatus[number];

export const transactionStatusLabel: Record<TransactionStatus, string> = {
  APPROVED: 'APROVADA',
  BLOCKED: 'BLOQUEADA',
  CANCELLED: 'CANCELADA',
  CHARGEBACK: 'ESTORNADA',
  COMPLETE: 'COMPLETADA',
  EXPIRED: 'EXPIRADA',
  NO_FUNDS: 'SEM FUNDOS',
  OVERDUE: 'ATRASADA',
  PARTIALLY_REFUNDED: 'PARCIALMENTE RESSARCIDO',
  PRE_ORDER: 'PEDIDO ANTECIPADO',
  PRINTED_BILLET: 'BOLETO IMPRESSO',
  PROCESSING_TRANSACTION: 'EM PROCESSAMENTO',
  PROTESTED: 'PROTESTADA',
  REFUNDED: 'RESSARCIDO',
  STARTED: 'INICIADA',
  UNDER_ANALISYS: 'SOB ANÁLISE',
  WAITING_PAYMENT: 'ESPERANDO PAGAMENTO',
};

export const transactionStatusColor: Record<TransactionStatus, TagStatusColor> = {
  APPROVED: 'green',
  BLOCKED: 'red',
  CANCELLED: 'red',
  CHARGEBACK: 'red',
  COMPLETE: 'green',
  EXPIRED: 'red',
  NO_FUNDS: 'red',
  OVERDUE: 'red',
  PARTIALLY_REFUNDED: 'green',
  PRE_ORDER: 'green',
  PRINTED_BILLET: 'cyan',
  PROCESSING_TRANSACTION: 'cyan',
  PROTESTED: 'red',
  REFUNDED: 'red',
  STARTED: 'cyan',
  UNDER_ANALISYS: 'cyan',
  WAITING_PAYMENT: 'cyan',
};

