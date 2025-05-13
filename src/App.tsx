import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/Homepages";
import Themes from "./components/Themes";

function App() {
  return (
    <div className="px relative flex flex-col scroll-smooth">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Themes />
    </div>
  );
}

export default App;
