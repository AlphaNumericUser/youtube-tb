import { Mail } from 'lucide-react';

const CTA = () => (
  <section className="py-20 px-4 relative overflow-hidden">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-white mb-6">Ready to Boost Your Views?</h2>
      <p className="text-lg text-gray-300 mb-6">
        Get eye-catching thumbnails to grow your channel.
      </p>
      <a 
        href="mailto:alfredo.diaz.dev@gmail.com" 
        className="inline-flex items-center gap-2 bg-[#ff0000] hover:bg-[#cc0000] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 hover:shadow-lg cursor-pointer"
      >
        <Mail className="w-6 h-6" />
        Contact Me Now!
      </a>
    </div>
  </section>
);

export default CTA;
