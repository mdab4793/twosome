import { configureStore, createSlice } from '@reduxjs/toolkit';

let cart = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addCount(state, action) {
      let num = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[num].count++;
    },
    addMin(state, action) {
      let num = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[num].count === 1 ? state[num].limit++ : state[num].count--;
    },
    addItem(state, action) {
      let found = state.findIndex((a) => {
        return a.id === action.payload.id;
      });
      //   if (found >= 0) {
      //     let copy = [...state];
      //     copy[found].count++;
      //     return copy;
      //   }
      state.push(action.payload);
    },
    discountItem(state, action) {
      let found = state.findIndex((a) => {
        return a.id === action.payload.id;
      });
      if (found >= 0) {
        let copy = [...state];
        copy[found].count++;
        return copy;
      }
      state.push(action.payload);
    },
    removeItem(state, action) {
      return state.filter((a) => a.id !== action.payload);
    },
  },
});
export let { addCount, addMin, addItem, removeItem, discountItem } =
  cart.actions;
export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});
