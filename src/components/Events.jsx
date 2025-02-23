import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { eventsData } from '../data/events';

export default function Events() {
  return (
    <section id="events" className="section-padding">
      <motion.div
        className="container mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-12 neon-text">Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event) => (
            <motion.div
              key={event.id}
              className="bg-dark/50 backdrop-blur-sm rounded-lg p-6 card-hover flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-3 text-primary">{event.name}</h3>
              <p className="text-gray-300 mb-4">{event.shortDescription}</p>
              <div className="flex justify-center w-full">
                <Link
                  to={`/event/${event.id}`}
                  className="button-primary inline-block text-sm"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}