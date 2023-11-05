import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { productApi } from "../../../shared/api/product";

export const fetchProductList = createAsyncThunk('product/fetchAll', async () => {
	const response = await productApi.getProducts()
	const data = await response

	return data
})

export const fetchProductById = createAsyncThunk('product/byId', async (id) => {
	const response = await productApi.getProduct(id)
	const data = await response

	return data
})

export const fetchProductColorByColorId = createAsyncThunk('product/getColor', async (productId, colorId) => {
	const response = await productApi.getProductColor(productId, colorId)
	const data = await response

	return data
})

export const ProductSlice = createSlice({
	name: 'product',
	initialState: {
		all: [],
		byId: {},
		productIdToColor: {},
	},
	extraReducers: builder => {
		builder.addCase(fetchProductList.fulfilled, (state, action) => {
			state.all = action.payload
		})

		builder.addCase(fetchProductById.fulfilled, (state, action) => {
			state.byId[action.meta.arg.id] = action.payload
		})

		builder.addCase(fetchProductColorByColorId.fulfilled, (state, action) => {
			state.productIdToColor[action.meta.arg.productId] = action.payload
		})
	}
})

export default ProductSlice.reducer

export const selectProducts = (state) => state.product.all
export const selectProductById = (state, id) => state.product.byId[id]
export const selectProductColorById = (state, id) => state.product.productIdToColor[id]