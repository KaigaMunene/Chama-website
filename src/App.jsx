import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import Navbar from './components/NavBar';

const Contact = React.lazy(() => import('./pages/Contact'));
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const OwnYourMic = React.lazy(() => import('./pages/OwnYourMic'));
const WorkWithUs = React.lazy(() => import('./pages/WorkWithUs'));
const WhatIOffer = React.lazy(() => import('./pages/WhatIOffer'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
      <Navbar />
        <Routes>
          <Route path="/" id='home' element={<Home />} />
          <Route path="/about" id='about' element={<About />} />
          <Route path="/ownYourMic" id='ownYourMic' element={<OwnYourMic />} />
          <Route path="/workWithUs" id='workWithUs' element={<WorkWithUs />} />
          <Route path="/whatIOffer" id='whatIOffer' element={<WhatIOffer />} />
          <Route path="/contact" id='contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}
function Loading() {
  return <h2>🌀 Loading...</h2>;
}

export default App;
