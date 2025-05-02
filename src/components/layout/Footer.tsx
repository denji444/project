import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer 
      className="text-white bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: `url('/img/footer-bg.png')` }}
    >
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4"style={{color: 'black'}}>Top Products</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white text-sm">Managed Websites</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white text-sm">Manage Reputation</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white text-sm">Power Tools</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white text-sm">Marketing Service</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white text-sm">Jobs</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white text-sm">Brand Assets</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white text-sm">Investor Relations</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4">Features</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white text-sm">Jobs</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white text-sm">Brand Assets</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white text-sm">Investor Relations</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white text-sm">Guides</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white text-sm">Research</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white text-sm">Experts</Link></li>
              <li><Link to="/" className="text-gray-400 hover:text-white text-sm">Agencies</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">You can trust us, we only send promo offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="flex-grow bg-gray-800 text-white rounded-l px-3 py-2 text-sm focus:outline-none"
              />
              <button className="bg-purple-600 px-4 py-2 rounded-r text-white text-sm font-medium hover:bg-purple-700 transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            Copyright © {new Date().getFullYear()} All rights reserved | This template is made with ❤️ by CodeHub
          </p>
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition-all">
              <Facebook size={18} className="text-white" />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition-all">
              <Twitter size={18} className="text-white" />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition-all">
              <Instagram size={18} className="text-white" />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition-all">
              <Linkedin size={18} className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;