import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from './assets/logo.png'; 

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false); // Controls the mobile menu

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="bg-brand-black border-b border-brand-gray fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO */}
          <div className="flex-shrink-0 flex items-center">
            <img src={logo} alt="Raskon Appart Logo" className="h-16 w-auto object-contain" />
          </div>
          
          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-brand-gold px-3 py-2 rounded-md text-sm font-medium transition duration-300">Home</a>
            <a href="#apartments" className="text-gray-300 hover:text-brand-gold px-3 py-2 rounded-md text-sm font-medium transition duration-300">Apartments</a>
            <a href="#contact" className="bg-brand-gold text-brand-black px-4 py-2 rounded-md text-sm font-bold hover:bg-brand-gold-light transition duration-300">Contact Us</a>
            
            {/* Language Switcher */}
            <div className="flex space-x-2 border-l border-gray-700 pl-4 ml-4">
              <button onClick={() => changeLanguage('fr')} className={`text-sm font-bold ${i18n.language === 'fr' ? 'text-brand-gold' : 'text-gray-400 hover:text-white'}`}>FR</button>
              <span className="text-gray-600">|</span>
              <button onClick={() => changeLanguage('en')} className={`text-sm font-bold ${i18n.language === 'en' ? 'text-brand-gold' : 'text-gray-400 hover:text-white'}`}>EN</button>
              <span className="text-gray-600">|</span>
              <button onClick={() => changeLanguage('ar')} className={`text-sm font-bold ${i18n.language === 'ar' ? 'text-brand-gold' : 'text-gray-400 hover:text-white'}`}>AR</button>
            </div>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="md:hidden bg-brand-gray border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            <a href="#home" onClick={() => setIsOpen(false)} className="text-white hover:text-brand-gold block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#apartments" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-brand-gold block px-3 py-2 rounded-md text-base font-medium">Apartments</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-brand-gold block px-3 py-2 rounded-md text-base font-bold">Contact Us</a>
            
            {/* Mobile Language Switcher */}
            <div className="flex space-x-4 px-3 py-4 mt-2 border-t border-gray-700">
              <button onClick={() => { changeLanguage('fr'); setIsOpen(false); }} className={`text-base font-bold ${i18n.language === 'fr' ? 'text-brand-gold' : 'text-gray-400'}`}>FR</button>
              <button onClick={() => { changeLanguage('en'); setIsOpen(false); }} className={`text-base font-bold ${i18n.language === 'en' ? 'text-brand-gold' : 'text-gray-400'}`}>EN</button>
              <button onClick={() => { changeLanguage('ar'); setIsOpen(false); }} className={`text-base font-bold ${i18n.language === 'ar' ? 'text-brand-gold' : 'text-gray-400'}`}>AR</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}