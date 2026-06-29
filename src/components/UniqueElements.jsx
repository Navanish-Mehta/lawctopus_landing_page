import React from 'react';
import { motion } from 'framer-motion';

const elements = [
  { id: '01', title: 'Well-researched, practical & detailed reading resources' },
  { id: '02', title: 'Weekly Live Sessions for the first 2 months' },
  { id: '03', title: '7-8 Live Sessions per month for the next 4 months' },
  { id: '04', title: 'Learn drafting clauses and agreements first-hand with our Faculty' },
  { id: '05', title: 'Recorded lectures by Industry Experts' },
  { id: '06', title: 'Understanding International Contracts & Agreements' },
  { id: '07', title: 'Monthly Freelancing & Networking Sessions' },
  { id: '08', title: 'Practical Assignments on real-life scenarios' },
  { id: '09', title: 'Draft and Get Feedback on 10 Types of Agreements' },
];

const UniqueElements = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800 skew-x-12 translate-x-32 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            9 Unique Elements of the Online Course
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {elements.map((element, index) => (
            <motion.div
              key={element.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl hover:bg-slate-800 hover:border-primary/50 transition-colors"
            >
              <div className="text-primary font-mono text-xl font-bold mb-3">{element.id}.</div>
              <h3 className="text-lg font-medium text-slate-100">{element.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueElements;
