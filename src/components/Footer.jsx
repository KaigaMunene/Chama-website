import { Link } from 'react-router-dom';
import logo from '../assets/images/icon_white_png.png';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-6 font-forum">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between md:justify-around gap-4 text-lg mb-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/own-your-mic" className="hover:underline">
            Own your Mic
          </Link>
          <Link to="/podcast" className="hover:underline">
            Podcast
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </div>

        <hr className="border-gray-700" />

        <div className="flex flex-wrap justify-between items-center mt-4 gap-4">
          <div className="text-smoke_grey">
            <p>&copy;kalekye Mumo 2025. All rights reserved.</p>
          </div>
          <div className="footer__logo text-center md:text-right">
            <img
              src={logo}
              alt="logo"
              className="w-10 h-10 object-contain mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
