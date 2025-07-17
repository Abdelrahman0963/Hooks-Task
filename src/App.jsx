import React, { useState } from "react";
import HeaderSection from "./components/header/HeaderSection";
import Navbar from "./components/Navbar/Navbar";
import ShopSection from "./components/shopSection/ShopSection";

export default function App() {
  return (
    <React.Fragment>
      <div className="hero container-fluid">
        <HeaderSection />
        <ShopSection />
      </div>
    </React.Fragment>
  );
}
