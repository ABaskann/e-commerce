import React from 'react'
import { useLoaderData } from "react-router-dom";

function WomenClothing() {
  const datas = useLoaderData();
  return (
    <>
      {datas.map((data, index) => {
        return <p key={index}>{data.title}</p>;
      })}
    </>
  )
}

export default WomenClothing
export const womenClothingloader = () => {
  return fetch('https://fakestoreapi.com/products/category/jewelery')
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('Hata:', error);
    });
};