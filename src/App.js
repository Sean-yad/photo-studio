import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <Router>
      <nav className="flex-container">
        <h1 className="logo">
            <Link to="/"> Shayan Yadegari </Link>
        </h1>
        <ul className="navigation">
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/About"> About </Link>
          </li>
          <li>
            <Link to="/Profile"> Profile </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <div> Footer </div>
    </Router>
  );
}

export default App;
