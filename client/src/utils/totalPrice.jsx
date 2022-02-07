export const totalPrice = (qtyMin, qtyMax, priceMin, PriceMax) => {
  let qtymin = parseFloat(qtyMin)
  let qtymax = parseFloat(qtyMax)
  let pricemin = parseFloat(priceMin)
  let pricemax = parseFloat(PriceMax)

  let result = qtymin * pricemin + qtymax * pricemax

  return result
}
