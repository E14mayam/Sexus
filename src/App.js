import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import Home from "./components/Home";
import Blog from "./components/Blog"
import DarkSecrets from "./components/DarkSecrets";
import About from "./components/About";
import Forums from "./components/Forums";
import Header from "./components/Header";

function App() {
  return <div className="App text-center">
    <Header/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Forums" element={<Forums />} />
        <Route path="/DarkSecrets" element={<DarkSecrets />} />
        <Route path="/About" element={<About />} />
      </Routes>
  </div>;
}

export default App;
