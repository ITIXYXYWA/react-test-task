import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { Layout, Button } from "antd";

import { ProductsList } from "./products-list";
import { ProductCardPage } from "./product-card";
import { Basket } from "./basket";
import { Content, Footer, Header } from "../shared/ui";

export const Routing = () => {
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header>
        <Button onClick={() => navigate("/")}>домой</Button>
        <Button onClick={() => navigate("/basket")}>корзина</Button>
      </Header>
      <Content>
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/:productId" element={<ProductCardPage />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </Content>
      <Footer>интернет магазин</Footer>
    </Layout>
  );
};
