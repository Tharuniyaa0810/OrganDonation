import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DonorProvider } from "./DonorContext";

ReactDOM.render(
  < DonorProvider>
    <App />
  </DonorProvider>,
  document.getElementById("root")
);
