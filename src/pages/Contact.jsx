import { useState } from 'react';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    const errors = {};
    if (!formData.name || formData.name.split(' ').length < 2) {
      errors.name = 'Please enter your full name.';
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.message) {
      errors.message = 'Please enter a message.';
    }
    if (!formData.service) {
      errors.service = 'Please select a service.';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset errors if form submission is successful
    setFormErrors({});

    // Success: Reset form and show success message
    setIsFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      service: '',
      message: '',
    });
    setTimeout(() => setIsFormSubmitted(false), 5000); // Hide success message after 5 seconds
  };

  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row p-6 space-y-6 md:space-y-0 font-forum bg-brown w-full h-full"
    >
      <div className="flex-1 border-2 border-smoke_grey shadow-md outline-none p-4 rounded-md text-center bg-smoke_grey">
        <h1 className="text-3xl font-semibold text-gray-800">Ready to Elevate Your Voice</h1>
        <h2 className="text-lg text-gray-600 mt-2">Get in Touch</h2>

        <div className="mt-6 space-y-6">
          <div className="other-contact-info space-y-4">
            <h2 className="text-2xl font-bold  text-gray-800">How to Reach Us</h2>
            <p className="text-blackberry">
              Email:{' '}
              <Link to="mailto:youremail@example.com" className="font-light no-underline">
                info@kalekyemumo.com
              </Link>
            </p>
            <p className="text-blackberry">
              Phone:{' '}
              <Link to="tel:+1234567890" className=" font-light no-underline">
                +254 707 233224
              </Link>
            </p>
            <p className="text-blackberry font-bold text-lg">Follow Us:</p>
            <div className="social-links flex justify-center space-x-4">
              <div className="flex items-center space-x-2">
                <FaInstagram className="text-orange-600" />
                <Link to="https://www.instagram.com/kmnetwork254/" target="_blank" className=" no-underline hover:underline">
                  Instagram
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <FaLinkedin className="bg-blue-600 text-white" />
                <Link to="#" target="_blank" className=" no-underline hover:underline">
                  LinkedIn
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <FaYoutube className="text-red-600" />
                <Link to="#" target="_blank" className=" no-underline hover:underline">
                  YouTube
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Divider */}
      <div className="w-px bg-gray-300 hidden md:block mx-8"></div>

      <div className="flex-1 border-2 border-white shadow-md outline-none p-4 rounded-md bg-white">
        <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
          <label htmlFor="name" className="text-lg font-bold text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete='name'
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Full Name"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}

          <label htmlFor="email" className="text-lg font-bold text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete='email'
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email Address"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}

          <label htmlFor="service" className="text-lg font-bold text-gray-700">
            Service of Interest
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select a Service
            </option>
            <option value="hosting">Hosting</option>
            <option value="voiceover">Voiceover</option>
            <option value="own-your-mic">Own Your Mic</option>
            <option value="other">Other</option>
          </select>
          {formErrors.service && <p className="text-red-500 text-sm">{formErrors.service}</p>}

          <label htmlFor="message" className="text-lg font-bold text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Message
          </button>

          {isFormSubmitted && (
            <p className="text-green-500 text-center mt-4">Message sent successfully!</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
