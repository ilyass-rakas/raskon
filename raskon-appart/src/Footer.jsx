import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png'; 

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-brand-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="Raskon Appart Logo" className="h-24 w-auto object-contain mb-6" />
            <p className="text-gray-400 text-sm leading-relaxed">{t('footer.description')}</p>
          </div>

          {/* Column 2: Contact Us */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">Phone</p>
                  <a href="tel:+212666802976" className="text-gray-400 hover:text-brand-gold transition duration-300">+212 666 802 976</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">Email</p>
                  <a href="mailto:RASKONIMMOBILIER@GMAIL.COM" className="text-gray-400 hover:text-brand-gold transition duration-300">RASKONIMMOBILIER@GMAIL.COM</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">Location</p>
                  <p className="text-gray-400">Kenitra, Morocco</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Follow Us */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-white mb-6">Follow Us</h3>
            <div className="space-y-3">
              <a href="https://wa.me/212666802976" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-brand-gold transition duration-300">
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
              <a href="https://www.instagram.com/raskon_appart/?hl=fr" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-brand-gold transition duration-300">
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a href="https://www.facebook.com/share/17RtuPg6gv/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-brand-gold transition duration-300">
                <Facebook className="w-5 h-5" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-brand-gray pt-8 text-center">
          <p className="text-gray-600 text-sm mb-4">&copy; {new Date().getFullYear()} Raskon Appart. {t('footer.rights')}</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm mb-4">
            <Link to="/terms" className="text-gray-400 hover:text-brand-gold transition duration-300">Terms & Conditions</Link>
            <Link to="/privacy" className="text-gray-400 hover:text-brand-gold transition duration-300">Privacy Policy</Link>
          </div>
          <p className="text-gray-600 text-xs">Built by <a href="https://irsystems.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-white font-semibold transition duration-300">IR SYSTEMS</a></p>
        </div>
      </div>
    </footer>
  );
}