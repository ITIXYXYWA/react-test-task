import React from "react";
import { Layout } from "antd";

const { Content: ContentAntd } = Layout;

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#76b3df",
  padding: "10px 0",
};

export const Content = ({ children }) => {
  return <ContentAntd style={contentStyle}>{children}</ContentAntd>;
};
