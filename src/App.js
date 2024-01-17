import About from "./About";
import "./App.css";
import BookTable from "./BookTable";
import FoodMenu from "./FoodMenu";
import Home from "./Home";
import Navbar from "./Navbar";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#FAE5D3]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/about" element={<About /> }  />
        <Route path="/foodmenu" element={<FoodMenu />}  />
        <Route path="/booktable" element={<BookTable />}  />
      </Routes>
    </div>
  );
}

export default App;
