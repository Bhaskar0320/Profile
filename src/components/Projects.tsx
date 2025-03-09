import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import insta from '../Images/insta.jpeg';
import ecomm from '../Images/Online_Shopping.png'
import medox from '../Images/medox.png';
import mediavers from '../Images/mediaverse.png'
import hero from '../Images/herobg.png';
import reduxTool from '../Images/redux_toolkit.png'
import portfolio from '../Images/portfolio.png' 
import devopsDash from '../Images/devops_dashboard.png'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with product management, cart functionality, and payment processing.',
      image: ecomm,
      technologies: ['Java','Spring Boot', 'React.js','Redux', 'MySQL', 'Docker'],
      category: 'fullstack',
      github: 'https://github.com/Bhaskar0320/ecom',
      backend:'https://github.com/Bhaskar0320/ecom_server'
    },
    {
      id: 2,
      title: 'Health Care Portal',
      description: 'A real-time end-to-end database-focused portal for patient registration, streamlining appointment scheduling and organizing crucial patient information, improving appointment accuracy.',
      image: medox,
      technologies: ['Java', 'JSP','JDBC', 'Servlet', 'MySQL', 'XML'],
      category: 'fullstack',
      github: 'https://github.com/Bhaskar0320/medox.github.io'
      // demo: 'https://example.com',
    },
    {
      id: 3,
      title: 'DevOps Dashboard',
      description: 'A DevOps Dashboard provides real-time insights into CI/CD pipelines, infrastructure health, deployment status, and system performance. It helps teams monitor key metrics, detect issues, and optimize workflows for efficient software delivery.',
      image: devopsDash,
      technologies: ['React.Js', 'JavaScript', 'Vite', 'Tailwind CSS'],
      category: 'frontend',
      github: 'https://github.com/Bhaskar0320/redux-app',
      demo: 'https://dev-ops-dashboard.vercel.app/',
    },
    {
      id: 4,
      title: 'Redux App',
      description: 'A Redux app that manages global state using a centralized store, ensuring predictable state changes via actions and reducers. It improves scalability, debugging, and state consistency across components.',
      image: reduxTool,
      technologies: ['React.Js', 'JavaScript', 'Redux', ''],
      category: 'frontend',
      github: 'https://github.com/Bhaskar0320/redux-app'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills with a modern design.',
      image: portfolio,
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'React3js', 'React Fiber'],
      category: 'frontend',
      github: 'https://github.com/Bhaskar0320/portfolio',
      demo: 'https://bhaskaramanportfolio.netlify.app/',
    },
    {
      id: 6,
      title: 'MediaVerse',
      description: 'A responsive frontend website showcasing projects and skills with a modern design.',
      image: mediavers,
      technologies: ['React','JavaScript', 'Tailwind CSS', ],
      category: 'frontend',
      github: 'https://github.com/Bhaskar0320/MediaVerse',
    },
    {
      id: 7,
      title: 'Insta Close',
      description: 'Developed RESTful APIs for user authentication and interactive UI features. Optimized MongoDB database performance through efficient indexing and query optimization. Integrated various engineering tools and designed data layer interactions.',
      image: insta,
      technologies: ['React','JavaScript', 'Node.js', 'Express.js' ],
      category: 'backend',
      github: 'https://github.com/Bhaskar0320/MediaVerse',
    }
    
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents different skills and technologies.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="flex space-x-2 p-1 bg-gray-100 rounded-lg">
            {['all', 'frontend', 'backend', 'fullstack'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeFilter === filter 
                    ? 'bg-indigo-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    <Github className="h-5 w-5 mr-1" />
                    <span>Code</span>
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5 mr-1" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;