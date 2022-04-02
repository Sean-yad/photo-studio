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
        <div class="block_footer">
            <div class="container">
                <footer>
                    <div class="row">
                        <div class="col">
                        </div>
                    </div>
                    
                    <div class="row_two">
                        <div class="col"><a href="https://www.facebook.com"><img src="images/facebook_logo35px.png" alt="fb logo" /></a></div>
                        <div class="col"><a href="https://www.instagram.com"><img src="images/instagram_logo35px.png" alt="ig logo" /></a></div>
                    </div>

                </footer>
            </div>
        </div>
        <div class="block_copyright">
            <div class="container">
                <h4>©2021 Some Guy</h4>
            </div>
        </div>
      </Router>
   
  );
}

export default App;