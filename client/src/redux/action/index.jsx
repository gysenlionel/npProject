//  add item to cart
export const addCart = (product, qtyMin, qtyMax) => {
  return {
    type: 'ADDITEM',
    payload: {
      product,
      qtyMin,
      qtyMax,
    },
  }
}

//  delete item from cart
export const delCart = (product) => {
  return {
    type: 'DELITEM',
    payload: { product },
  }
}
