import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isCartOpen: false,
    inCart: [],
    showToast: false,
  },
  reducers: {
    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      const itemIndex = state.inCart.findIndex((product) => product.id === id);

      if (itemIndex >= 0) {
        const newQuantity = state.inCart[itemIndex].quantity - 1;
        if (newQuantity > 0) {
          return {
            ...state,
            inCart: state.inCart.map((item, index) =>
              index === itemIndex ? { ...item, quantity: newQuantity } : item
            ),
          };
        } else {
          return {
            ...state,
            inCart: state.inCart.filter((_, index) => index !== itemIndex),
          };
        }
      }
    },

    incrementQuantity: (state, action) => {
      const itemIndex = state.inCart.findIndex(
        (product) => product.id === action.payload.id
      ); ////index me da -1 si no esta en el array
      if (itemIndex >= 0) {
        const cart = state.inCart.map((item, index) => {
          if (index === itemIndex) {
            if (item.quantity + 1 <= action.payload.stock) {
              return { ...item, quantity: item.quantity + 1 };
            } else {
              return item;
            }
          }
          return item;
        });

        if (cart[itemIndex] === state.inCart[itemIndex]) {
          return { ...state, inCart: cart, showToast: true };
        } else {
          return { ...state, inCart: cart, showToast: false };
        }
      } else {
        if (action.payload.stock > 0) {
          return {
            ...state,
            inCart: [...state.inCart, { ...action.payload, quantity: 1 }],
            showToast: false,
          };
        } else {
          return state;
        }
      }
    },

    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },

    setShowToast: (state, action) => {
      state.showToast = action.payload;
    },
  },
});

const { reducer, actions } = cartSlice;

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  setIsCartOpen,
  setShowToast,
} = actions;

export default reducer;
