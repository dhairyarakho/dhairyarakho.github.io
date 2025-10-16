// Portfolio Website JavaScript

// Data
const personalInfo = {
  name: "Dhairya Tiwari",
  title: "Data Science Student & Analytics Enthusiast",
  bio: "Currently enrolled in IIT Madras BS Data Science course and pursuing BA Economics (Hon) from BHU. Passionate about data analytics with aspirations to master machine learning.",
  location: "India",
  email: "dhairya.tiwari@example.com",
  github: "https://github.com/dhairyatiwari",
  linkedin: "https://linkedin.com/in/dhairyatiwari",
  twitter: "https://twitter.com/dhairyatiwari"
};

const projects = [
  {
    title: "Student Performance Analytics Dashboard",
    description: "Interactive dashboard analyzing academic performance patterns using Python, Pandas, and Streamlit. Visualizes trends in CGPA, course difficulty, and study patterns.",
    technologies: ["Python", "Pandas", "Streamlit", "Plotly"],
    category: "data-analytics",
    status: "Completed",
    github_link: "https://github.com/dhairyatiwari/student-analytics",
    live_demo: "https://student-analytics-dashboard.streamlit.app",
    date: "2025-02-15"
  },
  {
    title: "Economic Indicators Visualization",
    description: "Comprehensive analysis and visualization of key economic indicators including GDP, inflation rates, and unemployment data across different countries.",
    technologies: ["Python", "Matplotlib", "Seaborn", "NumPy"],
    category: "economics-analysis",
    status: "Completed",
    github_link: "https://github.com/dhairyatiwari/economic-indicators",
    live_demo: "",
    date: "2025-01-20"
  },
  {
    title: "House Price Prediction Model",
    description: "Machine learning model to predict house prices using regression algorithms. Implemented feature engineering and model evaluation techniques.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Jupyter"],
    category: "machine-learning",
    status: "In Progress",
    github_link: "https://github.com/dhairyatiwari/house-price-prediction",
    live_demo: "",
    date: "2025-03-01"
  },
  {
    title: "Personal Finance Tracker",
    description: "Full-stack web application for tracking personal expenses and income. Features budget planning, expense categorization, and financial insights.",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
    category: "web-development",
    status: "Completed",
    github_link: "https://github.com/dhairyatiwari/finance-tracker",
    live_demo: "https://my-finance-tracker.vercel.app",
    date: "2024-12-10"
  },
  {
    title: "Data Science Learning Resources Hub",
    description: "Curated collection of data science learning resources, tutorials, and practice datasets. Built with modern web technologies.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    category: "web-development",
    status: "Ongoing",
    github_link: "https://github.com/dhairyatiwari/ds-resources",
    live_demo: "https://ds-resources-hub.vercel.app",
    date: "2025-03-10"
  },
  {
    title: "Statistical Analysis of Educational Data",
    description: "Comprehensive statistical analysis of educational datasets using R and Python. Includes hypothesis testing, correlation analysis, and predictive modeling.",
    technologies: ["R", "Python", "Statistical Analysis", "Data Mining"],
    category: "statistics",
    status: "Completed",
    github_link: "https://github.com/dhairyatiwari/education-stats",
    live_demo: "",
    date: "2025-01-05"
  }
];

const blogPosts = [
  {
    title: "My Journey into Data Science: From Zero to Analytics",
    date: "2025-01-15",
    excerpt: "Sharing my experience transitioning into the world of data science while balancing dual degrees at IIT Madras and BHU.",
    content: "Starting my journey in data science has been both challenging and rewarding. Currently pursuing BS Data Science at IIT Madras alongside BA Economics (Hon) from BHU, I've learned to appreciate the intersection of mathematics and real-world problem solving. This post covers the fundamental concepts I've mastered, from Python programming to statistical analysis. The key insights I've gained include the importance of clean data, the power of visualization in storytelling, and how statistical thinking applies to real-world problems. Through coursework and personal projects, I've developed a systematic approach to data analysis that combines theoretical knowledge with practical implementation.",
    tags: ["data-science", "personal-journey", "education"],
    readTime: "5 min read"
  },
  {
    title: "Essential Python Libraries Every Data Science Student Should Know",
    date: "2025-02-02",
    excerpt: "A comprehensive guide to the must-know Python libraries for data manipulation, visualization, and analysis.",
    content: "As I dive deeper into data analytics, I've discovered several Python libraries that are game-changers for any aspiring data scientist. From pandas for data manipulation to matplotlib for visualization, here's my curated list of essential tools. Pandas has become my go-to for data cleaning and manipulation, while NumPy provides the mathematical foundation for numerical computing. For visualization, I rely on Matplotlib for basic plots and Seaborn for statistical visualizations. Scikit-learn is invaluable for machine learning algorithms, and Jupyter notebooks provide the perfect environment for exploratory data analysis. Each library serves a specific purpose in the data science workflow, and mastering them has significantly improved my productivity and analytical capabilities.",
    tags: ["python", "libraries", "data-analytics"],
    readTime: "7 min read"
  },
  {
    title: "Statistics vs Economics: Finding the Perfect Balance",
    date: "2025-02-20",
    excerpt: "How studying both data science and economics provides a unique perspective on analytical thinking.",
    content: "Pursuing dual degrees has given me a unique perspective on how statistical methods apply to economic theories. This post explores the synergies between quantitative analysis and economic principles, and how they complement each other in data-driven decision making. Economics provides the theoretical framework for understanding market behavior and policy implications, while data science offers the tools to test these theories empirically. The combination allows me to approach problems from multiple angles, considering both the mathematical rigor of statistical analysis and the practical implications of economic theory. This interdisciplinary approach has enhanced my critical thinking and problem-solving abilities, making me better equipped to tackle complex real-world challenges.",
    tags: ["economics", "statistics", "education"],
    readTime: "6 min read"
  },
  {
    title: "Machine Learning Roadmap: My Learning Plan for 2025",
    date: "2025-03-05",
    excerpt: "Outlining my structured approach to learning machine learning algorithms and techniques.",
    content: "With a solid foundation in data analytics, I'm now ready to tackle machine learning. This post outlines my learning roadmap for 2025, including the key algorithms, frameworks, and projects I plan to master. My journey will begin with supervised learning algorithms like linear regression and classification methods, then progress to unsupervised learning techniques such as clustering and dimensionality reduction. I plan to explore neural networks and deep learning frameworks like TensorFlow and PyTorch. Practical projects will be central to my learning approach, starting with simple prediction models and advancing to more complex applications like natural language processing and computer vision. The goal is to build a comprehensive understanding of both the theoretical foundations and practical implementations of machine learning.",
    tags: ["machine-learning", "roadmap", "planning"],
    readTime: "8 min read"
  },
  {
    title: "Building My First Data Visualization Dashboard",
    date: "2025-03-18",
    excerpt: "Step-by-step process of creating an interactive dashboard using Python and Streamlit.",
    content: "Creating my first interactive dashboard was an exciting milestone in my data science journey. Using real-world datasets and Streamlit, I built a comprehensive visualization tool that tells compelling stories with data. The project involved data cleaning, exploratory data analysis, and creating interactive visualizations that allow users to filter and explore the data dynamically. I learned the importance of user experience design in data visualization, ensuring that the dashboard is both informative and intuitive. The process taught me valuable skills in web development for data science applications and reinforced the importance of clear, actionable insights in data presentation. This project has opened up new possibilities for sharing analytical insights with non-technical audiences.",
    tags: ["visualization", "dashboard", "project"],
    readTime: "10 min read"
  }
];

// Theme Management
class ThemeManager {
  constructor() {
    this.currentTheme = 'light';
    this.themeToggle = document.getElementById('themeToggle');
    this.themeIcon = this.themeToggle.querySelector('.theme-icon');
    this.init();
  }

  init() {
    // Check for saved theme or default to light
    const savedTheme = this.getSavedTheme() || 'light';
    this.setTheme(savedTheme);
    this.themeToggle.addEventListener('click', () => this.toggleTheme());
  }

  getSavedTheme() {
    try {
      // Using a simple approach without localStorage
      return this.currentTheme;
    } catch (error) {
      return 'light';
    }
  }

  saveTheme(theme) {
    try {
      // Store theme in memory only
      this.currentTheme = theme;
    } catch (error) {
      // Silently handle localStorage errors
    }
  }

  setTheme(theme) {
    this.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    this.updateThemeIcon(theme);
    this.saveTheme(theme);
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  updateThemeIcon(theme) {
    this.themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
  }
}

// Navigation Management
class NavigationManager {
  constructor() {
    this.navMenu = document.getElementById('navMenu');
    this.mobileToggle = document.getElementById('mobileMenuToggle');
    this.navLinks = document.querySelectorAll('.nav-link');
    this.init();
  }

  init() {
    this.mobileToggle.addEventListener('click', () => this.toggleMobileMenu());
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => this.handleNavClick(e));
    });
    
    // Handle scroll for active nav states
    window.addEventListener('scroll', () => this.handleScroll());
  }

  toggleMobileMenu() {
    this.navMenu.classList.toggle('active');
  }

  handleNavClick(e) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const headerOffset = 80;
      const elementPosition = targetSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu
    this.navMenu.classList.remove('active');
  }

  handleScroll() {
    const sections = ['home', 'projects', 'blog', 'contact'];
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      const navLink = document.querySelector(`a[href="#${sectionId}"]`);
      
      if (section && navLink) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          this.navLinks.forEach(link => link.classList.remove('active'));
          navLink.classList.add('active');
        }
      }
    });
  }
}

// Project Manager
class ProjectManager {
  constructor() {
    this.projectsGrid = document.getElementById('projectsGrid');
    this.filterButtons = document.querySelectorAll('.filter-btn');
    this.currentFilter = 'all';
    this.init();
  }

  init() {
    this.renderProjects();
    this.filterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => this.handleFilter(e));
    });
  }

  renderProjects() {
    this.projectsGrid.innerHTML = '';
    
    projects.forEach(project => {
      const projectCard = this.createProjectCard(project);
      this.projectsGrid.appendChild(projectCard);
    });
  }

  createProjectCard(project) {
    const card = document.createElement('div');
    card.className = `project-card`;
    card.setAttribute('data-category', project.category);
    
    const categoryColors = {
      'data-analytics': 'var(--color-bg-1)',
      'machine-learning': 'var(--color-bg-3)',
      'web-development': 'var(--color-bg-4)',
      'economics-analysis': 'var(--color-bg-5)',
      'statistics': 'var(--color-bg-6)'
    };
    
    const categoryColor = categoryColors[project.category] || 'var(--color-bg-1)';
    
    card.innerHTML = `
      <div class="project-header">
        <h3 class="project-title">${project.title}</h3>
        <span class="project-category" style="background: ${categoryColor}">
          ${this.formatCategory(project.category)}
        </span>
      </div>
      <p class="project-description">${project.description}</p>
      <div class="project-tech">
        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
      </div>
      <div class="project-links">
        <a href="${project.github_link}" class="project-link" target="_blank">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          View Code
        </a>
        ${project.live_demo ? `
          <a href="${project.live_demo}" class="project-link project-link--secondary" target="_blank">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15,3 21,3 21,9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Live Demo
          </a>
        ` : ''}
      </div>
    `;
    
    return card;
  }

  formatCategory(category) {
    return category.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }

  handleFilter(e) {
    const filter = e.target.getAttribute('data-filter');
    this.currentFilter = filter;
    
    // Update active filter button
    this.filterButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    // Filter projects
    this.filterProjects(filter);
  }

  filterProjects(filter) {
    const projectCards = this.projectsGrid.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      
      if (filter === 'all' || category === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  }
}

// Blog Manager
class BlogManager {
  constructor() {
    this.blogGrid = document.getElementById('blogGrid');
    this.init();
  }

  init() {
    this.renderBlogPosts();
  }

  renderBlogPosts() {
    this.blogGrid.innerHTML = '';
    
    blogPosts.forEach((post, index) => {
      const blogCard = this.createBlogCard(post, index);
      this.blogGrid.appendChild(blogCard);
    });
  }

  createBlogCard(post, index) {
    const card = document.createElement('article');
    card.className = 'blog-card';
    
    card.innerHTML = `
      <div class="blog-header">
        <h3 class="blog-title">${post.title}</h3>
        <div class="blog-meta">
          <span class="blog-date">${this.formatDate(post.date)}</span>
          <span class="blog-read-time">${post.readTime}</span>
        </div>
        <div class="blog-tags">
          ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
        </div>
      </div>
      <p class="blog-excerpt">${post.excerpt}</p>
      <div class="blog-content" id="blog-content-${index}">
        <p>${post.content}</p>
      </div>
      <button class="blog-toggle" data-post="${index}">
        Read More
      </button>
    `;
    
    const toggleBtn = card.querySelector('.blog-toggle');
    toggleBtn.addEventListener('click', (e) => this.toggleBlogContent(e, index));
    
    return card;
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }

  toggleBlogContent(e, index) {
    const content = document.getElementById(`blog-content-${index}`);
    const button = e.target;
    
    if (content.classList.contains('expanded')) {
      content.classList.remove('expanded');
      button.textContent = 'Read More';
    } else {
      content.classList.add('expanded');
      button.textContent = 'Read Less';
    }
  }
}

// Application Initialization
class PortfolioApp {
  constructor() {
    this.themeManager = null;
    this.navigationManager = null;
    this.projectManager = null;
    this.blogManager = null;
    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
    } else {
      this.initializeComponents();
    }
  }

  initializeComponents() {
    try {
      this.themeManager = new ThemeManager();
      this.navigationManager = new NavigationManager();
      this.projectManager = new ProjectManager();
      this.blogManager = new BlogManager();
      
      console.log('Portfolio application initialized successfully');
    } catch (error) {
      console.error('Error initializing portfolio application:', error);
    }
  }
}

// Initialize the application
const portfolioApp = new PortfolioApp();