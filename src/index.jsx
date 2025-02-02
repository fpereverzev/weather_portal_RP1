import React from "react";
import ReactDOM from "react-dom/client";  // Заменяем импорт
import App from "./components/App";
import "./styles/App.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
