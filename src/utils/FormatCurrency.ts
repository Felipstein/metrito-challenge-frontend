export function formatCurrency(value: number, currency: string) {
  return Intl.NumberFormat('pt-br', { style: 'currency', currency }).format(value);
}
