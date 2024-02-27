import App from "./components/App";
import "./index.css";
import ReactDom from "react-dom/client";


const rootEl =document.querySelector("#root");

const root = ReactDom.createRoot(rootEl);

root.render(<App />);