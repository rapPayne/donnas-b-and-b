import React from 'react';
import { Heart, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const values = [
    { 
      icon: Heart, 
      title: 'Heartfelt Hospitality', 
      description: 'Every guest is treated like family, with personal attention and genuine care for your comfort.' 
    },
    { 
      icon: Award, 
      title: 'Quality Excellence', 
      description: 'We maintain the highest standards in cleanliness, comfort, and service to ensure your perfect stay.' 
    },
    { 
      icon: Users, 
      title: 'Community Connection', 
      description: 'We love sharing local knowledge and helping you discover the best our area has to offer.' 
    },
    { 
      icon: Clock, 
      title: 'Timeless Tradition', 
      description: 'Combining old-fashioned charm with modern amenities for a truly memorable experience.' 
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our B&B</h1>
          <p className="text-xl text-orange-100">
            Discover the story behind Donna's Home away from Home
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto text-gray-700">
            <div className="text-center mb-12">
              <img 
                src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg" 
                alt="Donna's Home away from Home" 
                className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
              />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Story</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              Welcome to Donna's Home away from Home, where hospitality isn't just our business—it's our passion. 
              Founded in 2015 by Donna herself, our charming bed and breakfast began as a dream to create a 
              place where travelers could experience the warmth and comfort of a true home.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Located in a beautifully restored Victorian home, our B&B combines the elegance of yesteryear 
              with all the modern amenities today's travelers expect. Each of our individually decorated rooms 
              tells its own story, featuring antique furnishings, luxurious linens, and thoughtful touches 
              that make your stay special.
            </p>
            
            <p className="text-lg leading-relaxed mb-8">
              What sets us apart is our commitment to genuine hospitality. Donna and her team believe that 
              every guest deserves personalized attention, from recommendations for local attractions to 
              dietary accommodations for breakfast. We're not just your hosts—we're your local guides, 
              your temporary neighbors, and hopefully, your new friends.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            What We Believe In
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                  <Icon className="h-12 w-12 text-orange-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Meet Donna Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg" 
                alt="Donna, your host" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet Donna</h2>
              <p className="text-lg text-gray-700 mb-4">
                As your host, Donna brings over 20 years of hospitality experience and a genuine love 
                for making people feel at home. A local resident for over 30 years, she knows all the 
                best-kept secrets of the area.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                When she's not busy taking care of guests, you'll find Donna tending to her garden, 
                experimenting with new breakfast recipes, or exploring local farmers markets for the 
                freshest ingredients.
              </p>
              <p className="text-lg text-gray-700 italic">
                "Every guest has a story, and I love being a small part of their journey. There's nothing 
                more rewarding than seeing someone feel truly at home here."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Our Hospitality?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Book your stay today and become part of our extended family
          </p>
          <a 
            href="/contact" 
            className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 inline-block shadow-lg"
          >
            Make a Reservation
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;