import Contact from './Contact';
import Hero from './Hero';
import About from './About';
import WorkWithUs from './WorkWithUs';
import OwnYourMic from './OwnYourMic';
import WhatIOffer from './WhatIOffer';

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <OwnYourMic />
      <WorkWithUs />
      <WhatIOffer />
      <Contact />
    </div>
  );
}

export default Home;
