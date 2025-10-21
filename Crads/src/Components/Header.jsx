import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
        <Nav className="ms-auto">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link text-danger" : "nav-link"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link text-danger" : "nav-link"
            }
            to="/products"
          >
            Products
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link text-danger" : "nav-link"
            }
            to="/login"
          >
            Login
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}
