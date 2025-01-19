import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logoImage from '../assets/images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Navbar height (adjust this according to your navbar height)
  const navbarHeight = 60;

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-10 transition duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
            onClick={handleLinkClick}
          >
            <img src={logoImage} alt="Logo" className="h-10" />{' '}
            {/* Adjust size as needed */}
          </Link>
        </div>

        {/* Links (Desktop) */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-navbarHeight} // Add offset here
            className={`cursor-pointer transition ${
              isScrolled ? 'text-gray-700' : 'text-white'
            } hover:text-purple-600`}
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-navbarHeight} // Add offset here
            className={`cursor-pointer transition ${
              isScrolled ? 'text-gray-700' : 'text-white'
            } hover:text-purple-600`}
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link
            to="own-your-mic"
            smooth={true}
            duration={500}
            offset={-navbarHeight} // Add offset here
            className={`cursor-pointer transition ${
              isScrolled ? 'text-gray-700' : 'text-white'
            } hover:text-purple-600`}
            onClick={handleLinkClick}
          >
            Own Your Mic
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            offset={-navbarHeight} // Add offset here
            className={`cursor-pointer transition ${
              isScrolled ? 'text-gray-700' : 'text-white'
            } hover:text-purple-600`}
            onClick={handleLinkClick}
          >
            Services
          </Link>
          <Link
            to="podcast"
            smooth={true}
            duration={500}
            offset={-navbarHeight} // Add offset here
            className={`cursor-pointer transition ${
              isScrolled ? 'text-gray-700' : 'text-white'
            } hover:text-purple-600`}
            onClick={handleLinkClick}
          >
            Podcast
          </Link>
        </div>

        {/* Contact Us Button */}
        <div className="hidden md:block">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-navbarHeight} // Add offset here
            className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow hover:bg-purple-700 transition cursor-pointer"
            onClick={handleLinkClick}
          >
            Contact Us
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-navbarHeight} // Add offset here
            className="block px-4 py-2 text-gray-700 hover:bg-purple-100"
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link
            to="own-your-mic"
            smooth={true}
            duration={500}
            offset={-navbarHeight} // Add offset here
            className="block px-4 py-2 text-gray-700 hover:bg-purple-100"
            onClick={handleLinkClick}
          >
            Own Your Mic
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            offset={-navbarHeight} // Add offset here
            className="block px-4 py-2 text-gray-700 hover:bg-purple-100"
            onClick={handleLinkClick}
          >
            Services
          </Link>
          <Link
            to="podcast"
            smooth={true}
            duration={500}
            offset={-navbarHeight} // Add offset here
            className="block px-4 py-2 text-gray-700 hover:bg-purple-100"
            onClick={handleLinkClick}
          >
            Podcast
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-navbarHeight} // Add offset here
            className="block px-4 py-2 text-purple-600 font-bold hover:bg-purple-100"
            onClick={handleLinkClick}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
