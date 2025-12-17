import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";

import Home from "./pages/Home.js";
import Bio from "./pages/Bio.js";
import Projects from "./pages/Project.js";
import Experiences from "./pages/Experiences.js";
import Resume from "./pages/Resume.js";
import Footer from "./components/footer";
import Courses from "./pages/Courses_taken.js"



function App() {

  useEffect(()=>{
    const handleMouseMove = (e) =>{
      const x = e.clientX;
      const y = e.clientY;

      const angle = Math.atan2(
        y - window.innerHeight / 2,
        x - window.innerWidth / 2
      );
      const degrees = angle * (100 / Math.PI);
      document.documentElement.style.setProperty("--angle", `${degrees}deg`);

      const t = x / window.innerWidth;
      const colors = [
        [216, 255, 235], // #d8ffeb
        [178, 242, 221], // #b2f2dd
        [138, 229, 207], // #8ae5cf
        [99, 217, 192],  // #63d9c0
        [59, 194, 176],  // #3bc2b0
        [30, 143, 153],  // #1e8f99
        [13, 95, 115],    // #0d5f73
        [0, 0, 0, 0]
      ];

      const index = Math.floor(t * (colors.length - 1));
      const c1 = colors[index];
      const c2 = colors[Math.min(index + 1, colors.length - 1)];

      // Interpolate between the colors
      const mix = t * (colors.length - 1) - index;
      const r = c1[0] * (1 - mix) + c2[0] * mix;
      const g = c1[1] * (1 - mix) + c2[1] * mix;
      const b = c1[2] * (1 - mix) + c2[2] * mix;

      // 3. Compute brightness
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;

      // 4. Set button color automatically
      const buttonColor = brightness < 128 ? "white" : "black";
      document.documentElement.style.setProperty("--button-color", buttonColor);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Router>
      <div id="body">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
