import React from "react";
import { basketModel } from "..";

export const BasketList = () => {
  const { basketList } = basketModel.useGetAllProductsFromBasket();

  console.log(basketList);

  return <div>BasketList</div>;
};
