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
        (product) => product.id === action.payload.id
      ); ////index me da -1 si no esta en el array
      if (itemIndex >= 0) {
        return {
          ...state,
          inCart: state.inCart.map((item, index) => {
            if (index === itemIndex) {
              return { ...item, cartQuantity: item.cartQuantity + 1 };
            }
            return item;
          }),
        };
      } else {
        return {
          ...state,
          inCart: [...state.inCart, { ...action.payload, cartQuantity: 1 }],
        };
      }
    },

    /* removeFromCart: (state, action) => {
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
<<<<<<< Updated upstream
    decreaseCount: (state, action) => {
      state.inCart = state.inCart.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    }, */
=======
    incrementQuantity: (state, action) => {
      return {
        ...state,
        quantity: +1,
      };
    },
>>>>>>> Stashed changes

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
