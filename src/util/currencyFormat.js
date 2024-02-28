export const currencyFormatter = (price) => {
  return Intl.NumberFormat("ru-Ru", { style: "currency", currency: "RUB" }).format(price);
};
