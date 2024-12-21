import { Check, Clock, Calendar, Heart, Star, Users } from 'lucide-react'

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-600 dark:text-purple-400">
          Why Choose Our Pet Care Service?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center">
          <div className="p-4">
            <p className="text-4xl font-bold text-gray-800 dark:text-gray-200">11+</p>
            <p className="text-gray-600 dark:text-gray-400">Trusted Clients</p>
          </div>
          <div className="p-4">
            <p className="text-4xl font-bold text-gray-800 dark:text-gray-200">3+</p>
            <p className="text-gray-600 dark:text-gray-400">Years Experience in Animal Care as CVT (certifed vet techniain)</p>
          </div>
          <div className="p-4">
            <p className="text-4xl font-bold text-gray-800 dark:text-gray-200">10000+</p>
            <p className="text-gray-600 dark:text-gray-400">Hours in emergency medicine</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard
            icon={<Check className="w-12 h-12 text-purple-600 dark:text-purple-400" />}
            title="Thoroughly Vetted Pet Sitters"
            description="Our sitters pass mandatory background checks, go through an in-depth interview process, and are bonded and insured. We ensure they have a true passion for pets and people."
          />
          <FeatureCard
            icon={<Users className="w-12 h-12 text-purple-600 dark:text-purple-400" />}
            title="Meet Your Sitter Before Scheduling"
            description="We offer a free in-home consultation before your first service, allowing you and your pet to get comfortable with your sitter and ensure it's a good fit."
          />
          <FeatureCard
            icon={<Heart className="w-12 h-12 text-purple-600 dark:text-purple-400" />}
            title="Consistent Care from Trusted Sitters"
            description="You'll be assigned a primary and backup sitter. Once approved, you'll receive care from these trusted individuals every time, ensuring consistency and comfort for your pet."
          />
          <FeatureCard
            icon={<Star className="w-12 h-12 text-purple-600 dark:text-purple-400" />}
            title="Glowing Reputation"
            description="With tens of thousands of satisfied clients nationwide, we've earned a solid reputation as the most trusted and reliable pet care service in the country."
          />
        </div>
        
        <div className="mt-12 bg-purple-100 dark:bg-purple-900 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-center text-purple-600 dark:text-purple-400">
            Consistent Availability, Flexible Scheduling
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SchedulingFeature
              icon={<Clock className="w-6 h-6" />}
              title="Last-minute Requests"
              description="We'll have an experienced sitter available for unexpected needs."
            />
            <SchedulingFeature
              icon={<Calendar className="w-6 h-6" />}
              title="Schedule Changes"
              description="Easily extend your service if your plans change."
            />
            <SchedulingFeature
              icon={<Check className="w-6 h-6" />}
              title="Flexible Cancellations"
              description="Our cancellation policies are designed with you in mind."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-4 text-gray-800 dark:text-gray-200">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  )
}

function SchedulingFeature({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-purple-200 dark:bg-purple-800 p-3 rounded-full mb-2">
        {icon}
      </div>
      <h4 className="font-semibold mb-1 text-gray-800 dark:text-gray-200">{title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  )
}

