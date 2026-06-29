import React from 'react';
import { Users, FileSignature, Calendar, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  {
    id: 1,
    value: "54+",
    label: "Live Sessions",
    icon: <Calendar className="text-primary" size={24} />
  },
  {
    id: 2,
    value: "24+",
    label: "Contracts Drafted",
    icon: <FileSignature className="text-primary" size={24} />
  },
  {
    id: 3,
    value: "6 Months",
    label: "Expert Training",
    icon: <Star className="text-primary" size={24} />
  },
  {
    id: 4,
    value: "1000+",
    label: "Learners Enrolled",
    icon: <Users className="text-primary" size={24} />
  }
];

const TrustIndicators = () => {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-slate-100">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`flex flex-col items-center text-center ${index !== 0 ? 'pl-8 md:pl-12' : ''} ${index % 2 !== 0 && index !== 0 ? 'border-l border-slate-100 md:border-none' : ''}`}
            >
              <div className="mb-3 bg-orange-50 p-3 rounded-full">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-1">
                {stat.value}
              </h3>
              <p className="text-slate-500 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
