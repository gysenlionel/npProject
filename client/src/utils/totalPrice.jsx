// utilisé pour le total de toutes les map de cartes pour prix total
export const totalPrice = (qtyMin, qtyMax, priceMin, PriceMax) => {
  let qtymin = parseFloat(qtyMin)
  let qtymax = parseFloat(qtyMax)
  let pricemin = parseFloat(priceMin)
  let pricemax = parseFloat(PriceMax)

  let result = qtymin * pricemin + qtymax * pricemax

  return result
}

// arrondi à 2 chiffres après virgule
export const totalPriceFixed = (qtyMin, qtyMax, priceMin, PriceMax) => {
  let qtymin = parseFloat(qtyMin)
  let qtymax = parseFloat(qtyMax)
  let pricemin = parseFloat(priceMin)
  let pricemax = parseFloat(PriceMax)

  let result = qtymin * pricemin + qtymax * pricemax

  return result.toFixed(2)
}
