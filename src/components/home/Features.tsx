import { Book, Award, BookOpen } from 'lucide-react';

const Features = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Book className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">New Courses</h3>
              <p className="text-gray-600 text-sm">
                Check out the newest and the most comprehensive ones to expand your skills.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Top Courses</h3>
              <p className="text-gray-600 text-sm">
                Discover our most popular and highly-rated courses, designed to help you succeed.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Full E-Books</h3>
              <p className="text-gray-600 text-sm">
                Get the complete e-books and dive deep into your passion or expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;