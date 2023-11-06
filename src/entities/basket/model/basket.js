import { createSlice } from "@reduxjs/toolkit";

/*
{
	id: number,
	productId: number,
	colorId: number,
	sizeId: number,
}
*/
const initialState = {
  basketList: [],
};

export const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.basketList.push({
        id: state.basketList.length + 1,
        ...action.payload,
      });
    },
    deleteProductById: (state, action) => {
      state.basketList.splice(
        state.basketList.findIndex((el) => el.id === action.payload),
        1,
      );
    },
  },
});

export const { addToBasket, deleteProductById } = BasketSlice.actions;

export const getAllBasketProductsFx = (state) => state.basketList;

export default BasketSlice.reducer;
