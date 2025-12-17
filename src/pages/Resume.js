import { Book } from "lucide-react";

export default function Resume() {
  return (
    <div className="page">
      <div className="resume-box">
        <h1>Resume</h1>
        <div className="thick-line"></div>
        <div className="education-section">
          <div className="education-header">
            <div className="resume-icon-box">
              <Book size={24} color="#FFD86B" />
            </div>
            <h2>Education</h2>
          </div>
          <div className="vertical-line"></div>
          <div className="dot-back">
            <div className="dot"></div> 
          </div>
          <div className="timeline-item">
            <p className="uni-name">University of Wisconsin-Madison</p>
            <p className="degree">Bachelor of Science in Computer Science</p>
            <p className="duration">2025 - 2028</p>
          </div>
          <div className="vertical-line2"></div>
          <div className="dot-back">
            <div className="dot"></div> 
          </div>
          <div className="high-school-timeline-item">
            <p className="uni-name">Zurich International School</p>
            <p className="degree">High School Diploma</p>
            <p className="duration">2022 - 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}