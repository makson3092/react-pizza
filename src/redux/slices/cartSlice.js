import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addProduct(state, action) {
    //   state.items.push(action.payload);
    //   state.totalPrice = state.items.reduce((sum, obj) => {
    //     return obj.price + sum;
    //   }, 0);
    // },
    addProduct(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },

    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem && findItem.count > 0) {
        findItem.count--;
        state.totalPrice -= findItem.price;
      }
    },

    removeProduct(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      state.totalPrice -= findItem.price * findItem.count;
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },

    clearProduct(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addProduct, removeProduct, minusItem, clearProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
