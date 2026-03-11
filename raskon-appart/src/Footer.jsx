import logo from './assets/logo.png'; 
export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-black border-t border-brand-gray py-10">
      <div className="max-w-7xl mx-auto px-4 text-center flex flex-col items-center">
        <img src={logo} alt="Raskon Appart Logo" className="h-20 w-auto object-contain mb-6" />
        <p className="text-gray-400 mb-6">Your trusted partner for apartment rentals in Kenitra, Morocco.</p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://instagram.com/your_instagram_handle" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-brand-gold transition duration-300 flex items-center gap-2">📸 Follow us on Instagram</a>
        </div>
        <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} Raskon Appart. All rights reserved.</p>
      </div>
    </footer>
  );
}