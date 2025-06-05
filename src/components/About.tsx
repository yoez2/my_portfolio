
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Hello! I'm a passionate web developer
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I hold a Diploma in Information and Communication Technology (ICT) and I'm currently 
              on an exciting journey learning web development. My passion lies in creating beautiful, 
              functional, and user-friendly web applications that solve real-world problems.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With a strong foundation in ICT and growing expertise in modern web technologies, 
              I'm constantly exploring new frameworks and tools to stay current with industry trends. 
              I believe in writing clean, maintainable code and creating experiences that users love.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-50 px-4 py-2 rounded-lg">
                <span className="text-blue-600 font-medium">🎓 ICT Diploma</span>
              </div>
              <div className="bg-green-50 px-4 py-2 rounded-lg">
                <span className="text-green-600 font-medium">📚 Self-taught Developer</span>
              </div>
              <div className="bg-purple-50 px-4 py-2 rounded-lg">
                <span className="text-purple-600 font-medium">🚀 Problem Solver</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-300">
              <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
