import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Hero from './Hero';
import Amenities from './Amenities';
import ApartmentGrid from './ApartmentGrid';
import Reviews from './Reviews';
import FAQ from './FAQ';
import Footer from './Footer';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }, [i18n.language]);

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