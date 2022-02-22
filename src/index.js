import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import App from "./App";
import "./App.css";

function App () {
  
function App() {
  return (
    <div className="App">
    <Weather />
     </div>
  );
}
      

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
