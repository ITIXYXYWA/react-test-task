import React, { useEffect, useState } from "react";

import { Image, Flex } from "antd";

import styles from "./style.module.css";

const ImageSlider = ({ imgLinkList }) => {
  const [activeImage, setActiveImage] = useState(imgLinkList[0]);

  useEffect(() => {
    if (imgLinkList) {
      setActiveImage(imgLinkList[0]);
    }
  }, [imgLinkList]);

  return (
    <div className={styles.image_slider_container}>
      <Flex vertical>
        {imgLinkList.map((imgLink, index) => (
          <div key={index} className={styles.image_slider_mini_img}>
            <img
              onClick={() => setActiveImage(imgLink)}
              src={imgLink}
              width={100}
              // height={150}
              alt="mini_photo"
            />
          </div>
        ))}
      </Flex>

      <Flex justify="space-between">
        <Image width={500} src={activeImage} />
      </Flex>
    </div>
  );
};

export default ImageSlider;
