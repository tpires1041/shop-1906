"use client"

import { useEffect, useState } from "react";
import Spinner from './Spinner';
import Image from "next/image";
import styles from "../styles/main.module.css";
import ErrorFetch from "./ErrorFetch";



export default function Main() {

  const [listProduct, setListProduct] = useState([]);
  const [listComplete, setListComplete] = useState([]);
  const [textSearch, setTextSearch] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/", {
          cache: "no-cache",
        });

        const data = await response.json();

        setListProduct(data);
        setListComplete(data);
      }
      catch {
        setIsError(true);
      }
    }
    getProduct();
  }, []);

  const orderAz = () => {
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

  const search = (text) => {
    setTextSearch(text);

    if (text.trim() == "") {
      setListProduct(listComplete);
      return
    }
    const newList = listProduct.filter((product) => product.title.toUpperCase().includes(textSearch.toUpperCase().trim()));
    setListProduct(newList);
  }
  if (isError == true){
    return <ErrorFetch/>
  }

  if (listComplete[0] == null) {
    return (
      <main className={styles.main}>
        <Spinner />
      </main>
    )
  }

  return (
    <>
      <div className={styles.filters}>
        <div>
          <input type="text" value={textSearch} placeholder="Pesquise um produto" onChange={(event) => search(event.target.value)} />
          <button onClick={orderAz}>A-z</button>
          <button onClick={orderZa}>z-A</button>
          <button onClick={orderLowHigh}>low-high </button>
          <button onClick={orderHighLow}>high-low</button>
        </div>
      </div>

      <main className={styles.main}>
        {listProduct.map((products) => (
          <div className={styles.card} key={products.id}>
            <p>{products.title.slice(0, 6)}...</p>

            <Image width={300} height={300} src={products.image} />

            <p>{products.category}</p>

            <p className={styles.description}>
              {products.description.slice(0, 250)}...
            </p>

            <p>US${products.price}</p>

            <p>{products.rating.count}</p>
          </div>
        ))}
      </main>
    </>
  );
}