import { Helmet } from 'react-helmet-async';
import Features from '../components/home/Features';
import { Link } from 'react-router-dom';
import WatchTrainers from '../components/home/WatchTrainers';
import FeaturesList from '../components/home/FeaturesList';
import WaveDivider from '../components/ui/WaveDivider';

const AboutPage = () => {
  return (
    <div>
      <Helmet>
        <title>About Us - CodeHub</title>
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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
              <p className="text-gray-200 mb-6">
              Empowering Minds, Transforming Careers <br />
              Learn Anytime, Anywhere with Digital Education
              </p>
              <div className="flex justify-end items-center space-x-2">
          <Link to="/" className="text-white hover:text-gray-200">Home</Link>
          <span className="text-white">{'>'}</span>
          <span className="text-gray-200">About Us</span>
              </div>
            </div>
        </div>
        <WaveDivider color="white" />
      </div>
      
      <Features />
      
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Students learning together" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Over all <br />
                2500 Courses <br />
                from 20 Platforms
              </h2>
              <p className="text-gray-600 mb-4">
                At CodeHub, we believe in making education accessible to everyone with diverse backgrounds, experiences, and learning styles. We started with a simple mission: to revolutionize learning through technology, collaboration, and industry insights.
              </p>
              <p className="text-gray-600 mb-4">
                We believe in bridging barriers and creating paths through which anyone can discover or expand their expertise, being true to who you are helps you achieve your goals and dreams more authentically.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <WatchTrainers />
      <FeaturesList />
      
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-purple-600 mb-6">"</h2>
              <p className="text-xl text-gray-700 mb-4">
                Some people don't like change, but you need to embrace change if the alternative is disaster.
              </p>
              <div className="mt-8">
                <p className="font-bold">Elon Musk</p>
                <p className="text-gray-600 text-sm">CEO, SpaceX & Tesla</p>
              </div>
            </div>
            
            <div>
              <img 
                src="/img/Elon Musk.jpg" 
                alt="Elon Musk" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;