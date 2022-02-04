import * as actionTypes from './shoppingTypes'

const INITIAL_STATE = {
  products: [], //(id,title,desc, prices, img)
  cart: [], // (id,title,desc, prices, img + qtyMin et qtyMax)
  currentItem: null,
}

const shoppingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // récupere item data de products array
      // const item = state.products.find(prod => prod.id === action.payload.id)
      // check si item est deja dans cart

      return {}
    case actionTypes.REMOVE_FROM_CART:
      return {}
    case actionTypes.ADJUST_QTY:
      return {}
    case actionTypes.LOAD_CURRENT_ITEM:
      return {}
    default:
      return state
  }
}

export default shoppingReducer
