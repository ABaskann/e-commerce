import React from "react";
import { useLoaderData } from "react-router-dom";

function Jewelry() {
  const datas = useLoaderData();
  return (
    <>
      {datas.map((data, index) => {
        return <p key={index}>{data.title}</p>;
      })}
    </>
  );
}

export default Jewelry;
export const jeweleryloader = () => {
  return fetch('https://fakestoreapi.com/products/category/jewelery')
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('Hata:', error);
    });
};

