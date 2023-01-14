function formatPrice(price) {
  let formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "RWF",
  }).format(price);
  return formatted;
}
export default formatMoney;
