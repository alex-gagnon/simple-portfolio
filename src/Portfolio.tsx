import './Portfolio.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home, Projects } from './pages';
import { Header } from './components/Header/Header';
import { PROJECTS } from './data/projects';
import { AboutMe } from './data/about_me';


function Portfolio() {
  return (
    <div className="container">
      <Router>
          <Header  />
          <main className="portfolio-main">
            <Routes>
              <Route path="/">
                <Route index element={<Home {...AboutMe} />} />
                <Route path="projects" element={<Projects projects={PROJECTS} />} />
              </Route>
            </Routes>
          </main>
      </Router>
    </div>
  );
}

export default Portfolio;
