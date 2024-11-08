import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./app.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
      <App />
    </StrictMode>
);
