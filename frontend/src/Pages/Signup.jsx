import React, { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleClick = async () => {
    try {
      console.log("before");
      const response = await axios.post("http://localhost:3000/signup", {});
      console.log(response.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0d0d0d] p-4">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl  border-white  font-bold text-white text-center mb-8"
      >
        Sign up to CheckPoint
      </motion.h1>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-md bg-black rounded-md  border-2 shadow-xl overflow-hidden"
      >
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-md font-medium text-white">
                Full Name
              </label>
              <div className="flex items-center border-2 border-slate-300 rounded-md focus-within:border-slate-500 transition-colors duration-300">
                <User className="m-2 text-white" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="w-full px-2 py-2 outline-none text-lg bg-black text-white"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-md font-medium text-white">
                Email
              </label>
              <div className="flex items-center border-2 border-slate-300 rounded-md focus-within:border-slate-500 transition-colors duration-300">
                <Mail className="m-2 text-slate-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  className="w-full px-2 py-2 outline-none text-lg bg-black text-white"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-md font-medium text-white"
              >
                Password
              </label>
              <div className="flex items-center border-2 border-slate-300 rounded-md focus-within:border-slate-500 transition-colors duration-300">
                <Lock className="m-2 text-slate-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  className="w-full px-2 py-2 outline-none text-lg bg-black text-white"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="m-2 focus:outline-none"
                >
                  {showPassword ? (
                    <EyeOff className="text-slate-400" />
                  ) : (
                    <Eye className="text-slate-400" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-4 py-2 bg-slate-600 text-white hover:bg-slate-700 transition-colors duration-300 text-lg font-semibold"
                type="submit"
                onClick={handleClick}
              >
                Sign Up
              </motion.button>
              <NavLink
                to={"/signin"}
                className="text-slate-200 hover:text-white transition-colors duration-300"
              >
                Already have an account?
              </NavLink>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
