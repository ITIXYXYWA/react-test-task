import React from "react";
import { Layout } from "antd";

const { Footer: FooterAntd } = Layout;

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

export const Footer = ({ children }) => {
  return <FooterAntd style={footerStyle}>{children}</FooterAntd>;
};
