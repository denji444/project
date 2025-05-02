import { Play } from 'lucide-react';

const WatchTrainers = () => {
  return (
    <div className="relative">
      <div className="bg-purple-100 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Watch Our Trainers <br />in Live Action
              </h2>
              <p className="text-gray-600 mb-8">
                Experience our live training sessions with our expert trainers who guide you through every step. From beginner concepts to advanced techniques, our trainers deliver quality education that prepares you for success.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="/img/courses/course-details.jpg" 
                alt="Training session" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-colors">
                  <Play size={24} fill="white" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-4">Learn Angular js Course for Legendary Persons</h3>
            <p className="text-gray-600">
              It's the future of modern programming, learn it properly to stay ahead from the competition, gain the knowledge you need to create powerful, interactive websites. You'll learn how to write clean, maintainable code and build responsive applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchTrainers;