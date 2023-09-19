import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import styles from "../../css/card.module.css";

function Home() {
  const datas = useLoaderData();
  return (
    <div className={styles.container}>
      {datas.map((data, index) => {
        return (
          <Link
            to={"product/" + data.id.toString()}
            key={data.id}
            className={styles.card}
          >
            <div className={styles.info_container}>
              <p className={styles.title}>{data.title}</p>
              <p className={styles.category}>{data.category}</p>
            </div>
            <div className={styles.image_container}>
              <img className={styles.image} src={data.image} alt="Product" />
            </div>
            <p className={styles.price}>{data.price}$</p>            
            <div className={styles.sizes}>
              <button className={styles.size}>S</button>
              <button className={styles.size}>M</button>
              <button className={styles.size}>L</button>
              <button className={styles.size}>XL</button>
            </div>
            <button className={styles.button}>Add Cart</button>
          </Link>
        );
      })}
    </div>
  );
}

export default Home;

export const dataLoader = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};
