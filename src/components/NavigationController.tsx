import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Brain, FileText, ChevronUp } from 'lucide-react';

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
      icon: Home,
      color: 'from-blue-400 to-blue-500'
    },
    {
      id: 'ai-analysis' as const,
      icon: Brain,
      color: 'from-purple-400 to-purple-500'
    },
    {
      id: 'documentation' as const,
      icon: FileText,
      color: 'from-green-400 to-green-500'
    }
  ];

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-12 h-12 bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-full shadow-2xl text-gray-700 dark:text-gray-300 hover:text-telkom-red dark:hover:text-telkom-brightRed transition-all duration-300"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 300 }}
      >
        <motion.div
          animate={{ rotate: isVisible ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex items-center justify-center w-full h-full"
        >
          <ChevronUp className="w-5 h-5" />
        </motion.div>
      </motion.button>

      {/* Navigation Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-40"
          >
            <motion.div 
              className="bg-white/15 dark:bg-gray-800/15 backdrop-blur-2xl border border-white/20 dark:border-gray-700/20 rounded-2xl p-2 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-1">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = currentPage === item.id;
                  
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => onPageChange(item.id)}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 400,
                        damping: 25
                      }}
                      className={`relative w-12 h-12 rounded-xl transition-all duration-300 flex items-center justify-center group ${
                        isActive
                          ? 'bg-gradient-to-br from-telkom-red to-telkom-brightRed text-white shadow-lg'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-white/30 dark:hover:bg-gray-800/30'
                      }`}
                    >
                      <motion.div
                        animate={isActive ? { scale: [1, 1.2, 1] } : {}}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.div>
                      
                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full shadow-lg"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, delay: 0.1 }}
                        />
                      )}

                      {/* Hover glow effect */}
                      <motion.div
                        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                        whileHover={{ scale: 1.1 }}
                      />
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationController;