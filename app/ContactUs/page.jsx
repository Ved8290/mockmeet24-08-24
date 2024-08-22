import React from 'react';
import Header from '../dashboard/_components/Header';

function ContactUs() {
  return (
    <div>
        <Header /> 
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-10 text-center shadow-md">
        <h1 className="text-5xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg">We’re here to help! Got questions or just want to say hi? Reach out to us!</p>
      </header>

      {/* Contact Information Section */}
      <section className="container mx-auto text-center px-4 py-16">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Email */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-2">📧 Email</h3>
            <p className="text-lg text-gray-700">Contact@mockmeet.com</p>
          </div>
          
          {/* Phone */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-2">📞 Phone</h3>
            <p className="text-lg text-gray-700">+91 8767375114</p>
          </div>

          {/* Social Media */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold mb-2">🌐 Catch us on social</h3>
            <p className="text-lg text-gray-700">
              <a href="https://www.facebook.com" className="text-indigo-600 hover:underline">Facebook</a> | 
              <a href="https://www.linkedin.com" className="text-indigo-600 hover:underline">LinkedIn</a> | 
              <a href="https://www.twitter.com" className="text-indigo-600 hover:underline">Twitter</a>
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-8 text-center">
        <h2 className="text-3xl font-bold mb-4">We’d Love to Hear From You!</h2>
        <p className="mb-6">Feel free to reach out with any questions or feedback.</p>
        <a 
          href="mailto:mockmeet@gmail.com" 
          className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-200 transition duration-300"
        >
          Send Us an Email
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 text-center">
        <p>&copy; 2024 MockMeet. All rights reserved.</p>
      </footer>
    </div>
    </div>
  );
}

export default ContactUs;
