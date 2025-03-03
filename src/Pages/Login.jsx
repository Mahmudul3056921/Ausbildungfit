import React, { useState } from "react";
import { FaUserTie, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the email belongs to recruiters/admins
    if (!email.includes("@recruiter.com") && !email.includes("@admin.com")) {
      setErrorMessage("🚫 You don’t have access to this page.");
      return;
    }

    // If authorized, proceed with login (Here you can redirect)
    alert("✅ Welcome, you are authorized!");
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100 px-6">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
          🔒 Recruiter & Admin Login
        </h2>

        {/* Error Message */}
        {errorMessage && (
          <div className="mb-4 text-center bg-red-100 text-red-600 p-3 rounded-lg animate-pulse">
            {errorMessage}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              📧 Email
            </label>
            <div className="flex items-center border rounded-lg p-2 bg-gray-50">
              <FaUserTie className="text-gray-500 mr-2" />
              <input
                type="email"
                className="w-full bg-transparent outline-none"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password Input with Show/Hide Feature */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              🔑 Password
            </label>
            <div className="flex items-center border rounded-lg p-2 bg-gray-50">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type={showPassword ? "text" : "password"}
                className="w-full bg-transparent outline-none"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button className="btn bg-red-600 text-yellow-500 border-2 border-yellow-400 w-full hover:bg-black hover:text-yellow-400">
            🔑 Login
          </button>
        </form>

        {/* Forgot Password & Disclaimer */}
        <div className="text-center mt-4">
          <a href="#" className="text-sm text-gray-600 hover:text-red-600">
            Forgot Password?
          </a>
          <p className="text-gray-600 text-sm mt-2">
            🚫 This login is for **Recruiters & Admins Only**.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
