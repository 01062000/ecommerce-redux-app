import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import style from "./Filter.module.css";

const Filter = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [sortOrder, setSortOrder] = useState(searchParams.get("sort") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");
  function handelSortOrder(e) {
    setSearchParams((prev) => {
      console.log(prev);
      return { ...prev, sort: e.target.value };
    });
    setSortOrder(e.target.value);
    console.log(sortOrder);
  }
  function handelCategory(e) {
    setSearchParams({ category: e.target.value });
    setCategory(e.target.value);
    console.log(category);
  }
  return (
    <div className={style.filterSection}>
      <select name="category" onChange={(e) => handelCategory(e)}>
        <option>Category</option>
        <option>Men</option>
        <option>Women</option>
        <option>Kids</option>
      </select>
      <select name="sort" onChange={handelSortOrder}>
        <option>Price</option>
        <option value="high-to-low">High to Low</option>
        <option value="low-to-high">Low to High</option>
      </select>
    </div>
  );
};

export default Filter;
