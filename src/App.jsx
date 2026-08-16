const profile = {
  name: 'Mohammad Umar',
  title: 'Front-End Developer & SEO Enthusiast',
  intro:
    'I am a passionate and self-driven front-end developer with a strong interest in building responsive, user-focused web experiences. I enjoy combining design, functionality, and SEO best practices to create products that are both visually appealing and performance-oriented.',
  email: 'umar.md441@gmail.com',
  phone: '+91 9949055446',
  location: 'India',
  github: 'https://github.com/md-umar1',
  linkedin: 'https://www.linkedin.com/in/md-umar1/',
  instagram: 'https://instagram.com/_m_d_umar?igshid=aW9hZmx2YTExcDFx',
  avatar: './img.jpg',
};

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React.js',
  'Tailwind CSS',
  'Bootstrap',
  'Node.js',
  'Express.js',
  'SQL',
  'MongoDB',
  'JWT',
  'Responsive Design',
  'SEO Basics',
  'Python',
  'NLP',
  'Java',
  'C',
  'Team Leadership',
  'Problem Solving',
  'Project Collaboration',
];

const experience = [
  {
    title: 'Front-End Web Developer',
    period: 'Current',
    details:
      'Creating accessible and visually engaging web interfaces, improving user experience, and building polished front-end solutions with a focus on responsiveness and performance.',
  },
  {
    title: 'SEO & Web Growth Interest',
    period: 'Ongoing',
    details:
      'Exploring search optimization practices and content structure strategies to improve discoverability and ensure better usability across digital experiences.',
  },
];

const education = [
  'Strong foundation in programming with Java, C, and Python.',
  'Focused learning in front-end development, UI design, and web fundamentals.',
  'Interest in SEO, digital visibility, and modern web technologies.',
];

const projects = [
  {
    name: 'Online Attendance & Leave Management System',
    summary:
      'Built a role-based attendance and leave management application with JWT authentication, role-based access control, REST API integration, and responsive dashboards for HR, managers, and employees.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
  },
  {
    name: 'Product Ranking System (NLP-Based)',
    summary:
      'Developed a sentiment-analysis-based product ranking system with around 99% accuracy, processed large review datasets, and built an interactive dashboard to visualize ranked products.',
    stack: ['Python', 'NLP', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    name: 'Menu Items Finder',
    summary:
      'A simple web app that helps users find favorite dishes and identify suitable restaurants by location and preferences.',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
];

const stats = [
  { label: 'Core Focus', value: 'Front-End' },
  { label: 'Languages', value: 'Java / C / Python' },
  { label: 'Strength', value: 'Responsive UI' },
  { label: 'Interest', value: 'SEO' },
];

function App() {
  return (
    <div className="portfolio-app">
      <header className="topbar">
        <div className="brand">MOHAMMAD UMAR</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Hello, I am</p>
            <h1>{profile.name}</h1>
            <div className="animated-text-wrap">
              <h2>{profile.title}</h2>
            </div>
            <p className="summary">{profile.intro}</p>
            <div className="cta-row">
              <a className="primary-btn" href="#projects">
                View Projects
              </a>
              <a className="secondary-btn" href="#contact">
                Contact Me
              </a>
            </div>
            <div className="socials">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <i className="bi bi-github" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="bi bi-linkedin" />
              </a>
              <a href={profile.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <i className="bi bi-instagram" />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="avatar-shell">
              <div className="avatar-ring">
                <img src={profile.avatar} alt={profile.name} />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="content-section">
          <div className="section-heading">
            <p className="eyebrow">About Me</p>
            <h3>Building web experiences with purpose</h3>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <p>
                I am a passionate beginner in front-end development with a growing focus on user experience,
                accessibility, and search visibility. I enjoy building clean interfaces and learning the tools
                that help modern websites perform well for both users and search engines.
              </p>
            </div>

            <div className="info-card">
              <h4>Core strengths</h4>
              <ul>
                <li>Responsive UI development</li>
                <li>Creative problem solving</li>
                <li>Team collaboration and leadership</li>
                <li>Quick learning in modern web technologies</li>
              </ul>
            </div>
          </div>

          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-box">
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h3>What I bring to the table</h3>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article key={item.title} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <div className="timeline-head">
                    <h4>{item.title}</h4>
                    <span>{item.period}</span>
                  </div>
                  <p>{item.details}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section split-section">
          <div>
            <div className="section-heading left-align">
              <p className="eyebrow">Education</p>
              <h3>Technical foundation</h3>
            </div>
            <ul className="bullet-list">
              {education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="section-heading left-align">
              <p className="eyebrow">Skills</p>
              <h3>Tools and strengths</h3>
            </div>
            <div className="skill-list">
              {skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h3>Selected work</h3>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.name} className="project-card">
                <h4>{project.name}</h4>
                <p>{project.summary}</p>
                <div className="project-stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="content-section contact-section">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h3>Let’s connect</h3>
          </div>

          <div className="contact-card">
            <ul>
              <li>
                <i className="bi bi-envelope" />
                <span>{profile.email}</span>
              </li>
              <li>
                <i className="bi bi-telephone" />
                <span>{profile.phone}</span>
              </li>
              <li>
                <i className="bi bi-geo-alt" />
                <span>{profile.location}</span>
              </li>
            </ul>
            <div className="socials large-socials">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <i className="bi bi-github" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="bi bi-linkedin" />
              </a>
              <a href={profile.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <i className="bi bi-instagram" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
