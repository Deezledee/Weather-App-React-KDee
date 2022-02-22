import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./App.css";

function App () {
  
  return <div className="App" />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
