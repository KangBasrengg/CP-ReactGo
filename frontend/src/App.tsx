import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Partners } from './components/sections/Partners';
import { Stats } from './components/sections/Stats';
import { Portfolio } from './components/sections/Portfolio';
import { About } from './components/sections/About';
import './index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main style={{ paddingTop: '72px' }}>
        <Hero />
        <Partners />
        <Stats />
        <Portfolio />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
