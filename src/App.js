import React from "react";
import Header from "./components/Navbar/Header";
import NavLinkStructure from "./components/Navbar/Navlink-structure";

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <NavLinkStructure />
      </div>
    </div>
  );
}
