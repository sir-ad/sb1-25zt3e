import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Book, Award, ArrowRight, Calendar } from 'lucide-react';

// Applying Law of Prägnanz - Using simple, clear forms
// Applying Law of Common Region - Grouping related elements
// Applying Law of Proximity - Placing related items close together
const Contact = () => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: ''
  });

  const interests = [
    {
      icon: Award,
      title: "Product Strategy",
      description: "Discuss product vision and roadmap"
    },
    {
      icon: Book,
      title: "Mentorship",
      description: "Get guidance for your product career"
    },
    {
      icon: Calendar,
      title: "Speaking",
      description: "Invite me for events and workshops"
    }
  ];

  // Applying Miller's Law - Breaking form into digestible steps
  const handleNextStep = () => {
    setFormStep(prev => prev + 1);
  };

  return (
    <div className="pt-16 pb-20">
      {/* Hero Section - Applying Visual Hierarchy */}
      <section className="bg-gradient-to-b from-navy-900 to-navy-800 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's Create Something
              <br />
              <span className="text-navy-300">Extraordinary</span>
            </h1>
            <p className="text-xl text-navy-200 max-w-3xl mx-auto">
              Whether you're looking to innovate, grow, or transform your product strategy,
              I'm here to help turn your vision into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Applying Law of Common Region */}
      <section className="py-20 -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information - Applying Law of Proximity */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-navy-900 mb-6">
                    Let's Connect
                  </h2>
                  <div className="space-y-6">
                    {/* Applying Law of Similarity for contact methods */}
                    <motion.a
                      href="mailto:adarsh.agrahari26@gmail.com"
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-4 text-navy-600 hover:text-navy-900 transition-colors p-4 rounded-lg hover:bg-navy-50"
                    >
                      <Mail className="h-6 w-6" />
                      <span>adarsh.agrahari26@gmail.com</span>
                    </motion.a>
                    <motion.a
                      href="tel:+919131771382"
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-4 text-navy-600 hover:text-navy-900 transition-colors p-4 rounded-lg hover:bg-navy-50"
                    >
                      <Phone className="h-6 w-6" />
                      <span>+91 91317 71382</span>
                    </motion.a>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-4 text-navy-600 p-4 rounded-lg hover:bg-navy-50"
                    >
                      <MapPin className="h-6 w-6" />
                      <span>Bangalore, India</span>
                    </motion.div>
                  </div>
                </div>

                {/* Availability Calendar - Applying Law of Focal Point */}
                <div className="bg-navy-50 rounded-xl p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-navy-900">
                    Book a Session
                  </h3>
                  <p className="text-navy-600">
                    Available for consulting and mentorship sessions through:
                  </p>
                  <div className="space-y-3">
                    <motion.a
                      href="https://www.upraised.co/mentors"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-all"
                    >
                      <span className="font-medium text-navy-900">Upraised</span>
                      <ArrowRight className="h-5 w-5 text-navy-600" />
                    </motion.a>
                    <motion.a
                      href="https://www.isb.edu/executive-education"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-all"
                    >
                      <span className="font-medium text-navy-900">ISB Executive Education</span>
                      <ArrowRight className="h-5 w-5 text-navy-600" />
                    </motion.a>
                  </div>
                </div>

                {/* Social Links - Applying Law of Common Region */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-navy-900">
                    Connect on Social
                  </h3>
                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ y: -5 }}
                      href="https://linkedin.com/in/adarshagrahari"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-navy-50 rounded-xl text-navy-600 hover:bg-navy-100 transition-colors"
                    >
                      <Linkedin className="h-6 w-6" />
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -5 }}
                      href="https://twitter.com/adarshagrahari"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-navy-50 rounded-xl text-navy-600 hover:bg-navy-100 transition-colors"
                    >
                      <Twitter className="h-6 w-6" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form - Applying Progressive Disclosure */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-navy-50 rounded-xl p-8"
              >
                <AnimatePresence mode="wait">
                  {formStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h3 className="text-2xl font-bold text-navy-900">
                        What brings you here?
                      </h3>
                      <div className="grid gap-4">
                        {interests.map((interest, index) => (
                          <motion.button
                            key={index}
                            whileHover={{ x: 5 }}
                            onClick={() => {
                              setFormData(prev => ({ ...prev, interest: interest.title }));
                              handleNextStep();
                            }}
                            className="flex items-center space-x-4 p-4 bg-white rounded-lg text-left hover:shadow-md transition-all"
                          >
                            <interest.icon className="h-6 w-6 text-navy-600" />
                            <div>
                              <div className="font-medium text-navy-900">{interest.title}</div>
                              <div className="text-sm text-navy-600">{interest.description}</div>
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {formStep === 2 && (
                    <motion.form
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <h3 className="text-2xl font-bold text-navy-900">
                        Tell me about yourself
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-2">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            className="w-full px-4 py-3 rounded-lg bg-white border-2 border-transparent focus:border-navy-500 focus:ring-0 transition-colors"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            className="w-full px-4 py-3 rounded-lg bg-white border-2 border-transparent focus:border-navy-500 focus:ring-0 transition-colors"
                            placeholder="john@example.com"
                          />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-2">
                            Message
                          </label>
                          <textarea
                            id="message"
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                            className="w-full px-4 py-3 rounded-lg bg-white border-2 border-transparent focus:border-navy-500 focus:ring-0 transition-colors"
                            placeholder="Tell me about your project or inquiry..."
                          />
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          className="w-full flex items-center justify-center px-8 py-3 bg-navy-600 text-white rounded-lg hover:bg-navy-700 transition-colors"
                        >
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </motion.button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;