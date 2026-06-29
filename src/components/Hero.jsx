import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, FileText, Briefcase, GraduationCap } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-orange-100 blur-3xl opacity-50"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 rounded-full bg-blue-100 blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            className="max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 text-primary font-medium text-sm mb-6 border border-orange-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              July 1 - December 31 | Register by June 30!
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight mb-6"
            >
              Master <span className="text-primary relative">
                Contract Drafting
                <svg className="absolute -bottom-2 w-full left-0 text-primary/30" viewBox="0 0 300 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 19.5C36 8.83333 133 -7.9 298 19.5" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span> <br />
              & Build a Freelancing Career
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              Join Lawctopus Law School's 6-month expert-level online course. 
              Learn to draft 24+ high-demand agreements and handle your first client confidently on platforms like Upwork.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="bg-primary hover:bg-amber-600 text-white px-8 py-3.5 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 group">
                Enroll Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-3.5 rounded-xl font-medium text-lg transition-all flex items-center justify-center">
                View Curriculum
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-green-500" />
                <span>54 Live Sessions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-green-500" />
                <span>Industry Expert Mentors</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-green-500" />
                <span>Certificate of Completion</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative lg:ml-auto w-full max-w-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Abstract Legal Illustration / Graphic */}
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-2xl border border-slate-700/50">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 shadow-xl">
                    <FileText className="text-white" size={28} />
                  </div>
                  <div className="bg-orange-500/20 text-orange-200 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold border border-orange-500/30">
                    Expert Level
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-500/20 p-2 rounded-lg">
                        <Briefcase size={16} className="text-blue-300" />
                      </div>
                      <div className="text-white font-medium text-sm">Real Estate Contracts</div>
                    </div>
                    <div className="h-1.5 w-3/4 bg-white/20 rounded-full"></div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 transform rotate-1 hover:rotate-0 transition-transform duration-300 ml-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-purple-500/20 p-2 rounded-lg">
                        <GraduationCap size={16} className="text-purple-300" />
                      </div>
                      <div className="text-white font-medium text-sm">Upwork Mentorship</div>
                    </div>
                    <div className="h-1.5 w-full bg-white/20 rounded-full"></div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {[1,2,3,4].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-800 bg-slate-400 flex items-center justify-center text-xs font-bold text-white overflow-hidden">
                          <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Student" />
                        </div>
                      ))}
                    </div>
                    <div className="text-slate-300 text-xs">
                      Join <span className="text-white font-bold">20,000+</span> Lawctopus alumni
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full blur-3xl opacity-20 z-0"></div>
            <div className="absolute top-12 -left-8 w-24 h-24 bg-blue-500 rounded-full blur-3xl opacity-20 z-0"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
