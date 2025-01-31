import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense, useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicies';

const Contact = React.lazy(() => import('./pages/Contact'));
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const OwnYourMic = React.lazy(() => import('./pages/OwnYourMic'));
const WorkWithUs = React.lazy(() => import('./pages/WorkWithUs'));
const WhatIOffer = React.lazy(() => import('./pages/WhatIOffer'));
const Podcast = React.lazy(() => import('./pages/Conversations'));

function App() {
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsAppLoading(false);
    };

    // Listen for the page load event
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad); // Cleanup the event listener
    };
  }, []);

  if (isAppLoading) {
    return <GlobalLoading />;
  }

  return (
    <Router>
      <Suspense fallback={<PageLoading />}>
        <Navbar />
        <Routes>
          <Route path="/" id="home" element={<Home />} />
          <Route path="/about" id="about" element={<About />} />
          <Route path="/ownYourMic" id="ownYourMic" element={<OwnYourMic />} />
          <Route path="/workWithUs" id="workWithUs" element={<WorkWithUs />} />
          <Route path="/whatIOffer" id="whatIOffer" element={<WhatIOffer />} />
          <Route path="/podcast" id="podcast" element={<Podcast />} />
          <Route path="/contact" id="contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

// Global loading screen (shown while the entire app is loading)
function GlobalLoading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h2 className="text-xl font-semibold">🔄 Loading the app...</h2>
    </div>
  );
}

// Page-level loading (shown when lazy-loaded pages are loading)
function PageLoading() {
  return <h2>🌀 Loading page...</h2>;
}

export default App;
