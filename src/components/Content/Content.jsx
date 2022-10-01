import { Route, Routes } from "react-router-dom";
import Title from "./Title/Title";
import Posts from "./Posts/Posts";
import Addpost from "./Posts/Addpost/Addpost";

const Content = (props) => {
  
  return (
    <Routes>
      <Route path="/" element={<Posts content={props.store.getState().articles.main} />} />
      <Route path="/favorites" element={<Posts content={props.store.getState().articles.favorites} />} />
      <Route path="/last" element={<Posts content={props.store.getState().articles.last} />} />
      <Route path="/subscribe" element={<Posts content={props.store.getState().articles.subscribe} />} />
      <Route path="/statistics" element={<Title />} />
      <Route path="/settings" element={<Title />} />
      <Route path="/addpost" element={<Addpost dispatch={props.dispatch} default={props.store.getState().defaultTitle.defaultTitle} />} />
    </Routes>
  );
};

export default Content;
