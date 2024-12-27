'use client'

import { ReactNode, useEffect, forwardRef } from 'react';
import { Check, Clock, Calendar, Heart, Users } from 'lucide-react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StatCardProps {
  number: string;
  label: string;
}

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

interface SchedulingFeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.66 } }
};

const bounceEffect: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { type: 'spring', stiffness: 120, damping: 10 }
  }
};

const subtleRotation: Variants = {
  hidden: { rotate: -5 },
  visible: { rotate: 0, transition: { duration: 0.77 } }
};

export default function WhyChooseUs() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section id="why-choose-us" className="py-16 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          Why Choose My Pet Care Service?
        </motion.h2>
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{ 
            visible: { transition: { staggerChildren: 0.2 } } 
          }}
          className="flex flex-wrap justify-center gap-8 mb-12 text-center"
        >
          <MotionStatCard number="11+" label="Trusted Clients" />
          <MotionStatCard number="3+" label="Years Experience in Animal Care as CVT" />
          <MotionStatCard number="10000+" label="Hours in Emergency Medicine" />
        </motion.div>
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="flex flex-wrap justify-center gap-8"
        >
          <MotionFeatureCard
            icon={<Users className="w-12 h-12 text-purple-600 dark:text-purple-400" />}
            title="Meet Your Sitter Before Scheduling"
            description="We offer a free in-home consultation before your first service, allowing you and your pet to get comfortable with your sitter and ensure it's a good fit."
          />
          <MotionFeatureCard
            icon={<Heart className="w-12 h-12 text-purple-600 dark:text-purple-400" />}
            title="Consistent Care from a Trusted Sitter"
            description="You'll be assigned a primary and backup sitter, ensuring consistency and comfort for your pet."
          />
        </motion.div>
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={subtleRotation}
          className="mt-12 bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
            Consistent Availability, Flexible Scheduling
          </h3>

          <motion.div
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
            className="flex flex-wrap justify-center gap-8"
          >
            <SchedulingFeature
              icon={<Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />}
              title="Last-minute Requests"
              description="We'll have an experienced sitter available for unexpected needs."
            />
            <SchedulingFeature
              icon={<Calendar className="w-6 h-6 text-purple-600 dark:text-purple-400" />}
              title="Schedule Changes"
              description="Easily extend your service if your plans change."
            />
            <SchedulingFeature
              icon={<Check className="w-6 h-6 text-purple-600 dark:text-purple-400" />}
              title="Flexible Cancellations"
              description="Our cancellation policies are designed with you in mind."
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const StatCard = forwardRef<HTMLDivElement, StatCardProps>(({ number, label }, ref) => {
  return (
    <motion.div ref={ref} variants={bounceEffect} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-60">
      <p className="text-4xl font-bold text-gray-800 dark:text-white">{number}</p>
      <p className="text-gray-600 dark:text-gray-400">{label}</p>
    </motion.div>
  );
});
StatCard.displayName = 'StatCard';

const MotionStatCard = motion(StatCard);

const FeatureCard = forwardRef<HTMLDivElement, FeatureCardProps>(({ icon, title, description }, ref) => {
  return (
    <motion.div ref={ref} variants={fadeInUp} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-80">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-4 text-gray-800 dark:text-white">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );
});
FeatureCard.displayName = 'FeatureCard';

const MotionFeatureCard = motion(FeatureCard);

const SchedulingFeature = forwardRef<HTMLDivElement, SchedulingFeatureProps>(({ icon, title, description }, ref) => {
  return (
    <motion.div ref={ref} variants={bounceEffect} className="flex flex-col items-center text-center w-60">
      <div className="bg-purple-100 dark:bg-purple-800 p-3 rounded-full mb-4">
        {icon}
      </div>
      <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">{title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );
});
SchedulingFeature.displayName = 'SchedulingFeature';