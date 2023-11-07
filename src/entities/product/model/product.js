import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { productApi } from "../../../shared/api/product";
import { requestStatuses } from "../../../shared/config";

export const fetchProductList = createAsyncThunk(
  "product/fetchAll",
  async () => {
    const response = await productApi.getProducts();
    const data = await response;

    return data;
  },
);

export const fetchProductById = createAsyncThunk("product/byId", async (id) => {
  const response = await productApi.getProduct(parseInt(id));
  const data = await response;

  return data;
});

export const fetchProductColorByColorId = createAsyncThunk(
  "product/getColor",
  async ({ productId, colorId }) => {
    const response = await productApi.getProductColor(
      parseInt(productId),
      parseInt(colorId),
    );
    const data = await response;

    return data;
  },
);

export const ProductSlice = createSlice({
  name: "product",
  initialState: {
    all: [],
    byId: {},
    statusById: {},
    productIdToColor: {},
    statusProductIdToColor: {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductList.fulfilled, (state, action) => {
      state.all = action.payload;
    });

    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.byId[action.meta.arg] = action.payload;
      state.statusById[action.meta.arg] = requestStatuses.success;
    });

    builder.addCase(fetchProductColorByColorId.fulfilled, (state, action) => {
      state.productIdToColor[action.meta.arg.productId] = {
        ...state.productIdToColor[action.meta.arg.productId],
        [action.meta.arg.colorId]: action.payload,
      };
      state.statusProductIdToColor[action.meta.arg.productId] = {
        ...state.statusProductIdToColor[action.meta.arg.productId],
        [action.meta.arg.colorId]: requestStatuses.success,
      };
    });
  },
});

export default ProductSlice.reducer;

export const selectProducts = (state) => state.product.all;

export const selectProductById = (state, id) => state.product.byId[id];
export const selectProductStatusById = (state, id) =>
  state.product.statusById[id];

export const selectProductColorById = (state, productId, colorId) => {
  const productById = state.product.productIdToColor?.[productId];

  return productById?.[colorId];
};
export const selectStatusProductColorById = (state, productId, colorId) =>
  state.product.statusProductIdToColor?.[productId]?.[colorId];
