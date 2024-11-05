import React from 'react';
import { motion } from 'framer-motion';
import { experiences, awards } from '../data/experiences';
import ExperienceCard from '../components/ExperienceCard';
import AwardCard from '../components/AwardCard';

const Experience = () => {
  return (
    <div className="pt-16 pb-20">
      {/* Hero Section */}
      <section className="bg-navy-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-navy-900 mb-4">
              Building Products That Matter
            </h1>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              A journey through innovation, leadership, and impactful solutions that transform industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            Professional Journey
          </h2>
          <div className="grid gap-8">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            Awards & Recognition
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <AwardCard key={index} award={award} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;