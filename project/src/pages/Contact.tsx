import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', course: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const courses = [
    'AutoCAD 2D & 3D',
    'SolidWorks Professional',
    'CATIA V5',
    'Revit Architecture',
    'STAAD.Pro',
    'Digital Marketing',
    'Maya 3D Animation',
    'Primavera P6',
    'Other'
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: [
        '148 S.F.3, Salem Complex, 2nd floor',
        'Avinashi Rd, opp.to Suriya Bakery',
        'Peelamedu, Hope College',
        'Coimbatore, Tamil Nadu 641004'
      ],
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 95666 08904', '+91 95668 60890'],
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@fortresscadd.com', 'admissions@fortresscadd.com'],
      color: 'text-red-600'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Monday - Saturday: 7:00 AM - 9:00 PM', 'Sunday: 9:00 AM - 6:00 PM'],
      color: 'text-orange-600'
    }
  ];

  const branches = [
    {
      name: 'Main Branch - Peelamedu',
      address: '148 S.F.3, Salem Complex, 2nd floor, Avinashi Rd, opp.to Suriya Bakery, Peelamedu, Hope College, Coimbatore - 641004',
      phone: '+91 95666 08904',
      timing: '7:00 AM - 9:00 PM'
    },
    {
      name: 'Branch 2 - Gandhipuram',
      address: '456 Training Center, Gandhipuram, Coimbatore - 641012',
      phone: '+91 95668 60890',
      timing: '8:00 AM - 8:00 PM'
    },
    {
      name: 'Branch 3 - RS Puram',
      address: '789 Education Hub, RS Puram, Coimbatore - 641002',
      phone: '+91 95666 08904',
      timing: '7:30 AM - 8:30 PM'
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with us for course inquiries, admissions, and career guidance
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                    Course Interested In
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a course</option>
                    {courses.map((course, index) => (
                      <option key={index} value={course}>{course}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`${info.color} mr-4 mt-1`}>
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <a
                  href="https://wa.me/919566608904"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  WhatsApp Chat
                </a>
                <a
                  href="tel:+919566608904"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </a>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <section className="mt-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gray-100 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Find Our Location</h2>
              <p className="text-gray-600">Visit us for a free demo class at our Peelamedu branch</p>
            </div>
            <div className="h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2687!2d77.0266!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sPeelamedu%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fortress CADD Centre Location"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Branch Locations */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Branch Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {branches.map((branch, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{branch.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">{branch.address}</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-green-600 mr-3" />
                    <a href={`tel:${branch.phone}`} className="text-gray-600 hover:text-blue-600">
                      {branch.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-orange-600 mr-3" />
                    <p className="text-gray-600">{branch.timing}</p>
                  </div>
                </div>
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(branch.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 block text-center"
                >
                  Get Directions
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What are the admission requirements?</h4>
              <p className="text-gray-600 text-sm">Basic computer knowledge and 10+2 qualification. No prior CAD experience required.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Do you provide placement assistance?</h4>
              <p className="text-gray-600 text-sm">Yes, we provide 100% placement assistance with resume building and interview preparation.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Are the courses industry-certified?</h4>
              <p className="text-gray-600 text-sm">All our courses are NSDC certified and recognized by industry leaders.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Can I attend weekend classes?</h4>
              <p className="text-gray-600 text-sm">Yes, we offer flexible timings including weekend batches for working professionals.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;