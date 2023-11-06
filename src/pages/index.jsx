import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { Layout, Button } from "antd";

import { ProductsList } from "./products-list";
import { ProductCardPage } from "./product-card";
import { Basket } from "./basket";

const { Content, Header, Footer } = Layout;

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

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#76b3df",
  padding: "10px 0",
};

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

export const Routing = () => {
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={headerStyle}>
        <Button onClick={() => navigate("/")}>домой</Button>
        <Button onClick={() => navigate("/basket")}>корзина</Button>
      </Header>
      <Content style={contentStyle}>
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/:productId" element={<ProductCardPage />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </Content>
      <Footer style={footerStyle}>интернет магазин</Footer>
    </Layout>
  );
};
