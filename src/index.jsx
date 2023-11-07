import React from "react";
import { createRoot } from "react-dom/client";

import "./shared/styles/index.css";
import App from "./app";

const rootView = document.getElementById("root");
const root = createRoot(rootView);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
