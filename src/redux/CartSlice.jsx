import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isCartOpen: false,
    inCart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      const existingProductIndex = state.inCart.findIndex(
        (product) => product.id === id
      );

      if (existingProductIndex !== -1) {
        // Si el producto ya está en el carrito, actualizamos su cantidad sumando la nueva cantidad
        const updatedCart = state.inCart.map((product, index) => {
          if (index === existingProductIndex) {
            return { ...product, quantity: product.quantity + quantity };
          }
          return product;
        });

        return {
          ...state,
          inCart: updatedCart,
        };
      } else {
        // Si el producto no está en el carrito, lo agregamos con la cantidad proporcionada
        return {
          ...state,
          inCart: [...state.inCart, { ...action.payload }],
        };
      }
    },
    /* addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      const itemIndex = state.inCart.findIndex((product) => product.id === id);
      if (itemIndex >= 0) {
        return {
          ...state,
          inCart: state.inCart.map((item, index) =>
            index === itemIndex
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      } else {
        return {
          ...state,
          inCart: [...state.inCart, { ...action.payload }],
        };
      }
    }, */

    removeFromCart: (state, action) => {
      const removeItem = state.inCart.filter(
        (item) => item.id !== action.payload.id
      );
    },

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
