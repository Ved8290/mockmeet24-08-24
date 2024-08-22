import React from 'react';

function whatwedo() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="max-w-2xl p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">What We Do</h1>
        <ul className="space-y-4">
          <li>
            <strong className="text-blue-400">AI with Attitude:</strong> Get hit with smart, unpredictable questions based on your job role—no two interviews are ever the same.
          </li>
          <li>
            <strong className="text-blue-400">Human Touch:</strong> Our expert partners feed us the inside scoop on what’s trending in interviews—because AI is smart, but humans know best.
          </li>
          <li>
            <strong className="text-blue-400">Brutally Honest Feedback:</strong> We don’t sugarcoat it—you’ll get straight talk on where you shine and where you need a little more polish.
          </li>
          <li>
            <strong className="text-blue-400">Tailored Packages:</strong> From "I need a quick practice" to "Bring it on, I’m going all in," we’ve got plans to suit your hustle.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default whatwedo;
