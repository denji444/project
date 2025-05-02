import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative">
      <div 
        className="bg-white-600 pt-16 pb-32 md:pb-40 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/img/home-banner-bg.png')`,
        }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Take the first step <br /> to learn with us
          </h1>
          <p className="text-gray-200 mb-8">
            Learn directly from leaders, designers, project managers - your journey to success starts here!
          </p>
          <Link to="/courses">
            <Button size="lg">Get Started</Button>
          </Link>
        </div>
        <div>
          <img 
            src="/img/header-img.png" 
            alt="Learn coding with CodeHub" 
            className="w-full max-w-md mx-auto rounded-lg shadow-xl" 
          />
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;