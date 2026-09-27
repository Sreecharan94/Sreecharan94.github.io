import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  TestTube2,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import profilePhoto from "./assets/profile.png";

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="section-label">
      <span className="section-dot" />
      <span>{children}</span>
    </div>
  );
}

function App() {
  return (
    <div className="portfolio">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="navbar">
        <a href="#home" className="brand">
          <img
            src={profilePhoto}
            alt="Prakash Sree Charan"
            className="brand-photo"
          />

          <span>Prakash Sree Charan</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>


      {/* =====================================================
          HERO
      ===================================================== */}

      <main>

        <section id="home" className="hero">

          <div className="hero-background-shape hero-shape-one" />
          <div className="hero-background-shape hero-shape-two" />

          <div className="hero-content">

            <div className="hero-label">
              <span />
              SOFTWARE DEVELOPER
            </div>

            <h1>
              Prakash
              <br />
              <span>Sree Charan</span>
            </h1>

            <p className="hero-description">
              I build scalable web applications, work with data,
              and integrate AI to solve real-world problems.
              Passionate about creating clean, useful, and
              reliable software products.
            </p>

            <div className="hero-contact">

              <div className="hero-contact-item">
                <MapPin size={19} />
                <span>Madanapalle, Andhra Pradesh</span>
              </div>

              <div className="hero-contact-item">
                <Mail size={19} />
                <span>sreecharan366@gmail.com</span>
              </div>

            </div>

            <div className="hero-actions">

              <a
                href="mailto:sreecharan366@gmail.com"
                className="primary-button"
              >
                Let's Connect
                <ArrowRight size={19} />
              </a>

              <a
                href="https://github.com/Sreecharan94"
                target="_blank"
                rel="noreferrer"
                className="social-button"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/prakash-sree-charan-671172361/"
                target="_blank"
                rel="noreferrer"
                className="social-button"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>


          {/* HERO VISUAL */}

          <div className="hero-visual">

            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="hero-photo-wrapper">
              <img
                src={profilePhoto}
                alt="Prakash Sree Charan"
                className="hero-photo"
              />
            </div>

            <div className="floating-card floating-card-top">
              <Sparkles size={23} />
              <div>
                <strong>Building with</strong>
                <span>Modern Technologies</span>
              </div>
            </div>

            <div className="floating-card floating-card-bottom">
              <Code2 size={22} />
              <div>
                <strong>Software</strong>
                <span>Development</span>
              </div>
            </div>

          </div>

        </section>


        {/* =====================================================
            ABOUT
        ===================================================== */}

        <section id="about" className="section about-section">

          <div className="about-main">

            <SectionLabel>ABOUT ME</SectionLabel>

            <h2>
              A developer who enjoys solving{" "}
              <span>real problems</span> with technology.
            </h2>

            <p>
              I’m Prakash Sree Charan, a Software Developer with
              hands-on experience in full-stack development,
              backend development, software testing, data analytics,
              and AI integrations.
            </p>

            <p>
              I enjoy building practical software products,
              working across frontend and backend systems,
              understanding application requirements, and
              turning ideas into reliable solutions.
            </p>

          </div>


          <div className="about-features">

            <div className="about-feature">
              <div className="feature-icon">
                <Code2 />
              </div>

              <h3>Full-Stack Development</h3>

              <p>
                Building frontend and backend application
                functionality.
              </p>
            </div>


            <div className="about-feature">
              <div className="feature-icon">
                <Database />
              </div>

              <h3>Data & AI</h3>

              <p>
                Working with data, APIs, documents, and
                AI-powered solutions.
              </p>
            </div>


            <div className="about-feature">
              <div className="feature-icon">
                <TestTube2 />
              </div>

              <h3>Software Testing</h3>

              <p>
                Testing application functionality, workflows,
                and feature behavior.
              </p>
            </div>

          </div>

        </section>


        {/* =====================================================
            SKILLS
        ===================================================== */}

        <section id="skills" className="section skills-section">

          <div className="section-heading">
            <SectionLabel>SKILLS</SectionLabel>

            <h2>Technologies I Work With</h2>

            <p>
              A practical technology stack built through academic
              projects and professional development work.
            </p>
          </div>


          <div className="skills-grid">

            <div className="skill-card">

              <div className="skill-icon">
                <Code2 />
              </div>

              <h3>Languages</h3>

              <div className="skill-list">
                <span>Java</span>
                <span>Python</span>
                <span>JavaScript</span>
                <span>TypeScript</span>
                <span>SQL</span>
              </div>

            </div>


            <div className="skill-card">

              <div className="skill-icon">
                <Layers3 />
              </div>

              <h3>Frontend</h3>

              <div className="skill-list">
                <span>React.js</span>
                <span>Next.js</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Tailwind CSS</span>
                <span>Axios</span>
              </div>

            </div>


            <div className="skill-card">

              <div className="skill-icon">
                <Database />
              </div>

              <h3>Backend & Data</h3>

              <div className="skill-list">
                <span>FastAPI</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>PostgreSQL</span>
                <span>SQLAlchemy</span>
                <span>pgvector</span>
              </div>

            </div>


            <div className="skill-card">

              <div className="skill-icon">
                <Sparkles />
              </div>

              <h3>AI / ML</h3>

              <div className="skill-list">
                <span>Gemini</span>
                <span>RAG</span>
                <span>NLP</span>
                <span>Pandas</span>
                <span>NLTK</span>
                <span>TF-IDF</span>
                <span>VADER</span>
                <span>TextBlob</span>
              </div>

            </div>


            <div className="skill-card">

              <div className="skill-icon">
                <BriefcaseBusiness />
              </div>

              <h3>Tools</h3>

              <div className="skill-list">
                <span>Git</span>
                <span>GitHub</span>
                <span>Docker</span>
                <span>Azure</span>
                <span>Alembic</span>
              </div>

            </div>


            <div className="skill-card">

              <div className="skill-icon">
                <ShieldCheck />
              </div>

              <h3>Core Concepts</h3>

              <div className="skill-list">
                <span>OOP</span>
                <span>Data Structures</span>
                <span>RBAC</span>
                <span>REST APIs</span>
                <span>API Integration</span>
                <span>Document Processing</span>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            EXPERIENCE
        ===================================================== */}

        <section id="experience" className="section experience-section">

          <div className="section-heading">

            <SectionLabel>EXPERIENCE</SectionLabel>

            <h2>Professional experience.</h2>

          </div>


          <div className="experience-list">

            {/* HMG SOFTWARE ENGINEER */}

            <article className="experience-item">

              <div className="experience-date">
                <span>Sep 2025</span>
                <span>Present</span>
              </div>

              <div className="experience-content">

                <div className="experience-header">

                  <div>
                    <h3>Software Engineer</h3>
                    <h4>HMG Technology</h4>
                  </div>

                </div>

                <ul className="experience-sub">
                  <li>Worked on full-stack product development across frontend and backend systems.</li>
                  <li>Worked on project management, tasks, permissions, documentation, analytics, and workspace functionality.</li>
                  <li>Worked with frontend technologies and backend APIs to implement user-facing features.</li>
                  <li>Worked with backend services, database models, API functionality, and application business logic.</li>
                  <li>Worked on AI-assisted functionality, document processing, integrations, database changes, and migrations.</li>
                  <li>Worked on debugging, feature enhancement, and end-to-end implementation of product requirements.</li>
                </ul>

                <div className="experience-tags">
                  <span>Next.js</span>
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>FastAPI</span>
                  <span>PostgreSQL</span>
                  <span>AI</span>
                  <span>RAG</span>
                </div>

                {/* HMG TECHNOLOGY WORKSPACE */}

                <article className="experience-item">

                  <div className="experience-date">
                    <span>Jan 2026</span>
                    <span>Present</span>
                  </div>

                  <div className="experience-content">

                    <div className="experience-header">

                      <div>
                        <h3>HMG Technology Workspace</h3>
                        <h4>HMG Technology</h4>
                      </div>

                    </div>

                    <ul className="experience-sub">
                      <li>Worked on full-stack product development across frontend and backend systems.</li>
                      <li>Worked on project management, tasks, permissions, documentation, analytics, and workspace functionality.</li>
                      <li>Worked with frontend technologies and backend APIs to implement user-facing features.</li>
                      <li>Worked with backend services, database models, API functionality, and application business logic.</li>
                      <li>Worked on AI-assisted functionality, document processing, integrations, database changes, and migrations.</li>
                      <li>Worked on debugging, feature enhancement, and end-to-end implementation of product requirements.</li>
                    </ul>

                    <div className="experience-tags">
                      <span>Next.js</span>
                      <span>React</span>
                      <span>TypeScript</span>
                      <span>FastAPI</span>
                      <span>PostgreSQL</span>
                      <span>AI</span>
                      <span>RAG</span>
                    </div>

                  </div>

                </article>

                {/* RCM */}

                <article className="experience-item">

                  <div className="experience-date">
                    <span>Sep 2025</span>
                    <span>Present</span>
                  </div>

                  <div className="experience-content">

                    <div className="experience-header">

                      <div>
                        <h3>RCM</h3>
                        <h4>HMG Technology</h4>
                      </div>

                    </div>

                    <ul className="experience-sub">
                      <li>Worked on frontend development and user-facing application functionality.</li>
                      <li>Contributed to feature enhancements and application workflows.</li>
                      <li>Worked on debugging and software testing.</li>
                      <li>Worked with React, JavaScript, HTML, and CSS.</li>
                    </ul>

                    <div className="experience-tags">
                      <span>React</span>
                      <span>JavaScript</span>
                      <span>HTML</span>
                      <span>CSS</span>
                    </div>

                  </div>

                </article>

              </div>

            </article>

          </div>

        </section>


        {/* =====================================================
            PROJECTS
        ===================================================== */}

        <section id="projects" className="section projects-section">

          <div className="section-heading">

            <SectionLabel>PROJECTS</SectionLabel>

            <h2>Selected Projects</h2>

          </div>


          <div className="projects-grid">

            {/* ACADEMIC PROJECT 1 */}

            <article className="project-card">

              <div className="project-top">

                <span className="project-type academic-project">
                  Academic Project
                </span>

              </div>

              <div className="project-content">

                <p className="project-subtitle">
                  Using Federated Learning for Network Traffic Analysis
                </p>

                <h3>
                  Intrusion Detection System
                </h3>

                <p className="project-description">
                  A privacy-preserving intrusion detection system
                  using federated learning, distributed training,
                  LSTM with multi-head attention, and real-time
                  network traffic streaming.
                </p>

                <div className="project-tags">
                  <span>Python</span>
                  <span>TensorFlow</span>
                  <span>LSTM</span>
                  <span>Kafka</span>
                  <span>Federated Learning</span>
                </div>

                <div className="project-footer">

                  <a
                    href="https://github.com/Sreecharan94/Federated-Learning-IDS"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    View on GitHub
                    <ArrowRight size={16} />
                  </a>

                </div>

              </div>

            </article>


            {/* ACADEMIC PROJECT 2 */}

            <article className="project-card">

              <div className="project-top">

                <span className="project-type academic-project">
                  Academic Project
                </span>

              </div>

              <div className="project-content">

                <p className="project-subtitle">
                  On Social Media
                </p>

                <h3>
                  Sentiment Analysis
                </h3>

                <p className="project-description">
                  An NLP project focused on analyzing social media
                  text and classifying sentiment into positive,
                  negative, and neutral categories.
                </p>

                <div className="project-tags">
                  <span>NLP</span>
                  <span>Python</span>
                  <span>Text Processing</span>
                </div>

                <div className="project-footer">

                  <a
                    href="https://github.com/Sreecharan94/Sentimental-Analysis"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                    View on GitHub
                    <ArrowRight size={16} />
                  </a>

                </div>

              </div>

            </article>


            {/* COMPANY PROJECT 1 */}

            <article className="project-card">

              <div className="project-top project-top-company">

                <span className="project-type company-project">
                  Company Project
                </span>

                <span className="project-private">
                  Private
                </span>

              </div>

              <div className="project-content">

                <p className="project-subtitle">
                  Company Project
                </p>

                <h3>
                  HMG Technology Workspace
                </h3>

                <p className="project-description">
                  A full-stack enterprise workspace platform
                  developed at HMG Technology with project
                  management, permissions, documentation, tasks,
                  analytics, integrations, and AI-powered
                  functionality.
                </p>

                <div className="project-tags">
                  <span>Next.js</span>
                  <span>React</span>
                  <span>FastAPI</span>
                  <span>PostgreSQL</span>
                  <span>AI</span>
                </div>

                <div className="project-footer">

                  <span className="private-project-label">
                    Company Project
                  </span>

                </div>

              </div>

            </article>


            {/* COMPANY PROJECT 2 */}

            <article className="project-card">

              <div className="project-top project-top-company">

                <span className="project-type company-project">
                  Company Project
                </span>

                <span className="project-private">
                  Private
                </span>

              </div>

              <div className="project-content">

                <p className="project-subtitle">
                  Company Project
                </p>

                <h3>
                  RCM
                </h3>

                <p className="project-description">
                  A professional project at HMG Technology where
                  I contributed to frontend development,
                  user-facing functionality, feature enhancements,
                  debugging, and software testing.
                </p>

                <div className="project-tags">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>Testing</span>
                </div>

                <div className="project-footer">

                  <span className="private-project-label">
                    Company Project
                  </span>

                </div>

              </div>

            </article>

          </div>

        </section>


        {/* =====================================================
            EDUCATION
        ===================================================== */}

        <section id="education" className="section education-section">

          <div className="section-heading">

            <SectionLabel>EDUCATION</SectionLabel>

            <h2>Academic Background</h2>

          </div>


          <div className="education-grid">

            {/* BTECH */}

            <article className="education-card">

              <div className="education-icon">
                <GraduationCap />
              </div>

              <div className="education-content">

                <div className="education-top">
                  <span>B.TECH</span>
                  <time>2022 – 2026</time>
                </div>

                <h3>
                  Computer Science and Engineering in Data Analytics
                </h3>

                <p>
                  Alliance University, Bangalore
                </p>

                <strong>
                  CGPA: 8.2
                </strong>

              </div>

            </article>


            {/* INTERMEDIATE */}

            <article className="education-card">

              <div className="education-icon">
                <Layers3 />
              </div>

              <div className="education-content">

                <div className="education-top">
                  <span>INTERMEDIATE</span>
                  <time>2020 – 2022</time>
                </div>

                <h3>
                  MPC
                </h3>

                <p>
                  Sri Chaitanya Junior College, Madanapalle
                </p>

                <strong>
                  Percentage: 80.3%
                </strong>

              </div>

            </article>


            {/* SSC */}

            <article className="education-card">

              <div className="education-icon">
                <GraduationCap />
              </div>

              <div className="education-content">

                <div className="education-top">
                  <span>SSC</span>
                  <time>2019 – 2020</time>
                </div>

                <h3>
                  Secondary School Certificate
                </h3>

                <p>
                  Narayana E.M School, Madanapalle
                </p>

                <strong>
                  Percentage: 100%
                </strong>

              </div>

            </article>

          </div>

        </section>


        {/* =====================================================
            CONTACT
        ===================================================== */}

        <section id="contact" className="section contact-section">

          <div className="contact-content">

            <SectionLabel>CONTACT</SectionLabel>

            <h2>
              Let's build something
              <br />
              meaningful.
            </h2>

            <p>
              For professional opportunities, collaboration,
              project discussions, or development work, feel free
              to reach out.
            </p>

          </div>


          <div className="contact-grid">

            <a
              href="mailto:sreecharan366@gmail.com"
              className="contact-card"
            >
              <div className="contact-icon">
                <Mail />
              </div>

              <div>
                <span>Email</span>
                <strong>sreecharan366@gmail.com</strong>
              </div>
            </a>


            <a
              href="tel:+916304827527"
              className="contact-card"
            >
              <div className="contact-icon">
                <BriefcaseBusiness />
              </div>

              <div>
                <span>Phone</span>
                <strong>+91 63048 27527</strong>
              </div>
            </a>


            <a
              href="https://www.linkedin.com/in/prakash-sree-charan-671172361/"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">
                <FaLinkedin />
              </div>

              <div>
                <span>LinkedIn</span>
                <strong>Prakash Sree Charan</strong>
              </div>
            </a>


            <a
              href="https://github.com/Sreecharan94"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">
                <FaGithub />
              </div>

              <div>
                <span>GitHub</span>
                <strong>Sreecharan94</strong>
              </div>
            </a>

          </div>

        </section>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">

        <div>
          © {new Date().getFullYear()} Prakash Sree Charan
        </div>

        <div>
          Software Developer
        </div>

      </footer>

    </div>
  );
}

export default App;