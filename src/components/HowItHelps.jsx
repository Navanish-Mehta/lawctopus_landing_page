import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const benefits = [
  "Law students will be able to ace Law Firm internships and get freelance opportunities",
  "Lawyers (with 0-4 years of experience) will be able to earn additional income through contract drafting skills",
  "Learn to network better and generate income",
  "Become familiar in using freelancing platforms",
  "Learn to negotiate well in your daily life, during apartment hunting, job interviews, salary negotiations, M&A transactions, and more",
  "Save 3-4 years of your legal career! What a lawyer learns after 3-4 years of practice, you'd have learned in 6 months",
  "Learn about international agreements, including arbitration rules and governing laws, enhancing the scope of your freelancing",
  "Learn the nuances of drafting terms and conditions for websites and offer your services to the increasingly digital world",
  "The live sessions will make you an expert of 24+ most in-demand agreements in India",
  "Build strong profiles on platforms like Upwork, Fiverr, and LinkedIn",
  "Get expert mentorship to navigate freelancing with confidence",
  "Learn to write winning proposals that help you land projects",
  "Create standout CVs and cover letters for internships and jobs"
];

const HowItHelps = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
         <div className="lg:col-span-5 xl:sticky xl:top-32">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              How will this course help you?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Whether you're a law student looking to build a career, or a junior lawyer wanting to start freelancing, this course provides everything you need to succeed.
            </p>
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6">
              <div className="text-4xl font-bold text-primary mb-2">3-4 Years</div>
              <div className="text-secondary font-medium">Of legal career growth saved by mastering these skills in just 6 months.</div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex gap-4 items-start hover:shadow-md transition-shadow"
                >
                  <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={20} />
                  <p className="text-slate-700 text-sm leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItHelps;
