import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import CourseCard from '../components/ui/CourseCard';
import Button from '../components/ui/Button';
import { Star } from 'lucide-react';
import { coursesData } from '../data/courses';
import WaveDivider from '../components/ui/WaveDivider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CoursesPage = () => {
  const [courses] = useState(coursesData);
  
  return (
    <div>
      <Helmet>
        <title>Courses - CodeHub</title>
      </Helmet>
      
      <div className="relative">
        <div 
          className="bg-white-600 pt-16 pb-32 md:pb-40 bg-cover bg-center bg-no-repeat h-screen flex items-center justify-end"
          style={{
            backgroundImage: `url('/img/banner-bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          <div className="text-right max-w-3xl px-6 md:px-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Explore Our Courses</h1>
            <p className="text-gray-200 mb-6">
              Empower your future with knowledge and skills for success
            </p>
          </div>
        </div>
        <WaveDivider color="white" />
      </div>
      
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="mb-16"
          >
            {courses.map((course) => (
              <SwiperSlide key={course.id}>
                <div className="relative h-[500px]">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center text-white max-w-2xl px-6">
                      <h2 className="text-3xl font-bold mb-4">{course.title}</h2>
                      <p className="mb-6">{course.description}</p>
                      <Button variant="primary">Learn More</Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <h2 className="text-3xl font-bold mb-8">Popular Courses <br />Available Right Now</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {courses.slice(0, 5).map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                description={course.description}
                image={course.image}
                price={course.price}
                rating={course.rating}
                reviews={course.reviewCount}
                category={course.category}
              />
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <img 
                src="https://images.pexels.com/photos/3761508/pexels-photo-3761508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Student learning" 
                className="rounded-lg mb-8"
              />
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Objectives</h3>
                <p className="text-gray-600 mb-4">
                  By following our courses on web development, you'll gain the practical skills needed to create responsive and dynamic websites from scratch. You'll learn to implement modern design principles, master HTML, CSS, and JavaScript, and develop a problem-solving mindset essential for debugging and optimization.
                </p>
                <p className="text-gray-600 mb-4">
                  You'll also acquire knowledge on working with databases, APIs, and version control systems, learn to build a professional portfolio that showcases your abilities, understand web security fundamentals to protect against common vulnerabilities, and gain insights into industry best practices for scalable and maintainable code architectures.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Eligibility</h3>
                <p className="text-gray-600 mb-4">
                  Our courses are designed to be accessible to students with various backgrounds and experience levels. Whether you're a complete beginner or looking to upgrade your skills, you'll find a suitable starting point with us.
                </p>
                <ul className="list-disc pl-5 mb-4 text-gray-600 space-y-2">
                  <li>Basic Computer Proficiency - Comfortable with file navigation, typing, and general computer usage</li>
                  <li>Internet Connection - Reliable internet access for streaming video lessons and downloading course materials</li>
                  <li>Time Commitment - Ability to dedicate at least 5-10 hours per week for optimal learning progress</li>
                  <li>English Proficiency - All our courses are taught in English</li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Course Outline</h3>
                <div className="border rounded-lg overflow-hidden">
                  <table className="min-w-full">
                    <tbody>
                      <tr className="border-b">
                        <td className="px-4 py-3 bg-gray-50 font-medium">Week 1</td>
                        <td className="px-4 py-3">Introduction to Web Development</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-3 bg-gray-50 font-medium">Week 2</td>
                        <td className="px-4 py-3">HTML and CSS Fundamentals</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-3 bg-gray-50 font-medium">Week 3</td>
                        <td className="px-4 py-3">JavaScript Basics</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-3 bg-gray-50 font-medium">Week 4</td>
                        <td className="px-4 py-3">Responsive Design</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-3 bg-gray-50 font-medium">Week 5</td>
                        <td className="px-4 py-3">Working with APIs</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 bg-gray-50 font-medium">Week 6</td>
                        <td className="px-4 py-3">Final Project</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Course Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Category</h4>
                    <p>Web Development</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Duration</h4>
                    <p>6 Weeks</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Level</h4>
                    <p>Beginner to Intermediate</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Language</h4>
                    <p>English</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Certificate</h4>
                    <p>Yes (on completion)</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Button variant="primary" fullWidth>ENROLL NOW</Button>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Reviews</h3>
                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        fill={i < 4 ? "#FBBF24" : "none"} 
                        stroke={i < 4 ? "#FBBF24" : "#CBD5E1"} 
                        size={16}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">4.0 (120 reviews)</span>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center text-sm">
                    <span>5 stars</span>
                    <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                    <span className="text-gray-600">70%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>4 stars</span>
                    <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: "20%" }}></div>
                    </div>
                    <span className="text-gray-600">20%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>3 stars</span>
                    <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: "5%" }}></div>
                    </div>
                    <span className="text-gray-600">5%</span>
                  </div>
                </div>
                
                <h4 className="font-bold mb-4">User Feedback</h4>
                
                <div className="space-y-4">
                  <div className="pb-4 border-b border-gray-200">
                    <div className="flex items-center mb-2">
                      <img 
                        src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="User" 
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-medium">Emily Davis</p>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              fill={i < 5 ? "#FBBF24" : "none"} 
                              stroke={i < 5 ? "#FBBF24" : "#CBD5E1"} 
                              size={12}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      "The course was comprehensive and well-structured. I learned so much in just 6 weeks!"
                    </p>
                  </div>
                  
                  <div className="pb-4 border-b border-gray-200">
                    <div className="flex items-center mb-2">
                      <img 
                        src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="User" 
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-medium">Chris Cunningham</p>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              fill={i < 3 ? "#FBBF24" : "none"} 
                              stroke={i < 3 ? "#FBBF24" : "#CBD5E1"} 
                              size={12}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      "Good content but some sections felt rushed. Would have liked more practice examples."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;