import React from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./CartSection.module.css";
import { removeFromCart } from "../Redux/CartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const CartSection = () => {
  const dispatch = useDispatch();
  const itemsId = useSelector((state) => state.cart.items);
  const products = useSelector((state) => state.products.products);
  const productsInCart = products.filter((product) =>
    itemsId.includes(product.id),
  );
  const initialValue = 0;
  const totalCost = productsInCart.reduce(
    (acc, product) => acc + product.price,
    initialValue,
  );

  const removeFromCartHandler = (id) => {
    toast.success("Removed from cart", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
    console.log("remove" + id);
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <ul className={style.cartList}>
        {productsInCart.length === 0
          ? "No items in cart"
          : productsInCart.map((product) => (
              <li key={product.id}>
                <span>{product.title}</span> <span>{product.price}</span>
                <span onClick={() => removeFromCartHandler(product.id)}>
                  Remove
                </span>
              </li>
            ))}
      </ul>
      {productsInCart.length === 0 ? null : <p>Total : 💵 {totalCost}</p>}
    </>
  );
};
export default CartSection;
