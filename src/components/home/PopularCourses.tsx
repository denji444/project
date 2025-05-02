import { useState, useRef } from 'react';
import CourseCard from '../ui/CourseCard';
import { coursesData } from '../../data/courses';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PopularCourses = () => {
  const [courses] = useState(coursesData.slice(0, 5));
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 400;
      sliderRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Popular Courses <br />Available Right Now</h2>
        </div>
        
        <div className="relative">
          <button 
            onClick={() => scroll('left')} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} className="text-purple-600" />
          </button>
          
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto gap-8 scroll-smooth scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {courses.map((course) => (
              <div key={course.id} className="flex-none w-[300px]">
                <CourseCard
                  id={course.id}
                  title={course.title}
                  description={course.description}
                  image={course.image}
                  price={course.price}
                  rating={course.rating}
                  reviews={course.reviewCount}
                  category={course.category}
                />
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => scroll('right')} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} className="text-purple-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;