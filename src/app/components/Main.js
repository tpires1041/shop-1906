"use client"
<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import Spinner from './Spinner';
import { useEffect, useState } from 'react';
>>>>>>> ab65f2a0412143becd4a0b73531deab79d653c0e
import Image from "next/image";
import styles from "../styles/main.module.css";
import Spinner from "./Spinner";


<<<<<<< HEAD

export default function Main() {

  const [listProduct, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async() => {
      const response = await fetch("https://fakestoreapi.com/products")
      const data = await response.json();
      setProduct(data);
=======
export default function Main() {

  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products/", {
        cache: "no-cache",
      });

      const data = await response.json();

      setListProduct(data);
>>>>>>> ab65f2a0412143becd4a0b73531deab79d653c0e
    }
    getProduct();
  }, []);

  const orderAz = () => {
<<<<<<< HEAD
    const listAux = [...listProduct].sort((a,b) => a.title.localeCompare(b.title) );

    setProduct(listAux)
  }

  const orderZa = () => {
    let listAux = [...listProduct].sort((a,b) => a.title.localeCompare(b.title) );
    listAux = listAux.reverse();
    setProduct(listAux)
  }

  const orderPriceMenor = () => {
    let listAux = [...listProduct].sort((a,b) => a.price - b.price)

    setProduct(listAux)
  }

  const orderPriceMaior = () => {
    let listAux = [...listProduct].sort((a,b) => b.price - a.price)

    setProduct(listAux)
  }

  if(listProduct[0] == null){
=======
    const listAux = [...listProduct].sort((a, b) => a.title.localeCompare(b.title));

    setListProduct(listAux);
  }

  const orderZa = () => {
    let listAux = [...listProduct].sort((a, b) => a.title.localeCompare(b.title));
    listAux = listAux.reverse();

    setListProduct(listAux);
  }

  const orderLowHigh = () => {
    const listAux = [...listProduct].sort((a, b) => a.price - b.price);
    setListProduct(listAux);
  }

  const orderHighLow = () => {
    let listAux = [...listProduct].sort((a, b) => a.price - b.price);
    listAux = listAux.reverse();

    setListProduct(listAux);
  }

  if (listProduct[0] == null){
>>>>>>> ab65f2a0412143becd4a0b73531deab79d653c0e
    return <Spinner/>
  }

  return (
    <>
<<<<<<< HEAD
    <div className={styles.filters}>
      <div>
        <button onClick={ orderAz }> Az</button>
        <button onClick={ orderZa }> Za</button>
        <button onClick={ orderPriceMaior }> Preço maior pro menor</button>
        <button onClick={ orderPriceMenor }> Preço menor pro maior</button>
      </div>
    </div>
=======
      <div className={styles.filters}>
        <div>
          <button onClick={orderAz}>A-z</button>
          <button onClick={orderZa}>z-A</button>
          <button onClick={orderLowHigh}>low-high </button>
          <button onClick={orderHighLow}>high-low</button>
        </div>
      </div>

>>>>>>> ab65f2a0412143becd4a0b73531deab79d653c0e
      <main className={styles.main}>
        {listProduct.map((products) => (
          <div className={styles.card} key={products.id}>
            <p>{products.title.slice(0, 6)}...</p>
<<<<<<< HEAD
            <Image width={300} height={300} src={products.image} />
            <p>{products.category}</p>
            <p className={styles.description}>
              {products.description.slice(0, 250)}...
            </p>
            <p>US${products.price}</p>
=======

            <Image width={300} height={300} src={products.image} />

            <p>{products.category}</p>

            <p className={styles.description}>
              {products.description.slice(0, 250)}...
            </p>

            <p>US${products.price}</p>

>>>>>>> ab65f2a0412143becd4a0b73531deab79d653c0e
            <p>{products.rating.count}</p>
          </div>
        ))}
      </main>
    </>
  );
}
