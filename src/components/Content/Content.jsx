import { Route, Routes } from "react-router-dom";
import PostsContainer from "./Posts/PostsContainer";
import UsersContainer from "./Users/UsersContainer";
import UserContainer from "./Users/User/UserContainer";
import ArticlesContainer from "./Articles/ArticlesContainer";

const Content = (props) => {
  return (
    <Routes>
      <Route path="/" element={<ArticlesContainer />} />
      <Route path="/favorites" element={<PostsContainer />} />
      <Route path="/articles" element={<ArticlesContainer />} />
      <Route path="/users" element={<UsersContainer />} />
      <Route path="/profile/:userId" element={<UserContainer />} />
    </Routes>
  );
};

export default Content;
