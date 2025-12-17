import "../App.css"; 
import { BookOpen } from "lucide-react";

export default function Courses() {
  return (
    <div className="page">
      <div className="courses-box">
        <h1>Courses Taken</h1>
        <div className="thick-line"></div>
        <div className="courses-section">
          <BookOpen size={32} color="#FFD86B" />
          <h3 className="taken-time">Fall 2025</h3>
          <ul className="courses-list">
            <li>CS300</li>
            <li>German 203</li>
            <li>Asian American History 160</li>
            <li>Music 113</li>
          </ul>
        </div>
      </div>
    </div>
  );
}