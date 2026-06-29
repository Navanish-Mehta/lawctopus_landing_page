import React from 'react';
import { Check, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-900 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Courses and Costs
          </h2>
          <p className="text-lg text-slate-300">
            Invest in your legal career today with our expert-led programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Certificate Course */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 flex flex-col relative overflow-hidden"
          >
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-500 mb-2">Essential</h3>
              <div className="text-2xl font-bold text-secondary mb-4">2-Month Certificate Course</div>
              <p className="text-slate-600 text-sm h-10">Short online certificate course on Contract Drafting and Negotiation.</p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-secondary">Rs. 7,999</span>
              </div>
            </div>

            <div className="space-y-4 mb-10 flex-grow">
              {['2 Months Duration', 'Basic Drafting Principles', 'Contract Negotiation Basics', 'Certificate of Completion'].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check size={18} className="text-slate-400" />
                  <span className="text-slate-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full py-4 rounded-xl font-bold text-secondary bg-slate-100 hover:bg-slate-200 transition-colors">
              Explore Course
            </button>
          </motion.div>

          {/* Expert Course (Highlighted) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
           className="bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-700 flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary blur-[80px] opacity-30"></div>
            
            <div className="absolute top-6 right-6">
              <div className="bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Most Popular
              </div>
            </div>

            <div className="mb-8 relative z-10">
              <h3 className="text-xl font-bold text-primary mb-2">Expert-Level</h3>
              <div className="text-2xl font-bold text-white mb-4">6-Month Expert Course</div>
              <p className="text-slate-400 text-sm h-10">Mastering Contract Drafting and Freelancing.</p>
            </div>
            
            <div className="mb-8 relative z-10">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-lg text-slate-500 line-through">Rs. 60,000</span>
                <span className="text-xs text-green-400 font-bold bg-green-400/10 px-2 py-0.5 rounded">SAVE 58%</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-extrabold text-white">Rs. 24,999</span>
                <span className="text-slate-400">/-</span>
              </div>
            </div>

            <div className="space-y-4 mb-10 flex-grow relative z-10">
              {[
                '54 Live Training Sessions', 
                'Draft 24+ Essential Agreements', 
                'Freelancing & Upwork Training', 
                'Lifetime Access to Materials',
                'Personalised Feedback on Drafts',
                'Networking & Career Support'
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-primary/20 p-0.5 rounded-full">
                    <Check size={14} className="text-primary" />
                  </div>
                  <span className="text-slate-200 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full py-4 rounded-xl font-bold text-white bg-primary hover:bg-amber-600 transition-colors shadow-lg shadow-primary/25 flex items-center justify-center gap-2 relative z-10">
              Enroll Now <ArrowRight size={18} />
            </button>
            
            <div className="mt-4 text-center text-xs text-slate-400 flex items-center justify-center gap-1">
              <ShieldCheck size={14} /> Money Back Guarantee Available
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
