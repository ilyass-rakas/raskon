import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle } from 'lucide-react';
import Navbar from './Navbar';
import Hero from './Hero';
import Amenities from './Amenities';
import ApartmentGrid from './ApartmentGrid';
import LocationMap from './LocationMap';
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

  // Update document title and meta description based on language
  useEffect(() => {
    const titles = {
      fr: 'Raskon Appart - Locations d\'Appartements Luxe à Kenitra',
      en: 'Raskon Appart - Premium Apartment Rentals in Kenitra',
      ar: 'راسكون أبارت - فنادق شقق فاخرة في القنيطرة'
    };

    const descriptions = {
      fr: 'Découvrez nos appartements de luxe à Kenitra. Locations premium au cœur de la ville avec toutes les commodités modernes.',
      en: 'Discover our luxury apartments in Kenitra. Premium rentals in the heart of the city with modern amenities.',
      ar: 'اكتشف شققنا الفاخرة في القنيطرة. إيجارات فاخرة في قلب المدينة بجميع وسائل الراحة الحديثة.'
    };

    document.title = titles[i18n.language] || titles.fr;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = descriptions[i18n.language] || descriptions.fr;
    }
  }, [i18n.language]);

  return (
    <div className="font-sans bg-brand-black min-h-screen">
      <Navbar />
      <Hero />
      <Amenities />
      <ApartmentGrid />
      <LocationMap />
      <Reviews />
      <FAQ />
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/212666802976"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 ltr:right-6 rtl:left-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}

export default App;