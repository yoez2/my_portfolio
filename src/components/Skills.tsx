
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", level: 90, color: "bg-orange-500" },
        { name: "CSS3", level: 85, color: "bg-blue-500" },
        { name: "JavaScript", level: 80, color: "bg-yellow-500" },
        { name: "React", level: 75, color: "bg-cyan-500" },
        { name: "Angular", level: 70, color: "bg-red-500" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 75, color: "bg-green-500" },
        { name: "NestJS", level: 65, color: "bg-red-600" },
        { name: "MySQL", level: 70, color: "bg-blue-600" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here's my current tech stack and proficiency levels. I'm always learning and improving!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">{category.title}</h3>
              
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out hover:animate-pulse`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Currently Learning</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['TypeScript', 'Next.js', 'MongoDB', 'Docker', 'AWS'].map((tech, index) => (
              <span 
                key={index}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-medium hover:scale-105 transition-transform duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
