import { useEffect } from 'react';

import About from './components/About';
import Contact from './components/Contact';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/Navbar';
import Skills from './components/Skills';

function App() {

  useEffect(() => {
  const handleLoad = () => {
    const pre = document.getElementById('preloader');
    if (pre) pre.style.display = 'none';
  };

  if (document.readyState === 'complete') {
    handleLoad();
  } else {
    window.addEventListener('load', handleLoad);
  }

  return () => {
    window.removeEventListener('load', handleLoad);
  };
}, []);

  return (
    <main className='relative min-h-screen w-full overflow-x-hidden'>
      
      <NavBar/>
      <Hero/>
      <About/>
      <Features/>
      <Skills/>
      <Contact/>
      <Footer/>
      <section className='z-10 min-h-screen bg-blue-500'></section>
    </main>
  )
}
export default App;