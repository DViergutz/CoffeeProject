import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

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
      const selectedItem = state.inCart.find(
        (item) => item.id === action.payload.id
      );
      if (!selectedItem && action.payload.stock > 0) {
        state.inCart.push({ ...action.payload, quantity: 1 });
      } else {
        selectedItem.quantity = selectedItem.quantity + 1;
      }
    },

    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },

    setShowToast: (state, action) => {
      state.showToast = action.payload;
    },

    deleteOneProduct: (state, action) => {
      const { id } = action.payload;
      const itemIndex = state.inCart.findIndex(
        (product) => product.id === action.payload.id
      );

      if (itemIndex >= 0) {
        const updatedCart = [...state.inCart];

        updatedCart.splice(itemIndex, 1);

        return {
          ...state,
          inCart: updatedCart,
        };
      } else {
        return state;
      }
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
  deleteOneProduct,
} = actions;

export default reducer;
