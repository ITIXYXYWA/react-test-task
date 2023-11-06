import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Flex, Typography } from "antd";
import Sizes from "../../../size/ui/size";
import { productModel } from "../..";
import ColorSelect from "./ColorSelect";
import ImageSlider from "./ImageSlider";

import styles from "./style.module.css";

const { Title, Text } = Typography;

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const [selectedColorId, setSelectedColorId] = useState(
    product?.colors?.[0]?.id,
  );
  const [selectedSizeId, setSelectedSizeId] = useState();

  const { colorById, isSuccess } = productModel.useGetProductColorById({
    productId: product?.id,
    colorId: selectedColorId,
  });

  const addToBasketHandler = () => {};

  return isSuccess ? (
    <div>
      <Flex justify="center" gap={10}>
        <ImageSlider imgLinkList={colorById.images} />

        <div className={styles.product_info}>
          <Title>{product.name}</Title>

          <Text>{colorById.description}</Text>

          <Text style={{ fontSize: 20 }} strong>
            {colorById.price} ₽
          </Text>

          <Sizes
            activeSizes={colorById?.sizes}
            selectedSize={selectedSizeId}
            onSelectSize={setSelectedSizeId}
          />

          <ColorSelect
            product={product}
            selectedColorId={selectedColorId}
            setSelectedColorId={setSelectedColorId}
          />

          <Button onClick={addToBasketHandler}>Добавить</Button>
        </div>
      </Flex>

      <Button onClick={() => navigate("/")}>Назад</Button>
    </div>
  ) : (
    <>loading...</>
  );
};

export default ProductCard;
