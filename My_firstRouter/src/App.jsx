import { Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import About from "./about";

function App() {
  return (
    <>
      <nav>
        <Link to="/home">Home</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;