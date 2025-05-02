import FeatureCard from '../ui/FeatureCard';
import { 
  LightbulbIcon, FileClock, Users, Clock, BadgeHelp, MonitorSmartphone 
} from 'lucide-react';

const FeaturesList = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Features That <br />Can Avail By Everyone</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 and others as high as $70.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            title="Lifetime Access"
            description="We provide access to our courses with no time limits. Learn at your own pace without the pressure of deadlines. Study when it's convenient for you."
            icon={<Clock size={28} />}
          />
          
          <FeatureCard 
            title="Source File Included"
            description="Get access to all source code and project files used in the courses. Practice with real examples and build your portfolio with these resources."
            icon={<FileClock size={28} />}
          />
          
          <FeatureCard 
            title="Expert Mentors"
            description="Our guidance from industry-leading experts helps you solve problems fast. Connect with mentors who provide personalized feedback on your work."
            icon={<Users size={28} />}
          />
          
          <FeatureCard 
            title="Student Membership"
            description="Get exclusive community access and enjoy special discounts, prioritized course access, private Discord community, and supportive environment to grow your skills."
            icon={<LightbulbIcon size={28} />}
          />
          
          <FeatureCard 
            title="Live Support"
            description="Need help? Our dedicated support team is available to answer your questions and guide you with your learning experience as you grow your skills."
            icon={<BadgeHelp size={28} />}
          />
          
          <FeatureCard 
            title="Course Features"
            description="Access our learning platform from any device. Material is well-organized, properly paced, updated regularly, and includes downloadable resources to help you succeed."
            icon={<MonitorSmartphone size={28} />}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesList;