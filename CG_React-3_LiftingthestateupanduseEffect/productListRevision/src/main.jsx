import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductListRevision from "./components/ProductListRevision.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // Code will execute in strict mode
  <React.StrictMode>
    {/* <App /> */}
    <ProductListRevision />
  </React.StrictMode>
);
