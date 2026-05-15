import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, apartmentTitle }) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send to WhatsApp or email
    const message = `Hello! I'm interested in booking ${apartmentTitle}.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCheck-in: ${formData.checkIn}\nCheck-out: ${formData.checkOut}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/212666802976?text=${encodedMessage}`, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-brand-gray rounded-xl shadow-2xl max-w-md w-full border border-gray-800">
        <div className="flex justify-between items-center p-6 border-b border-gray-800">
          <h2 className="text-2xl font-bold text-white">{t('booking.checkAvailability')}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-brand-gold transition"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-white font-semibold mb-2">{t('booking.name')}</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-brand-black text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-brand-gold transition"
              placeholder={t('booking.namePlaceholder')}
            />
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">{t('booking.email')}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-brand-black text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-brand-gold transition"
              placeholder={t('booking.emailPlaceholder')}
            />
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">{t('booking.phone')}</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full bg-brand-black text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-brand-gold transition"
              placeholder={t('booking.phonePlaceholder')}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white font-semibold mb-2">{t('booking.checkIn')}</label>
              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                required
                className="w-full bg-brand-black text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-brand-gold transition"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">{t('booking.checkOut')}</label>
              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                required
                className="w-full bg-brand-black text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-brand-gold transition"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-brand-gold text-brand-black font-bold py-3 rounded-lg hover:bg-brand-gold-light transition duration-300 flex items-center justify-center gap-2 mt-6"
          >
            {t('booking.submit')}
          </button>
        </form>
      </div>
    </div>
  );
}
