import Hero from './Hero';
import About from './About';
import WorkWithUs from './WorkWithUs';
import OwnYourMic from './OwnYourMic';
import WhatIOffer from './WhatIOffer';
import Conversations from './Conversations';
import TestimonialSlider from './Testimonial';
import Contact from './Contact';

function Home() {
  return (
    <section id="home">
      <div>
        <Hero />
        <About />
        <OwnYourMic />
        <WorkWithUs />
        <WhatIOffer />
        <Conversations />
        <TestimonialSlider />
        <Contact />
      </div>
    </section>
  );
}

export default Home;
