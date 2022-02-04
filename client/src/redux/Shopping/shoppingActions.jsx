import * as actionTypes from './shoppingTypes'

export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  }
}

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: itemID,
  }
}

export const adjustQty = (itemID, qtyMin, qtyMax) => {
  return {
    type: actionTypes.ADJUST_QTY,
    payload: {
      id: itemID,
      qtyMin: qtyMin,
      qtyMax: qtyMax,
    },
  }
}

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  }
}
