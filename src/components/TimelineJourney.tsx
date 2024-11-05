import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Book, Award, Users, Rocket } from 'lucide-react';

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  achievements?: string[];
}

const timelineData: TimelineEvent[] = [
  {
    id: 1,
    year: '2023 - Present',
    title: 'Associate Director, Products at HROne',
    description: 'Leading product strategy and development for HR technology solutions, focusing on AI-driven innovations and enhanced user experiences.',
    icon: <Rocket className="w-6 h-6" />,
    category: 'Professional',
    achievements: [
      'Launched ONE AI - an AI-powered HR assistant',
      'Improved user engagement by 40% through UX optimizations',
      'Led a team of 15 product managers and designers'
    ]
  },
  {
    id: 2,
    year: '2022 - 2023',
    title: 'Senior Product Manager at Paytail',
    description: 'Drove product innovation in fintech solutions, leading to significant improvements in user adoption and revenue growth.',
    icon: <Briefcase className="w-6 h-6" />,
    category: 'Professional',
    achievements: [
      'Developed EMI solution used by 100+ merchants',
      'Increased customer conversion rate by 35%',
      'Streamlined merchant onboarding process'
    ]
  },
  {
    id: 3,
    year: '2021 - Present',
    title: 'Product Management Mentor',
    description: 'Mentoring aspiring product managers through various platforms including Upraised and ISB Executive Education.',
    icon: <Users className="w-6 h-6" />,
    category: 'Mentorship',
    achievements: [
      'Mentored 130+ aspiring Product Managers',
      'Maintained 4.7/5 rating for interview preparation',
      'Conducted workshops on product strategy and growth'
    ]
  },
  {
    id: 4,
    year: '2020',
    title: 'Published Author',
    description: 'Released two successful books on financial management and early retirement strategies.',
    icon: <Book className="w-6 h-6" />,
    category: 'Publication',
    achievements: [
      'Halcyon: Your Finance Guide - 10,000+ copies sold',
      'Retire Today? - Comprehensive guide on financial independence',
      'Featured in multiple finance publications'
    ]
  },
  {
    id: 5,
    year: '2019',
    title: 'Academic Excellence',
    description: 'Achieved remarkable success in competitive examinations.',
    icon: <Award className="w-6 h-6" />,
    category: 'Academic',
    achievements: [
      'CAT 2019: 99.87 percentile',
      'UPSC: Qualified the examination',
      'Consistently ranked in top percentiles'
    ]
  }
];

const TimelineJourney: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-navy-200" />

        {timelineData.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative mb-16 ${
              index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 bg-navy-600 rounded-full flex items-center justify-center text-white">
              {event.icon}
            </div>

            {/* Content */}
            <div className={`ml-12 md:ml-0 ${
              index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
            }`}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-navy-600 bg-navy-100 rounded-full">
                  {event.year}
                </span>
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-navy-600 mb-4">{event.description}</p>
                
                {event.achievements && (
                  <ul className="space-y-2">
                    {event.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-navy-700">
                        <span className="mr-2 text-navy-400">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TimelineJourney;