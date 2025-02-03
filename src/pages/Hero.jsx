import { Link } from 'react-router-dom';
import hero from '../assets/images/about.jpg';

const HeroSection = () => {
  return (
    <section
      className="relative hero h-screen font-forum"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative flex flex-col lg:flex-row items-center lg:justify-between h-full px-6 md:px-12 pb-16 lg:pb-0">
        {/* Left Content */}
        <div className="hero-left-content w-full lg:w-1/2 mt-12 md:mt-20 lg:mt-32 text-center lg:text-left">
          <div className="hero-text-container text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              Unleash the Power of Your Voice <br />
              <span className="text-lg sm:text-xl md:text-2xl font-fraunces">
                with Kalekye Mumo
              </span>
            </h1>
            <h2 className="text-sm sm:text-base md:text-lg font-light">
              Award-Winning Podcaster | Renowned Host | Voiceover Artist |{' '}
              <br />
              Creator of Own Your Mic Programs
            </h2>
          </div>
        </div>

        {/* Right Content (Card) */}
        <div className="hero-right-content w-full lg:w-1/3 mt-10 md:mt-16 lg:mt-32 flex justify-center lg:justify-end">
          <div className="bg-black bg-opacity-20 p-6 rounded-lg">
            <h1 className="text-white text-2xl font-bold mb-4 text-center lg:text-left">
              My Programs
            </h1>
            <div className="flex flex-col space-y-4">
              <Link
                to="/ownYourMic"
                className="bg-white text-black text-center px-4 py-2 rounded-full text-sm md:text-base hover:bg-gold hover:text-white transition"
              >
                Join the Own Your Mic Programs
              </Link>
              <Link
                to="/event"
                className="bg-smoke_grey text-black text-center px-4 py-2 rounded-full text-sm md:text-base hover:bg-gold hover:text-white transition"
              >
                Book Kalekye for Your Event
              </Link>
              <Link
                to="/voice"
                className="bg-cream text-black text-center px-4 py-2 rounded-full text-sm md:text-base hover:bg-gold hover:text-white transition"
              >
                Hire Kalekye to Voice Your Script
              </Link>
              <Link
                to="/podcast"
                className="bg-gold text-white text-center px-4 py-2 rounded-full text-sm md:text-base hover:bg-smoke_grey hover:text-black transition"
              >
                Listen to Conversations with Kalekye
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="absolute bottom-4 lg:bottom-10 left-1/2 transform -translate-x-1/2 text-white text-xs md:text-sm lg:text-lg font-light opacity-80">
        Empowering Voices, Transforming Lives
      </p>
    </section>
  );
};

export default HeroSection;
