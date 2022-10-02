import React from 'react'
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import Footer from './Footer';

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}