import { createContext } from "react";
import App from "./App";
import "./index.css";
import ReactDOM from "react-dom/client";

const rootEl = document.querySelector("#root");

const root = ReactDOM.createRoot(rootEl);

export const GeneralContext = createContext();

root.render(
  <App/>
);
