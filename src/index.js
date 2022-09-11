import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const state = {
  last: [
    {
      id: "1",
      title: "Hello world 3",
      category: "Java",
    },
    {
      id: "2",
      title: "Hello world 4",
      category: "Rust",
    },
  ],
  favorites: [
    {
      id: "2",
      title: "Hello world 4",
      category: "Rust",
    },
    {
      id: "3",
      title: "Hello world 6",
      category: "Python",
    },
  ],
  subscribe: [
    {
      id: "3",
      title: "Hello world 6",
      category: "Python",
    },
  ],
  main: [
    {
      id: "1",
      title: "Hello world 3",
      category: "Java",
    },
    {
      id: "2",
      title: "Hello world 4",
      category: "Rust",
    },
    {
      id: "3",
      title: "Hello world 6",
      category: "Python",
    },
  ],
};

let sendPost = (data) => {
  state.main.push(data);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App state={state} sendPost={sendPost} />
  </React.StrictMode>
);

reportWebVitals();
