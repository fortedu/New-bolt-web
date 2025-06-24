import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Clock, Star, Award, Users } from 'lucide-react';

const Courses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDuration, setSelectedDuration] = useState('All');

  const categories = [
    'All', 'Mechanical', 'Civil', 'Architecture', 'IT & Digital', 'Animation', 'Project Management'
  ];

  const durations = ['All', '30-45 Days', '45-60 Days', '60-90 Days', '90+ Days'];

  const courses = [
    {
      slug: 'autocad-2d-3d',
      name: 'AutoCAD 2D & 3D',
      category: 'Mechanical',
      duration: '45 Days',
      rating: 4.8,
      students: 2500,
      price: '₹8,999',
      originalPrice: '₹12,999',
      level: 'Beginner to Advanced',
      image: 'https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Master the fundamentals of 2D drafting and 3D modeling with AutoCAD'
    },
    {
      slug: 'solidworks-professional',
      name: 'SolidWorks Professional',
      category: 'Mechanical',
      duration: '60 Days',
      rating: 4.9,
      students: 1800,
      price: '₹15,999',
      originalPrice: '₹19,999',
      level: 'Intermediate',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Advanced 3D modeling, simulation, and design validation with SolidWorks'
    },
    {
      slug: 'revit-architecture',
      name: 'Revit Architecture',
      category: 'Architecture',
      duration: '50 Days',
      rating: 4.7,
      students: 1200,
      price: '₹12,999',
      originalPrice: '₹16,999',
      level: 'Beginner to Intermediate',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Building Information Modeling for architectural design and documentation'
    },
    {
      slug: 'digital-marketing-master',
      name: 'Digital Marketing Master',
      category: 'IT & Digital',
      duration: '90 Days',
      rating: 4.8,
      students: 3200,
      price: '₹18,999',
      originalPrice: '₹24,999',
      level: 'All Levels',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Complete digital marketing course covering SEO, SEM, Social Media, and Analytics'
    },
    {
      slug: 'catia-v5',
      name: 'CATIA V5',
      category: 'Mechanical',
      duration: '65 Days',
      rating: 4.6,
      students: 950,
      price: '₹16,999',
      originalPrice: '₹21,999',
      level: 'Advanced',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Advanced surface modeling and product design with CATIA V5'
    },
    {
      slug: 'staad-pro',
      name: 'STAAD.Pro',
      category: 'Civil',
      duration: '55 Days',
      rating: 4.7,
      students: 1400,
      price: '₹13,999',
      originalPrice: '₹17,999',
      level: 'Intermediate',
      image: 'https://images.pexels.com/photos/3862061/pexels-photo-3862061.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Structural analysis and design software for civil engineers'
    },
    {
      slug: 'maya-3d-animation',
      name: 'Maya 3D Animation',
      category: 'Animation',
      duration: '75 Days',
      rating: 4.8,
      students: 800,
      price: '₹19,999',
      originalPrice: '₹25,999',
      level: 'Intermediate to Advanced',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Professional 3D animation, modeling, and rendering with Maya'
    },
    {
      slug: 'primavera-p6',
      name: 'Primavera P6',
      category: 'Project Management',
      duration: '40 Days',
      rating: 4.5,
      students: 600,
      price: '₹11,999',
      originalPrice: '₹15,999',
      level: 'Beginner to Intermediate',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Enterprise project portfolio management with Oracle Primavera P6'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesDuration = selectedDuration === 'All' || 
      (selectedDuration === '30-45 Days' && parseInt(course.duration) <= 45) ||
      (selectedDuration === '45-60 Days' && parseInt(course.duration) > 45 && parseInt(course.duration) <= 60) ||
      (selectedDuration === '60-90 Days' && parseInt(course.duration) > 60 && parseInt(course.duration) <= 90) ||
      (selectedDuration === '90+ Days' && parseInt(course.duration) > 90);
    
    return matchesSearch && matchesCategory && matchesDuration;
  });

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Courses</h1>
          <p className="text-xl text-blue-100">
            Comprehensive technical training programs designed for career success
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Duration Filter */}
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-gray-500" />
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {durations.map(duration => (
                  <option key={duration} value={duration}>{duration}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredCourses.length} of {courses.length} courses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <div key={course.slug} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                      {course.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white text-gray-800 px-2 py-1 rounded text-xs font-medium">
                      {course.level}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{course.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600 ml-1">{course.students}+</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600 ml-1">{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600 ml-1">Certified</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">{course.originalPrice}</span>
                    </div>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                      Save {Math.round((1 - parseInt(course.price.replace('₹', '').replace(',', '')) / parseInt(course.originalPrice.replace('₹', '').replace(',', ''))) * 100)}%
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <Link
                      to={`/courses/${course.slug}`}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-center block"
                    >
                      View Details
                    </Link>
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No courses found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSelectedDuration('All');
                }}
                className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Courses;