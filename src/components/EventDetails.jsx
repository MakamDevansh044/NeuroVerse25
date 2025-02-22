import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { eventsData } from '../data/events';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function EventDetails() {
  const { id } = useParams();
  const event = eventsData.find(e => e.id === parseInt(id));

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Event not found</h2>
          <Link to="/" className="button-primary">
            Go Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center text-primary hover:text-secondary mb-8"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to Events
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-dark/50 backdrop-blur-sm rounded-lg p-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img 
                src={event.poster} 
                alt={event.name}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <h1 className="text-3xl font-bold mb-4 text-primary">{event.name}</h1>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg">{event.description}</p>
                
                <div className="border-t border-gray-700 pt-4 mt-4">
                  <h3 className="text-xl font-semibold mb-2 text-primary">Event Details</h3>
                  <ul className="space-y-2">
                    <li><strong>Date:</strong> {event.date}</li>
                    <li><strong>Registration Fee:</strong> {event.registrationFee}</li>
                    <li><strong>Category:</strong> {event.category}</li>
                  </ul>
                </div>

                <div className="border-t border-gray-700 pt-4 mt-4">
                  <h3 className="text-xl font-semibold mb-2 text-primary">Contact Coordinators</h3>
                  {event.coordinators.map((coordinator, index) => (
                    <div key={index} className="mb-2">
                      <p className="font-medium">{coordinator.name}</p>
                      <p className="text-gray-400">{coordinator.phone}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-primary w-full text-center block"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}