import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-dark/50 z-0" />
      
      <motion.div 
        className="container mx-auto text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-6 neon-text">
          NeuroVerse 2025
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Innovation Meets Opportunity
        </p>
        <div className="space-y-4">
          <p className="text-lg md:text-xl text-primary">
            March 4-5, 2025 | CBIT, Hyderabad
          </p>
          {/* <a 
            href="https://linktr.ee/NeuroVerse_25" 
            className="button-primary inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Now
          </a> */}
          <a 
            href="#events" 
            className="button-primary inline-block"
          >
            Explore Events
          </a>
                    

        </div>
      </motion.div>
    </section>
  );
}