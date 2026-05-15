import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <div className="bg-brand-black min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="flex items-center gap-2 text-brand-gold hover:text-brand-gold-light mb-8 transition">
          <ChevronLeft className="w-5 h-5" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

        <div className="bg-brand-gray rounded-xl p-8 border border-gray-800 space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-brand-gold mb-4">1. Introduction</h2>
            <p>
              Raskon Appart ("we" or "us" or "our") operates the website and mobile application. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-gold mb-4">2. Information Collection and Use</h2>
            <p>
              We collect several different types of information for various purposes to provide and improve our Service to you.
            </p>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">Types of Data Collected:</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data")</li>
              <li><strong>Usage Data:</strong> We may also collect information on how the Service is accessed and used ("Usage Data")</li>
              <li><strong>Location Data:</strong> We may use and store information about your location if you give us permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-gold mb-4">3. Use of Data</h2>
            <p>Raskon Appart uses the collected data for various purposes:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>To provide and maintain the Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve the Service</li>
              <li>To monitor the usage of the Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-gold mb-4">4. Security of Data</h2>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-gold mb-4">5. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-gold mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>By email: RASKONIMMOBILIER@GMAIL.COM</li>
              <li>By phone: +212 666 802 976</li>
              <li>By WhatsApp: <a href="https://wa.me/212666802976" className="text-brand-gold hover:text-brand-gold-light">Message us</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-gold mb-4">7. Your Rights</h2>
            <p>
              You have the right to access, update, or delete your information at any time by contacting us. We will take reasonable steps to update or correct any information in our possession that you have previously submitted via this website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
