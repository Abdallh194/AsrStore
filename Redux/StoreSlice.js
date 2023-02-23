import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await fetch("/api/Products");
      const Data = await res.json();
      return Data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const StoreSlice = createSlice({
  name: "products",
  initialState: {
    searchValue: "",
    isloading: false,
    error: null,
    products: [],
    cartItems: [],
  },
  reducers: {
    HandleSearchKey: (state, action) => {
      state.searchValue = action.payload;
    },
    AddItemToCart: (state, action) => {
      let isexit = false;
      state.cartItems.forEach((p) => {
        if (p.id === action.payload.id) {
          p.Quantity++;
          isexit = true;
        }
      });
      if (!isexit) {
        state.cartItems.push(action.payload);
      }
    },
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.isloading = true;
      state.error = null;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isloading = false;
      state.products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.isloading = false;
      state.products = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { HandleSearchKey, AddItemToCart } = StoreSlice.actions;

export default StoreSlice.reducer;
