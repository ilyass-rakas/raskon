import logo from './assets/logo.png'; 
export default function Navbar() {
  return (
    <nav className="bg-brand-black border-b border-brand-gray fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <img src={logo} alt="Raskon Appart Logo" className="h-16 w-auto object-contain" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-white hover:text-brand-gold px-3 py-2 rounded-md text-sm font-medium transition duration-300">Home</a>
              <a href="#apartments" className="text-gray-300 hover:text-brand-gold px-3 py-2 rounded-md text-sm font-medium transition duration-300">Apartments</a>
              <a href="#contact" className="bg-brand-gold text-brand-black px-4 py-2 rounded-md text-sm font-bold hover:bg-brand-gold-light transition duration-300">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}