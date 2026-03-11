import Navbar from './Navbar';
import Hero from './Hero';
import Amenities from './Amenities';
import ApartmentGrid from './ApartmentGrid';
import Reviews from './Reviews';
import FAQ from './FAQ';
import Footer from './Footer';

function App() {
  return (
    <div className="font-sans bg-brand-black min-h-screen">
      <Navbar />
      <Hero />
      <Amenities />
      <ApartmentGrid />
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;