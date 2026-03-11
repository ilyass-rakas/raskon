export default function Hero() {
  return (
    <div id="home" className="relative h-screen flex items-center justify-center bg-brand-black mt-20 md:mt-0">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop')" }}
      ></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-wide">
          RASKON <span className="text-brand-gold">APPART</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Premium apartment rentals in the heart of Kenitra.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/212XXXXXXXXX" target="_blank" rel="noreferrer" className="bg-brand-gold text-brand-black font-bold py-3 px-8 rounded-full hover:bg-brand-gold-light transition duration-300 flex items-center justify-center gap-2">📱 Book via WhatsApp</a>
          <a href="tel:+212XXXXXXXXX" className="border-2 border-brand-gold text-brand-gold font-bold py-3 px-8 rounded-full hover:bg-brand-gold hover:text-brand-black transition duration-300 flex items-center justify-center gap-2">📞 Call Now</a>
        </div>
      </div>
    </div>
  );
}