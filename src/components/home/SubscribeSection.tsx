import Button from '../ui/Button';

const SubscribeSection = () => {
  return (
    <div className="relative">
      <div 
        className="text-white py-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/img/registration-bg.png')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: 'black' }}>Interested?!</h2>
              <p className="text-gray-200 mb-6">
                If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 and others as high as $70.
              </p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <h3 className="text-purple-600 text-xl font-bold mb-4">Courses for Free</h3>
              <p className="text-gray-600 mb-6">Sign up for free learning</p>
              
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
                  />
                </div>
                <Button variant="primary" size="lg" fullWidth type="submit">Submit</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;