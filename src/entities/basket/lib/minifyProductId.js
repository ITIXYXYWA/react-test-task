export const minifyProductIdToString = ({ productId, colorId, sizeId }) => {
  return `${productId}_${colorId}_${sizeId}`;
};

export const extractProductIdFromString = (minifiedProductId) => {
  const joinedProductId = minifiedProductId.join("_");

  return {
    productId: joinedProductId[0],
    colorId: joinedProductId[1],
    sizeId: joinedProductId[2],
  };
};
