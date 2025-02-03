import Carousel from '../components/Carousel';
import one from '../assets/images/podcast-4.jpg';
import two from '../assets/images/podcast-2.jpeg';
import three from '../assets/images/podcast-3.jpeg';
import empowerOne from '../assets/images/empower-1.jpg';
import empowerTwo from '../assets/images/empower-2.jpg';
import empowerThree from '../assets/images/empower-3.jpg';
import voiceoverTwo from '../assets/images/voiceover-2.jpg';
import voiceoverThree from '../assets/images/voiceover-3.webp';

const voiceImages = [
  { src: voiceoverTwo, alt: 'Podcasting' },
  { src: voiceoverThree, alt: 'Voiceover recording' },
];
const talkImages = [
  { src: one, alt: 'Event hosting' },
  { src: two, alt: 'Podcasting' },
  { src: three, alt: 'Voiceover recording' },
];
const empowerImages = [
  { src: empowerOne, alt: 'Event hosting' },
  { src: empowerTwo, alt: 'Podcasting' },
  { src: empowerThree, alt: 'Voiceover recording' },
];

const AboutPage = () => {
  return (
    <section id="about">
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <header className="bg-gold text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">
              A Voice That Inspires, A Mentor That Transforms
            </h1>
            <p className="text-lg font-light">
              Empowering Voices, Creating Impact
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12 font-forum">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-6">
              Meet Kalekye Mumo
            </h2>
            <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
              With over 15 years in Kenyan mainstream media, I’ve earned the
              title Queen of Media for my ability to captivate audiences through
              dynamic communication. As a celebrated event host, panel
              moderator, and voiceover artist, I bring professionalism and
              charisma to every stage and microphone. My voice has inspired
              laughter, sparked change, and created unforgettable
              moments—whether on radio, TV, or live events.
            </p>
          </section>

          <section className="flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center gap-6 mb-12">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">
                Empowering Through KM Network
              </h3>
              <p className="text-lg leading-relaxed">
                Through my consultancy, KM Network, I designed the Own Your Mic
                programs to train future hosts, voiceover artists, and public
                speakers to excel and transform their speaking opportunities
                into memorable experiences.
              </p>
            </div>
            <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
              <Carousel images={empowerImages} />
            </div>
          </section>

          <section className="flex flex-col md:flex-col lg:flex-row items-center gap-6 mb-12">
            <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
              <Carousel images={talkImages} />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">
                Conversations with Kalekye
              </h3>
              <p className="text-lg leading-relaxed">
                As the creator of <em>Conversations with Kalekye</em>, Africa’s
                Best Relationship Podcast of 2024, I explore authentic
                discussions on love and accountability, amplifying stories that
                connect and inspire.
              </p>
            </div>
          </section>

          <section className="flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center gap-6 mb-12">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">Voiceover Excellence</h3>
              <p className="text-lg leading-relaxed">
                My voiceover work has brought life to documentaries,
                commercials, and infomercials, delivering powerful messaging for
                local and international brands.
              </p>
            </div>
            <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
              <Carousel images={voiceImages} />
            </div>
          </section>
        </main>
      </div>
    </section>
  );
};

export default AboutPage;
