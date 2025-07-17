import "./Navbar.css";
import { products } from "../data/Data";
import { useState, useEffect } from "react";

export default function Navbar({ onCategoryChange }) {
  const categories = ["All", ...new Set(products.map((item) => item.category))];

  const [navcat, setNavcat] = useState(() => {
    return localStorage.getItem("activeCategory") || "All";
  });

  function handleClick(category) {
    setNavcat(category);
    localStorage.setItem("activeCategory", category);
    onCategoryChange(category);
  }

  useEffect(() => {
    onCategoryChange(navcat);
  }, []);

  return (
    <div className="navbarContainer">
      <div className="navbarCustom">
        {categories.map((category) => (
          <span
            className={category === navcat ? "active" : ""}
            key={category}
            onClick={() => handleClick(category)}
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
}
