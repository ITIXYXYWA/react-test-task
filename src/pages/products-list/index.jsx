import React, { useEffect } from "react";
import ProductList from "../../entities/product/ui/product-list";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductList, selectProducts } from "../../entities/product/model";

import { Flex } from "antd";

export const ProductsList = () => {
  const dispatch = useDispatch();
  const productList = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProductList());
  }, [dispatch]);

  return (
    <Flex justify="center" gap={10} style={{ padding: "20px 0" }}>
      {productList?.map((product) => (
        <ProductList key={product.id} product={product} />
      ))}
    </Flex>
  );
};
