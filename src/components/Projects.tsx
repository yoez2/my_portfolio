
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MySQL. Features include user authentication, shopping cart, and payment integration.",
      tech: ["React", "Node.js", "MySQL", "Express"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/yourusername/project1",
      image: "🛒"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, built using Angular and NestJS with a modern UI/UX design.",
      tech: ["Angular", "NestJS", "TypeScript", "WebSockets"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/yourusername/project2",
      image: "📋"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current conditions and forecasts using external APIs, built with vanilla JavaScript and modern CSS.",
      tech: ["JavaScript", "CSS3", "API Integration", "Responsive Design"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/yourusername/project3",
      image: "🌤️"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a step in my learning journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-6xl">{project.image}</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Github size={16} />
                    Code
                  </a>
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
