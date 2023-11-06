import React from "react";
import { useParams } from "react-router-dom";

import { ProductCard, productModel } from "../../entities/product/";

export const ProductCardPage = () => {
  const { productId } = useParams();

  const { productById } = productModel.useGetProductById(productId);

  return productById?.id && <ProductCard product={productById} />;
};
