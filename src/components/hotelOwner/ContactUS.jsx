import React, { useState } from 'react';
//import { assets } from '../assets/assets'; // Optional if you want to include icons like email/location

const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (API or mailto link)
    alert('Thank you for contacting us!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-24 px-6 md:px-16 lg:px-32 bg-white text-gray-800">
      <h1 className="text-4xl md:text-5xl font-playfair mb-6">Contact Us</h1>
      <p className="text-gray-600 max-w-xl mb-10">
        Have questions, suggestions, or just want to say hello? We'd love to hear from you.
      </p>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Contact Info */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          <div>
            <h2 className="text-lg font-semibold mb-1">Email</h2>
            <p className="text-gray-600">hello@shrpl.com</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-1">Phone</h2>
            <p className="text-gray-600">+91 9540622138</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-1">Address</h2>
            <p className="text-gray-600">
              C1123 Sushant lok 1 gurgaon 110038
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="lg:w-1/2 bg-gray-50 p-6 rounded-xl shadow-sm space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Type your message..."
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
