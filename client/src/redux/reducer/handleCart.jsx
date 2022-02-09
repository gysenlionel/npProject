let cart = []

if (localStorage.getItem('cart')) {
  cart = JSON.parse(localStorage.getItem('cart'))
} else {
  cart = []
}

const handleCart = (state = cart, action) => {
  const product = action.payload

  switch (action.type) {
    case 'ADDITEM':
      state = localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart'))
        : []
      // check product already exist
      const exist = state.find((x) => x.product.id === product.product.id)
      if (exist) {
        // incremente la qty de  1
        return state.map((x) =>
          x.product.id === product.product.id
            ? {
                ...x,
                qty: x.qty + 1,
              }
            : x
        )
      } else {
        const product = action.payload
        state.push(product)
        localStorage.setItem('cart', JSON.stringify(state))
        return [...state]
      }
      break

    case 'DELITEM':
      state = localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart'))
        : []

      const exist1 = state.find((x) => x.product.id === product.product.id)
      if (exist1) {
        let update = state.filter((x) => x.product.id !== exist1.product.id)
        localStorage.setItem('cart', JSON.stringify(update))
        state = localStorage.getItem('cart')
          ? JSON.parse(localStorage.getItem('cart'))
          : []
        return [...state]
      }

      // const exist1 = state.find((x) => x.product.id === product.product.id)
      // if (exist1.qty === 1) {
      //   return state.filter((x) => x.product.id !== exist1.product.id)
      // } else {
      //   return state.map((x) =>
      //     x.product.id === product.product.id ? { ...x, qty: x.qty - 1 } : x
      //   )
      // }
      break

    default:
      return state
      break
  }
}

export default handleCart
