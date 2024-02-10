import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addProduct } from "../Redux/ProductsSlice";

const Form = () => {
  const dispatch = useDispatch();
  const productNameRef = useRef();
  const productImageUrlRef = useRef();
  const productPriceRef = useRef();
  function submitHandler(e) {
    e.preventDefault();
    const productName = productNameRef.current.value;
    const productImageUrl = productImageUrlRef.current.value;
    const productPrice = productPriceRef.current.value;
    console.log(productName, productImageUrl, productPrice);
    dispatch(
      addProduct({
        id: Date.now(),
        title: productName,
        images: productImageUrl,
        price: productPrice,
      }),
    );
    productNameRef.current.value = "";
    productPriceRef.current.value = "";
    productImageUrlRef.current.value = "";
    toast.success("Product Added", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  }
  return (
    <>
      <input
        type="text"
        name="productName"
        placeholder="Product Name"
        ref={productNameRef}
      />
      <input
        type="text"
        name="productImageUrl"
        placeholder="Product Image"
        ref={productImageUrlRef}
      />
      <input
        type="number"
        name="productPrice"
        placeholder="Product Price"
        ref={productPriceRef}
      />
      <button type="submit" onClick={submitHandler}>
        Add Product
      </button>
    </>
  );
};

export default Form;
