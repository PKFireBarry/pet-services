'use client'

import { ReactNode, useEffect, forwardRef } from 'react';
import { Check, Clock, Calendar, Heart, Users } from 'lucide-react';
import { motion, useAnimation, Variants, useTransform, useScroll } from 'framer-motion';
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

const customEasing = [0.25, 0.1, 0.25, 1];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: customEasing },
  },
};

const subtleScale: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: customEasing },
  },
};

const WhyChooseUs = () => {
  const controls = useAnimation();
  const [ref] = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: "0px 0px 0px 0px"
  });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  return (
    <motion.section
      id="why-choose-us"
      className="py-16 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg"
      style={{ y }}
      initial="visible"
      animate={controls}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial="visible"
          animate={controls}
          className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          Why Choose My Pet Care Service?
        </motion.h2>

        <motion.div
          ref={ref}
          initial="visible"
          animate={controls}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
              },
            },
          }}
          className="flex flex-wrap justify-center gap-8 mb-12 text-center"
        >
          <MotionStatCard number="7+" label="Trusted Clients" />
          <MotionStatCard number="4+" label="Years in Veterinary Medicine" />
          <MotionStatCard number="6000+" label="Hours as a Certified Vet Nurse" />
        </motion.div>

        <motion.div
          ref={ref}
          initial="visible"
          animate={controls}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.5,
              },
            },
          }}
          className="flex flex-wrap justify-center gap-8"
        >
          <MotionFeatureCard
            icon={<Users className="w-12 h-12 text-purple-600 dark:text-purple-400" />}
            title="Meet Your Sitter Before Scheduling"
            description="We offer an in-home consultation before your first service for a small fee. This allows you and your pet to get comfortable with your sitter, ensuring it's the perfect fit for your furry family member's needs."
          />
          <MotionFeatureCard
            icon={<Heart className="w-12 h-12 text-purple-600 dark:text-purple-400" />}
            title="Consistent Care from a Trusted Sitter"
            description="We provide care for both small and large animals with a focus on consistent communication and daily updates. Our goal is to give you peace of mind, knowing that your furry family members are being properly cared for with the love and attention they deserve."
          />
        </motion.div>

        <motion.div
          ref={ref}
          initial="visible"
          animate={controls}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.8 },
            },
          }}
          className="mt-12 bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white"
          >
            Consistent Availability, Flexible Scheduling
          </motion.h3>

          <motion.div className="flex flex-wrap justify-center gap-8">
            <MotionSchedulingFeature
              icon={<Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />}
              title="Last-minute Requests"
              description="Kaitlyn is available for unexpected needs, If notiified within the first 24 hours."
            />
            <MotionSchedulingFeature
              icon={<Calendar className="w-6 h-6 text-purple-600 dark:text-purple-400" />}
              title="Schedule Changes"
              description="Easily extend your service if your plans change."
            />
            <MotionSchedulingFeature
              icon={<Check className="w-6 h-6 text-purple-600 dark:text-purple-400" />}
              title="Flexible Cancellations"
              description="Our cancellation policies are designed with you in mind."
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

const StatCard = forwardRef<HTMLDivElement, StatCardProps>(({ number, label }, ref) => {
  return (
    <motion.div
      ref={ref}
      variants={subtleScale}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-60"
    >
      <p className="text-4xl font-bold text-gray-800 dark:text-white">{number}</p>
      <p className="text-gray-600 dark:text-gray-400">{label}</p>
    </motion.div>
  );
});
StatCard.displayName = 'StatCard';

const MotionStatCard = motion(StatCard);

const FeatureCard = forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ icon, title, description }, ref) => {
    return (
      <motion.div
        ref={ref}
        variants={fadeInUp}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-80"
      >
        <div className="flex items-center mb-4">
          {icon}
          <h3 className="text-xl font-semibold ml-4 text-gray-800 dark:text-white">{title}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </motion.div>
    );
  }
);
FeatureCard.displayName = 'FeatureCard';

const MotionFeatureCard = motion(FeatureCard);

const SchedulingFeature = forwardRef<HTMLDivElement, SchedulingFeatureProps>(
  ({ icon, title, description }, ref) => {
    return (
      <motion.div
        ref={ref}
        variants={fadeInUp}
        className="flex flex-col items-center text-center w-60"
      >
        <div className="bg-purple-100 dark:bg-purple-800 p-3 rounded-full mb-4">{icon}</div>
        <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </motion.div>
    );
  }
);
SchedulingFeature.displayName = 'SchedulingFeature';

const MotionSchedulingFeature = motion(SchedulingFeature);

export default WhyChooseUs;