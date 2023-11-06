import { useDispatch, useSelector } from "react-redux";
import { basketMethods, basketModel } from "..";

export const useGetAllProductsFromBasket = () => {
  const basketList = useSelector(basketModel.selectProductListFromBasket);

  return {
    basketList,
  };
};

export const useAddProductToBasket = () => {
  const dispatch = useDispatch();
  const productsFromBasket = useSelector(
    basketModel.selectProductListFromBasket,
  );

  const minifiedProductIdListFromBasket = productsFromBasket.reduce(
    (acc, curr) => {
      const compressedProductId = basketMethods.minifyProductIdToString(curr);

      acc[compressedProductId] = compressedProductId;

      return acc;
    },
    {},
  );

  const addProductToBusket = ({ productId, colorId, sizeId }) => {
    dispatch(
      basketModel.addToBasket({
        productId,
        colorId,
        sizeId,
      }),
    );
  };

  return {
    addProductToBusket,
    minifiedProductIdListFromBasket,
  };
};

export const useDeleteProductFromBasket = () => {
  const dispatch = useDispatch();

  const deleteProductFromBasket = (productId) => {
    dispatch(basketModel.deleteProductById(productId));
  };

  return {
    deleteProductFromBasket,
  };
};
