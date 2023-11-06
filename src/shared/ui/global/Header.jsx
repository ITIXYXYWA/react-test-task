import React from "react";
import { Layout } from "antd";

const { Header: HeaderAntd } = Layout;

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

export const Header = ({ children }) => {
  return <HeaderAntd style={headerStyle}>{children}</HeaderAntd>;
};
