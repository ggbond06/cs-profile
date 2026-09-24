import { BookOpen, CalendarDays } from "lucide-react";
import "../App.css";

const SEMESTERS = [
  {
    term: "Fall",
    year: "2025",
    status: "Completed",
    courses: [
      "CS 300",
      "GERMAN 203",
      "ASIAN AMERICAN HISTORY 160",
      "MUSIC 113",
    ],
  },
  {
    term: "Spring",
    year: "2026",
    status: "Completed",
    courses: [
      "CS 400",
      "STATS 240",
      "MATH 240",
      "ENGL 100",
      "INDIAN AMERICAN HISTORY 100",
    ],
  },
  {
    term: "Fall",
    year: "2026",
    status: "In progress",
    courses: [
      "EECS 280",
      "EECS 203",
      "COMPFOR 111",
      "EARTH 151",
      "ASTRO 106",
    ],
  },
];

export default function Courses() {
  const courseCount = SEMESTERS.reduce(
    (total, semester) => total + semester.courses.length,
    0
  );

  return (
    <main className="page courses-page">
      <section className="courses-header">
        <div>
          <p className="courses-eyebrow">
            <BookOpen size={16} aria-hidden="true" />
            Academic journey
          </p>
          <h1>Courses Taken</h1>
          <p>
            A chronological view of the courses I have taken throughout my
            undergraduate studies.
          </p>
        </div>

        <div className="courses-summary" aria-label="Course summary">
          <strong>{courseCount}</strong>
          <span>courses across {SEMESTERS.length} semesters</span>
        </div>
      </section>

      <section className="semester-timeline" aria-label="Courses by semester">
        {SEMESTERS.map((semester, index) => (
          <article
            className={`semester-entry ${semester.status === "In progress" ? "is-current" : ""}`}
            key={`${semester.term}-${semester.year}`}
          >
            <div className="timeline-marker" aria-hidden="true">
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>

            <div className="semester-card">
              <header className="semester-card-header">
                <div>
                  <p className="semester-year">{semester.year}</p>
                  <h2>{semester.term} Semester</h2>
                </div>
                <span className="semester-status">
                  <i aria-hidden="true" />
                  {semester.status}
                </span>
              </header>

              <div className="semester-courses">
                {semester.courses.map((course) => (
                  <div className="course-row" key={course}>
                    <CalendarDays size={17} aria-hidden="true" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
