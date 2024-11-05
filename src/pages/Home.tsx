import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Heart, Target, Compass } from 'lucide-react';
import HeroAnimation from '../components/HeroAnimation';

const Home = () => {
  // Using Jobs' principle of emotional connection through powerful storytelling
  const highlights = [
    {
      icon: Brain,
      title: "Think Different",
      description: "Breaking conventional boundaries in product development through innovative solutions"
    },
    {
      icon: Heart,
      title: "Build with Purpose",
      description: "Creating products that genuinely improve people's lives and work"
    },
    {
      icon: Target,
      title: "Execute with Precision",
      description: "Turning visionary ideas into impactful realities through meticulous execution"
    },
    {
      icon: Compass,
      title: "Lead with Vision",
      description: "Guiding teams toward breakthrough innovations that reshape industries"
    }
  ];

  // Applying the Law of Proximity and Visual Hierarchy
  const impactMetrics = [
    { value: "40%", label: "Efficiency Gains", category: "Innovation" },
    { value: "130+", label: "Leaders Mentored", category: "Leadership" },
    { value: "10k+", label: "Books Sold", category: "Influence" },
    { value: "$5M+", label: "Revenue Impact", category: "Results" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Applying Jobs' principle of dramatic simplicity */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-navy-50 to-white">
        <div className="absolute inset-0 z-0">
          <HeroAnimation />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Using Jobs' "1000 songs in your pocket" style headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-navy-900 leading-tight">
              Making Technology
              <br />
              <span className="text-navy-600">Human Again</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-navy-700 max-w-3xl mx-auto leading-relaxed">
              Building products that don't just work—they inspire.
              Leading teams that don't just deliver—they transform.
            </p>
            
            {/* Applying the Law of Common Region */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link 
                to="/experience"
                className="group inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-navy-600 rounded-lg hover:bg-navy-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                See the Impact
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/about"
                className="group inline-flex items-center px-8 py-4 text-lg font-medium text-navy-600 bg-navy-100 rounded-lg hover:bg-navy-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                My Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Applying the Law of Common Fate */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-navy-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-navy-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Impact Numbers - Applying the Law of Similarity */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {impactMetrics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-8 bg-navy-50 rounded-xl"
                >
                  <div className="text-4xl font-bold text-navy-900 mb-2">{stat.value}</div>
                  <div className="text-navy-600">{stat.label}</div>
                  <div className="text-sm text-navy-400 mt-1">{stat.category}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Philosophy - Applying the Law of Prägnanz */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-navy-900">Core Philosophy</h2>
            <p className="text-xl text-navy-600 mt-4">
              Simple solutions to complex challenges
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-navy-50 rounded-lg text-navy-600">
                    <item.icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-navy-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Applying the Law of Focal Point */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-navy-900">
              Ready to Build Something Extraordinary?
            </h2>
            <p className="text-xl text-navy-600">
              Let's create products that don't just meet expectations—they redefine them.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-navy-600 rounded-lg hover:bg-navy-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start a Conversation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;