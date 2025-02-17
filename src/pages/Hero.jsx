import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import hero from '../assets/images/about.jpg';
import Mic from '../assets/images/own-your-mic.jpeg'
import Book from '../assets/images/book-a-consultation.png'
import Join from '../assets/images/podcast-1.jpeg'
import Hire from '../assets/images/voiceover-service.jpg'

const programs = [
  {
    title: 'Own Your Mic Program',
    image: Mic,
    link: '/ownYourMic',
    buttonText: 'Join the Own Your Mic Programs',
  },
  {
    title: 'Book Kalekye for Your Event',
    image: Book,
    link: '/event',
    buttonText: 'Book Kalekye for Your Event',
  },
  {
    title: 'Hire Kalekye to Voice Your Script',
    image: Hire,
    link: '/voice',
    buttonText: 'Hire Kalekye to Voice Your Script',
  },
  {
    title: 'Conversations with Kalekye',
    image: Join,
    link: '/podcast',
    buttonText: 'Listen to Conversations with Kalekye',
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? programs.length - 1 : prevIndex - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === programs.length - 1 ? 0 : prevIndex + 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section
      className="relative hero h-screen font-forum"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative flex flex-col lg:flex-row items-center lg:justify-between h-full px-6 md:px-12 pb-16 lg:pb-0">
        <div className="hero-left-content w-full lg:w-1/2 mt-12 md:mt-20 lg:mt-32 text-center lg:text-left">
          <div className="hero-text-container text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              Unleash the Power of Your Voice <br />
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-fraunces">
                with Kalekye Mumo
              </span>
            </h1>
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-light">
              Award-Winning Podcaster | Renowned Host | Voiceover Artist |{' '}
              <br />
              Creator of Own Your Mic Programs
            </h2>
          </div>
        </div>

        {/* Right Content (Carousel) */}
        <div className="hero-right-content w-full lg:w-4/5 lg:max-w-md mt-10 md:mt-16 lg:mt-32 flex flex-col lg:items-center relative items-center justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white text-center">
            My Programs
          </h1>
          <div className="relative w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 bg-black bg-opacity-20 p-6 rounded-lg flex flex-col items-center">
            <img
              src={programs[currentIndex].image}
              alt={programs[currentIndex].title}
              className="w-full h-32 sm:h-40 md:h-48 object-contain rounded-md"
            />
            <Link
              to={programs[currentIndex].link}
              className="mt-4 bg-weird_grey text-black text-center px-4 py-2 rounded-full text-sm md:text-base hover:bg-gold hover:text-white transition"
            >
              {programs[currentIndex].buttonText}
            </Link>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white"
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white"
            >
              <FaChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      <p className="absolute bottom-4 lg:bottom-10 left-1/2 transform -translate-x-1/2 text-white text-xs sm:text-sm md:text-base lg:text-lg font-light opacity-80">
        Empowering Voices, Transforming Lives
      </p>
    </section>
  );
};

export default HeroSection;
