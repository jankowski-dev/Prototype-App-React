import { Route, Routes } from "react-router-dom";
import Title from "./Title/Title";
import AddpostContainer from "./Posts/Addpost/AddpostContainer";
import PostsContainer from "./Posts/PostsContainer";

const Content = (props) => {
  return (
    <Routes>
      <Route path="/" element={<PostsContainer />} />
      <Route path="/favorites" element={<PostsContainer />} />
      <Route path="/last" element={<PostsContainer />} />
      <Route path="/subscribe" element={<PostsContainer />} />
      <Route path="/statistics" element={<Title />} />
      <Route path="/settings" element={<Title />} />
      <Route path="/addpost" element={<AddpostContainer />} />
    </Routes>
  );
};

export default Content;
