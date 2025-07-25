import React from 'react';
import { motion } from 'framer-motion';
import { Home, Brain, FileText } from 'lucide-react';

interface NavigationControllerProps {
  currentPage: 'home' | 'documentation' | 'ai-analysis';
  onPageChange: (page: 'home' | 'documentation' | 'ai-analysis') => void;
}

const NavigationController: React.FC<NavigationControllerProps> = ({
  currentPage,
  onPageChange
}) => {
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40"
    >
      <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-2xl p-2 shadow-2xl">
        <div className="flex items-center gap-1 md:gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <motion.button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-telkom-red text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-gray-800/50'
                }`}
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
                <div className="text-left hidden sm:block">
                  <div className="text-xs md:text-sm font-medium">{item.label}</div>
                  <div className="text-xs opacity-75 hidden md:block">{item.description}</div>
                </div>
                
                {/* Mobile label */}
                <div className="text-xs font-medium sm:hidden">{item.label}</div>
                
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
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
  );
};

export default NavigationController;