import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Aside from "./components/Aside/Aside";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

function App(props) {
  return (
    <BrowserRouter>
      <div class="main_container">
        <Aside />
        <main class="main_wrapper">
          <Header />
          <div class="container">
            <Content
              state={props.state}
              dispatch={props.dispatch}
            />
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
