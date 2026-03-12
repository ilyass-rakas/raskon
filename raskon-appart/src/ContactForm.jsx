import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Inquiry from Raskon Appart');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    
    // Open email client
    window.location.href = `mailto:RASKONIMMOBILIER@GMAIL.COM?subject=${subject}&body=${body}`;
    
    // Show success message
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    
    // Reset after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact-form" className="bg-brand-black py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('contactForm.title')}
          </h2>
          <p className="text-gray-400 text-lg">
            {t('contactForm.subtitle')}
          </p>
        </div>

        {submitted && (
          <div className="mb-8 bg-green-500/10 border border-green-500/30 rounded-lg p-4 flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
            <p className="text-green-400">
              {t('contactForm.success')}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-brand-gray rounded-lg p-8 border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label className="block text-white font-semibold mb-2">
                {t('contactForm.name')}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full bg-brand-black text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-gold transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-white font-semibold mb-2">
                {t('contactForm.email')}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full bg-brand-black text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-gold transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Phone */}
            <div>
              <label className="block text-white font-semibold mb-2">
                {t('contactForm.phone')}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+212 6XX XXX XXX"
                className="w-full bg-brand-black text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-gold transition"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-white font-semibold mb-2">
                {t('contactForm.subject')}
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Apartment Inquiry"
                className="w-full bg-brand-black text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-gold transition"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">
              {t('contactForm.message')}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Tell us how we can help..."
              className="w-full bg-brand-black text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-gold transition resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-brand-gold text-brand-black font-bold py-3 rounded-lg hover:bg-brand-gold-light transition duration-300 flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            {t('contactForm.send')}
          </button>

          <p className="text-gray-400 text-sm mt-4 text-center">
            {t('contactForm.note')}
          </p>
        </form>

        {/* Alternative Contact Methods */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-brand-gold font-semibold mb-2">WhatsApp</p>
            <a
              href="https://wa.me/212666802976"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-brand-gold transition"
            >
              +212 666 802 976
            </a>
          </div>
          <div className="text-center">
            <p className="text-brand-gold font-semibold mb-2">Email</p>
            <a
              href="mailto:RASKONIMMOBILIER@GMAIL.COM"
              className="text-gray-400 hover:text-brand-gold transition"
            >
              RASKONIMMOBILIER@GMAIL.COM
            </a>
          </div>
          <div className="text-center">
            <p className="text-brand-gold font-semibold mb-2">Location</p>
            <p className="text-gray-400">Kenitra, Morocco</p>
          </div>
        </div>
      </div>
    </section>
  );
}
