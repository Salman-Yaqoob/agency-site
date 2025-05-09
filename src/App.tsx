import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Themes from "./components/Themes";

function App() {
  return (
    <div className="relative flex flex-col lg:px-16">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Themes />
    </div>
  );
}

export default App;
