import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { coursesData } from '../../data/courses';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof coursesData>([]);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = coursesData.filter(course => 
        course.title.toLowerCase().includes(query.toLowerCase()) ||
        course.description.toLowerCase().includes(query.toLowerCase()) ||
        course.category.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-white font-bold' : 'text-gray-200 hover:text-white';
  };

  return (
    <>
      <nav className="bg-purple-600 text-white py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <Link to="/" className="text-2xl font-bold">CodeHub</Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className={`${isActive('/')}`}>HOME</Link>
              <Link to="/about" className={`${isActive('/about')}`}>ABOUT</Link>
              <Link to="/courses" className={`${isActive('/courses')}`}>COURSES</Link>
              <Link to="/contacts" className={`${isActive('/contacts')}`}>CONTACTS</Link>
            </div>

            <div className="hidden md:block">
              <button 
                className="text-gray-200 hover:text-white"
                onClick={toggleSearch}
              >
                <Search size={20} />
              </button>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button className="text-white" onClick={toggleMenu}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4 pb-6`}>
          <div className="flex flex-col space-y-4">
            <Link to="/" className={`${isActive('/')}`} onClick={toggleMenu}>HOME</Link>
            <Link to="/about" className={`${isActive('/about')}`} onClick={toggleMenu}>ABOUT</Link>
            <Link to="/courses" className={`${isActive('/courses')}`} onClick={toggleMenu}>COURSES</Link>
            <Link to="/contacts" className={`${isActive('/contacts')}`} onClick={toggleMenu}>CONTACTS</Link>
            <button 
              className="text-gray-200 hover:text-white flex items-center"
              onClick={toggleSearch}
            >
              <Search size={20} className="mr-2" /> Search
            </button>
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      <div className={`search-overlay ${isSearchOpen ? 'active' : ''}`}>
        <div className="search-container">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold m-0">Search Courses</h3>
            <button onClick={toggleSearch} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>
          
          <input
            type="text"
            placeholder="Search for courses..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-300 mb-4"
          />

          <div className="search-results">
            {searchResults.length > 0 ? (
              <div className="divide-y divide-gray-200">
                {searchResults.map(course => (
                  <Link
                    key={course.id}
                    to={`/courses/${course.id}`}
                    className="block hover:bg-gray-50 p-3 rounded"
                    onClick={toggleSearch}
                  >
                    <div className="flex items-center">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="rounded mr-3"
                        style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                      />
                      <div>
                        <h5 className="font-medium">{course.title}</h5>
                        <p className="text-sm text-gray-500">{course.category}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : searchQuery ? (
              <p className="text-center text-gray-500">No courses found</p>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;