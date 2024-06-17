import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import ProductList from "./components/ProductList";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <ProductList />
  </React.StrictMode>
);
