import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Flex, Typography } from "antd";
import Sizes from "../../../size/ui/size";
import { productModel } from "../..";
import ColorSelect from "./ColorSelect";
import ImageSlider from "./ImageSlider";

import styles from "./style.module.css";
import { basketMethods, basketModel } from "../../../basket";

const { Title, Text } = Typography;

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const { addProductToBusket, minifiedProductIdListFromBasket } =
    basketModel.useAddProductToBasket();

  const [selectedColorId, setSelectedColorId] = useState(
    product?.colors?.[0]?.id,
  );
  const [selectedSizeId, setSelectedSizeId] = useState();

  const { colorById, isSuccess } = productModel.useGetProductColorById({
    productId: product?.id,
    colorId: selectedColorId,
  });

  const dinamicProductObject = {
    productId: product.id,
    colorId: selectedColorId,
    sizeId: selectedSizeId,
  };

  const minifiedProduct =
    basketMethods.minifyProductIdToString(dinamicProductObject);

  const isProductHasOnBasket =
    !!minifiedProductIdListFromBasket[minifiedProduct];

  const addToBasketHandler = () => {
    if (product.id && selectedColorId && selectedSizeId) {
      addProductToBusket({
        productId: product.id,
        colorId: selectedColorId,
        sizeId: selectedSizeId,
      });
    }
  };

  useEffect(() => {
    if (colorById?.sizes?.length) {
      setSelectedSizeId(colorById.sizes[0]);
    }
  }, [colorById]);

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

          {isProductHasOnBasket ? (
            <Button onClick={() => navigate("/basket")}>
              Перейти в корзину
            </Button>
          ) : (
            <Button
              disabled={!colorById?.sizes?.length}
              onClick={addToBasketHandler}
            >
              Добавить
            </Button>
          )}
        </div>
      </Flex>

      <Button onClick={() => navigate("/")}>Назад</Button>
    </div>
  ) : (
    <>loading...</>
  );
};

export { ProductCard };
