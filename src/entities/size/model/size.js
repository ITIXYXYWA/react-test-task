import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { productApi } from '../../../shared/api/product'

export const fetchAllSizes = createAsyncThunk('size/getAll', async () => {
	const response = await productApi.getSizes()
	const data = await response

	return data
})

export const fetchSizeById = createAsyncThunk('size/byId', async (id) => {
	const response = await productApi.getSize(id)
	const data = await response

	return data
})

export const SizeSlice = createSlice({
	name: 'size',
	initialState: {
		all: [],
		byId: {},
	},
	extraReducers: builder => {
		builder.addCase(fetchAllSizes.fulfilled, (state, action) => {
			state.all = action.payload
		})

		builder.addCase(fetchSizeById.fulfilled, (state, action) => {
			state.byId[action.meta.arg.id] = action.payload
		})
	}
})

export const selectAllSizes = (state) => state.size.all
export const selectSizeById = (state, id) => state.size.byId[id]
