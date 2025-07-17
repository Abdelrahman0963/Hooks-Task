import React, { useEffect, useState } from "react";
import { products } from "../data/Data";
import Navbar from "../Navbar/Navbar";
import "./ShopSection.css";
import RangeFilter from "../RangeFilter/RangeFilter";
import { FaCartPlus } from "react-icons/fa";

export default function ShopSection() {
  const prices = products.map((item) => item.price).sort((a, b) => a - b);
  const minPrice = prices[0];
  const maxPrice = prices[prices.length - 1];

  const [activeCategory, setActiveCategory] = useState("All");
  const [minValue, setMinValue] = useState(minPrice);
  const [maxValue, setMaxValue] = useState(maxPrice);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const result = products.filter((item) => {
      const inCategory =
        activeCategory === "All" ? true : item.category === activeCategory;
      const inRange = item.price >= minValue && item.price <= maxValue;
      return inCategory && inRange;
    });
    localStorage.setItem("activeCategory", activeCategory);
    setFilteredProducts(result);
  }, [activeCategory, minValue, maxValue]);

  return (
    <>
      <Navbar
        onCategoryChange={setActiveCategory}
        activeCategory={activeCategory}
      />
      <RangeFilter
        minValue={minValue}
        maxValue={maxValue}
        setMinValue={setMinValue}
        setMaxValue={setMaxValue}
        minPrice={minPrice}
        maxPrice={maxPrice}
      />

      <div className="shopCards">
        {filteredProducts.map((item, index) => (
          <div key={index} className="shopCard">
            <div className="image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="addToCart">
              <FaCartPlus />
            </div>
            <div className="content">
              <h5>{item.title}</h5>
              <p>{item.description}</p>
              <h6>${item.price}</h6>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
