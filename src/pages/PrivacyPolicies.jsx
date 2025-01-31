const PrivacyPolicy = () => {
  return (
    <section className="container mx-auto px-4 py-8 text-gray-700 min-h-screen font-forum">
      <h1 className="text-3xl font-bold mb-4">Own Your Mic Privacy Policy</h1>
      <h2 className="mb-2 font-bold">1. Data Collection</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          We collect personal information such as names, email addresses, and
          payment details during registration.
        </li>
      </ul>
      <h2 className="mb-2 font-bold">2. Data Usage and Media Consent</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          Personal data is used to deliver program content, provide customer
          support, and send updates.
        </li>
        <li>
          Recording and Promotional use:
          <ul className="list-disc list-inside">
            <li>
              i. Physical classes may be recorded through video and photography
              for program documentation and promotional purposes. By
              participating in the program, you acknowledge and consent to the
              potential use of such recordings for marketing, advertising, and
              other business purposes.
            </li>
            <li>
              ii. Participants will be required to sign a media release form
              prior to attending physical classes to formalize this consent.
            </li>
          </ul>
        </li>
        <li>
          Testimonials
          <ul className="list-disc list-inside">
            <li>
              i. Participants may be asked to provide recorded and/ or written
              testimonials about their experience in the program. By submitting
              testimonials, you agree that KM Network may use them for
              promotional purposes, including but not limited to social media,
              websites, and marketing materials.
            </li>
            <li>
              ii. You may also be requested to provide a passport photo to be
              attached to the written testimonial
            </li>
          </ul>
        </li>
        <li>
          Data Protection
          <p>
            All media and testimonials will be handled in compliance with our
            Privacy Policy, ensuring your data is secure and used responsibly.
          </p>
        </li>
      </ul>
      <h2 className="mb-2 font-bold">3. Data Sharing</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          We do not share personal information with third parties except as
          necessary for payment processing and legal compliance.
        </li>
      </ul>
      <h2 className="mb-2 font-bold">4. Data Security</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          All data is stored securely and protected against unauthorized access.
        </li>
      </ul>
      <h2 className="mb-2 font-bold">5. Participant Rights</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          • Participants can request to view, update, or delete their personal
          data by contacting us at
          <a href="mailto:info@kalekyemumo.com" className="text-blue-500">
            info@kalekyemumo.com
          </a>
        </li>
      </ul>

      <p className="text-sm text-gray-600">Last updated: 2025</p>
    </section>
  );
};

export default PrivacyPolicy;
