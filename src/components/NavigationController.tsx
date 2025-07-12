import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Brain, FileText, ChevronUp, ChevronDown } from 'lucide-react';

interface NavigationControllerProps {
  currentPage: 'home' | 'documentation' | 'ai-analysis';
  onPageChange: (page: 'home' | 'documentation' | 'ai-analysis') => void;
}

const NavigationController: React.FC<NavigationControllerProps> = ({
  currentPage,
  onPageChange
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const navItems = [
    {
      id: 'home' as const,
      label: 'Beranda',
      icon: Home,
      description: 'Kalkulator IPK',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'ai-analysis' as const,
      label: 'Analisis AI',
      icon: Brain,
      description: 'Rekomendasi Cerdas',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'documentation' as const,
      label: 'Dokumentasi',
      icon: FileText,
      description: 'Panduan Lengkap',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <>
      {/* Toggle Button - Centered Bottom */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 p-4 bg-white/30 dark:bg-gray-800/30 backdrop-blur-xl border border-white/40 dark:border-gray-700/40 rounded-full shadow-2xl text-gray-700 dark:text-gray-300 hover:text-telkom-red dark:hover:text-telkom-brightRed transition-all duration-300 hover:scale-110 active:scale-95"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 300 }}
      >
        <motion.div
          animate={{ rotate: isVisible ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isVisible ? (
            <ChevronDown className="w-6 h-6" />
          ) : (
            <ChevronUp className="w-6 h-6" />
          )}
        </motion.div>
      </motion.button>

      {/* Navigation Panel - Centered */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-40"
          >
            <div className="bg-white/25 dark:bg-gray-800/25 backdrop-blur-xl border border-white/40 dark:border-gray-700/40 rounded-3xl p-3 shadow-2xl">
              {/* Desktop Layout */}
              <div className="hidden md:flex items-center gap-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = currentPage === item.id;
                  
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => onPageChange(item.id)}
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`relative flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 min-w-[180px] group ${
                        isActive
                          ? 'bg-gradient-to-r from-telkom-red to-telkom-brightRed text-white shadow-lg'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-800/50 hover:shadow-lg'
                      }`}
                    >
                      <div className={`p-3 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-white/20 shadow-lg' 
                          : `bg-gradient-to-br ${item.color} text-white group-hover:scale-110`
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="text-left flex-1">
                        <div className="text-sm font-bold">{item.label}</div>
                        <div className="text-xs opacity-80">{item.description}</div>
                      </div>
                      
                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          className="absolute top-1 right-1 w-3 h-3 bg-white rounded-full shadow-lg"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500 }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Mobile Layout */}
              <div className="flex md:hidden items-center gap-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = currentPage === item.id;
                  
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => onPageChange(item.id)}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`relative flex flex-col items-center gap-2 px-6 py-4 rounded-2xl transition-all duration-300 min-w-[90px] min-h-[80px] ${
                        isActive
                          ? 'bg-gradient-to-br from-telkom-red to-telkom-brightRed text-white shadow-lg'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-800/50 hover:shadow-lg'
                      }`}
                    >
                      <div className={`p-2 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-white/20' 
                          : `bg-gradient-to-br ${item.color} text-white`
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="text-xs font-bold text-center leading-tight">
                        {item.label}
                      </div>
                      
                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full shadow-lg"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500 }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationController;