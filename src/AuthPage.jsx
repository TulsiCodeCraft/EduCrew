import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Github } from 'lucide-react';

const AuthPages = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleMode = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setIsVisible(true);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/20 to-cyan-400/20 blur-3xl transform -skew-y-12 scale-150"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              backgroundColor: i % 2 ? '#ff00ff' : '#00ffff',
              opacity: 0.3,
              animation: `pulse ${Math.random() * 3 + 2}s infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Auth Container */}
      <div className={`relative w-full max-w-md transform transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-800 shadow-2xl">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-400 bg-clip-text text-transparent mb-2">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="text-gray-400">
              {isLogin ? 'Start your study journey' : 'Join our learning community'}
            </p>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors group">
              {/* <Google className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" /> */}
              <span>Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors group">
              <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              <span>GitHub</span>
            </button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-900 text-gray-400">Or continue with</span>
            </div>
          </div>

          {/* Auth Form */}
          <form className="space-y-4">
            {!isLogin && (
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-cyan-400 rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-gray-900 rounded-lg">
                  <div className="flex items-center">
                    <User className="absolute left-3 text-gray-400" size={20} />
                    <input 
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-transparent py-3 px-11 text-white placeholder-gray-400 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-cyan-400 rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gray-900 rounded-lg">
                <div className="flex items-center">
                  <Mail className="absolute left-3 text-gray-400" size={20} />
                  <input 
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent py-3 px-11 text-white placeholder-gray-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-cyan-400 rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gray-900 rounded-lg">
                <div className="flex items-center">
                  <Lock className="absolute left-3 text-gray-400" size={20} />
                  <input 
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    className="w-full bg-transparent py-3 px-11 text-white placeholder-gray-400 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            </div>

            {isLogin && (
              <div className="flex justify-end">
                <button type="button" className="text-sm text-fuchsia-500 hover:text-fuchsia-400 transition-colors">
                  Forgot password?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-fuchsia-500 to-cyan-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition"></div>
              <div className="relative bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black font-semibold py-3 rounded-lg flex items-center justify-center gap-2 group-hover:from-fuchsia-600 group-hover:to-cyan-500 transition-all">
                {isLogin ? 'Sign In' : 'Create Account'}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </form>

          {/* Toggle Auth Mode */}
          <p className="mt-6 text-center text-gray-400">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button
              onClick={toggleMode}
              className="text-fuchsia-500 hover:text-fuchsia-400 font-semibold transition-colors"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPages;