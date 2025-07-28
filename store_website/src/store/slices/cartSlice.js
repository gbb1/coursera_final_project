import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  totalItems: 0,
  totalCost: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name, price, image } = action.payload
      const existingItem = state.items.find(item => item.id === id)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({
          id,
          name,
          price,
          image,
          quantity: 1
        })
      }

      state.totalItems += 1
      state.totalCost += price
    },
    increaseQuantity: (state, action) => {
      const { id } = action.payload
      const item = state.items.find(item => item.id === id)
      if (item) {
        item.quantity += 1
        state.totalItems += 1
        state.totalCost += item.price
      }
    },
    decreaseQuantity: (state, action) => {
      const { id } = action.payload
      const item = state.items.find(item => item.id === id)
      if (item && item.quantity > 1) {
        item.quantity -= 1
        state.totalItems -= 1
        state.totalCost -= item.price
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload
      const item = state.items.find(item => item.id === id)
      if (item) {
        state.totalItems -= item.quantity
        state.totalCost -= (item.price * item.quantity)
        state.items = state.items.filter(item => item.id !== id)
      }
    },
    clearCart: (state) => {
      state.items = []
      state.totalItems = 0
      state.totalCost = 0
    }
  },
})

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart
} = cartSlice.actions

export const selectCartItems = (state) => state.cart.items
export const selectTotalItems = (state) => state.cart.totalItems
export const selectTotalCost = (state) => state.cart.totalCost
export const selectIsInCart = (state, id) => state.cart.items.some(item => item.id === id)

export default cartSlice.reducer