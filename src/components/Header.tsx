import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-16">
      <motion.div 
        className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        {/* Logo Container with larger sizing */}
        <motion.div
          className="relative w-28 h-28 flex items-center justify-center"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Light Mode Logo */}
          <img 
            src="https://smb.telkomuniversity.ac.id/wp-content/uploads/2023/03/Logo-Utama-Telkom-University.png" 
            alt="Logo Telkom University" 
            className="w-full h-full object-contain drop-shadow-2xl dark:hidden"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          
          {/* Dark Mode Logo */}
          <img 
            src="https://b1983693.smushcdn.com/1983693/wp-content/uploads/2024/04/Logo-Telkom-University.png?lossy=2&strip=1&webp=1" 
            alt="Logo Telkom University" 
            className="w-full h-full object-contain drop-shadow-2xl hidden dark:block"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </motion.div>
        
        {/* Title and Calculator Icon */}
        <div className="text-center md:text-left flex flex-col md:flex-row items-center gap-4">
          <div>
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-telkom-red via-telkom-brightRed to-telkom-red bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Kalkulator Akademik Terpadu
            </motion.h1>
          </div>
          
          <motion.div 
            className="relative"
            whileHover={{ rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-telkom-red to-telkom-brightRed rounded-2xl blur-lg opacity-75"></div>
            <div className="relative p-3 md:p-4 bg-gradient-to-br from-telkom-red to-telkom-brightRed rounded-2xl shadow-2xl">
              <Calculator className="w-8 h-8 md:w-10 md:h-10 text-white" />
              <motion.div
                className="absolute -top-1 -right-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-yellow-300" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.p 
        className="text-lg md:text-xl text-telkom-gray dark:text-gray-300 max-w-4xl mx-auto mb-6 leading-relaxed px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        © 2025. Created with ❤️ by Rachdian
      </motion.p>
      
      <motion.div 
        className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-sm text-telkom-gray dark:text-gray-400 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <span className="font-semibold text-telkom-red">Telkom University</span>
        <span className="hidden sm:inline">•</span>
        <span className="text-center sm:text-left">Academic Performance Calculator</span>
        <span className="hidden sm:inline">•</span>
        <span className="text-green-500 flex items-center gap-1">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          Online
        </span>
      </motion.div>
    </header>
  );
};

export default Header;