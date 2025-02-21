import PropTypes from 'prop-types';
import { Youtube } from 'lucide-react';

const Portfolio = ({ portfolioItems }) => (
    <section className="py-20 px-4 relative">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
            My Thumbnails Have Helped These Videos Go Viral
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Discover how I&apos;ve helped other creators stand out on YouTube with attention-grabbing thumbnails
        </p>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
                <a 
                    key={index} 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[#282828] rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 cursor-pointer"
                >
                    <div className="relative overflow-hidden">
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent transition-transform duration-300 group-hover:scale-110"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                            <span className="inline-block px-3 py-1 bg-[#ff0000] text-white text-sm rounded-full mb-2">
                                {item.category}
                            </span>
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <div className="flex items-center justify-between text-gray-400">
                            <span className="flex items-center">
                                <Youtube className="w-4 h-4 mr-2 text-[#ff0000]" />
                                {item.channel}
                            </span>
                            <span>{item.views} views</span>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    </section>
);

Portfolio.propTypes = {
    portfolioItems: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            channel: PropTypes.string.isRequired,
            views: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Portfolio;
