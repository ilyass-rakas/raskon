export default function Amenities() {
  const features = [
    { icon: "📶", title: "High-Speed WiFi", desc: "Fast and reliable fiber internet." },
    { icon: "❄️", title: "Air Conditioning", desc: "Stay cool during the Moroccan summer." },
    { icon: "🏍️", title: "Secure Parking", desc: "Safe, gated parking for cars and motorcycles." },
    { icon: "🧹", title: "Daily Cleaning", desc: "Optional maid service available." },
  ];
  return (
    <div className="bg-brand-gray py-20 px-4 border-y border-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Premium <span className="text-brand-gold">Amenities</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {features.map((item, index) => (
            <div key={index} className="p-6 bg-brand-black rounded-xl border border-gray-800 hover:border-brand-gold transition duration-300">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}