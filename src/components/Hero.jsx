import PropTypes from 'prop-types';

import { ChevronDown } from 'lucide-react';
import Stats from './Stats';

const Hero = ({ stats }) => (
  <header className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
    {/* Hero Section */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#282828] to-[#0f0f0f]">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626379953822-baec19c3accd?w=1920&q=80')] opacity-10 bg-cover bg-center"></div>
    </div>
    <div className="relative text-center max-w-4xl mx-auto">
      <div className="inline-block mb-4 px-6 py-2 bg-[#ff0000] bg-opacity-20 rounded-full">
        <span className="text-white font-medium">Professional Thumbnail Design</span>
      </div>
      <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
        Thumbnails that<br />
        <span className="text-[#ff0000] relative">
          Capture Clicks
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#ff0000] transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
        </span>
      </h1>
      <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
        I design viral thumbnails that boost your views and engagement. Specialized in gaming, tech, lifestyle, and more.
      </p>
      <a 
        href="mailto:alfredo.diaz.dev@gmail.com"
        >
        <button className="bg-[#ff0000] hover:bg-[#cc0000] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/20 cursor-pointer">
          Boost Your Channel Now!
        </button>
      </a>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
        <Stats stats={stats} />
      </div>
      <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white w-8 h-8" />
      </div>
    </div>
  </header>
);

Hero.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.element
    })
  ).isRequired
};

export default Hero;
