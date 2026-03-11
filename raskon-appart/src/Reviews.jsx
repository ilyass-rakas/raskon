import { useTranslation } from 'react-i18next';

export default function Reviews() {
  const { t } = useTranslation();

  const reviews = [
    { textKey: 'reviews.rev1', nameKey: 'reviews.rev1.name', rating: "⭐⭐⭐⭐⭐" },
    { textKey: 'reviews.rev2', nameKey: 'reviews.rev2.name', rating: "⭐⭐⭐⭐⭐" },
    { textKey: 'reviews.rev3', nameKey: 'reviews.rev3.name', rating: "⭐⭐⭐⭐⭐" }
  ];

  return (
    <div className="bg-brand-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">{t('reviews.title')} <span className="text-brand-gold">{t('reviews.guest')}</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-brand-gray p-8 rounded-xl shadow-lg border-t-4 border-brand-gold">
              <div className="mb-4">{review.rating}</div>
              <p className="text-gray-300 italic mb-6">"{t(review.textKey)}"</p>
              <p className="text-white font-bold text-right">- {t(review.nameKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}