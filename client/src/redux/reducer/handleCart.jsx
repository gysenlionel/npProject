const cart = []

const handleCart = (state = cart, action) => {
  const product = action.payload

  switch (action.type) {
    case 'ADDITEM':
      // check product already exist
      const exist = state.find((x) => x.product.id === product.product.id)
      if (exist) {
        // incremente la qty de  1
        return state.map((x) =>
          x.product.id === product.product.id ? { ...x, qty: x.qty + 1 } : x
        )
      } else {
        const product = action.payload
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ]
      }
      break

    // !! corrigé fonction delItem
    case 'DELITEM':
      const exist1 = state.find((x) => x.product.id === product.product.id)
      if (exist1.qty === 1) {
        return state.filter((x) => x.product.id !== exist1.product.id)
      } else {
        return state.map((x) =>
          x.product.id === product.product.id ? { ...x, qty: x.qty - 1 } : x
        )
      }
      break

    default:
      return state
      break
  }
}

export default handleCart
