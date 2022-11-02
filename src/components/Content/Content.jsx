import { Route, Routes } from "react-router-dom";
import Title from "./Title/Title";
import AddpostContainer from "./Posts/Addpost/AddpostContainer";
import PostsContainer from "./Posts/PostsContainer";
import UsersContainer from "./Users/UsersContainer";
import UserContainer from "./Users/User/UserContainer";
import ArticlesContainer from "./Posts/Articles/ArticlesContainer";

const Content = (props) => {
  return (
    <Routes>
      <Route path="/" element={<PostsContainer />} />
      <Route path="/favorites" element={<PostsContainer />} />
      <Route path="/last" element={<ArticlesContainer/>} />
      <Route path="/subscribe" element={<PostsContainer />} />
      <Route path="/statistics" element={<Title />} />
      <Route path="/users" element={<UsersContainer/>} />
      <Route path="/addpost" element={<AddpostContainer />} />
      <Route path="/profile/:userId" element={<UserContainer />} />
    </Routes>
  );
};

export default Content;
