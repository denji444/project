import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import WaveDivider from '../components/ui/WaveDivider';
import Button from '../components/ui/Button';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactPage = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us - CodeHub</title>
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contacts</h1>
          <p className="text-gray-200 mb-6">
        When networking, there is probably no one greater than the building.
          </p>
          <div className="flex justify-end items-center space-x-2">
        <Link to="/" className="text-white hover:text-gray-200">Home</Link>
        <span className="text-white">{'>'}</span>
        <span className="text-gray-200">Contacts</span>
          </div>
        </div>
      </div>
        <WaveDivider color="white" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex">
            <div className="flex-shrink-0 mr-4 text-purple-600">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">Binghamton, New York</h3>
              <p className="text-gray-600">4343 Hinkle Deegan Lake Road</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 mr-4 text-purple-600">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">+1 (623) 9063 562</h3>
              <p className="text-gray-600">Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="flex-shrink-0 mr-4 text-purple-600">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">support@codehub.com</h3>
              <p className="text-gray-600">Send us your query anytime!</p>
            </div>
          </div>
        </div>
        
        <div>
          <form className="space-y-4">
            <div>
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Enter email address" 
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>
            <div>
              <input 
                type="text" 
                placeholder="Enter subject" 
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>
            <div>
              <textarea 
                placeholder="Enter Message" 
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-300 resize-none"
              />
            </div>
            <div>
              <Button variant="primary" fullWidth>SEND MESSAGE</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;