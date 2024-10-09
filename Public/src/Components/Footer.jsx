import React from 'react';
import { Github, Twitter, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#eea9b8] py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-gray-900 text-lg">Checkpoint</span>
            <span className="text-gray-900 text-md">
              © {currentYear} All rights reserved
            </span>
          </div>
    
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <a href="https://github.com/nissha29" className="text-gray-900 hover:text-gray-600" target='_blank'>
                <Github className="w-5 h-5" />
              </a>
              <a href="https://x.com/nisha_297" className="text-gray-900 hover:text-gray-600" target='_blank'>
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <span className="text-gray-900 text-lg flex items-center">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1 font-semibold" /> by Checkpoint
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}