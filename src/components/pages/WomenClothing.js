import React from "react";

import { useQuery } from "react-query";

const fetchWomenData = async () => {
  const response = await fetch(
    "https://fakestoreapi.com/products/category/women's%20clothing"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

function WomenClothing() {
  const { data, error, isLoading } = useQuery("WomenData", fetchWomenData);

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

export default WomenClothing;
