import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Star, Users, Award, Download, Phone, CheckCircle, PlayCircle } from 'lucide-react';

const CourseDetail: React.FC = () => {
  const { slug } = useParams();

  // In a real app, this would come from an API
  const course = {
    name: 'AutoCAD 2D & 3D',
    category: 'Mechanical',
    duration: '45 Days',
    rating: 4.8,
    students: 2500,
    price: '₹8,999',
    originalPrice: '₹12,999',
    level: 'Beginner to Advanced',
    image: 'https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Master the fundamentals of 2D drafting and 3D modeling with AutoCAD. This comprehensive course covers everything from basic drawing commands to advanced 3D modeling techniques.',
    highlights: [
      'Complete 2D drafting and documentation',
      '3D modeling and visualization',
      'Industry-standard drawing practices',
      'Real-world project experience',
      'AutoCAD certification preparation',
      'Job placement assistance'
    ],
    syllabus: [
      {
        module: 'Module 1: AutoCAD Fundamentals',
        duration: '10 Days',
        topics: [
          'AutoCAD interface and workspace',
          'Basic drawing commands',
          'Coordinate systems',
          'Object selection methods',
          'Drawing aids and precision tools'
        ]
      },
      {
        module: 'Module 2: 2D Drafting',
        duration: '15 Days',
        topics: [
          'Advanced drawing commands',
          'Editing and modifying objects',
          'Layers and object properties',
          'Blocks and attributes',
          'Dimensioning and annotations'
        ]
      },
      {
        module: 'Module 3: 3D Modeling',
        duration: '15 Days',
        topics: [
          '3D coordinate systems',
          'Solid modeling commands',
          'Surface modeling',
          'Materials and rendering',
          'Layout and plotting'
        ]
      },
      {
        module: 'Module 4: Project Work',
        duration: '5 Days',
        topics: [
          'Industrial drawing project',
          'Mechanical component design',
          'Assembly drawings',
          'Portfolio development',
          'Certification exam preparation'
        ]
      }
    ],
    sessions: [
      { time: '7:00 AM - 9:00 AM', type: 'Morning', availability: 'Available' },
      { time: '10:00 AM - 12:00 PM', type: 'Forenoon', availability: 'Available' },
      { time: '1:00 PM - 3:00 PM', type: 'Afternoon', availability: 'Filling Fast' },
      { time: '4:00 PM - 6:00 PM', type: 'Evening', availability: 'Available' },
      { time: '7:00 PM - 9:00 PM', type: 'Night', availability: 'Available' }
    ],
    instructor: {
      name: 'Er. Rajesh Kumar',
      experience: '12+ years',
      expertise: 'Mechanical Design & CAD',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    reviews: [
      {
        name: 'Priya Sharma',
        rating: 5,
        comment: 'Excellent course! The instructor explains everything clearly and the hands-on practice is very helpful.',
        date: '2 weeks ago'
      },
      {
        name: 'Arun Kumar',
        rating: 5,
        comment: 'Great learning experience. Got placed in L&T after completing this course.',
        date: '1 month ago'
      },
      {
        name: 'Kavya Reddy',
        rating: 4,
        comment: 'Good course content and flexible timings. The practice sessions are well-structured.',
        date: '3 weeks ago'
      }
    ]
  };

  return (
    <div className="pt-20">
      {/* Course Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {course.category}
                </span>
                <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  {course.level}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.name}</h1>
              <p className="text-xl text-blue-100 mb-6">{course.description}</p>
              
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" />
                  <span className="font-medium">{course.rating}</span>
                  <span className="text-blue-200 ml-1">({course.students}+ students)</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-200 mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-green-400 mr-2" />
                  <span>Certified</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-3xl font-bold">{course.price}</span>
                <span className="text-xl text-blue-200 line-through">{course.originalPrice}</span>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Save 31%
                </span>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={course.image}
                alt={course.name}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center">
                <button className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 hover:bg-opacity-30 transition-all duration-200">
                  <PlayCircle className="w-12 h-12 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Highlights */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Syllabus */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h2>
              <div className="space-y-4">
                {course.syllabus.map((module, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">{module.module}</h3>
                      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {module.duration}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Instructor */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Instructor</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={course.instructor.image}
                    alt={course.instructor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{course.instructor.name}</h3>
                    <p className="text-gray-600">{course.instructor.expertise}</p>
                    <p className="text-sm text-gray-500">{course.instructor.experience} Industry Experience</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Reviews */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Reviews</h2>
              <div className="space-y-6">
                {course.reviews.map((review, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900">{review.name}</h4>
                        <div className="flex items-center mt-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Enrollment Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{course.price}</div>
                  <div className="text-lg text-gray-500 line-through mb-2">{course.originalPrice}</div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Limited Time Offer
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200">
                    Enroll Now
                  </button>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center">
                    <Phone className="mr-2 w-5 h-5" />
                    Call for Demo
                  </button>
                </div>

                <div className="text-center">
                  <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center w-full">
                    <Download className="mr-2 w-4 h-4" />
                    Download Syllabus
                  </button>
                </div>
              </div>

              {/* Session Timings */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Sessions</h3>
                <div className="space-y-3">
                  {course.sessions.map((session, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <div className="font-medium text-gray-900">{session.time}</div>
                        <div className="text-sm text-gray-600">{session.type}</div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        session.availability === 'Available' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-orange-100 text-orange-800'
                      }`}>
                        {session.availability}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Features */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Features</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Flexible timings</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Industry certification</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">Small batch sizes</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Job placement support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;