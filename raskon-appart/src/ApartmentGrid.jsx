import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
      images: [
        "https://images.unsplash.com/photo-1502672260266-1c1de2d92004?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1493857671505-72967e2e2760?q=80&w=1000&auto=format&fit=crop"
      ]
    },
    {
      id: 2,
      nameKey: 'apartments.apt2',
      priceKey: 'apartments.apt2.price',
      specsKey: 'apartments.apt2.specs',
      images: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1524228211496-72897b973203?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1502672260266-1c1de2d92004?q=80&w=1000&auto=format&fit=crop"
      ]
    },
    {
      id: 3,
      nameKey: 'apartments.apt3',
      priceKey: 'apartments.apt3.price',
      specsKey: 'apartments.apt3.specs',
      images: [
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1575876657514-494f7bf24b85?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1493857671505-72967e2e2760?q=80&w=1000&auto=format&fit=crop"
      ]
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