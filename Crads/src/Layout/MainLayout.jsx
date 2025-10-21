import React, { useState } from "react";
import SheredLayout from "./SheredLayout";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import ProductForm from "../Pages/ProductForm";
import ProductDetails from "../Pages/ProductDetails";
import NotFound from "../Pages/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      {/* <SheredLayout/> */}
      {/* <Home/> */}
      {/* <Products/> */}
      {/* <ProuctForm/> */}
      {/* <ProductDetails/> */}
      {/* <NotFound/> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SheredLayout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id/edit" element={<ProductForm />} />
            <Route path="products/:id" element={<ProductDetails />} />
          </Route>
                      <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}
