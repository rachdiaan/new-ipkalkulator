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
      description: 'Kalkulator IPK'
    },
    {
      id: 'ai-analysis' as const,
      label: 'Analisis AI',
      icon: Brain,
      description: 'Rekomendasi Cerdas'
    },
    {
      id: 'documentation' as const,
      label: 'Dokumentasi',
      icon: FileText,
      description: 'Panduan Lengkap'
    }
  ];

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-6 right-6 z-50 p-3 bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-full shadow-2xl text-gray-600 dark:text-gray-400 hover:text-telkom-red dark:hover:text-telkom-brightRed transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5 }}
      >
        {isVisible ? (
          <ChevronDown className="w-5 h-5" />
        ) : (
          <ChevronUp className="w-5 h-5" />
        )}
      </motion.button>

      {/* Navigation Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-20 right-6 z-40"
          >
            <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-2xl p-3 shadow-2xl">
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = currentPage === item.id;
                  
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => onPageChange(item.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 min-w-[200px] ${
                        isActive
                          ? 'bg-telkom-red text-white shadow-lg'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-gray-800/50'
                      }`}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <div className="text-left flex-1">
                        <div className="text-sm font-medium">{item.label}</div>
                        <div className="text-xs opacity-75">{item.description}</div>
                      </div>
                      
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute inset-0 bg-telkom-red rounded-xl -z-10"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
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

      {/* Mobile Navigation (Bottom) */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 sm:hidden"
          >
            <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-2xl p-2 shadow-2xl">
              <div className="flex items-center gap-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentPage === item.id;
                  
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => onPageChange(item.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-300 ${
                        isActive
                          ? 'bg-telkom-red text-white shadow-lg'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-gray-800/50'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <div className="text-xs font-medium">{item.label}</div>
                      
                      {isActive && (
                        <motion.div
                          layoutId="activeMobileIndicator"
                          className="absolute inset-0 bg-telkom-red rounded-xl -z-10"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
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