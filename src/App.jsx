import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import { portfolioItems } from './data/portfolioItems';
import { testimonials } from './data/testimonials';
import { stats } from './data/stats.jsx';
console.log(stats);

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <Hero stats={stats} />
      <Portfolio portfolioItems={portfolioItems} />
      <Testimonials testimonials={testimonials} />
      <CTA />
    </div>
  );
}

export default App;
