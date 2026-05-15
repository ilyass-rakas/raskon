import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { qKey: 'faq.q1', aKey: 'faq.a1' },
    { qKey: 'faq.q2', aKey: 'faq.a2' },
    { qKey: 'faq.q3', aKey: 'faq.a3' }
  ];

  return (
    <div className="bg-brand-gray py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-10">{t('faq.title')} <span className="text-brand-gold">{t('faq.questions')}</span></h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-brand-black rounded-lg border border-gray-800 overflow-hidden">
              <button className="w-full text-left p-6 text-white font-bold focus:outline-none flex justify-between" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                {t(faq.qKey)} <span className="text-brand-gold">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && <div className="p-6 pt-0 text-gray-400">{t(faq.aKey)}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}