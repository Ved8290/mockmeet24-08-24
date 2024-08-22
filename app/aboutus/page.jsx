import React from 'react';
import Header from '../dashboard/_components/Header';

function AboutUs() {
  return (
    <div>
      
      <Header /> 
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-10 text-center shadow-md">
        <h1 className="text-5xl font-bold">About MockMeet</h1>
        <p className="mt-4 text-lg">Your Ultimate Companion for Interview Success!</p>
      </header>

      {/* About Us Section */}
      <section className="container mx-auto text-center px-4 py-16">
        <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-4">
          At MockMeet, our mission is to bridge the gap between candidates and career success. 
          We believe practice is most effective when guided by a blend of industry insights and advanced AI.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our platform offers personalized mock interviews that simulate real-world scenarios, providing instant feedback to help you improve. 
          We understand interviews can be nerve-wracking (let’s be honest—awkward!). That's why we turn stress into success.
        </p>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto text-center px-4 py-16">
        <h2 className="text-4xl font-bold mb-6">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Smart AI</h3>
            <p className="text-gray-600">
              Get hit with unpredictable questions tailored to your job role—no two interviews are the same!
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Expert Insights</h3>
            <p className="text-gray-600">
              Our industry professionals share the inside scoop on what’s trending in interviews.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Honest Feedback</h3>
            <p className="text-gray-600">
              Receive straightforward feedback on where you shine and where you can improve.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="flex justify-center py-10">
        <img
          src="https://t4.ftcdn.net/jpg/04/03/58/65/360_F_403586528_oyELlTJDLt6N1Gx9stbQCLUUXfeOvSrZ.jpg"
          alt="Mock Interview"
          className="rounded-lg shadow-lg w-2/3 md:w-1/2"
        />
      </section>

      {/* Join Us Section */}
      <section className="bg-indigo-600 text-white text-center p-10">
        <h2 className="text-3xl font-bold mb-4">Join Us!</h2>
        <p className="text-lg mb-6">
          Ready to take the guesswork out of interview prep? 
          Join MockMeet and turn those awkward stammers into slick answers. 
          Whether you're aiming for your first job or a promotion, we’ll make sure you walk in confident and prepared.
        </p>
        <a 
          href="/dashboard" 
          className="bg-white text-indigo-600 rounded-lg px-6 py-3 font-bold hover:bg-gray-100 transition duration-300"
        >
          Start Your Free Trial Today!
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

export default AboutUs;
