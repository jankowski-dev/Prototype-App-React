import { Route, Routes } from "react-router-dom";
import Title from "./Title/Title";
import Short from "./Short/Short";


const Content = (props) => {

let news = props.state.news.map((el) => {
  return (<Short id={el.id} title={el.title} category={el.category} />)
})

return (
  <div class="wrapper">
    <Routes>
    <Route path="/home" element={news} />
    <Route path="/favorites" element={news} />
    <Route path="/last" element={news} />
    <Route path="/subscribe" element={<Title />} />
    <Route path="/statistics" element={<Title />} />
    <Route path="/settings" element={<Title />} />
    </Routes>
  </div>
);

};

export default Content;
