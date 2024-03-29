import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home.js";
import AboutMe from "./pages/AboutMe/AboutMe.js";
import Projects from "./pages/Projects/Projects.js";
import WorkExperience from "./pages/WorkExperience/WorkExperience.js";
import Contact from "./pages/Contact/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  useEffect(() => {
    document.title = "NEXUS";
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<AboutMe />} />
              <Route path="projects" element={<Projects />} />
              <Route path="workexperience" element={<WorkExperience />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
