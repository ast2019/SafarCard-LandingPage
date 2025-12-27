
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('fa-IR').format(value);
};

export const convertToTomanText = (value: number): string => {
  if (value >= 1000000000) {
    return `${(value / 1000000000).toLocaleString('fa-IR')} میلیارد تومان`;
  }
  if (value >= 1000000) {
    return `${(value / 1000000).toLocaleString('fa-IR')} میلیون تومان`;
  }
  return `${value.toLocaleString('fa-IR')} تومان`;
};