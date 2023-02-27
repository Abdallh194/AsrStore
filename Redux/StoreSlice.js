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
    orderItems: [],
    logstatus: false,
    user: "",
    pass: "",
    email: "",
    orderDate: "",
    copyofCartItems: [],
    address: "",
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
      state.copyofCartItems = state.cartItems;
    },
    AddItemsToOrders: (state) => {
      state.orderItems = [...state.copyofCartItems];
    },
    AddressLocation: (state, action) => {
      state.address = action.payload;
    },
    DeleteItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((p) => p.id !== action.payload);
      state.orderItems = state.orderItems.filter(
        (p) => p.id !== action.payload
      );
    },
    DeleteAllItemINCart: (state) => {
      while (state.cartItems.length > 0) {
        state.cartItems.pop();
      }
    },
    DeleteAllItemINOrders: (state) => {
      while (state.orderItems.length > 0) {
        state.orderItems.pop();
      }
    },
    LogInStatus: (state) => {
      state.logstatus = true;
    },
    ResiterUser: (state, action) => {
      state.user = action.payload.username;
      state.pass = action.payload.password;
      state.email = action.payload.email;
    },
    setDate: (state, action) => {
      state.orderDate = action.payload;
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
export const {
  HandleSearchKey,
  AddItemToCart,
  DeleteItemFromCart,
  DeleteAllItemINCart,
  LogInStatus,
  ResiterUser,
  setDate,
  DeleteAllItemINOrders,
  AddItemsToOrders,
  AddressLocation,
} = StoreSlice.actions;

export default StoreSlice.reducer;
