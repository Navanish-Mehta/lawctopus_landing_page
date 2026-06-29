import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, Globe, PenTool, TrendingUp, Clock } from 'lucide-react';

const reasons = [
  {
    id: 1,
    title: "Draft 24 Essential Agreements",
    description: "Learn to draft 24 essential, high-demand agreements with hands-on guidance through 54 live training sessions led by industry experts.",
    icon: <PenTool className="text-primary" size={28} />
  },
  {
    id: 2,
    title: "Expertise in Practice Areas",
    description: "Develop drafting expertise in highly sought-after practice areas like: Real Estate, IPR, General Corporate, and International Contracts.",
    icon: <BookOpen className="text-primary" size={28} />
  },
  {
    id: 3,
    title: "Upwork Freelancing Training",
    description: "Get freelancing training from a top-rated Upwork contract expert, receive direct opportunities, and handle your first client confidently!",
    icon: <TrendingUp className="text-primary" size={28} />
  },
  {
    id: 4,
    title: "Build Your Portfolio",
    description: "Assignments: Draft 10 contracts and get personalised feedback on each. Use these 10 fine-tuned contracts in your Upwork portfolio!",
    icon: <Briefcase className="text-primary" size={28} />
  },
  {
    id: 5,
    title: "Save 4 Years of Career",
    description: "Accelerate your growth! Learn in 6 months what a lawyer typically learns after 4-5 years of practice.",
    icon: <Clock className="text-primary" size={28} />
  },
  {
    id: 6,
    title: "Lifetime Access",
    description: "Get lifetime access to all course materials including recorded lectures, reading resources, drafts, and recordings of live sessions.",
    icon: <Globe className="text-primary" size={28} />
  }
];

const WhyJoin = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Why You Should Join This Course?
          </h2>
          <p className="text-lg text-slate-600">
            A comprehensive program designed to turn beginners into highly-paid contract drafting experts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:shadow-xl hover:border-orange-100 transition-all duration-300 group"
            >
              <div className="bg-white w-14 h-14 rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">{reason.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
