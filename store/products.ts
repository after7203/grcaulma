import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProdType } from "@/pages/api/products";

const initialState: ProdType[] = [];

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    initailize(state, action: PayloadAction<ProdType[]>) {
      return action.payload;
    },
  },
});

export const module_products = productsSlice.actions;

export default productsSlice.reducer;
