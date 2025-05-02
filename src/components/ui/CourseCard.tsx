import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  rating: number;
  reviews: number;
  category: string;
};

const CourseCard = ({ id, title, description, image, price, rating, reviews, category }: CourseCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-3 left-3">
          <span className="bg-purple-600 text-white px-3 py-1 text-xs font-medium rounded">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                fill={i < rating ? "#FBBF24" : "none"} 
                stroke={i < rating ? "#FBBF24" : "#CBD5E1"} 
                size={16}
                className="mr-0.5"
              />
            ))}
          </div>
          <span className="text-gray-500 text-xs">{reviews} reviews</span>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <span className="text-purple-600 font-bold">{price}</span>
          <Link to={`/courses/${id}`} className="bg-purple-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-purple-700 transition-colors">
            Enroll
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;