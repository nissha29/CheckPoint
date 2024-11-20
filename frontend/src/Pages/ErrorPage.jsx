import React from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle, Home } from "lucide-react";
import { motion } from "framer-motion";

const ErrorPage = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#070a13] p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg text-center space-y-6"
      >
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <AlertCircle className="w-24 h-24 text-[#18294d] mx-auto" />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-6xl font-bold text-white">Oops!</h1>
          <h2 className="text-2xl text-slate-400">Something went wrong</h2>
          <p className="text-slate-300 text-lg max-w-md mx-auto">
            We couldn't find the page you're looking for.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={()=>{
                navigate("/")
            }}
            className="flex items-center gap-2 px-6 py-3 bg-[#18294d] text-white rounded-md hover:bg-[#18295dd8] transition-colors duration-300 text-lg font-semibold"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 text-slate-500"
        >
          Error Code: 404 | Page Not Found
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ErrorPage;