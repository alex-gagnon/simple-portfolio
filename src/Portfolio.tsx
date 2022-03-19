import './Portfolio.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Automation from './pages/Automation';
import Home from './pages/Home';


function Portfolio() {
  return (
    <div className="container">
      <Router>
        <header className="portfolio-header">
          <p>Navbar placeholder</p>
          <div>
            <Link to="/" className="portfolio-link">Home | </Link>
            <Link to="automation" className="portfolio-link">Automation | </Link>
          </div>
        </header>
        <main className="portfolio-main">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="automation" element={<Automation />} />
            </Route>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default Portfolio;
