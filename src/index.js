import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";



const state = {
  news: [
    {
      id: "3567",
      title: "Hello world 3",
      category: "Java",
    },
    {
      id: "3354",
      title: "Hello world 4",
      category: "Rust",
    },
    {
    id: "0000",
    title: "Hello world 6",
    category: "Python",
  },
  ]
  }


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App state={state}/>
  </React.StrictMode>
);

reportWebVitals();
