import React, { useEffect, useState } from "react";
import { MainButton } from "../Custom/MainButton";
import { FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../Custom/Api/fetchApi";
import { useDispatch, useSelector } from "react-redux";
import { getProductByIdAction } from "../store/slices/productSlice";

import { Spinner, Alert } from "react-bootstrap";

export default function () {
  const { product, isLoading, errors } = useSelector(
    (state) => state.productSlice
  );

  const dispatch = useDispatch();
   const { id } = useParams();
  console.log(id);
  useEffect(() => {
   
    dispatch(getProductByIdAction(id));
  }, []);

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center text-success">Product Details</h1>
        {isLoading && (
          <div className="text-center">
            <Spinner animation="border" variant="success" />
            <p>Loading product...</p>
          </div>
        )}
        {errors && (
          <Alert variant="danger" className="text-center">
            {errors}
          </Alert>
        )}
        {!isLoading && !errors && product && (
          <div className="border border-success p-5">
            <p className="fs-3">
              Product id :{" "}
              <span className="fw-bold text-success">{product.id}</span>
            </p>
            <p className="fs-3">
              Product Name:{" "}
              <span className="fw-bold text-success">{product.name}</span>
            </p>
            <p className="fs-3">
              Product Price :{" "}
              <span className="fw-bold text-success">{product.price} $</span>
            </p>
            <div className="fs-3 mb-5">
              <FaStar className="mx-2 text-warning" />
              <FaStar className="mx-2 text-warning" />
              <FaStar className="mx-2 text-warning" />
              <FaStar className="mx-2 text-warning" />
              <FaStar className="mx-2 text-warning" />
            </div>
            <Link to="/products">
              {" "}
              <MainButton>Back To Products</MainButton>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
