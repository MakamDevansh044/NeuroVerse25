import { motion } from 'framer-motion';

export default function Contact() {
  const contacts = {
    email: "neuroverse2k25@gmail.com",
    phone: "+91 9652203699",
    social: {
      instagram: "https://www.instagram.com/NeuroVerse_2k25",
      linkedin: "https://www.linkedin.com/company/neuroverse-cbit",
      whatsapp: "https://chat.whatsapp.com/J7zoXQsw0wq8cP420Gt9vA"
    }
  };

  return (
    <section id="contact" className="section-padding">
      <motion.div
        className="container mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-12 neon-text">Contact Us</h2>
        <div className="max-w-2xl mx-auto text-center">
          <div className="space-y-4 mb-8">
            <p className="text-lg">
              <span className="text-primary">Email:</span>{" "}
              <a href={`mailto:${contacts.email}`} className="hover:text-primary">
                {contacts.email}
              </a>
            </p>
            <p className="text-lg">
              <span className="text-primary">Phone:</span>{" "}
              <a href={`tel:${contacts.phone}`} className="hover:text-primary">
                {contacts.phone}
              </a>
            </p>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a
              href={contacts.social.instagram}
              className="text-gray-400 hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href={contacts.social.linkedin}
              className="text-gray-400 hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={contacts.social.whatsapp}
              className="text-gray-400 hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}