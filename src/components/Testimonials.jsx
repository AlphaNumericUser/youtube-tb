import { Star, Youtube } from 'lucide-react';
import PropTypes from 'prop-types';

const RatingStars = () => (
  <div className="flex items-center mb-2">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 text-[#ff0000]" fill="currentColor" />
    ))}
  </div>
);

const Testimonials = ({ testimonials }) => (
  <section className="py-20 px-4 bg-[#282828] relative overflow-hidden">
    <h2 className="text-4xl font-bold text-center text-white mb-4">
      Creators I&apos;ve Worked With
    </h2>
    <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
      Successful YouTubers trust my work to grow their channels
    </p>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-[#1f1f1f] p-8 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 cursor-default">
          <div className="flex items-start space-x-4">
            <img 
              src={testimonial.avatar} 
              alt={testimonial.channel}
              className="w-16 h-16 rounded-full object-cover ring-2 ring-[#ff0000]"
            />
            <div>
              <RatingStars />
              <p className="text-gray-300 mb-4 italic">{testimonial.text}</p>
              <div className="flex items-center text-gray-400">
                <Youtube className="w-4 h-4 mr-2 text-[#ff0000]" />
                {testimonial.channel}
                <span className="ml-2 px-2 py-1 bg-[#ff0000] bg-opacity-20 rounded-full text-white text-sm">
                  {testimonial.subscribers} subs
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      channel: PropTypes.string.isRequired,
      subscribers: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Testimonials;
