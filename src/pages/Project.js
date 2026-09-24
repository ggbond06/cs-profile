import {
  ArrowUpRight,
  ExternalLink,
  FolderGit2,
  Github,
  Plus,
} from "lucide-react";
import "../App.css";

/*
  Add your projects here by copying this object:

  {
    title: "",
    description: ["", ""],
    image: "",
    technologies: [],
    githubUrl: "",
    liveUrl: "",
    featured: false,
  },
*/
const PROJECTS = [
  {
    title: "Environmental Sound Classifier",
    description: [
      "Developed a three-block convolutional neural network with batch normalization, dropout and adaptive pooling to classify five environmental sounds–baby crying, door knocking, sirens, alarms and glass breaking–plus an “other” category.",
      "Built an audio pipeline that converts WAV recordings into normalized 64-bin log-Mel spectrograms and applies time shifting, time/frequency masking, and weighted sampling to address severe class imbalance.",
      "Implemented early stopping, learning-rate scheduling, model checkpointing, and five-fold evaluation over predefined ESC-50 folds, achieving 81.35% ± 3.75% mean balanced accuracy."
    ],
    image: "",
    technologies: ["Python", "PyTorch", "torchaudio", "SoundFile", "scikit-learn"],
    githubUrl: "https://github.com/ggbond06/environmental-sound-classifier-pytorch",
    featured: false,
  },
  {
    title: "European Rail Navigator",
    description: [
      "Built a full-stack rail journey planner that applies Dijkstra’s algorithm to calculate shortest routes across 118 cities in 15 European countries, including travel-time and fare estimates.",
      "Engineered a Java graph backend with HashMap-based indexing and a six-hour pricing cache through Redis/Jedis, enabling efficient station searches and reducing redundant fare calculations.",
      "Developed a React interface with route and date search, date-adjusted pricing, and interactive OpenStreetMap previews",
    ],
    image: "",
    technologies: ["Java", "React", "JavaScript", "CSS", "Dijkstra’s Algorithm", "HashMap"],
    githubUrl: "https://github.com/ggbond06/european-rail-webapp",
    liveUrl: "https://european-rail-webapp-nvl07pef1-ggbond10.vercel.app/",
    featured: false,
  },
];

export default function Projects() {
  return (
    <main className="page projects-page">
      <section className="projects-header">
        <div>
          <p className="projects-eyebrow">
            <FolderGit2 size={16} aria-hidden="true" />
            Selected work
          </p>
          <h1>Projects</h1>
          <p className="projects-intro">
            A collection of things I have designed, built, and learned from.
          </p>
        </div>

        <span className="projects-count">
          <strong>{String(PROJECTS.length).padStart(2, "0")}</strong>
          projects
        </span>
      </section>

      {PROJECTS.length > 0 ? (
        <section className="projects-grid" aria-label="Project collection">
          {PROJECTS.map((project, index) => (
            <article
              className={`project-card ${project.featured ? "is-featured" : ""}`}
              key={project.title || index}
            >
              {project.image && (
                <div className="project-image">
                  <img src={project.image} alt="" />
                </div>
              )}

              <div className="project-card-content">
                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2>{project.title}</h2>
                <ul className="project-description">
                  {(Array.isArray(project.description)
                    ? project.description
                    : project.description.split("\n")
                  )
                    .filter((line) => line.trim())
                    .map((line, lineIndex) => (
                      <li key={`${project.title}-description-${lineIndex}`}>
                        {line}
                      </li>
                    ))}
                </ul>

                <ul className="project-technologies" aria-label="Technologies">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>

                <div className="project-links">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      <Github size={17} /> Source
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      <ExternalLink size={17} /> Live site
                    </a>
                  )}
                </div>
              </div>

              <ArrowUpRight className="project-corner-icon" aria-hidden="true" />
            </article>
          ))}
        </section>
      ) : (
        <section className="projects-empty" aria-label="No projects added yet">
          <div className="projects-empty-icon">
            <Plus size={26} aria-hidden="true" />
          </div>
          <p>Your project cards will appear here.</p>
          <span>Add entries to the PROJECTS array in Project.js.</span>
        </section>
      )}
    </main>
  );
}
