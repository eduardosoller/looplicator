export function formatCurrency(amount: number) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return formatter.format(amount);
}
export function getPastMonthWithYear() {
  const data = new Date()
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const pastMonth = data.getMonth() === 0 ? 11 : data.getMonth() - 1;
  const year = data.getMonth() === 0 ? data.getFullYear() - 1 : data.getFullYear()
  return { past_month: months[pastMonth], year };
}