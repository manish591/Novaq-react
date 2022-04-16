import React from 'react';
import { Navbar, Footer } from 'components';

const LandingPage = () => (
  <div className="landing-page">
    <header className="header grid">
      <Navbar />
    </header>
    <Footer />
  </div>
);

export { LandingPage };
