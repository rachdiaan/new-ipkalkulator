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
      icon: Home,
      description: 'Kalkulator IPK'
    },
    {
      id: 'ai-analysis' as const,
      icon: Brain,
      description: 'Rekomendasi Cerdas'
    },
    {
      id: 'documentation' as const,
      icon: FileText,
      description: 'Panduan Lengkap'
    }
  ];

  return (
    <>
      {/* Toggle Button - Bottom Center */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 p-4 bg-white/25 dark:bg-gray-800/25 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-full shadow-2xl text-gray-600 dark:text-gray-400 hover:text-telkom-red dark:hover:text-telkom-brightRed transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5 }}
      >
        {isVisible ? (
          <ChevronDown className="w-6 h-6" />
        ) : (
          <ChevronUp className="w-6 h-6" />
        )}
      </motion.button>

      {/* Navigation Panel - Bottom Center */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-40"
          >
            <div className="bg-white/25 dark:bg-gray-800/25 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-3xl p-4 shadow-2xl">
              {/* Desktop Layout */}
              <div className="hidden sm:flex items-center gap-3">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = currentPage === item.id;
                  
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => onPageChange(item.id)}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`relative flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 min-w-[200px] group ${
                        isActive
                          ? 'bg-telkom-red text-white shadow-lg'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-800/50'
                      }`}
                    >
                      <div className={`p-2 rounded-xl ${isActive ? 'bg-white/20' : 'bg-telkom-red/10 group-hover:bg-telkom-red/20'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="text-left flex-1">
                        <div className="text-sm font-semibold">{item.label}</div>
                        <div className="text-xs opacity-75">{item.description}</div>
                      </div>
                      
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute inset-0 bg-telkom-red rounded-2xl -z-10"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Mobile Layout - Icon Only with Flexible Arrangement */}
              <div className="flex sm:hidden items-center justify-center gap-4">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = currentPage === item.id;
                  
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => onPageChange(item.id)}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1, 
                        rotate: 0,
                        transition: { 
                          delay: index * 0.15,
                          type: "spring",
                          stiffness: 200,
                          damping: 15
                        }
                      }}
                      className={`relative p-4 rounded-2xl transition-all duration-300 ${
                        isActive
                          ? 'bg-telkom-red text-white shadow-lg shadow-telkom-red/30'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-gray-800/50 hover:text-telkom-red dark:hover:text-telkom-brightRed'
                      }`}
                      title={item.label}
                    >
                      <Icon className="w-6 h-6" />
                      
                      {isActive && (
                        <motion.div
                          layoutId="activeMobileIndicator"
                          className="absolute inset-0 bg-telkom-red rounded-2xl -z-10"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                      
                      {/* Active indicator dot */}
                      {isActive && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full shadow-lg"
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