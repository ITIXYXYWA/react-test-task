import React from "react";
import { Radio } from "antd";

const ColorSelect = ({ selectedColorId, setSelectedColorId, product }) => {
  const optionsColor = product?.colors?.map((color) => ({
    label: color.name,
    value: color.id,
  }));

  const onChangeColorHandler = ({ target: { value } }) => {
    setSelectedColorId(value);
  };

  return (
    <Radio.Group
      options={optionsColor}
      value={selectedColorId}
      onChange={onChangeColorHandler}
      optionType="button"
    />
  );
};

export default ColorSelect;
