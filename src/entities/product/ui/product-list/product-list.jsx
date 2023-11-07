import React from "react";

import { useNavigate } from "react-router-dom";

import { Card } from "antd";

export const ProductList = ({ product }) => {
  const navigate = useNavigate();

  const firstProductColor = product.colors[0];

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          src={firstProductColor.images[0]}
          alt={firstProductColor.description}
        />
      }
      onClick={() => navigate(`/${product.id}`)}
    >
      {product.name}
    </Card>
  );
};
