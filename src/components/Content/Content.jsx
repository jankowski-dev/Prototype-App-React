import { Route, Routes } from "react-router-dom";
import Title from "./Title/Title";
import Posts from "./Posts/Posts";

const Content = (props) => {

  return (
    <Routes>
      <Route path="/" element={<Posts content={props.state.main} />} />
      <Route path="/favorites" element={<Posts content={props.state.favorites} />} />
      <Route path="/last" element={<Posts content={props.state.last} />} />
      <Route path="/subscribe" element={<Posts content={props.state.subscribe} />} />
      <Route path="/statistics" element={<Title />} />
      <Route path="/settings" element={<Title />} />
    </Routes>
  );
};

export default Content;
