import { Route, Routes } from "react-router-dom";
import Shortnews from "../Shortnews/Shortnews";
import Title from "../Title/Title";


let data = [ {
  id: "3354",
  title: "Hello world",
  category: "Javascript",
},
{
  id: "3234",
  title: "Hello world 2",
  category: "Javascript",
},
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
  id: "3314",
  title: "Hello world 5",
  category: "Python",
},
]

let dataHome = data.map((el) => {
  return (<Shortnews id={el.id} title={el.title} category={el.category} />)
})

const Content = () => {
  return (
    <div class="wrapper">
      <Routes>
      <Route path="/home" element={dataHome} />
      <Route path="/favorites" element={<Title />} />
      <Route path="/last" element={<Title />} />
      <Route path="/subscribe" element={<Title />} />
      <Route path="/statistics" element={<Title />} />
      <Route path="/settings" element={<Title />} />
      </Routes>
    </div>
  );
};

export default Content;
