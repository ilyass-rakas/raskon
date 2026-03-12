import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    fr: {
      translation: {
        // Navbar
        'nav.home': 'Accueil',
        'nav.apartments': 'Appartements',
        'nav.contact': 'Nous Contacter',
        
        // Hero
        'hero.subtitle': 'Locations d\'appartements premium au cœur de Kenitra.',
        'hero.bookWhatsApp': '📱 Réserver via WhatsApp',
        'hero.callNow': '📞 Appeler Maintenant',
        
        // Amenities
        'amenities.title': 'Équipements',
        'amenities.premium': 'Premium',
        'amenities.wifi.title': 'WiFi Haut Débit',
        'amenities.wifi.desc': 'Internet fibre rapide et fiable.',
        'amenities.ac.title': 'Climatisation',
        'amenities.ac.desc': 'Restez au frais pendant l\'été marocain.',
        'amenities.parking.title': 'Parking Sécurisé',
        'amenities.parking.desc': 'Parking fermé et sécurisé pour voitures et motos.',
        'amenities.cleaning.title': 'Nettoyage Quotidien',
        'amenities.cleaning.desc': 'Service de ménage optionnel disponible.',
        
        // Apartments
        'apartments.title': 'Appartements',
        'apartments.featured': 'En Vedette',
        'apartments.viewDetails': 'Voir les Détails',
        'apartments.apt1': 'Studio Centre Premium',
        'apartments.apt1.specs': '1 Chambre • 1 Salle de Bain • WiFi',
        'apartments.apt1.price': '350 DH / nuit',
        'apartments.apt2': 'Suite Familiale Mehdia',
        'apartments.apt2.specs': '2 Chambres • 2 Salles de Bain • Balcon',
        'apartments.apt2.price': '600 DH / nuit',
        'apartments.apt3': 'Penthouse Luxe',
        'apartments.apt3.specs': '3 Chambres • 2 Salles de Bain • Toit',
        'apartments.apt3.price': '850 DH / nuit',
        'apartments.apt4': 'Penthouse Grand Luxe',
        'apartments.apt4.specs': '3 Chambres • 3 Salles de Bain • Terrasse',
        'apartments.apt4.price': '1200 DH / nuit',
        
        // Reviews
        'reviews.title': 'Expériences',
        'reviews.guest': 'Des Clients',
        'reviews.rev1': 'Meilleur appartement que j\'ai loué à Kenitra. Super propre et l\'hôte très réactif.',
        'reviews.rev1.name': 'Ahmed B.',
        'reviews.rev2': 'Luxe décent prix. L\'emplacement est parfait, près de tout ce dont j\'avais besoin.',
        'reviews.rev2.name': 'Sarah L.',
        'reviews.rev3': 'Hautement recommandé. Le parking sécurisé était un gros plus pour mon véhicule.',
        'reviews.rev3.name': 'Karim T.',
        
        // FAQ
        'faq.title': 'Foire Aux Questions',
        'faq.q1': 'Quel est le moment de l\'arrivée et du départ?',
        'faq.a1': 'L\'arrivée est à 14h00 et le départ à 11h00. L\'enregistrement anticipé peut être demandé.',
        'faq.q2': 'Demandez-vous un dépôt de garantie?',
        'faq.a2': 'Oui, nous exigeons un dépôt de garantie standard à l\'arrivée, entièrement remboursé au départ.',
        'faq.q3': 'Comment recevrai-je les clés?',
        'faq.a3': 'Nous proposons une rencontre personnalisée pour vous remettre les clés et vous présenter l\'appartement.',
        
        // Footer
        'footer.description': 'Votre partenaire de confiance pour les locations d\'appartements à Kenitra, Maroc.',
        'footer.instagram': '📸 Nous Suivre sur Instagram',
        'footer.rights': 'Tous droits réservés.',
      }
    },
    en: {
      translation: {
        // Navbar
        'nav.home': 'Home',
        'nav.apartments': 'Apartments',
        'nav.contact': 'Contact Us',
        
        // Hero
        'hero.subtitle': 'Premium apartment rentals in the heart of Kenitra.',
        'hero.bookWhatsApp': '📱 Book via WhatsApp',
        'hero.callNow': '📞 Call Now',
        
        // Amenities
        'amenities.title': 'Amenities',
        'amenities.premium': 'Premium',
        'amenities.wifi.title': 'High-Speed WiFi',
        'amenities.wifi.desc': 'Fast and reliable fiber internet.',
        'amenities.ac.title': 'Air Conditioning',
        'amenities.ac.desc': 'Stay cool during the Moroccan summer.',
        'amenities.parking.title': 'Secure Parking',
        'amenities.parking.desc': 'Safe, gated parking for cars and motorcycles.',
        'amenities.cleaning.title': 'Daily Cleaning',
        'amenities.cleaning.desc': 'Optional maid service available.',
        
        // Apartments
        'apartments.title': 'Apartments',
        'apartments.featured': 'Featured',
        'apartments.viewDetails': 'View Details',
        'apartments.apt1': 'Premium Center Studio',
        'apartments.apt1.specs': '1 Bed • 1 Bath • WiFi',
        'apartments.apt1.price': '350 DH / night',
        'apartments.apt2': 'Family Suite Mehdia',
        'apartments.apt2.specs': '2 Beds • 2 Baths • Balcony',
        'apartments.apt2.price': '600 DH / night',
        'apartments.apt3': 'Luxury Penthouse',
        'apartments.apt3.specs': '3 Beds • 2 Baths • Rooftop',
        'apartments.apt3.price': '850 DH / night',
        'apartments.apt4': 'Grand Luxury Penthouse',
        'apartments.apt4.specs': '3 Beds • 3 Baths • Terrace',
        'apartments.apt4.price': '1200 DH / night',
        
        // Reviews
        'reviews.title': 'Guest',
        'reviews.guest': 'Experiences',
        'reviews.rev1': 'Best apartment I\'ve rented in Kenitra. Super clean and the host was very responsive.',
        'reviews.rev1.name': 'Ahmed B.',
        'reviews.rev2': 'Luxury feel for a great price. The location is perfect, right near everything I needed.',
        'reviews.rev2.name': 'Sarah L.',
        'reviews.rev3': 'Highly recommend Raskon Appart. The secure parking was a huge plus for my vehicle.',
        'reviews.rev3.name': 'Karim T.',
        
        // FAQ
        'faq.title': 'Frequently Asked',
        'faq.questions': 'Questions',
        'faq.q1': 'What time is check-in and check-out?',
        'faq.a1': 'Check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in can be requested.',
        'faq.q2': 'Do you require a security deposit?',
        'faq.a2': 'Yes, we require a standard security deposit upon arrival, which is fully refunded at check-out.',
        'faq.q3': 'How do I receive the keys?',
        'faq.a3': 'We offer an in-person meet & greet to hand over the keys and show you the apartment.',
        
        // Footer
        'footer.description': 'Your trusted partner for apartment rentals in Kenitra, Morocco.',
        'footer.instagram': '📸 Follow us on Instagram',
        'footer.rights': 'All rights reserved.',
      }
    },
    ar: {
      translation: {
        // Navbar
        'nav.home': 'الرئيسية',
        'nav.apartments': 'الشقق',
        'nav.contact': 'اتصل بنا',
        
        // Hero
        'hero.subtitle': 'إيجار شقق فاخرة في قلب القنيطرة.',
        'hero.bookWhatsApp': '📱 احجز عبر واتس آب',
        'hero.callNow': '📞 اتصل الآن',
        
        // Amenities
        'amenities.title': 'المزايا',
        'amenities.premium': 'فاخرة',
        'amenities.wifi.title': 'واي فاي بسرعة عالية',
        'amenities.wifi.desc': 'إنترنت ألياف سريع وموثوق.',
        'amenities.ac.title': 'تكييف الهواء',
        'amenities.ac.desc': 'ابقَ بارداً خلال الصيف المغربي.',
        'amenities.parking.title': 'موقف آمن',
        'amenities.parking.desc': 'موقف آمن مغلق للسيارات والدراجات النارية.',
        'amenities.cleaning.title': 'التنظيف اليومي',
        'amenities.cleaning.desc': 'خدمة العاملة اختيارية متاحة.',
        
        // Apartments
        'apartments.title': 'الشقق',
        'apartments.featured': 'المختارة',
        'apartments.viewDetails': 'عرض التفاصيل',
        'apartments.apt1': 'استوديو مركز فاخر',
        'apartments.apt1.specs': 'سرير واحد • حمام واحد • واي فاي',
        'apartments.apt1.price': '350 درهم / ليلة',
        'apartments.apt2': 'جناح عائلي مهديه',
        'apartments.apt2.specs': 'سريران • حمامان • شرفة',
        'apartments.apt2.price': '600 درهم / ليلة',
        'apartments.apt3': 'بنتهاوس فاخر',
        'apartments.apt3.specs': '3 أسرة • حمامان • سطح',
        'apartments.apt3.price': '850 درهم / ليلة',        'apartments.apt4': 'بنتهاوس فاخر جداً',
        'apartments.apt4.specs': '3 غرف نوم • 3 حمامات • شرفة',
        'apartments.apt4.price': '1200 درهم / ليلة',        
        // Reviews
        'reviews.title': 'تجارب',
        'reviews.guest': 'الضيوف',
        'reviews.rev1': 'أفضل شقة استأجرتها في القنيطرة. نظيفة جداً والمضيف كان متجاوباً جداً.',
        'reviews.rev1.name': 'أحمد ب.',
        'reviews.rev2': 'شعور فاخر بسعر رائع. الموقع مثالي، بالقرب من كل ما احتجت.',
        'reviews.rev2.name': 'سارة ل.',
        'reviews.rev3': 'أنصح بشدة. موقف السيارات الآمن كان أساسياً لسيارتي.',
        'reviews.rev3.name': 'كريم ت.',
        
        // FAQ
        'faq.title': 'أسئلة',
        'faq.questions': 'متكررة',
        'faq.q1': 'ما هو وقت الوصول والمغادرة؟',
        'faq.a1': 'الوصول في الساعة 2:00 مساءً والمغادرة في الساعة 11:00 صباحاً. يمكن طلب الوصول المبكر.',
        'faq.q2': 'هل تطلب وديعة أمان؟',
        'faq.a2': 'نعم، نطلب وديعة أمان قياسية عند الوصول، يتم استردادها بالكامل عند المغادرة.',
        'faq.q3': 'كيف سأستقبل المفاتيح؟',
        'faq.a3': 'نقدم لقاءً شخصياً لتسليم المفاتيح وعرض الشقة.',
        
        // Footer
        'footer.description': 'شريكك الموثوق في إيجار الشقق في القنيطرة بالمغرب.',
        'footer.instagram': '📸 تابعنا على إنستغرام',
        'footer.rights': 'جميع الحقوق محفوظة.',
      }
    }
  },
  lng: 'fr',
  fallbackLng: 'fr',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
