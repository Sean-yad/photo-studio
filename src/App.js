import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/ErrorPage";


function App() {
  return (
    
      <Router>
        <nav className="flex-container">
          <h1 className="logo">
            <Link to="/"> Logo </Link>
          </h1>
          <ul className="navigation">
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/Portfolio"> Portfolio </Link>
            </li>
            <li>
              <Link to="/Blog"> Blog </Link>
            </li>
            <li>
              <Link to="/About"> About</Link>
            </li>
            <li>
              <Link to="/Contact"> Contact </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <div> Footer </div>
      </Router>
   
  );
}

export default App;