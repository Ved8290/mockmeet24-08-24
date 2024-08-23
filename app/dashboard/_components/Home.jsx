import React from 'react';

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517430816045-df4b7de19b18)' }}></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl font-extrabold mb-6 animate-slide-in-bottom">Master Your Interviews with MockMeet</h1>
          <p className="mt-4 text-xl animate-fade-in delay-500">The Perfect Blend of AI and Expert Insights for Your Interview Success!</p>
          <p className="mt-4 text-xl animate-fade-in delay-1000">AI-driven mock interviews tailored to your dream job.</p>
          <div className="mt-8">
            <a href="/dashboard" className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-bold text-lg shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105 duration-300 animate-bounce-once">
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* How It Works Section */}
      <section className="container mx-auto my-16 p-8">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="group">
            <img src="https://images.unsplash.com/photo-1653669487058-1adbacc40e00?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Choose a Job Position" className="mx-auto mb-4 rounded-lg transform group-hover:scale-105 transition duration-300 shadow-lg animate-scale-up-on-hover" />
            <h3 className="text-2xl font-bold animate-fade-in">1. Choose Your Job Position</h3>
            <p className="mt-2 text-gray-600 animate-fade-in delay-500">Select the job role you’re applying for and tailor your interview experience.</p>
          </div>
          <div className="group">
            <img src="https://images.unsplash.com/photo-1653669486775-75ddc200933c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Start Your Mock Interview" className="mx-auto mb-4 rounded-lg transform group-hover:scale-105 transition duration-300 shadow-lg animate-scale-up-on-hover" />
            <h3 className="text-2xl font-bold animate-fade-in">2. Start Your Mock Interview</h3>
            <p className="mt-2 text-gray-600 animate-fade-in delay-500">Engage in a realistic interview powered by AI and hone your responses.</p>
          </div>
          <div className="group">
            <img src="https://images.unsplash.com/photo-1526328828355-69b01701ca6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGludGVydmlldyUyMGZlZWRiYWNrfGVufDB8fDB8fHww" alt="Receive Detailed Feedback" className="mx-auto mb-4 rounded-lg transform group-hover:scale-105 transition duration-300 shadow-lg animate-scale-up-on-hover" />
            <h3 className="text-2xl font-bold animate-fade-in">3. Receive Detailed Feedback</h3>
            <p className="mt-2 text-gray-600 animate-fade-in delay-500">Get instant, actionable feedback to improve and succeed in your next interview.</p>
          </div>
        </div>
      </section>

      {/* Dare to Crush Your Next Interview Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20 animate-fade-in">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-6 animate-slide-in-bottom">Dare to Crush Your Next Interview?</h2>
          <p className="text-xl mb-8 animate-fade-in delay-500">Start Your Free Trial Today & Get the Confidence You Deserve!</p>
          <a href="/dashboard" className="inline-block px-10 py-5 bg-white text-indigo-600 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105 duration-300 animate-bounce-once">
            Start Your Free Trial
          </a>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 p-10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Why Choose MockMeet?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6 group">
              <img src="https://img.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg" alt="Realistic Interviews" className="mx-auto mb-4 rounded-lg shadow-lg transform group-hover:scale-105 transition duration-300 animate-scale-up-on-hover" />
              <h3 className="text-2xl font-bold animate-fade-in">Realistic Interviews</h3>
              <p className="mt-2 text-gray-600 animate-fade-in delay-500">Experience interviews that mimic real-life scenarios, boosting your confidence.</p>
            </div>
            <div className="p-6 group">
              <img src="https://myvistage.com/hub/wp-content/uploads/sites/4/2023/12/23_222_0099-AI-future-business-featured-image-1024x686-1.jpg" alt="AI-Powered Feedback" className="mx-auto mb-4 rounded-lg shadow-lg transform group-hover:scale-105 transition duration-300 animate-scale-up-on-hover" />
              <h3 className="text-2xl font-bold animate-fade-in">AI-Powered Feedback</h3>
              <p className="mt-2 text-gray-600 animate-fade-in delay-500">Leverage advanced AI to analyze your performance and suggest improvements.</p>
            </div>
            <div className="p-6 group">
              <img src="https://img.freepik.com/free-vector/flat-web-development-concept-cms_23-2148806100.jpg" alt="Customizable Scenarios" className="mx-auto mb-4 rounded-lg shadow-lg transform group-hover:scale-105 transition duration-300 animate-scale-up-on-hover" />
              <h3 className="text-2xl font-bold animate-fade-in">Customizable Scenarios</h3>
              <p className="mt-2 text-gray-600 animate-fade-in delay-500">Tailor your mock interviews to your specific job role and industry.</p>
            </div>
            <div className="p-6 group">
              <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97" alt="Track Your Progress" className="mx-auto mb-4 rounded-lg shadow-lg transform group-hover:scale-105 transition duration-300 animate-scale-up-on-hover" />
              <h3 className="text-2xl font-bold animate-fade-in">Track Your Progress</h3>
              <p className="mt-2 text-gray-600 animate-fade-in delay-500">Monitor your improvement over time with comprehensive analytics and reports.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-700 text-white">
        <div className="max-w-3xl p-10 bg-opacity-80 bg-gray-800 rounded-3xl shadow-2xl">
          <h2 className="text-5xl font-extrabold mb-8 text-center animate-slide-in-bottom">
            What We Do
          </h2>
          <ul className="space-y-6">
            <li className="flex items-start animate-fade-in delay-500">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-lg font-bold text-white">
                1
              </div>
              <p className="ml-4 text-lg">
                <strong className="text-blue-400">AI with Attitude:</strong> Get hit with smart, unpredictable questions based on your job role—no two interviews are ever the same.
              </p>
            </li>
            <li className="flex items-start animate-fade-in delay-1000">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-lg font-bold text-white">
                2
              </div>
              <p className="ml-4 text-lg">
                <strong className="text-blue-400">Human Touch:</strong> Our expert partners feed us the inside scoop on what’s trending in interviews—because AI is smart, but humans know best.
              </p>
            </li>
            <li className="flex items-start animate-fade-in delay-1500">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-lg font-bold text-white">
                3
              </div>
              <p className="ml-4 text-lg">
                <strong className="text-blue-400">Brutally Honest Feedback:</strong> We don’t sugarcoat it—you’ll get straight talk on where you shine and where you need a little more polish.
              </p>
            </li>
            <li className="flex items-start animate-fade-in delay-2000">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-lg font-bold text-white">
                4
              </div>
              <p className="ml-4 text-lg">
                <strong className="text-blue-400">Tailored Packages:</strong> From "I need a quick practice" to "Bring it on, I’m going all in," we’ve got plans to suit your hustle.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto my-16 p-8">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 animate-fade-in">
            <p className="text-gray-600">"MockMeet provided me with the exact practice I needed. The AI feedback was a game-changer!"</p>
            <h3 className="mt-4 font-bold text-indigo-600">- MockMeet User</h3>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 animate-fade-in delay-500">
            <p className="text-gray-600">"Thanks to MockMeet, I was fully prepared and confident during my actual interview."</p>
            <h3 className="mt-4 font-bold text-indigo-600">- MockMeet User</h3>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-indigo-600 text-white p-10 animate-fade-in">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">Ready to Nail Your Next Interview?</h2>
          <p className="mt-4 text-lg">Join hundreds of satisfied users who have successfully landed their dream jobs with MockMeet.</p>
          <div className="mt-8">
            <a href="/dashboard" className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-bold text-lg shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105 duration-300 animate-bounce-once">
              Start Your Free Trial
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 MockMeet. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
