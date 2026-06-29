import React from 'react';
import { motion } from 'framer-motion';

const AboutCourse = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              About the 6-Month Long Expert-Level Course
            </h2>
            <div className="space-y-6 text-slate-600 text-lg">
              <p>
                This course empowers students to draft over <strong className="text-secondary">24 complex contracts</strong>, including website terms and international agreements, and teaches you how to excel as a Contract Drafting Freelancer through platforms like Upwork and LinkedIn.
              </p>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                <h3 className="text-xl font-bold text-secondary mb-3">Month 1 - 2: Fundamentals</h3>
                <p className="text-base">
                  You'll learn the fundamentals of drafting contracts and get hands-on experience by identifying contracts, and reviewing and redrafting a sale deed all by yourself.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                <h3 className="text-xl font-bold text-secondary mb-3">Month 3 - 6: Advanced Agreements</h3>
                <p className="text-base">
                  The next four months will focus on specific contracts related to real estate, intellectual property, and business agreements including NDAs, Master Service Agreements, Power of Attorney, Shareholders Agreements, and International Commercial Agreements.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-secondary rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary blur-[100px] opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 blur-[100px] opacity-20"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">About Lawctopus Law School</h3>
                <p className="text-slate-300 mb-8 text-lg">
                  Lawctopus Law School has taught a wide range of practical skills to over <strong className="text-white">20,000+ law students</strong>, young lawyers, professionals, academicians, and business people. 
                </p>
                <div className="flex items-center gap-6">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-1">93.2</div>
                    <div className="text-sm text-slate-400">Average Rating (out of 100)</div>
                  </div>
                  <div className="w-px h-12 bg-white/20"></div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-1">1000+</div>
                    <div className="text-sm text-slate-400">Student Reviews</div>
                  </div>
                </div>
                <p className="mt-8 text-sm italic text-slate-400 border-t border-white/10 pt-6">
                  "Our online courses are 'warm' learning experiences!"
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutCourse;
