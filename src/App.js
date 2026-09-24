import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";

import Profile from "./pages/Profile.js";
import Projects from "./pages/Project.js";
import Experiences from "./pages/Experiences.js";
import Footer from "./components/footer";
import Courses from "./pages/Courses_taken.js"



function App() {
  return (
    <Router>
      <div id="body">
        <Header/>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/bio" element={<Profile />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/resume" element={<Experiences />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
