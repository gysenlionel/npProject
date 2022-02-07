//  add item to cart
export const addCart = (product, qtyMin, qtyMax, getState) => {
  return {
    type: 'ADDITEM',
    payload: {
      product,
      qtyMin,
      qtyMax,
    },
  }

  // localStorage.setItem('cart', JSON.stringify(getState().cart))
}

//  delete item from cart
export const delCart = (product) => {
  return {
    type: 'DELITEM',
    payload: { product },
  }
}
