import React from 'react';
import { Award, Users, Clock, MapPin, Target, Eye, Heart } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, value: '150,000+', label: 'Students Trained' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Clock, value: '24/7', label: 'Learning Access' },
    { icon: MapPin, value: '5+', label: 'Training Centers' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide world-class technical education and create skilled professionals who drive innovation in their respective industries.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading technical training institute, empowering students with cutting-edge skills for the digital future.'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Excellence, Innovation, Integrity, and Student Success are the core values that guide everything we do.'
    }
  ];

  const facilities = [
    'State-of-the-art computer labs with latest software',
    'Air-conditioned classrooms for comfortable learning',
    'High-speed internet connectivity',
    'Industry-standard design workstations',
    'Dedicated project rooms for team work',
    'Library with technical books and resources',
    'Career counseling and placement cell',
    'Flexible timing options for working professionals'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Fortress CADD Centre</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Pioneering technical education for over 15 years, transforming careers and building futures in engineering and design.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2008, Fortress CADD Centre began as a small training institute with a big vision - to bridge the gap between academic learning and industry requirements. What started with just 5 students has now grown into one of Tamil Nadu's most trusted technical training institutes.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Over the years, we have continuously evolved our curriculum to match industry standards, invested in cutting-edge technology, and built strong partnerships with leading companies to ensure our students get the best career opportunities.
              </p>
              <p className="text-lg text-gray-700">
                Today, with over 150,000 successful alumni working in top companies worldwide, we take pride in being the stepping stone to countless successful careers in engineering, design, and technology.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Our training facility"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Foundation</h2>
            <p className="text-lg text-gray-600">The principles that drive our commitment to excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Modern computer lab"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">World-Class Facilities</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our state-of-the-art facilities are designed to provide the best learning environment for our students. We believe that quality infrastructure plays a crucial role in effective learning.
              </p>
              <ul className="space-y-3">
                {facilities.map((facility, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{facility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600">Meet the experienced professionals leading our institution</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Rajesh Kumar',
                role: 'Director & Founder',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
                experience: '20+ years in CAD/CAM industry'
              },
              {
                name: 'Ms. Priya Sharma',
                role: 'Academic Head',
                image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
                experience: '15+ years in technical education'
              },
              {
                name: 'Mr. Arun Vishnu',
                role: 'Placement Director',
                image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300',
                experience: '12+ years in corporate training'
              }
            ].map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;