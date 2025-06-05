import { useState, useEffect, useRef } from 'react';

declare global {
  interface Window {
    anime: any;
  }
}

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const portfolioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (portfolioRef.current && window.anime) {
      const text = portfolioRef.current.textContent || '';
      portfolioRef.current.innerHTML = text.split(' ').map(word => 
        `<span class="inline-block">${word}</span>`
      ).join(' ');

      window.anime({
        targets: portfolioRef.current.querySelectorAll('span'),
        y: [
          { value: '-2.75rem', duration: 600, easing: 'easeOutExpo' },
          { value: 0, duration: 800, easing: 'easeOutBounce', delay: 100 }
        ],
        rotate: {
          value: '-1turn',
          delay: 0
        },
        delay: (_, i) => i * 50,
        easing: 'easeInOutCirc',
        loopDelay: 1000,
        loop: true
      });
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div ref={portfolioRef} className="font-bold text-3xl text-black-800 font-permanent-marker">Dawa Yoezer Dorji</div>
          
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 capitalize font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
