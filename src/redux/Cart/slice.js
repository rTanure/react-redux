import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: []
}

const cardSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productInCart = state.products.some(product => product.id === action.payload.id)

      if(productInCart) {
        state.products = state.products.map(product =>
          product.id === action.payload.id 
            ? {...product, quantity: product.quantity + 1} 
            : {...product}
        )
        return
      }
      state.products = [...state.products, {...action.payload, quantity: 1}]
    },
    increaseProductQuantity: (state, action) => {
      state.products = state.products.map(product => product.id === action.payload ? {...product, quantity: product.quantity + 1} : {...product})
    },
    decreaseProductQuantity: (state, action) => {
      state.products = state.products.map(product => product.id === action.payload ? {...product, quantity: product.quantity - 1} : {...product}).filter(product => product.quantity > 0)
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(product => product.id != action.payload)
    }
  }
})

export const { addProduct, increaseProductQuantity, decreaseProductQuantity, removeProduct } = cardSlice.actions

export default cardSlice.reducer