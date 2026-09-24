import { BriefcaseBusiness, GraduationCap, MapPin } from "lucide-react";
import "../App.css";

const TIMELINE = [
  {
    period: "Expected Graduation: 2029",
    type: "Education",
    title: "University of Michigan-Ann Arbor",
    subtitle: "Bachelor of Science in Computer Science",
    location: "Ann Arbor, Michigan",
    icon: GraduationCap,
    current: true,
  },
  {
    period: "June 2024 — July 2024",
    type: "Experience",
    title: "Technical Intern",
    subtitle: "Remote internship",
    location: "Remote, Zurich",
    icon: BriefcaseBusiness,
    details: [
      "Developed a web-scraping tool with Python, Selenium, and Beautiful Soup to extract data.",
      "Automated data collection and exported structured CSV files, improving data accessibility for the team.",
    ],
  },
];

export default function Experiences() {
  return (
    <main className="page experience-page">
      <section className="experience-intro">
        <p className="experience-eyebrow">
          <BriefcaseBusiness size={16} aria-hidden="true" />
          Education & experience
        </p>
        <h1>My Journey</h1>
        <p>
          A chronological view of the education and practical experience that
          continue to shape my work.
        </p>
      </section>

      <section className="career-timeline" aria-label="Education and experience timeline">
        {TIMELINE.map((entry, index) => {
          const Icon = entry.icon;

          return (
            <article
              className={`career-entry ${entry.current ? "is-current" : ""}`}
              key={`${entry.period}-${entry.title}`}
            >
              <div className="career-marker" aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="career-card">
                <header className="career-card-header">
                  <div className="career-icon">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <div className="career-heading">
                    <span className="career-type">{entry.type}</span>
                    <h2>{entry.title}</h2>
                    <p>{entry.subtitle}</p>
                  </div>
                  <time>{entry.period}</time>
                </header>

                <div className="career-card-body">
                  <p className="career-location">
                    <MapPin size={16} aria-hidden="true" />
                    {entry.location}
                  </p>

                  {entry.details && (
                    <ul className="career-details">
                      {entry.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
