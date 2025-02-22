import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Events from './components/Events';
import Team from './components/Team';
import Contact from './components/Contact';
import CountdownTimer from './components/CountdownTimer';
import EventDetails from './components/EventDetails';

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <CountdownTimer />
            <Events />
            <Team />
            <Contact />
          </>
        } />
        <Route path="/event/:id" element={<EventDetails />} />
      </Routes>
    </div>
  );
}

export default App;