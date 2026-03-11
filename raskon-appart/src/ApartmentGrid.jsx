export default function ApartmentGrid() {
  const apartments = [
    { id: 1, name: "Premium Center Studio", price: "350 DH / night", specs: "1 Bed • 1 Bath • WiFi", image: "https://images.unsplash.com/photo-1502672260266-1c1de2d92004?q=80&w=1000&auto=format&fit=crop" },
    { id: 2, name: "Family Suite Mehdia", price: "600 DH / night", specs: "2 Beds • 2 Baths • Balcony", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1000&auto=format&fit=crop" },
    { id: 3, name: "Luxury Penthouse", price: "850 DH / night", specs: "3 Beds • 2 Baths • Rooftop", image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1000&auto=format&fit=crop" }
  ];
  return (
    <div id="apartments" className="bg-brand-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Featured <span className="text-brand-gold">Apartments</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apartments.map((apt) => (
            <div key={apt.id} className="bg-brand-gray rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-brand-gold transition duration-300">
              <img src={apt.image} alt={apt.name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-white">{apt.name}</h3>
                  <span className="text-brand-gold font-bold">{apt.price}</span>
                </div>
                <p className="text-gray-400 mb-6">{apt.specs}</p>
                <button className="w-full bg-transparent border-2 border-brand-gold text-brand-gold font-bold py-2 rounded-lg hover:bg-brand-gold hover:text-brand-black transition duration-300">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}