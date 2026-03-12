import { useTranslation } from 'react-i18next';
import { MapPin } from 'lucide-react';

export default function LocationMap() {
  const { t } = useTranslation();

  return (
    <div id="location" className="bg-brand-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          {t('location.title')} <span className="text-brand-gold">{t('location.subtitle')}</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-800 h-96 lg:h-full">
            <iframe
              title="Raskon Appart Location Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3298.5947747883256!2d-6.2636!3d34.2620!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f3f8e6d8e6d8e7%3A0x8e6d8e6d8e6d8e6d!2sKenitra%2C%20Morocco!5e0!3m2!1sen!2s!4v1234567890"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{t('location.kenitra')}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {t('location.description')}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-bold">{t('location.address')}</p>
                    <p className="text-gray-400">Kenitra, Morocco</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-bold">{t('location.nearby')}</p>
                    <p className="text-gray-400">Mehdia Beach • Town Center • Historical Sites</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-bold">{t('location.transportation')}</p>
                    <p className="text-gray-400">Train Station • Highway • Public Transport</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
