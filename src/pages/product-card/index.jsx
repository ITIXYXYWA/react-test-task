import React from "react";
import { useParams } from "react-router-dom";
import { productModel } from "../../entities/product/";
import ProductCard from "../../entities/product/ui/product-card";

export const ProductCardPage = () => {
  const { productId } = useParams();

  const { productById } = productModel.useGetProductById(productId);

  return productById?.id && <ProductCard product={productById} />;
};
