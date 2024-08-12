import React from 'react';

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-10">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold">Master Your Interviews with MockMeet</h1>
          <p className="mt-4 text-xl">AI-driven mock interviews tailored to your dream job.</p>
          <div className="mt-8">
            <a href="/dashboard" className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-bold text-lg shadow-md hover:bg-gray-100 transition duration-300">
              Get Started
            </a>
          </div>
         {
            /* 
             <div className="mt-8">
            <img src="https://plus.unsplash.com/premium_photo-1661677961956-719597b56ea0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Mock Interview" className="w-full rounded-lg shadow-lg" />
          </div>
            */
         }
        </div>
      </header>

      {/* How It Works Section */}
      <section className="container mx-auto my-16 p-8">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div>
            <img src="https://images.unsplash.com/photo-1653669487058-1adbacc40e00?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Choose a Job Position" className="mx-auto mb-4 rounded-lg" />
            <h3 className="text-2xl font-bold">1. Choose Your Job Position</h3>
            <p className="mt-2 text-gray-600">Select the job role you’re applying for and tailor your interview experience.</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1653669486775-75ddc200933c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Start Your Mock Interview" className="mx-auto mb-4 rounded-lg" />
            <h3 className="text-2xl font-bold">2. Start Your Mock Interview</h3>
            <p className="mt-2 text-gray-600">Engage in a realistic interview powered by AI and hone your responses.</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1526328828355-69b01701ca6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGludGVydmlldyUyMGZlZWRiYWNrfGVufDB8fDB8fHww" alt="Receive Detailed Feedback" className="mx-auto mb-4 rounded-lg" />
            <h3 className="text-2xl font-bold">3. Receive Detailed Feedback</h3>
            <p className="mt-2 text-gray-600">Get instant, actionable feedback to improve and succeed in your next interview.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 p-10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Why Choose MockMeet?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6">
              <img src="https://img.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg" alt="Realistic Interviews" className="mx-auto mb-4 rounded-lg" />
              <h3 className="text-2xl font-bold">Realistic Interviews</h3>
              <p className="mt-2 text-gray-600">Experience interviews that mimic real-life scenarios, boosting your confidence.</p>
            </div>
            <div className="p-6">
              <img src="https://myvistage.com/hub/wp-content/uploads/sites/4/2023/12/23_222_0099-AI-future-business-featured-image-1024x686-1.jpg" alt="AI-Powered Feedback" className="mx-auto mb-4 rounded-lg" />
              <h3 className="text-2xl font-bold">AI-Powered Feedback</h3>
              <p className="mt-2 text-gray-600">Leverage advanced AI to analyze your performance and suggest improvements.</p>
            </div>
            <div className="p-6">
              <img src="https://img.freepik.com/free-vector/flat-web-development-concept-cms_23-2148806100.jpg" alt="Customizable Scenarios" className="mx-auto mb-4 rounded-lg" />
              <h3 className="text-2xl font-bold">Customizable Scenarios</h3>
              <p className="mt-2 text-gray-600">Tailor your mock interviews to your specific job role and industry.</p>
            </div>
            <div className="p-6">
              <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97" alt="Track Your Progress" className="mx-auto mb-4 rounded-lg" />
              <h3 className="text-2xl font-bold">Track Your Progress</h3>
              <p className="mt-2 text-gray-600">Monitor your improvement over time with comprehensive analytics and reports.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto my-16 p-8">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            {/*  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User Testimonial" className="w-16 h-16 rounded-full mx-auto mb-4" />
             */}
            
             <p className="text-gray-600">"MockMeet provided me with the exact practice I needed. The AI feedback was a game-changer!"</p>
            <h3 className="mt-4 font-bold">- MockMeet User</h3>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
          {/*  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User Testimonial" className="w-16 h-16 rounded-full mx-auto mb-4" />
            */}
          <p className="text-gray-600">"Thanks to MockMeet, I was fully prepared and confident during my actual interview."</p>
            <h3 className="mt-4 font-bold">- MockMeet User</h3>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-indigo-600 text-white p-10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">Ready to Nail Your Next Interview?</h2>
          <p className="mt-4 text-lg">Join hundreds of satisfied users who have successfully landed their dream jobs with MockMeet.</p>
          <div className="mt-8">
            <a href="/dashboard" className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-bold text-lg shadow-md hover:bg-gray-100 transition duration-300">
              Start Your Free Trial
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 MockMeet. All rights reserved.</p>
         {/*  <p className="mt-4">
            <a href="/privacy" className="text-blue-400 hover:underline">Privacy Policy</a> | <a href="/terms" className="text-blue-400 hover:underline">Terms of Service</a>
          </p> */}
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
