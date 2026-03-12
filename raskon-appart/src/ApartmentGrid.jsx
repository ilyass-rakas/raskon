import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import apt1_1 from './assets/apt1_1.jpg';
import apt1_2 from './assets/apt1_2.jpg';
import apt1_3 from './assets/apt1_3.jpg';
import apt1_4 from './assets/apt1_4.jpg';
import apt1_5 from './assets/apt1_5.jpg';
import apt1_6 from './assets/apt1_6.jpg';
import apt1_7 from './assets/apt1_7.jpg';
import apt1_8 from './assets/apt1_8.jpg';
import apt1_9 from './assets/apt1_9.jpg';
import apt2_1 from './assets/apt2_1.jpg';
import apt2_2 from './assets/apt2_2.jpg';
import apt2_3 from './assets/apt2_3.jpg';
import apt2_4 from './assets/apt2_4.jpg';
import apt2_5 from './assets/apt2_5.jpg';
import apt2_6 from './assets/apt2_6.jpg';
import apt2_7 from './assets/apt2_7.jpg';
import apt2_8 from './assets/apt2_8.jpg';
import apt2_9 from './assets/apt2_9.jpg';
import apt2_10 from './assets/apt2_10.jpg';
import apt3_1 from './assets/apt3_1.jpg';
import apt3_2 from './assets/apt3_2.jpg';
import apt3_3 from './assets/apt3_3.jpg';
import apt3_4 from './assets/apt3_4.jpg';
import apt3_5 from './assets/apt3_5.jpg';
import apt3_6 from './assets/apt3_6.jpg';
import apt3_7 from './assets/apt3_7.jpg';
import apt3_8 from './assets/apt3_8.jpg';
import apt3_9 from './assets/apt3_9.jpg';
import apt3_10 from './assets/apt3_10.jpg';
import apt3_11 from './assets/apt3_11.jpg';
import apt3_12 from './assets/apt3_12.jpg';
import apt3_13 from './assets/apt3_13.jpg';
import apt3_14 from './assets/apt3_14.jpg';
import apt3_15 from './assets/apt3_15.jpg';
import apt3_16 from './assets/apt3_16.jpg';
import apt3_17 from './assets/apt3_17.jpg';
import apt4_1 from './assets/apt4_1.jpg';
import apt4_2 from './assets/apt4_2.jpg';
import apt4_3 from './assets/apt4_3.jpg';
import apt4_4 from './assets/apt4_4.jpg';
import apt4_5 from './assets/apt4_5.jpg';
import apt4_6 from './assets/apt4_6.jpg';
import apt4_7 from './assets/apt4_7.jpg';
import apt4_8 from './assets/apt4_8.jpg';
import apt4_9 from './assets/apt4_9.jpg';

function ApartmentCard({ apt, t }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % apt.images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + apt.images.length) % apt.images.length);
  };

  return (
    <div className="bg-brand-gray rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-brand-gold transition duration-300">
      {/* Image Slider */}
      <div className="relative group h-56 overflow-hidden">
        <img 
          src={apt.images[currentIndex]} 
          alt={t(apt.nameKey)} 
          className="w-full h-full object-cover transition duration-300"
        />
        
        {/* Navigation Buttons - Show on Hover */}
        {apt.images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition duration-300"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Photo Counter */}
        {apt.images.length > 1 && (
          <div className="absolute bottom-3 right-3 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
            {currentIndex + 1}/{apt.images.length}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-bold text-white">{t(apt.nameKey)}</h3>
          <span className="text-brand-gold font-bold">{t(apt.priceKey)}</span>
        </div>
        <p className="text-gray-400 mb-6">{t(apt.specsKey)}</p>
        <button className="w-full bg-transparent border-2 border-brand-gold text-brand-gold font-bold py-2 rounded-lg hover:bg-brand-gold hover:text-brand-black transition duration-300">
          {t('apartments.viewDetails')}
        </button>
      </div>
    </div>
  );
}

export default function ApartmentGrid() {
  const { t } = useTranslation();

  const apartments = [
    {
      id: 1,
      nameKey: 'apartments.apt1',
      priceKey: 'apartments.apt1.price',
      specsKey: 'apartments.apt1.specs',
      images: [apt1_1, apt1_2, apt1_3, apt1_4, apt1_5, apt1_6, apt1_7, apt1_8, apt1_9]
    },
    {
      id: 2,
      nameKey: 'apartments.apt2',
      priceKey: 'apartments.apt2.price',
      specsKey: 'apartments.apt2.specs',
      images: [apt2_1, apt2_2, apt2_3, apt2_4, apt2_5, apt2_6, apt2_7, apt2_8, apt2_9, apt2_10]
    },
    {
      id: 3,
      nameKey: 'apartments.apt3',
      priceKey: 'apartments.apt3.price',
      specsKey: 'apartments.apt3.specs',
      images: [apt3_1, apt3_2, apt3_3, apt3_4, apt3_5, apt3_6, apt3_7, apt3_8, apt3_9, apt3_10, apt3_11, apt3_12, apt3_13, apt3_14, apt3_15, apt3_16, apt3_17]
    }
  ];

  return (
    <div id="apartments" className="bg-brand-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          {t('apartments.featured')} <span className="text-brand-gold">{t('apartments.title')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apartments.map((apt) => (
            <ApartmentCard key={apt.id} apt={apt} t={t} />
          ))}
        </div>
      </div>
    </div>
  );
}