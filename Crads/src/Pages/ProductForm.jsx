import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { MainButton } from "../Custom/MainButton";
import {
  addProduct,
  getProductById,
  updateProduct,
} from "./../Custom/Api/fetchApi";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductAction, updateProductAction } from "../store/slices/productSlice";
export default function ProductForm() {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [productForm, setProductForm] = useState({
    name: "",
    price: 0,
  });
  useEffect(() => {
    if (id !== "0") {
      getProductById(id).then((res) => {
        console.log(res.data);
        setProductForm(res.data);
      });
    }
  }, []);

  const inputHandler = (e) => {
    console.log(e.target.value);

    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productForm);
    if (!productForm.name.trim() || !productForm.price || Number(productForm.price) <= 0) {
      alert("Please enter a product name and a price greater than zero.");
      return;
    }
    if (id == "0") {
      dispatch(addProductAction(productForm));
      // addProduct(productForm);
      setProductForm({ name: "", price: 0 });
      navigate("/products");
    } else {
      // updateProduct(id, productForm);
      dispatch(updateProductAction({ id, product: productForm }));
      navigate("/products");
    }
  };
  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center text-success mt-5">Product Form</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product Name"
              name="name"
              value={productForm.name}
              onChange={inputHandler}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Product Price"
              name="price"
              value={productForm.price}
              onChange={inputHandler}
            />
          </Form.Group>

          <MainButton>
            {id === "0" ? "Add New Product" : "Update Product"}
          </MainButton>
        </Form>
      </div>
    </>
  );
}
