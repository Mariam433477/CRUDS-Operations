import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { deleteProduct } from "../Custom/Api/fetchApi";
 

export default function MyTable({ id, name, price,onDelete}) {
   

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <div className="d-flex justify-content-around">
          <Link to={`${id}/edit`}>
            {" "}
            <FaEdit size={30} color="blue" />
          </Link>
          <Link to={`${id}`}>
            {" "}
            <FaEye size={30} color="green" />
          </Link>
          <MdDeleteForever onClick={()=> onDelete(id)} size={30} color="red" />
        </div>
      </td>
    </tr>
  );
}
