import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  // Portfolio Data - CUSTOMIZE THIS
  const data = {
    name: "Temesgen Tewolde",
    title: "Data Scientist & ML Engineer",
    email: "teme.tewolde@gmail.com",
    github: "https://github.com/codeteme",
    linkedin: "https://www.linkedin.com/in/temesgen-tewolde",

    bio: "Data scientist with expertise in machine learning, NLP, and statistical analysis. Duke University graduate student with experience building end-to-end ML pipelines and extracting insights from complex datasets.",

    projects: [
      {
        title: "Goodreads Book Sale Prediction",
        description: "Deep learning model to predict book sales using NLP on reviews and metadata. Custom web scraping pipeline for data collection after Goodreads API retirement.",
        tech: ["Deep Learning", "NLP", "Web Scraping", "Python"],
        github: "https://github.com/codeteme/goodreads-ml-model"
      },
      {
        title: "TfL Real-Time Streaming Pipeline",
        description: "Real-time transit data pipeline using Kafka, Spark, and Airflow. Features live analytics dashboard with auto-refreshing visualizations.",
        tech: ["Apache Kafka", "PySpark", "Airflow", "Streamlit"],
        github: "https://github.com/codeteme/realtime-transit-pipeline"
      },
      {
        title: "Addis Order - Restaurant Management",
        description: "Full-stack restaurant management system with inventory tracking, order management, and real-time synchronization between front and back of house.",
        tech: ["Flask", "PostgreSQL", "Bootstrap", "Docker"],
        github: "https://github.com/codeteme/addis-order"
      },
      {
        title: "LinkedIn Demographic Research Tool",
        description: "Automated tool for digital census research using LinkedIn Campaign Manager API. Supports complex boolean logic for demographic segmentation.",
        tech: ["Python", "API Integration", "Data Analysis"],
        github: "https://github.com/codeteme/LinkedInDemoResearch"
      },
      {
        title: "Gebeta (Mancala) AI",
        description: "Traditional Ethiopian board game with AI opponent using minimax algorithm and alpha-beta pruning. Features web-based multiplayer interface.",
        tech: ["AI", "Game Theory", "Python", "Flask"],
        github: "https://github.com/codeteme/Gebeta"
      }
    ],

    skills: {
      "Languages": ["Python", "R", "SQL", "JavaScript"],
      "ML/Data": ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
      "Tools": ["Spark", "Airflow", "Docker", "Kafka", "PostgreSQL"],
      "Viz": ["Tableau", "Matplotlib", "Plotly", "Streamlit"]
    },

    education:
    {
      school: "Duke University",
      degree: "M.S. Data Science",
      year: "2027"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 px-6 py-4">
        <div className="mx-auto max-w-4xl flex items-center justify-between">
          <a href="#" className="text-lg font-bold text-gray-900">{data.name}</a>
          <nav className="hidden md:flex gap-6">
            <a href="#projects" className="text-sm text-gray-600 hover:text-gray-900">Projects</a>
            <a href="#about" className="text-sm text-gray-600 hover:text-gray-900">About</a>
            <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-4xl md:text-5xl font-bold text-gray-900">
            {data.name}
          </h1>
          <p className="mb-6 text-xl text-gray-600">
            {data.title}
          </p>
          <p className="mb-8 text-base text-gray-700 leading-relaxed max-w-2xl">
            {data.bio}
          </p>
          <div className="flex gap-4">
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href={`mailto:${data.email}`}
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900"
            >
              <Mail size={20} />
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">Projects</h2>
          <div className="space-y-8">
            {data.projects.map((project, idx) => (
              <div key={idx} className="border-l-4 border-indigo-600 pl-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
                <p className="mb-3 text-gray-700">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs bg-white border border-gray-200 rounded-full text-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">Skills & Education</h2>

          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(data.skills).map(([category, items], idx) => (
                <div key={idx}>
                  <h4 className="mb-2 font-medium text-gray-900">{category}</h4>
                  <p className="text-sm text-gray-700">{items.join(' · ')}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900">Education</h3>
            <div className="border-l-4 border-indigo-600 pl-6">
              <div className="font-semibold text-gray-900">{data.education.school}</div>
              <div className="text-gray-700">{data.education.degree}</div>
              <div className="text-sm text-gray-600">{data.education.year}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Get In Touch</h2>
          <p className="mb-8 text-gray-700">
            Interested in working together? Feel free to reach out.
          </p>
          <a
            href={`mailto:${data.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Mail size={20} />
            Send Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-6 py-8">
        <div className="mx-auto max-w-4xl text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} {data.name}</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
