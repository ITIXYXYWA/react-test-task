import { configureStore } from "@reduxjs/toolkit";

import { basketModel } from "../../entities/basket";
import { productModel } from "../../entities/product";
import { sizeModel } from "../../entities/size";

export const store = configureStore({
  reducer: {
    basket: basketModel.BasketSlice.reducer,
    product: productModel.ProductSlice.reducer,
    size: sizeModel.SizeSlice.reducer,
  },
});
