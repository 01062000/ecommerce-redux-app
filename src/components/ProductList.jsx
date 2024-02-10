import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../Redux/ProductsSlice";
import Product from "./Product";

import { useSearchParams } from "react-router-dom";

import style from "./ProductList.module.css";

const ProductList = () => {
  const dispatch = useDispatch();

  const [getQueryParams] = useSearchParams();
  const sortOrder = getQueryParams.get("sort");
  console.log("productList re-rendered " + sortOrder);

  let products;

  if (sortOrder === "high-to-low") {
    const productsState = useSelector((state) => state.products);
    products = productsState.products.slice().sort((a, b) => {
      return b.price - a.price;
    });
  } else if (sortOrder === "low-to-high") {
    const productsState = useSelector((state) => state.products);
    products = productsState.products.slice().sort((a, b) => {
      return a.price - b.price;
    });
  } else {
    const productsState = useSelector((state) => state.products);
    products = productsState.products;
  }

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <div className={style.productListContainer}>
        {products?.map((product) => (
          <Product
            key={product.id}
            productId={product.id}
            productName={product.title}
            productDescription={product.description}
            productPrice={product.price}
            productImage={product.images[0]}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
