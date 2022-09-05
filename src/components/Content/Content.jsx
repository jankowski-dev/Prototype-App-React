import { Route, Routes } from "react-router-dom";
import Shortnews from "../Shortnews/Shortnews";

const Content = () => {
  return (
    <div class="wrapper">
      <Routes>
      <Route path="/home" element={<Shortnews />} />
      <Route path="/statistics" element={<Shortnews />} />
      <Route path="/settings" element={<Shortnews />} />
      </Routes>
    </div>
  );
};

export default Content;
