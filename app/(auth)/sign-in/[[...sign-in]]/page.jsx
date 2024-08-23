import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-700">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">Welcome Back!</h2>
        <p className="text-center text-gray-600 mb-6">Please sign in to your account.</p>
        
        {/* Clerk's SignIn component */}
        <SignIn />
        
       
      </div>
    </div>
  );
}
