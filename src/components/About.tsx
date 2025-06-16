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
              <i>Hello! I'm Dawa a passionate web developer</i>
            </h3>
            <p className="text-gray-600 leading-relaxed">
           <i> <b>I hold a Diploma in Information and Communication Technology (ICT) and I'm currently building my skills as a web developer. I'm passionate about creating clean, functional, and user-friendly websites and applications that help solve real-world problems.</b></i>
            </p>
            <p className="text-gray-600 leading-relaxed">
            <i><b>My journey started with a good foundation in ICT, and now I'm focused on learning and applying modern web technologies like HTML, CSS, JavaScript, React, Angular, NestJS, and MySQL. I enjoy building full-stack projects and constantly challenge myself to grow through hands-on learning.</b></i>
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
              <img src="/my-photo.jpeg" alt="Dawa Yoezer Dorji" className="w-72 h-72 rounded-full object-cover" />
            </div>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="mt-16">
          <i><h3 className="text-2xl font-semibold text-gray-800 mb-6">Work Experience </h3></i>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <i><h4 className="text-xl font-semibold text-gray-800 mb-2">Media & Marketing – Lonely Bhutan Tours & Treks</h4></i>
            <b><i><p className="text-gray-600 mb-2">Paro, Bhutan</p></i></b>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <b><i><li>Managed digital marketing campaigns, including social media, content creation, and branding</li></i></b>
              <b><i><li>Developed and executed marketing strategies to attract international and local travelers</li></i></b>
              <b><i><li>Enhanced the agency's online presences through SEO, website management, and promotional content</li></i></b>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
