import { configureStore } from "@reduxjs/toolkit";
import StoreSlice from "./StoreSlice";

const store = configureStore({
  reducer: {
    ASRStore: StoreSlice,
  },
});
export default store;
