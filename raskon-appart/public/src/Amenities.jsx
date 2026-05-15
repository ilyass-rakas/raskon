import { useTranslation } from 'react-i18next';
import { Wifi, Snowflake, ShieldCheck, Sparkles } from 'lucide-react';

export default function Amenities() {
  const { t } = useTranslation();

  const features = [
    { icon: <Wifi className="w-10 h-10 text-brand-gold" />, title: t('amenities.wifi.title'), desc: t('amenities.wifi.desc') },
    { icon: <Snowflake className="w-10 h-10 text-brand-gold" />, title: t('amenities.ac.title'), desc: t('amenities.ac.desc') },
    { icon: <ShieldCheck className="w-10 h-10 text-brand-gold" />, title: t('amenities.parking.title'), desc: t('amenities.parking.desc') },
    { icon: <Sparkles className="w-10 h-10 text-brand-gold" />, title: t('amenities.cleaning.title'), desc: t('amenities.cleaning.desc') },
  ];

  return (
    <div className="bg-brand-gray py-20 px-4 border-y border-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">{t('amenities.premium')} <span className="text-brand-gold">{t('amenities.title')}</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {features.map((item, index) => (
            <div key={index} className="p-6 bg-brand-black rounded-xl border border-gray-800 hover:border-brand-gold transition duration-300">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}