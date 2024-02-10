import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  status: "idle",
  error: "",
};

export const getProducts = createAsyncThunk("products", async () => {
  const productsResponse = await fetch("https://dummyjson.com/products");
  const products = await productsResponse.json();
  return products.products;
});

const ProductsSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});
export const ProductsReducers = ProductsSlice.reducer;
export const { addProduct } = ProductsSlice.actions;
