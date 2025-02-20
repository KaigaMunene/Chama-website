import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicies';
import ScrollToTop from './components/ScrollToTop';

const Contact = React.lazy(() => import('./pages/Contact'));
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const OwnYourMic = React.lazy(() => import('./pages/OwnYourMic'));
const WorkWithUs = React.lazy(() => import('./pages/WorkWithUs'));
const WhatIOffer = React.lazy(() => import('./pages/WhatIOffer'));
const Podcast = React.lazy(() => import('./pages/Podcast'));
const VoiceOver = React.lazy(() => import('./pages/VoiceOver'));

function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoading />}>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" id="home" element={<Home />} />
          <Route path="/about" id="about" element={<About />} />
          <Route path="/ownYourMic" id="ownYourMic" element={<OwnYourMic />} />
          <Route path="/workWithUs" id="workWithUs" element={<WorkWithUs />} />
          <Route path="/whatIOffer" id="whatIOffer" element={<WhatIOffer />} />
          <Route path="/podcast" id="podcast" element={<Podcast />} />
          <Route path="/own-your-mic/voice_over_program" id="voice" element={<VoiceOver />} />
          <Route path="/contact" id="contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

// Page-level loading (shown when lazy-loaded pages are loading)
function PageLoading() {
  return <h2>🌀 Loading page...</h2>;
}

export default App;
