import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Coffee, Wifi, Car, Flower } from 'lucide-react';

const Home = () => {
  const features = [
    { icon: Coffee, title: 'Gourmet Breakfast', description: 'Fresh, locally-sourced ingredients daily' },
    { icon: Wifi, title: 'Free Wi-Fi', description: 'Stay connected throughout your visit' },
    { icon: Car, title: 'Free Parking', description: 'Convenient on-site parking available' },
    { icon: Flower, title: 'Beautiful Gardens', description: 'Relax in our peaceful garden setting' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-orange-400 to-orange-600 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Donna's Home away from Home
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Experience the warmth and comfort of countryside hospitality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 shadow-lg"
              >
                Make a Reservation
              </Link>
              <Link
                to="/about"
                className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-400 transition-colors duration-200 border-2 border-white"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Our B&B?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the perfect blend of comfort, hospitality, and local charm
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center p-6 bg-orange-50 rounded-lg hover:shadow-lg transition-shadow duration-200">
                  <Icon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6">
            "Donna's place is truly magical. The breakfast was incredible, the room was spotless, 
            and the hospitality made us feel like family. We'll definitely be back!"
          </blockquote>
          <cite className="text-lg text-gray-600">— Sarah M., Recent Guest</cite>
        </div>
      </div>

      {/* Location Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Perfect Location
              </h2>
              <div className="flex items-start mb-4">
                <MapPin className="h-6 w-6 text-orange-500 mr-3 mt-1" />
                <div>
                  <p className="text-lg text-gray-700 mb-2">
                    Nestled in the peaceful countryside, just minutes from downtown attractions
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 15 minutes to downtown</li>
                    <li>• Walking distance to hiking trails</li>
                    <li>• Close to local wineries and shops</li>
                    <li>• Quiet, scenic neighborhood</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-orange-100 rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Ready to Visit?</h3>
              <p className="text-gray-600 mb-6">
                Book your stay today and experience the difference that personal hospitality makes.
              </p>
              <Link
                to="/contact"
                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 inline-block"
              >
                Contact Us Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;