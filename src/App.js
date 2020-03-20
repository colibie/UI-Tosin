import React from 'react';
import Contact from './Sections/Contact';
import Intro from './Sections/Intro';
import Meet from './Sections/Meet';
import Portfolio from './Sections/Portfolio';
import Footer from './Components/Footer';

import './App.css';

function App() {
  return (
    <div>      
      <Intro />
      <Portfolio />
      <Meet />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
