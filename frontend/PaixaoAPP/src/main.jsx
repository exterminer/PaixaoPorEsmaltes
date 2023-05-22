import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ResetCss } from "./styles/reset.js";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ResetCss />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
