import React from 'react'
import { useQuery } from 'react-query'

const fetchElectronicsData = async () => {
  const response = await fetch('https://fakestoreapi.com/products/category/electronics');
  if(!response.ok){
    throw new Error('No Response')
  }
  return response.json();
}

function Electronics() {
  const {data,error,isLoading} = useQuery("electronicsData",fetchElectronicsData);

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
  )
}

export default Electronics