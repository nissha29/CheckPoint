import React, { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom'
import axios from 'axios'



const Signin = () => {
  
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleClick = async()=>{
    try{
      const response = await axios.post('http://localhost:3000/signin')
      console.log(response.data.message)
      window.location.href = '/dashboard'
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-100 to-red-200 p-4">
      <motion.h1 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-red-600 text-center mb-8"
      >
        Sign in to CheckPoint
      </motion.h1>
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden"
      >
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-md font-medium text-gray-700">Email</label>
              <div className="flex items-center border-2 border-red-300 rounded-md focus-within:border-red-500 transition-colors duration-300">
                <Mail className="m-2 text-red-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  className="w-full px-2 py-2 outline-none text-lg"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-md font-medium text-gray-700">Password</label>
              <div className="flex items-center border-2 border-red-300 rounded-md focus-within:border-red-500 transition-colors duration-300">
                <Lock className="m-2 text-red-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  className="w-full px-2 py-2 outline-none text-lg"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="m-2 focus:outline-none"
                >
                  {showPassword ? <EyeOff className="text-red-400" /> : <Eye className="text-red-400" />}
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-300 text-lg font-semibold"
                type="submit"
                onClick={handleClick}
              >
                Sign In
              </motion.button>
              <div className='flex gap-2'>
                <div className='text-gray-700'>New User ?</div>
                <NavLink to={'/signup'} className="text-red-600 hover:text-red-800 transition-colors duration-300">Register Here</NavLink>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Signin;