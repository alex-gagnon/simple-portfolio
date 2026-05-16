import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PROJECTS } from './data/projects';
import './index.css';
import { Home, Projects } from './pages';
import Portfolio from './Portfolio';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects projects={PROJECTS} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals(console.log);
