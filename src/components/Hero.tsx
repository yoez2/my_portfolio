const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[url('/hero-bg.JPEG')] bg-cover bg-center bg-no-repeat bg-fixed">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Hi, I'm <span className="text-blue-600">Dawa Yoezer Dorji</span>
          </h1> */}
          {/* <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A passionate web developer crafting digital experiences with modern technologies
          </p> */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
