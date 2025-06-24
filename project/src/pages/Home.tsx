import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Clock, Award, ArrowRight, Download, Phone, CheckCircle } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: '150,000+ Students Trained',
      description: 'Join thousands of successful professionals'
    },
    {
      icon: Clock,
      title: '24/7 Access & Flexible Timings',
      description: '5 sessions daily from 7 AM to 9 PM'
    },
    {
      icon: Award,
      title: '100% Placement Assistance',
      description: 'Guaranteed job support and career guidance'
    },
    {
      icon: CheckCircle,
      title: 'Industry Certified Courses',
      description: 'NSDC & ISO certified training programs'
    }
  ];

  const topCourses = [
    {
      name: 'AutoCAD',
      duration: '45 Days',
      rating: 4.8,
      price: '₹8,999',
      originalPrice: '₹12,999',
      image: 'https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'SolidWorks',
      duration: '60 Days',
      rating: 4.9,
      price: '₹15,999',
      originalPrice: '₹19,999',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Revit Architecture',
      duration: '50 Days',
      rating: 4.7,
      price: '₹12,999',
      originalPrice: '₹16,999',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Digital Marketing',
      duration: '90 Days',
      rating: 4.8,
      price: '₹18,999',
      originalPrice: '₹24,999',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Mechanical Engineer at L&T',
      content: 'The SolidWorks course at Fortress helped me land my dream job. The instructors are industry experts!',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Priya Sharma',
      role: 'Architect at DLF',
      content: 'Excellent training quality and placement support. Got placed within 2 weeks of completing Revit course.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Arun Vishnu',
      role: 'Digital Marketing Manager',
      content: 'The practical approach and real-world projects made all the difference in my career growth.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const categories = [
    { name: 'Mechanical', count: '25+ Courses', color: 'bg-blue-500' },
    { name: 'Civil', count: '20+ Courses', color: 'bg-green-500' },
    { name: 'IT & Digital', count: '15+ Courses', color: 'bg-purple-500' },
    { name: 'Animation', count: '12+ Courses', color: 'bg-pink-500' },
    { name: 'Architecture', count: '18+ Courses', color: 'bg-orange-500' },
    { name: 'Project Mgmt', count: '10+ Courses', color: 'bg-indigo-500' }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-orange-500 text-white px-4 py-2 rounded-full inline-block mb-6 animate-pulse">
              📢 Upto 20%* OFF on All Courses | Learn Anytime - 24/7
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Master Technical Skills at
              <span className="block text-orange-400">Fortress CADD Centre</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Join 150,000+ successful professionals. Learn AutoCAD, SolidWorks, Revit, Digital Marketing & more with 100% placement assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 flex items-center justify-center">
                Book Your Seat Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="bg-white text-blue-600 hover:bg-gray-50 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 flex items-center justify-center">
                <Download className="mr-2 w-5 h-5" />
                Download Syllabus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Course Categories</h2>
            <p className="text-lg text-gray-600">Choose from our comprehensive range of technical courses</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to="/courses"
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-200 group"
              >
                <div className={`w-16 h-16 ${category.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                  <span className="text-white font-bold text-xl">{category.name[0]}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Fortress Institute?</h2>
            <p className="text-lg text-gray-600">Excellence in technical education for over a decade</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors duration-200">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Top Featured Courses</h2>
            <p className="text-lg text-gray-600">Most popular courses with highest job placement rates</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {topCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{course.name}</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{course.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">Duration: {course.duration}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">{course.originalPrice}</span>
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              View All Courses
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-lg text-gray-600">Success stories from our alumni</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Career Journey?</h2>
          <p className="text-xl mb-8">Join thousands of successful professionals. Book your free demo class today!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center">
              <Phone className="mr-2 w-5 h-5" />
              Schedule Free Demo
            </button>
            <button className="bg-white text-blue-600 hover:bg-gray-50 font-bold py-3 px-8 rounded-lg transition-colors duration-200">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;