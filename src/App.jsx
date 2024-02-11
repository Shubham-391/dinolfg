import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';

function App() {

  return (
    <>     
        <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5/>
    </>
  );
}

export default App
