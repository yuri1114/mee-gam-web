import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/global.scss";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={`${import.meta.env.VITE_PUBLIC_URL}`}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
