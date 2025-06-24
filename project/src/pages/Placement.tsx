import React from 'react';
import { Award, Briefcase, TrendingUp, Users, MapPin, Calendar } from 'lucide-react';

const Placement: React.FC = () => {
  const placementStats = [
    { icon: Users, value: '12,000+', label: 'Students Placed' },
    { icon: Briefcase, value: '95%', label: 'Placement Rate' },
    { icon: TrendingUp, value: '₹4.5L', label: 'Average Package' },
    { icon: Award, value: '500+', label: 'Hiring Partners' }
  ];

  const recentPlacements = [
    {
      name: 'Rajesh Kumar',
      course: 'SolidWorks Professional',
      company: 'Larsen & Toubro',
      package: '₹6.5 LPA',
      location: 'Chennai',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Priya Sharma',
      course: 'Revit Architecture',
      company: 'DLF Limited',
      package: '₹5.2 LPA',
      location: 'Bangalore',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Arun Krishnan',
      course: 'Digital Marketing',
      company: 'Wipro Digital',
      package: '₹7.0 LPA',
      location: 'Hyderabad',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Kavya Reddy',
      course: 'AutoCAD Mechanical',
      company: 'Bosch India',
      package: '₹4.8 LPA',
      location: 'Coimbatore',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Suresh Babu',
      course: 'CATIA V5',
      company: 'Mahindra & Mahindra',
      package: '₹5.5 LPA',
      location: 'Pune',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Meera Nair',
      course: 'STAAD.Pro',
      company: 'Tata Projects',
      package: '₹4.2 LPA',
      location: 'Mumbai',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const hiringPartners = [
    { name: 'Larsen & Toubro', logo: 'L&T' },
    { name: 'Tata Consultancy Services', logo: 'TCS' },
    { name: 'Infosys', logo: 'INFO' },
    { name: 'Wipro', logo: 'WIPRO' },
    { name: 'Tech Mahindra', logo: 'TECH M' },
    { name: 'HCL Technologies', logo: 'HCL' },
    { name: 'Bosch India', logo: 'BOSCH' },
    { name: 'Mahindra & Mahindra', logo: 'M&M' },
    { name: 'DLF Limited', logo: 'DLF' },
    { name: 'Godrej Group', logo: 'GODREJ' },
    { name: 'Reliance Industries', logo: 'RIL' },
    { name: 'Adani Group', logo: 'ADANI' }
  ];

  const placementProcess = [
    {
      step: 1,
      title: 'Course Completion',
      description: 'Successfully complete your chosen technical course with good grades'
    },
    {
      step: 2,
      title: 'Resume Building',
      description: 'Professional resume preparation with project portfolio development'
    },
    {
      step: 3,
      title: 'Interview Preparation',
      description: 'Mock interviews, technical tests, and soft skills training'
    },
    {
      step: 4,
      title: 'Job Matching',
      description: 'Match your skills with suitable job opportunities from our partner companies'
    },
    {
      step: 5,
      title: 'Interview Process',
      description: 'Attend interviews with our hiring partners with full support'
    },
    {
      step: 6,
      title: 'Job Placement',
      description: 'Successful placement with ongoing career support and guidance'
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Placement Success</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join thousands of successful professionals who transformed their careers with our 100% placement assistance
          </p>
        </div>
      </section>

      {/* Placement Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {placementStats.map((stat, index) => (
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

      {/* Recent Placements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Success Stories</h2>
            <p className="text-lg text-gray-600">Meet our recent alumni who landed their dream jobs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPlacements.map((student, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{student.name}</h3>
                    <p className="text-sm text-gray-600">{student.course}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Company:</span>
                    <span className="font-medium text-gray-900">{student.company}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Package:</span>
                    <span className="font-bold text-green-600">{student.package}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium text-gray-900 flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {student.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Hiring Partners</h2>
            <p className="text-lg text-gray-600">Top companies that trust our students for their talent needs</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {hiringPartners.map((partner, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-200">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xs">{partner.logo}</span>
                </div>
                <p className="text-sm text-gray-700 font-medium">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Placement Process</h2>
            <p className="text-lg text-gray-600">Step-by-step guidance to secure your dream job</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placementProcess.map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {process.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ml-4">{process.title}</h3>
                  </div>
                  <p className="text-gray-600">{process.description}</p>
                </div>
                {index < placementProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-blue-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Support */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Placement Support</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Resume & Portfolio Development</h4>
                    <p className="text-gray-600">Professional resume writing and technical portfolio creation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Mock Interview Training</h4>
                    <p className="text-gray-600">Practice interviews with industry professionals and feedback</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Technical Test Preparation</h4>
                    <p className="text-gray-600">Practice tests and aptitude training for technical assessments</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Soft Skills Development</h4>
                    <p className="text-gray-600">Communication, presentation, and professional etiquette training</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Industry Networking</h4>
                    <p className="text-gray-600">Connect with industry professionals and alumni network</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Ongoing Career Support</h4>
                    <p className="text-gray-600">Lifetime career guidance and job change assistance</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Placement support"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Career Journey?</h2>
          <p className="text-xl mb-8">Join our successful alumni and land your dream job with 100% placement assistance</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
              Download Placement Brochure
            </button>
            <button className="bg-white text-blue-600 hover:bg-gray-50 font-bold py-3 px-8 rounded-lg transition-colors duration-200">
              Schedule Career Counseling
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Placement;