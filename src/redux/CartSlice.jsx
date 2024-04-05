import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isCartOpen: false,
    inCart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.inCart.findIndex(
        (product) => product.id === action.payload.id
      ); ////index me da -1 si no esta en el array
      if (itemIndex >= 0) {
        return {
          ...state,
          inCart: state.inCart.map((item, index) => {
            if (index === itemIndex) {
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          }),
        };
      } else {
        return {
          ...state,
          inCart: [...state.inCart, { ...action.payload, quantity: 1 }],
        };
      }
    },

    removeFromCart: (state, action) => {
      const removeItem = state.inCart.filter(
        (item) => item.id !== action.payload.id
      );
    },
    decrementQuantity: (state, action) => {
      return {
        ...state,
        quantity: -1,
      };
    },
    incrementQuantity: (state, action) => {
      return {
        ...state,
        quantity: +1,
      };
    },

    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
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
} = actions;

export default reducer;
