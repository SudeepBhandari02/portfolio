import About from './components/About';
import Hero from './components/Hero';
import NavBar from './components/Navbar';

function App() {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      
      <NavBar/>
      <Hero/>
      <About/>

      <section className='z-10 min-h-screen bg-blue-500'></section>
    </main>
  )
}
export default App;