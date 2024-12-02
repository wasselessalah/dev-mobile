import { configureStore } from "@reduxjs/toolkit";
import purchasesReducer from "./productsSlice";
 //* Register the purchases reducer
const store = configureStore({
  reducer: {
    purchases: purchasesReducer,
  },
});

export default store;
