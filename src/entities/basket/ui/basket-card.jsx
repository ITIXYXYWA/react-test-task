import React from "react";
import { Button, Typography, Space, Card } from "antd";

import { productModel } from "../../product";
import { basketModel } from "..";
import { sizeModel } from "../../size";

const { Title, Text } = Typography;

export const BasketCard = ({ basketProduct }) => {
  const { productById } = productModel.useGetProductById(
    basketProduct.productId,
  );
  const { colorById } = productModel.useGetProductColorById({
    productId: basketProduct.productId,
    colorId: basketProduct.colorId,
  });

  const { sizeById } = sizeModel.useGetSizeById(basketProduct.sizeId);

  const { deleteProductFromBasket } = basketModel.useDeleteProductFromBasket();

  return (
    <Card
      style={{ width: 200 }}
      cover={<img alt={colorById?.description} src={colorById?.images?.[0]} />}
    >
      <Space direction="vertical" gap={10}>
        <Title>{productById?.name}</Title>

        <Text>Цвет: {colorById?.name}</Text>

        <Text>
          Размер: {sizeById?.label} ({sizeById?.number})
        </Text>

        <Text>Цена: {colorById?.price}</Text>
      </Space>

      <Button
        onClick={() => deleteProductFromBasket(basketProduct.id)}
        type="link"
        color="red"
      >
        Удалить
      </Button>
    </Card>
  );
};
