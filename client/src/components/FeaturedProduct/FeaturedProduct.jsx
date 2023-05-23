import React, { useState, useEffect } from "react";
import "./FeaturedProduct.scss";
import { Card } from "../Card/Card";
import useFetch from "../../hooks/useFetch";

export const FeaturedProduct = ({ type }) => {
  /*   const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic Tshirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Shirt",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Frock",
      oldPrice: 19,
      price: 12,
    },
  ]; */
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
  console.log(data);
  return (
    <div className="featuredProduct">
      <div className="top">
        <h1>{type} products</h1>
        <p>
        Open your door to the world of Fashionstore with our originall and amazing prducts. Our store is a best e-store for shopping. We provide reasonable prices as well!. We also do Home shipping and its FREE! . Welcome to the Best e-store "Fashionstore"
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};
