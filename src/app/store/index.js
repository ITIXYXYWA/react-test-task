import { configureStore } from "@reduxjs/toolkit";

import { BasketSlice } from "../../entities/basket";
import { productModel } from '../../entities/product';
import { sizeModel } from "../../entities/size";

export const store = configureStore({
	reducer: {
		basket: BasketSlice.reducer,
		product: productModel.ProductSlice.reducer,
		size: sizeModel.SizeSlice.reducer,
	}
})