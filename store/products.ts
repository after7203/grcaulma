import { ProdType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

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
