import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight, Share2, CheckCircle } from 'lucide-react';
import BookingModal from './BookingModal';
import Lightbox from './Lightbox';
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
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % apt.images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + apt.images.length) % apt.images.length);
  };

  return (
    <>
      <div className="bg-brand-gray rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-brand-gold transition duration-300">
        {/* Image Slider */}
        <div className="relative group h-56 overflow-hidden cursor-pointer" onClick={() => setIsLightboxOpen(true)}>
          <img 
            src={apt.images[currentIndex]} 
            alt={apt.title}
            loading="lazy"
            className="w-full h-full object-cover transition duration-300 hover:scale-105"
          />
          
          {/* Navigation Buttons - Show on Hover */}
          {apt.images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition duration-300"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
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
          <div className="flex justify-between items-start mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-white">{apt.title}</h3>
                {apt.verified && (
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" title="Verified property" />
                )}
              </div>
            </div>
            <button 
              onClick={() => {
                const shareText = `Check out ${apt.title} on Raskon Appart!`;
                const shareUrl = window.location.href;
                if (navigator.share) {
                  navigator.share({
                    title: apt.title,
                    text: shareText,
                    url: shareUrl
                  }).catch(err => console.log('Share error:', err));
                } else {
                  // Fallback: Copy to clipboard
                  navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
                  alert('Link copied to clipboard!');
                }
              }}
              className="ml-2 text-brand-gold hover:text-brand-gold-light transition flex-shrink-0"
              aria-label="Share apartment"
              title="Share this apartment"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>
          <button 
            onClick={() => setIsBookingOpen(true)}
            className="w-full bg-transparent border-2 border-brand-gold text-brand-gold font-bold py-2 rounded-lg hover:bg-brand-gold hover:text-brand-black transition duration-300"
          >
            {t('apartments.checkAvailability')}
          </button>
        </div>
      </div>

      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        apartmentTitle={apt.title}
      />

      <Lightbox 
        isOpen={isLightboxOpen} 
        images={apt.images} 
        initialIndex={currentIndex}
        onClose={() => setIsLightboxOpen(false)}
      />
    </>
  );
}

export default function ApartmentGrid() {
  const { t } = useTranslation();
  const [selectedLocation, setSelectedLocation] = useState(null);

  const apartments = [
    {
      id: 1,
      title: 'Appartement Premium - Mehdia',
      location: 'Mehdia',
      verified: true,
      images: [apt1_1, apt1_2, apt1_3, apt1_4, apt1_5, apt1_6, apt1_7, apt1_8, apt1_9]
    },
    {
      id: 2,
      title: 'Résidence Moderne - Centre Ville',
      location: 'Centre Ville',
      verified: true,
      images: [apt2_1, apt2_2, apt2_3, apt2_4, apt2_5, apt2_6, apt2_7, apt2_8, apt2_9, apt2_10]
    },
    {
      id: 3,
      title: 'Appartement Prestige - La Ville Haute',
      location: 'La Ville Haute',
      verified: true,
      images: [apt3_1, apt3_2, apt3_3, apt3_4, apt3_5, apt3_6, apt3_7, apt3_8, apt3_9, apt3_10, apt3_11, apt3_12, apt3_13, apt3_14, apt3_15, apt3_16, apt3_17]
    },
    {
      id: 4,
      title: 'Résidence Élégance - Centre Ville',
      location: 'Centre Ville',
      verified: true,
      images: [apt4_1, apt4_2, apt4_3, apt4_4, apt4_5, apt4_6, apt4_7, apt4_8, apt4_9]
    }
  ];

  // Get unique locations
  const locations = [...new Set(apartments.map(apt => apt.location))];

  // Filter apartments by selected location
  const filteredApartments = selectedLocation 
    ? apartments.filter(apt => apt.location === selectedLocation)
    : apartments;

  return (
    <div id="apartments" className="bg-brand-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          {t('apartments.featured')} <span className="text-brand-gold">{t('apartments.title')}</span>
        </h2>

        {/* Location Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <button
            onClick={() => setSelectedLocation(null)}
            className={`px-6 py-2 rounded-lg font-bold uppercase tracking-widest text-sm transition duration-300 ${
              selectedLocation === null
                ? 'bg-brand-gold text-brand-black'
                : 'border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black'
            }`}
          >
            {t('apartments.allLocations')}
          </button>
          {locations.map(location => (
            <button
              key={location}
              onClick={() => setSelectedLocation(location)}
              className={`px-6 py-2 rounded-lg font-bold uppercase tracking-widest text-sm transition duration-300 ${
                selectedLocation === location
                  ? 'bg-brand-gold text-brand-black'
                  : 'border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black'
              }`}
            >
              {location}
            </button>
          ))}
        </div>

        {/* Apartments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredApartments.map((apt) => (
            <ApartmentCard key={apt.id} apt={apt} t={t} />
          ))}
        </div>

        {/* No Results Message */}
        {filteredApartments.length === 0 && (
          <p className="text-center text-gray-400 text-lg">
            {t('apartments.noResults')}
          </p>
        )}
      </div>
    </div>
  );
}