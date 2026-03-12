import { useTranslation } from 'react-i18next';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: 'Ahmed Hassan',
      location: 'Sudan',
      rating: 5,
      text: 'testimonials.review1',
      image: '👨‍💼'
    },
    {
      name: 'Sophie Martin',
      location: 'France',
      rating: 5,
      text: 'testimonials.review2',
      image: '👩‍💼'
    },
    {
      name: 'Maria García',
      location: 'Spain',
      rating: 5,
      text: 'testimonials.review3',
      image: '👩‍🦰'
    },
    {
      name: 'James Wilson',
      location: 'UK',
      rating: 5,
      text: 'testimonials.review4',
      image: '👨‍🦱'
    }
  ];

  return (
    <section id="testimonials" className="bg-brand-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-brand-gray p-6 rounded-lg border border-gray-700 hover:border-brand-gold transition duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 text-sm mb-6 italic">"{t(testimonial.text)}"</p>

              {/* Guest Info */}
              <div className="flex items-center gap-3">
                <div className="text-3xl">{testimonial.image}</div>
                <div>
                  <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-gray-400 text-xs">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
