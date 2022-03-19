import './Portfolio.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Automation from './pages/Automation';
import Home from './pages/Home';


function Portfolio() {
  return (
    <div className="container">
      <Router>
        <header>
          <p>Navbar placeholder</p>
          <Link to="/">Home | </Link>
          <Link to="automation">Automation | </Link>
        </header>
        <main>
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
