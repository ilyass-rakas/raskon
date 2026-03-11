import { useTranslation } from 'react-i18next';
import { MessageCircle, Phone } from 'lucide-react';
import logo from './assets/logo.png';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div id="home" className="relative h-screen flex items-center justify-center bg-brand-black mt-20 md:mt-0">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop')" }}
      ></div>
      <div className="relative z-10 text-center px-4">
        <img src={logo} alt="Raskon Appart Logo" className="h-56 md:h-72 w-auto mx-auto object-contain drop-shadow-2xl mb-8" />
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/212666802976" target="_blank" rel="noreferrer" className="bg-brand-gold text-brand-black font-bold py-3 px-8 rounded-full hover:bg-brand-gold-light transition duration-300 flex items-center justify-center gap-2"><MessageCircle className="w-5 h-5" />{t('hero.bookWhatsApp')}</a>
          <a href="tel:+212666802976" className="border-2 border-brand-gold text-brand-gold font-bold py-3 px-8 rounded-full hover:bg-brand-gold hover:text-brand-black transition duration-300 flex items-center justify-center gap-2"><Phone className="w-5 h-5" />{t('hero.callNow')}</a>
        </div>
      </div>
    </div>
  );
}