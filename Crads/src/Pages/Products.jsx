import React, { useEffect, useState } from "react";
import { MainButton } from "../Custom/MainButton";
import MyTable from "../Components/MyTable";
import { Link, useParams } from "react-router-dom";
import { Table, Spinner, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductAction,
  getAllProductAction,
} from "../store/slices/productSlice";

export default function Products() {
  const { products, isLoading, errors } = useSelector(
    (state) => state.productSlice
  );

  const dispatch = useDispatch();
  console.log(products);

  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    dispatch(getAllProductAction());
  }, []);
  const deleteHandler = (id) => {
    dispatch(deleteProductAction(id));
  };
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
  };
  const filteredProducts = products.filter((p) => {
    if (!searchInput.trim()) return true;
    const lowerSearch = searchInput.toLowerCase();
    return (
      p.name.toLowerCase().includes(lowerSearch) ||
      p.id.toString().includes(lowerSearch)
    );
  });
  return (
    <>
      <div className="container">
        <h1 className="text-center text-success my-5">Our Products</h1>
        <div className="d-flex justify-content-around">
          <Link to="0/edit">
            {" "}
            <MainButton>Add Product</MainButton>
          </Link>
          <input
            type="text"
            className="form-control w-50"
            placeholder="Search"
            onChange={(e) => searchItems(e.target.value)}
            value={searchInput}
          />
        </div>
        {isLoading && (
          <div className="text-center my-5">
            <Spinner animation="border" variant="success" />
            <p>Loading products...</p>
          </div>
        )}
        {errors && (
          <Alert variant="danger" className="my-4 text-center">
            {errors}
          </Alert>
        )}
        {!isLoading && !errors && (
          <div className="mt-5">
            <Table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Product Name</th>
                  <th>Product Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((p) => {
                  return (
                    <MyTable
                      id={p.id}
                      name={p.name}
                      price={p.price}
                      key={p.id}
                      onDelete={deleteHandler}
                    />
                  );
                })}
              </tbody>
            </Table>
          </div>
        )}
      </div>
    </>
  );
}
