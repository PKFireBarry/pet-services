import { Check, Clock, Calendar, Heart, Users } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Why Choose Our Pet Care Service?
        </h2>
        
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-center">
          <StatCard number="11+" label="Trusted Clients" />
          <StatCard number="3+" label="Years Experience in Animal Care as CVT" />
          <StatCard number="10000+" label="Hours in Emergency Medicine" />
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          <FeatureCard
            icon={<Users className="w-12 h-12 text-purple-600 dark:text-purple-400" />}
            title="Meet Your Sitter Before Scheduling"
            description="We offer a free in-home consultation before your first service, allowing you and your pet to get comfortable with your sitter and ensure it's a good fit."
          />
          <FeatureCard
            icon={<Heart className="w-12 h-12 text-purple-600 dark:text-purple-400" />}
            title="Consistent Care from a Trusted Sitter"
            description="You'll be assigned a primary and backup sitter, ensuring consistency and comfort for your pet."
          />
        </div>
        
        <div className="mt-12 bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
            Consistent Availability, Flexible Scheduling
          </h3>

          <div className="flex flex-wrap justify-center gap-8">
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
          </div>
        </div>
      </div>
    </section>
  )
}



function StatCard({ number, label }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-60">
      <p className="text-4xl font-bold text-gray-800 dark:text-white">{number}</p>
      <p className="text-gray-600 dark:text-gray-400">{label}</p>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-80">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-4 text-gray-800 dark:text-white">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}

function SchedulingFeature({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center w-60">
      <div className="bg-purple-100 dark:bg-purple-800 p-3 rounded-full mb-4">
        {icon}
      </div>
      <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">{title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}