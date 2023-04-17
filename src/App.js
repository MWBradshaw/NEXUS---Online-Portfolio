import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Home from "./pages/Home.js";
import AboutMe from "./pages/AboutMe.js";
import Projects from "./pages/Projects.js";
import WorkExperience from "./pages/WorkExperience.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavBar />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<AboutMe />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="workexperience" element={<WorkExperience />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
