import { useTranslation } from 'react-i18next';
import { MessageCircle, Phone } from 'lucide-react';
import logo from './assets/logo.png';
import Weather from './Weather';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div id="home" className="relative h-screen flex items-center justify-center bg-brand-black mt-20 md:mt-0">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop')" }}
      ></div>
      <div className="relative z-10 text-center px-4">
        <div className="mb-6 flex justify-center">
          <Weather />
        </div>
        <img src={logo} alt="Raskon Appart Logo" className="h-56 md:h-72 w-auto mx-auto object-contain drop-shadow-2xl mb-8" />
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/212666802976" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-brand-gold text-brand-gold font-bold uppercase tracking-widest text-sm transition duration-300 hover:bg-brand-gold hover:text-brand-black rounded-lg"><MessageCircle className="w-5 h-5" />WhatsApp</a>
          <a href="tel:+212666802976" className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-brand-gold text-brand-gold font-bold uppercase tracking-widest text-sm transition duration-300 hover:bg-brand-gold hover:text-brand-black rounded-lg"><Phone className="w-5 h-5" />Call</a>
        </div>
      </div>
    </div>
  );
}