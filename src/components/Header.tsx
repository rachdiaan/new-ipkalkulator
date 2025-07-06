import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-16">
      <motion.div 
        className="flex items-center justify-center gap-8 mb-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <motion.img 
          src="https://smb.telkomuniversity.ac.id/wp-content/uploads/2023/03/Logo-Utama-Telkom-University.png" 
          alt="Logo Telkom University" 
          className="h-20 w-auto drop-shadow-2xl"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300 }}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        
        <div className="text-left">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-telkom-red via-telkom-brightRed to-telkom-red bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Kalkulator Akademik Terpadu
          </motion.h1>
          
          <motion.div 
            className="relative mt-2"
            whileHover={{ rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-telkom-red to-telkom-brightRed rounded-2xl blur-lg opacity-75"></div>
            <div className="relative p-4 bg-gradient-to-br from-telkom-red to-telkom-brightRed rounded-2xl shadow-2xl inline-block">
              <Calculator className="w-10 h-10 text-white" />
              <motion.div
                className="absolute -top-1 -right-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-yellow-300" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.p 
        className="text-xl text-telkom-gray dark:text-gray-300 max-w-4xl mx-auto mb-6 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        © 2025. Created with ❤️ by Rachdian
      </motion.p>
      
      <motion.div 
        className="flex items-center justify-center gap-3 text-sm text-telkom-gray dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <span className="font-semibold text-telkom-red">Telkom University</span>
        <span>•</span>
        <span>Academic Performance Calculator</span>
        <span>•</span>
        <span className="text-green-500 flex items-center gap-1">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          Online
        </span>
      </motion.div>
    </header>
  );
};

export default Header;