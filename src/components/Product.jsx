import React from "react";
import style from "./Product.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CartSlice";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Product = ({
  productId,
  productName,
  productDescription,
  productPrice,
  productImage,
}) => {
  const dispatch = useDispatch();

  const [editMode, setEditMode] = React.useState(false);
  const [productDetails, setProductDetails] = React.useState({
    productName,
    productDescription,
    productPrice,
  });

  const handelProductChange = (e) => {
    setProductDetails((prevProductDetails) => {
      return {
        ...prevProductDetails,
        [e.target.name]: e.target.value,
      };
    });
  };

  const enableEditMode = (e) => {
    e.stopPropagation();
    setEditMode(true);
  };

  const diableEditMode = (e) => {
    setEditMode(false);
  };

  const updateProductDetails = async (updatedProductDetails) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/${productId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: updatedProductDetails.productName,
            description: updatedProductDetails.productDescription,
            price: updatedProductDetails.productPrice,
          }),
        },
      );
      const updatedProduct = await response.json();
      console.log(updatedProduct);
      toast.success("Product updated", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } catch (err) {
      toast.error("Something went wrong :(", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      setProductDetails({
        productName,
        productDescription,
        productPrice,
      });
    }
  };

  const updateProduct = (updatedProductDetails) => {
    setEditMode(false);
    console.log(updatedProductDetails);
    updateProductDetails(updatedProductDetails);
  };

  const handelAddToCart = (productId) => {
    toast.success("Added to cart", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
    console.log("clicked");
    dispatch(addToCart(productId));
  };
  return (
    <>
      <div className={style.productCard}>
        <img src={productImage} alt={`${productName}`} />
        <div className={style.productDetails}>
          {editMode ? (
            <input
              type="text"
              name="productName"
              value={productDetails.productName}
              onChange={(e) => handelProductChange(e)}
            />
          ) : (
            <h2>{productDetails.productName}</h2>
          )}
          {editMode ? (
            <textarea
              rows="4"
              cols="4"
              type="text"
              name="productDescription"
              value={productDetails.productDescription}
              onChange={(e) => handelProductChange(e)}
            />
          ) : (
            <p>{productDetails.productDescription}</p>
          )}
          {editMode ? (
            <input
              type="number"
              name="productPrice"
              value={productDetails.productPrice}
              onChange={(e) => handelProductChange(e)}
            />
          ) : (
            <p> 💰 {productDetails.productPrice}</p>
          )}
          {editMode ? (
            <div className={style.buttonSection}>
              <button
                className="defaultBtton"
                onClick={() => updateProduct(productDetails)}
              >
                Update
              </button>
              <span
                style={{ cursor: "pointer" }}
                onClick={(e) => diableEditMode(e)}
              >
                ❌
              </span>
            </div>
          ) : (
            <div className={style.buttonSection}>
              <button
                className="defaultBtton"
                onClick={(e) => handelAddToCart(productId)}
              >
                Add to Cart
              </button>
              <button
                className="defaultBtton"
                onClick={(e) => enableEditMode(e)}
              >
                Edit
              </button>
              <ToastContainer />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
