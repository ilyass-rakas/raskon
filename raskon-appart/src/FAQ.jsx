import { useState } from 'react';
export default function FAQ() {
  const faqs = [
    { q: "What time is check-in and check-out?", a: "Check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in can be requested." },
    { q: "Do you require a security deposit?", a: "Yes, we require a standard security deposit upon arrival, which is fully refunded at check-out." },
    { q: "How do I receive the keys?", a: "We offer an in-person meet & greet to hand over the keys and show you the apartment." }
  ];
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="bg-brand-gray py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Frequently Asked <span className="text-brand-gold">Questions</span></h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-brand-black rounded-lg border border-gray-800 overflow-hidden">
              <button className="w-full text-left p-6 text-white font-bold focus:outline-none flex justify-between" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                {faq.q} <span className="text-brand-gold">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && <div className="p-6 pt-0 text-gray-400">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}