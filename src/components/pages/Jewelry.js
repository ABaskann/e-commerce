import React from "react";
import { useQuery } from "react-query";



const fetchJewelryData = async () => {
  const response = await fetch('https://fakestoreapi.com/products/category/jewelery');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function Jewelry() {
  const { data, error, isLoading } = useQuery("jewelryData", fetchJewelryData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      {data.map((data, index) => {
        return <p key={index}>{data.title}</p>;
      })}
    </>
  );
}

export default Jewelry;
