export default function Reviews() {
  const reviews = [
    { name: "Ahmed B.", text: "Best apartment I've rented in Kenitra. Super clean and the host was very responsive.", rating: "⭐⭐⭐⭐⭐" },
    { name: "Sarah L.", text: "Luxury feel for a great price. The location is perfect, right near everything I needed.", rating: "⭐⭐⭐⭐⭐" },
    { name: "Karim T.", text: "Highly recommend Raskon Appart. The secure parking was a huge plus for my vehicle.", rating: "⭐⭐⭐⭐⭐" }
  ];
  return (
    <div className="bg-brand-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Guest <span className="text-brand-gold">Experiences</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-brand-gray p-8 rounded-xl shadow-lg border-t-4 border-brand-gold">
              <div className="mb-4">{review.rating}</div>
              <p className="text-gray-300 italic mb-6">"{review.text}"</p>
              <p className="text-white font-bold text-right">- {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}