import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ChevronLeft, CheckCircle, AlertCircle, Clock, Utensils, Wifi } from 'lucide-react';

export default function HouseRules() {
  const { t } = useTranslation();

  const rules = [
    {
      icon: Clock,
      title: 'Check-in & Check-out',
      details: [
        'Check-in from 2:00 PM',
        'Check-out before 11:00 AM',
        'Late checkout available upon request (additional fee may apply)'
      ]
    },
    {
      icon: AlertCircle,
      title: 'Noise Policy',
      details: [
        'Quiet hours from 10:00 PM to 8:00 AM',
        'No loud parties or gatherings',
        'Respect neighboring guests privacy'
      ]
    },
    {
      icon: Utensils,
      title: 'Kitchen & Dining',
      details: [
        'Kitchen is available for guest use',
        'Keep kitchen clean after use',
        'Dispose of waste properly'
      ]
    },
    {
      icon: Wifi,
      title: 'Utilities & Internet',
      details: [
        'High-speed WiFi available 24/7',
        'Power consumption must be reasonable',
        'Air conditioning available year-round'
      ]
    }
  ];

  const general = [
    'No smoking inside the apartment (smoking on balcony only)',
    'No unauthorized guests or subletting',
    'Pets allowed with prior consent only',
    'Guests are responsible for any damages',
    'Keep the apartment clean and tidy',
    'Report maintenance issues immediately',
    'Lock doors and windows when leaving',
    'Valuables should be kept secure',
    'No illegal activities permitted',
    'Comply with local laws and regulations'
  ];

  return (
    <div className="bg-brand-black min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-gold-light transition mb-8"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">House Rules</h1>
          <p className="text-gray-400 text-lg">
            To ensure a pleasant stay for all our guests, please adhere to the following house rules.
          </p>
        </div>

        {/* Main Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {rules.map((rule, index) => {
            const Icon = rule.icon;
            return (
              <div key={index} className="bg-brand-gray rounded-lg p-8 border border-gray-700">
                <div className="flex items-center gap-4 mb-4">
                  <Icon className="w-8 h-8 text-brand-gold" />
                  <h3 className="text-2xl font-bold text-white">{rule.title}</h3>
                </div>
                <ul className="space-y-3">
                  {rule.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* General Rules */}
        <div className="bg-brand-gray rounded-lg p-8 border border-gray-700 mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">General Rules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {general.map((rule, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{rule}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Section */}
        <div className="bg-gradient-to-r from-brand-gold/10 to-transparent rounded-lg p-8 border border-brand-gold/30">
          <h2 className="text-2xl font-bold text-brand-gold mb-4">Emergency Information</h2>
          <p className="text-gray-300 mb-4">
            In case of emergency, contact us immediately:
          </p>
          <div className="space-y-2">
            <p className="text-white">
              <strong>Emergency Phone:</strong>{' '}
              <a href="tel:+212666802976" className="text-brand-gold hover:text-brand-gold-light">
                +212 666 802 976
              </a>
            </p>
            <p className="text-white">
              <strong>Email:</strong>{' '}
              <a href="mailto:RASKONIMMOBILIER@GMAIL.COM" className="text-brand-gold hover:text-brand-gold-light">
                RASKONIMMOBILIER@GMAIL.COM
              </a>
            </p>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            By booking with us, you agree to comply with all house rules. Violation of these rules may result in 
            immediate eviction without refund. We appreciate your understanding and cooperation.
          </p>
        </div>
      </div>
    </div>
  );
}
