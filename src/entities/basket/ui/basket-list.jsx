import React from "react";
import { Space, Button } from "antd";
import { useNavigate } from "react-router-dom";

import { basketModel } from "..";
import { BasketCard } from "./basket-card";

export const BasketList = () => {
  const navigate = useNavigate();

  const { basketList } = basketModel.useGetAllProductsFromBasket();

  return (
    <Space direction="vertical">
      <Space>
        {basketList?.map((basketItem) => (
          <BasketCard basketProduct={basketItem} />
        ))}
      </Space>

      <Button onClick={() => navigate(-1)}>Назад</Button>
    </Space>
  );
};
