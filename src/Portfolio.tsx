import './Portfolio.css';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Automation from './pages/Automation';


function Portfolio() {
  return (
    <div className="container">
      <Router>
        <header>
          <p>Navbar placeholder</p>
          <a href="/">Home | </a>

          <a href="/automation">Automation | </a>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/automation" element={<Automation />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default Portfolio;
