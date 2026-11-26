import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, FileText, BookOpen } from 'lucide-react';

const Portfolio = () => {
  // Portfolio data: edit this block to update the site.
  const data = {
    name: "Temesgen Tewolde",
    title: "AI Engineer · Data Scientist",
    email: "teme.tewolde@gmail.com",
    github: "https://github.com/codeteme",
    linkedin: "https://www.linkedin.com/in/temesgen-tewolde",
    scholar: "https://scholar.google.com/citations?user=zk40gh0AAAAJ",
    researchgate: "https://www.researchgate.net/profile/Temesgen-Tewolde",
    resume: "/Temesgen_Tewolde_Resume.pdf",

    bio: "I build applied AI and ML systems end to end: LLM applications and agents, predictive and causal models, and the data pipelines and APIs that put them into production. M.S. Data Science student at Duke University (4.0 GPA). Previously an AI/ML intern at Mayo Clinic Radiation Oncology, where I built LLM systems for clinical documentation.",

    availability: "Open to full-time AI engineer, ML engineer, and data scientist roles starting July 2027 (graduating May 2027). Based in Durham, NC, and open to relocating.",

    focus: [
      { area: "AI engineering", detail: "LLM applications, agents, RAG, structured extraction, and evaluation, shipped with FastAPI and React." },
      { area: "Machine learning", detail: "Deep learning, computer vision, and model interpretability." },
      { area: "Data science", detail: "Predictive and survival models, causal inference, and statistical analysis." },
      { area: "Data engineering", detail: "Streaming and batch pipelines with Kafka, Spark, Airflow, and BigQuery." }
    ],

    experience: [
      {
        role: "AI/ML Intern",
        org: "Mayo Clinic, Radiation Oncology (AIDA)",
        place: "Rochester, MN",
        dates: "Jun 2026 – Aug 2026",
        points: [
          "Built a full-stack ambient clinical documentation system (Gemini, FastAPI, React) with radiation oncologists that turns clinic audio into CTCAE-graded adverse events; kappa above 0.8 vs. clinician labels (clinician baseline about 0.6).",
          "Extended the group's LLM toxicity-extraction research into a clinical note extraction platform (Gemini, BigQuery, MLflow) for prostate and breast oncology, and ran LLM inference over notes for 20,000 patients. First-authored findings submitted to EMUC."
        ]
      },
      {
        role: "Research Data Services Consultant",
        org: "Northwestern University in Qatar, Research Computing and Data Services",
        place: "Doha, Qatar",
        dates: "Apr 2023 – Jul 2025",
        points: [
          "Engineered the end-to-end LLM pipeline (OpenAI API, Python) behind SCOPE-TRA, a generative classification method co-developed across 4 in-press peer-reviewed studies.",
          "Ran HPC research workflows (AWS S3, Docker, SLURM) supporting 50+ projects; cut manual preprocessing overhead by 40%."
        ]
      },
      {
        role: "Data Scientist",
        org: "NLP Labs",
        place: "Durham, NC (Remote)",
        dates: "May 2022 – Oct 2022",
        points: [
          "Shipped a Flask analytics platform (BigQuery, Firebase, Twitter/X API) commercialized to a government client; Pandas pipelines cut reporting turnaround from 3 days to 4 hours."
        ]
      },
      {
        role: "Data Science Intern",
        org: "Qatar Computing Research Institute",
        place: "Doha, Qatar",
        dates: "May 2021 – Jul 2021",
        points: [
          "Feature engineering and statistical analysis (Pandas, scikit-learn) quantifying gender representation by seniority, informing a peer-reviewed publication."
        ]
      }
    ],

    projects: [
      {
        title: "Ambient Clinical Documentation (Mayo Clinic)",
        description: "Full-stack LLM system built with radiation oncologists that listens to clinic visits and outputs CTCAE-graded adverse events. Agreement with clinician labels reached kappa above 0.8, against a clinician-to-clinician baseline of about 0.6. Internal project; code not public.",
        tech: ["Gemini", "FastAPI", "React", "Speech-to-Text", "Evaluation"]
      },
      {
        title: "AI Code Quality Assistant",
        description: "Four LLM agents (style, idioms, clean code, testing) each run a scan, suggest, apply, validate loop with retries, plus an agentic mode where the LLM decides which tools to call. The testing agent retrieves similar test files from ChromaDB (RAG) so generated tests match the codebase. Available as a CLI, a Dockerized REST API, and a VS Code extension.",
        tech: ["Python", "LLM Agents", "RAG", "ChromaDB", "Docker", "pytest"],
        github: "https://github.com/codeteme/multi-agent-code-assistant"
      },
      {
        title: "ICU Mortality Clinical Decision Support",
        description: "Clinical decision support engine that predicts ICU mortality with survival analysis models on MIMIC-IV electronic health record data.",
        tech: ["R", "Survival Analysis", "MIMIC-IV", "EHR Data"],
        github: "https://github.com/codeteme/clinical-decision-support-engine"
      },
      {
        title: "MedLens: Hidden Hint-Following in a Medical LLM",
        description: "Tested whether MedGemma 4B's written reasoning reports what changed its answer across 375 MedQA questions: a planted hint changed 912 answers and was mentioned in only 3.3%. A probe on the model's internal activations flagged silent hint-following with AUROC 0.98, vs. 0.56–0.72 for text-only detectors.",
        tech: ["PyTorch", "Gemma Scope 2", "vLLM on TPU", "Interpretability"],
        github: "https://github.com/codeteme/medlens-honesty"
      },
      {
        title: "Dashcam Collision Risk Prediction",
        description: "Predicts collision risk from dashcam video by combining video, depth, and object detection models.",
        tech: ["PyTorch", "VideoMAE", "DepthAnything", "YOLO", "Computer Vision"],
        github: "https://github.com/codeteme/detect-to-protect"
      },
      {
        title: "Prison Education and Recidivism",
        description: "Difference-in-differences study of the 2016 Second Chance Pell expansion and two-year recidivism, using individual-level prison release data across 34 states (2005–2018), with a policy memo.",
        tech: ["Causal Inference", "Difference-in-Differences", "Python", "Statistics"],
        github: "https://github.com/codeteme/prison-education-recidivism"
      },
      {
        title: "SCOPE-TRA: LLM-Based Profiling of Online Communities",
        description: "LLM pipeline for a generative classification method that profiles influencer and sports-fan follower communities. Co-developed with communication researchers; presented at ICA 2026 and IAMCR 2026 (see Publications).",
        tech: ["OpenAI API", "Prompt Engineering", "Python", "Computational Social Science"]
      },
      {
        title: "Graph Anomaly Detection (GSK Capstone)",
        description: "Co-built 13 typology detectors with three teammates; layered ablations on planted cases raised cases found from 8 to 32 of 33 and test average precision from 0.01 to 0.67 (development results), with a stated reason for every flag.",
        tech: ["Python", "Graph Analytics", "Entity Resolution"]
      },
      {
        title: "TfL Real-Time Streaming Pipeline",
        description: "Real-time transit data pipeline using Kafka, Spark, and Airflow, with a live analytics dashboard that refreshes automatically.",
        tech: ["Apache Kafka", "PySpark", "Airflow", "Streamlit"],
        github: "https://github.com/codeteme/realtime-transit-pipeline"
      },
      {
        title: "Goodreads Book Sale Prediction",
        description: "Deep learning model that predicts book sales from reviews and metadata, with a custom scraping pipeline built after the Goodreads API was retired.",
        tech: ["Deep Learning", "NLP", "Web Scraping", "Python"],
        github: "https://github.com/codeteme/goodreads-ml-model"
      }
    ],

    publications: [
      {
        title: "Environmental Advocacy through the Lens of AI: Introducing SCOPE-TRA, an LLM-Based Method for Studying Online Influencers Follower Communities",
        authors: "G. Anghelcev, T. Tewolde",
        venue: "76th Annual International Communication Association (ICA) Conference, 2026"
      },
      {
        title: "SCOPE-TRA: An AI/LLM-based Approach to Fanship/Fandom in Sports Communication Research and Practice",
        authors: "G. Anghelcev, C. Kozman, T. Tewolde",
        venue: "International Association for Media and Communication Research (IAMCR) Annual Conference, 2026"
      },
      {
        title: "Understanding Sports Fan Communities with AI: A Discriminant-Validity Test of the SCOPE-TRA Method for Developing Fan Subgroup Profiles with Large Language Models",
        authors: "G. Anghelcev, T. Tewolde, C. Kozman",
        venue: "Conference paper, 2026"
      },
      {
        title: "Uses & Gratifications, Personality Traits, and Self-Esteem as Correlates of Compulsive YouTube Use during COVID-19",
        authors: "K. Sharma, T. Tewolde, S. Baniya",
        venue: "72nd Annual International Communication Association (ICA) Conference, 2022"
      },
      {
        title: "#keepthemsafe: A Child Car Seat Campaign",
        authors: "S. A. Dun, H. Rachdi, N. S. Das, T. Tewolde, et al.",
        venue: "National Communication Association (NCA) Annual Convention, 2021"
      }
    ],

    skills: {
      "Languages": ["Python", "SQL", "R", "TypeScript/JavaScript", "Bash"],
      "AI & LLMs": ["OpenAI API", "Gemini", "LangChain", "RAG", "Agents", "Structured Extraction", "Prompt Engineering", "Evaluation", "spaCy"],
      "Machine Learning": ["PyTorch", "Hugging Face Transformers", "scikit-learn", "XGBoost", "MLflow", "vLLM", "Computer Vision"],
      "Data & Statistics": ["Pandas", "Survival Analysis", "Causal Inference", "BigQuery", "PySpark", "Airflow", "Kafka"],
      "Backend & Cloud": ["FastAPI", "React", "Docker", "PostgreSQL", "pytest", "Git", "GCP", "AWS (S3)", "HPC (SLURM)"]
    },

    education: [
      {
        school: "Duke University",
        degree: "M.S. Data Science · GPA 4.0/4.0",
        year: "Aug 2025 – May 2027 (expected)",
        note: "Dean's Research Award for Master's Students; Merit Scholarship"
      },
      {
        school: "Northwestern University in Qatar",
        degree: "B.Sc. Communication · GPA 3.92/4.0",
        year: "Aug 2018 – May 2022"
      }
    ]
  };

  const linkClass = "flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900";

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 px-6 py-4">
        <div className="mx-auto max-w-4xl flex items-center justify-between">
          <a href="#" className="text-lg font-bold text-gray-900">{data.name}</a>
          <nav className="hidden md:flex gap-6">
            <a href="#experience" className="text-sm text-gray-600 hover:text-gray-900">Experience</a>
            <a href="#projects" className="text-sm text-gray-600 hover:text-gray-900">Projects</a>
            <a href="#publications" className="text-sm text-gray-600 hover:text-gray-900">Publications</a>
            <a href="#about" className="text-sm text-gray-600 hover:text-gray-900">Skills</a>
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
          <p className="mb-4 text-base text-gray-700 leading-relaxed max-w-2xl">
            {data.bio}
          </p>
          <p className="mb-8 text-sm text-indigo-700 font-medium max-w-2xl">
            {data.availability}
          </p>
          <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
            {data.focus.map((f, i) => (
              <div key={i} className="border-l-4 border-indigo-600 pl-4">
                <div className="font-semibold text-gray-900">{f.area}</div>
                <div className="text-sm text-gray-700">{f.detail}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <a href={data.resume} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 text-sm font-medium px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              <FileText size={18} />
              Résumé (PDF)
            </a>
            <a href={data.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <Github size={20} />
              GitHub
            </a>
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href={data.scholar} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <BookOpen size={20} />
              Google Scholar
            </a>
            <a href={`mailto:${data.email}`} className={linkClass}>
              <Mail size={20} />
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="px-6 py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">Experience</h2>
          <div className="space-y-8">
            {data.experience.map((job, idx) => (
              <div key={idx} className="border-l-4 border-indigo-600 pl-6">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
                  <h3 className="text-xl font-semibold text-gray-900">{job.role}</h3>
                  <span className="text-sm text-gray-600">{job.dates}</span>
                </div>
                <div className="mb-3 text-gray-700">{job.org} · <span className="text-gray-600">{job.place}</span></div>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {job.points.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">Projects</h2>
          <div className="space-y-8">
            {data.projects.map((project, idx) => (
              <div key={idx} className="border-l-4 border-indigo-600 pl-6">
                <div className="flex items-start justify-between mb-2 gap-4">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="text-gray-500 hover:text-gray-700 shrink-0"
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
          <p className="mt-8 text-sm text-gray-600">
            More on <a href={data.github} target="_blank" rel="noopener noreferrer" className="text-indigo-700 hover:underline">GitHub</a>.
          </p>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="px-6 py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">Publications</h2>
          <ul className="space-y-6">
            {data.publications.map((pub, idx) => (
              <li key={idx} className="border-l-4 border-indigo-600 pl-6">
                <div className="font-semibold text-gray-900">{pub.title}</div>
                <div className="text-sm text-gray-700">{pub.authors}</div>
                <div className="text-sm text-gray-600 italic">{pub.venue}</div>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-gray-600">
            Full list on <a href={data.scholar} target="_blank" rel="noopener noreferrer" className="text-indigo-700 hover:underline">Google Scholar</a> and <a href={data.researchgate} target="_blank" rel="noopener noreferrer" className="text-indigo-700 hover:underline">ResearchGate</a>.
          </p>
        </div>
      </section>

      {/* Skills & Education */}
      <section id="about" className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">Skills & Education</h2>

          <div className="mb-10">
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
            <div className="space-y-6">
              {data.education.map((ed, idx) => (
                <div key={idx} className="border-l-4 border-indigo-600 pl-6">
                  <div className="font-semibold text-gray-900">{ed.school}</div>
                  <div className="text-gray-700">{ed.degree}</div>
                  <div className="text-sm text-gray-600">{ed.year}</div>
                  {ed.note && <div className="text-sm text-gray-600">{ed.note}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Get In Touch</h2>
          <p className="mb-8 text-gray-700">
            Hiring for data science, ML, or applied AI roles? I'd be glad to talk.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${data.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Mail size={20} />
              Send Email
            </a>
            <a
              href={data.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-indigo-600 text-indigo-700 rounded-lg hover:bg-indigo-50 transition-colors"
            >
              <FileText size={20} />
              Résumé
            </a>
          </div>
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
