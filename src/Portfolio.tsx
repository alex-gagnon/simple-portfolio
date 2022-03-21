import './Portfolio.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Automation from './pages/Automation';
import Home from './pages/Home';
import { Header } from './components/Header';
import { PRIMARY_COLOR } from './data/constants';


function Portfolio() {
  return (
    <div className="container">
      <Router>
        <Header  />
        <main className="portfolio-main" style={{backgroundColor: PRIMARY_COLOR}}>
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
