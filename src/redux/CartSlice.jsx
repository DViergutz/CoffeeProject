import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isCartOpen: false,
    inCart: [
      {
        name: "Mexico Organic",
        price: 190,
        stock: 5,
        image: "/src/assets/img/SingleOrigin-Mexico.png",
        description:
          "This bold, smooth blend contains 40% dark-roasted Kona coffee. We blend it with select Latin American beans for a rich, lively cup of coffee.",
        createdAt: "",
        updatedAt: "",
        id: 1,
      },
      {
        name: "Mexico Organic",
        price: 250,
        stock: 5,
        image: "/src/assets/img/SingleOrigin-Mexico.png",
        description:
          "This bold, smooth blend contains 40% dark-roasted Kona coffee. We blend it with select Latin American beans for a rich, lively cup of coffee.",
        createdAt: "",
        updatedAt: "",
        id: 2,
      },
      {
        name: "Sumatra Mandheling",
        price: 250,
        stock: 5,
        image: "/src/assets/img/SingleOrigin-Mexico.png",
        description:
          "This bold, smooth blend contains 40% dark-roasted Kona coffee. We blend it with select Latin American beans for a rich, lively cup of coffee.",
        createdAt: "",
        updatedAt: "",
        id: 3,
      },
    ],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.inCart.findIndex(
        (item) => item.id === action.payload.id
      ); ////index me da -1 si no esta en el array
      if (itemIndex >= 0) {
        state.inCart[itemIndex].cartQuantity = +1;
      } else {
        const placeProduct = { ...action.payload, cartQuantity: 1 };
        state.inCart.push(placeProduct);
      }
    },
    removeFromCart: (state, action) => {
      const removeItem = state.inCart.filter(
        (item) => item.id !== action.payload.id
      );
    },

    increaseCount: (state, action) => {
      state.inCart = state.inCart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      });
    },
    decreaseCount: (state, action) => {
      state.inCart = state.inCart.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      });
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
  increaseCount,
  decreaseCount,
  setIsCartOpen,
} = actions;

export default reducer;
