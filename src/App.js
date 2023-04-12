import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "src/components/NavBar.js";
import Home from "src/pages/Home.js";
import AboutMe from "src/pages/AboutMe.js";
import Projects from "src/pages/Projects.js";
import WorkExperience from "src/pages/WorkExperience.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavBar />}>
                    <Route index element={<Home />} />
                    <Route path="aboutme" element={<AboutMe />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="workexperience" element={<WorkExperience />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
