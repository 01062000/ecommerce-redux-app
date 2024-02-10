import React, { useState } from "react";
import style from "./Navbar.module.css";
import { useSelector } from "react-redux";
import Model from "./Model";
import Form from "./Form";
import CartSection from "./CartSection";
import Button from "./Button";

const Navbar = () => {
  const { noOfItemsInCart } = useSelector((state) => state.cart);
  console.log(noOfItemsInCart);

  const [isModelVisible, setIsModelVisible] = useState(false);

  const [isCartVisible, setIsCartVisible] = useState(false);
  const showCart = () => {
    setIsCartVisible(true);
  };

  const hideCart = () => {
    setIsCartVisible(false);
  };

  function hideModel() {
    setIsModelVisible(false);
  }

  function showModel() {
    setIsModelVisible(true);
  }

  return (
    <>
      <div className={style.navbarContainer}>
        <h2>eCommerce</h2>
        <Button onClick={showModel}>Add Product</Button>
        {isModelVisible ? (
          <Model hideModel={hideModel}>
            <Form />
          </Model>
        ) : null}
        <h2 onClick={showCart}>
          Cart : <span>{noOfItemsInCart}</span>
        </h2>
        {isCartVisible ? (
          <Model hideModel={hideCart}>
            <CartSection />
          </Model>
        ) : null}
      </div>
    </>
  );
};

export default Navbar;
