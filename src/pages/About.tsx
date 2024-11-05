import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Rocket } from 'lucide-react';
import TimelineEvent from '../components/TimelineEvent';
import PhilosophyCard from '../components/PhilosophyCard';
import TestimonialSlider from '../components/TestimonialSlider';

const About = () => {
  const careerTimeline = [
    {
      year: '2022 - Present',
      company: 'HROne',
      role: 'Product Leader',
      description: 'Leading product strategy and development for HR technology solutions',
      achievements: [
        'Launched ONE AI - an AI-powered HR assistant',
        'Improved user engagement by 40% through UX optimizations',
        'Led a team of 15 product managers and designers'
      ],
      link: 'https://hrone.cloud'
    },
    {
      year: '2020 - 2022',
      company: 'Paytail',
      role: 'Senior Product Manager',
      description: 'Drove product innovation in fintech solutions',
      achievements: [
        'Developed EMI solution used by 100+ merchants',
        'Increased customer conversion rate by 35%',
        'Streamlined merchant onboarding process'
      ],
      link: 'https://paytail.in'
    },
    {
      year: '2018 - 2020',
      company: 'Mahindra',
      role: 'Product Manager',
      description: 'Managed digital transformation initiatives',
      achievements: [
        'Led digital transformation projects',
        'Implemented agile methodologies',
        'Reduced process inefficiencies by 25%'
      ]
    }
  ];

  const philosophies = [
    {
      icon: Users,
      title: 'Customer Obsession',
      description: 'Every feature, every decision starts with the customer and works backward.'
    },
    {
      icon: Target,
      title: 'Data-Driven Decisions',
      description: 'Metrics tell stories. We listen to these stories to make informed choices.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Challenge conventions. Think big. Start small. Learn fast.'
    },
    {
      icon: Rocket,
      title: 'Execution Excellence',
      description: 'Great ideas are nothing without exceptional execution.'
    }
  ];

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
              The Journey of a Product Leader
            </h1>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              From ideation to execution, every step of my journey has been guided by
              a singular focus: creating products that make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            Career Milestones
          </h2>
          <div className="space-y-8">
            {careerTimeline.map((event, index) => (
              <TimelineEvent key={index} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* Product Philosophy */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            Product Philosophy
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {philosophies.map((philosophy, index) => (
              <PhilosophyCard key={index} {...philosophy} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            What Others Say
          </h2>
          <TestimonialSlider />
        </div>
      </section>

      {/* Fun Fact */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 bg-white rounded-xl shadow-sm"
          >
            <p className="text-lg text-navy-600 italic">
              "Once tried to reinvent the wheel but realized customers just wanted it to roll better."
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;