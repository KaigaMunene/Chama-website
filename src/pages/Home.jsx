import Contact from './Contact';
import Hero from './Hero';
import About from './About';
import WorkWithUs from './WorkWithUs';
import OwnYourMic from './OwnYourMic';

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <OwnYourMic />
      <WorkWithUs />
      <Contact />
    </div>
  );
}

export default Home;
