import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.scss";
import { Cart } from "../Cart/Cart";

export const Navbar = () => {
  const [open, setOpen] = useState(false) 
  const products = useSelector(state=>state.cart.products)
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img
              style={{ height: "15px", width: "20px" }} 
              
              src="/img/USflag.png"
            />
            <KeyboardArrowDownIcon /> 
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link to="/products/1" className="link">Women</Link>
          </div>
          <div className="item">
            <Link to="/products/2"className="link">Men</Link>
          </div>
          <div className="item">
            <Link to="/products/3" className="link">Chidren</Link>
          </div>
          <div className="item">
            <Link to="/products/4"className="link">Accessories</Link>
          </div>
        </div>
        <div className="center">
          <Link to="/" className="link">FASHIONSTORE</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link to="/"className="link">Homepage</Link>
          </div>
          <div className="item">
            <Link to="/"className="link">About</Link>
          </div>

          <div className="item">
            <Link to="/" className="link">Contact</Link>
          </div>

          <div className="item">
            <Link to="/" className="link">Stores</Link>
          </div>
        <div className="icons">
          <SearchIcon />
          <PersonOutlineIcon />
          <FavoriteBorderIcon />
          <div className="cartIcon" onClick={() => setOpen(!open)}> 
            <ShoppingCartIcon />
            <span>{products.length}</span>
          </div>
        </div>
        </div>
      </div>
      {open && <Cart /> }
    </div>
  );
};
