import React from "react";
import style from "./Button.module.css";

const Button = ({ children, onClick }) => {
  return (
    <>
      <button type="submit" className={style.buttonDesign} onClick={onClick}>
        {children}
      </button>
    </>
  );
};
export default Button;
