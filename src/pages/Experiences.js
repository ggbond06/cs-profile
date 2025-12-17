import { Book } from "lucide-react";

export default function Resume() {
  return (
    <div className="page">
      <div className="experience-box">
        <h1>Experiences</h1>
        <div className="thick-line"></div>
        <div className="experience-section">
          <div className="experience-header">
            <div className="resume-icon-box">
              <Book size={24} color="#FFD86B" />
            </div>
            <h2>Experiences</h2>
          </div>
          <div className="vertical-line"></div>
          <div className="dot-back2">
            <div className="dot"></div> 
          </div>
          <div className="timeline-item">
            <p className="internship">Technical Intern</p>
            <p className="duration">June, 2024 - July 2024 • 1 month</p>
            <p className="location">Remote, Zurich</p>
            <li className="description">
              Developed a web scraping tool using Python, Selenium, and BeautifulSoup to extract data.</li>
            <li className="description">
              Automated data collection and exported results into structured CSV files, improving data accessibility for the team.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}