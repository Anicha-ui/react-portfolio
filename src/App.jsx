import styles from './App.module.css'
import { Navbar } from './Components/Navbar/Navbar';
import { Hero } from './Components/Hero/Hero';
import { About } from "./Components/About/About";
import { Experience } from "./Components/Experience/Experience";
import { Projects } from "./Components/Projects/Projects";
import { Contact } from "./Components/Contact/Contact";
import { Portfolio } from "./Components/Portfolio/Portfolio";

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Navbar />
        <Routes>
          {/* Home Page (everything except Portfolio) */}
          <Route
            path="/"
            element={
              <>
                <About />
                <Projects />
                <Contact />
              </>
            }
          />
          
          {/* Other Pages */}
          <Route path="/about" element={<About />} />
          {<Route path="/portfolio" element={<Portfolio />} />}
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* 404 Page */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}


export default App
