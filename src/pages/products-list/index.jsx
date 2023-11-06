import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductList, selectProducts } from "../../entities/product/model";

import { Flex } from "antd";
import { ProductList } from "../../entities/product";

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
