import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info, Award, BookOpen } from 'lucide-react';

interface InfoTabsProps {
  programLevel: string;
}

const InfoTabs: React.FC<InfoTabsProps> = ({ programLevel }) => {
  const [activeTab, setActiveTab] = useState('grades');

  const gradeConversion = [
    { grade: 'A', points: '4.0', percentage: '> 85' },
    { grade: 'AB', points: '3.5', percentage: '75-85' },
    { grade: 'B', points: '3.0', percentage: '65-75' },
    { grade: 'BC', points: '2.5', percentage: '60-65' },
    { grade: 'C', points: '2.0', percentage: '50-60' },
    { grade: 'D', points: '1.0', percentage: '40-50' },
    { grade: 'E', points: '0.0', percentage: '≤ 40' },
  ];

  const predicates = {
    s1: [
      { name: 'Sempurna', range: '3.91 – 4.00' },
      { name: 'Dengan Pujian', range: '3.51 – 3.90' },
      { name: 'Sangat Memuaskan', range: '3.01 – 3.50' },
      { name: 'Memuaskan', range: '2.76 – 3.00' },
    ],
    s2: [
      { name: 'Sempurna', range: '3.96 – 4.00' },
      { name: 'Dengan Pujian', range: '3.76 – 3.95' },
      { name: 'Sangat Memuaskan', range: '3.51 – 3.75' },
      { name: 'Memuaskan', range: '3.26 – 3.50' },
    ],
    s3: [
      { name: 'Sempurna', range: '3.96 – 4.00' },
      { name: 'Dengan Pujian', range: '3.76 – 3.95' },
      { name: 'Sangat Memuaskan', range: '3.51 – 3.75' },
      { name: 'Memuaskan', range: '3.26 – 3.50' },
    ],
  };

  const studyLoad = [
    { program: 'S1 / S1 Applied', duration: '8 smt', credits: '144-160 SKS' },
    { program: 'Diploma Three (D3)', duration: '6 smt', credits: '108-120 SKS' },
    { program: 'Master (S2)', duration: '4 smt', credits: '54-72 SKS' },
    { program: 'Doctorate (S3)', duration: '6 smt', credits: '90-108 SKS' },
  ];

  const tabs = [
    { id: 'grades', label: 'Konversi', icon: BookOpen },
    { id: 'predicates', label: 'Predikat', icon: Award },
    { id: 'study', label: 'Beban Studi', icon: Info },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card rounded-3xl p-6 border border-white/20 backdrop-blur-xl shadow-2xl"
    >
      <div className="flex items-center gap-3 mb-6">
        <Info className="w-5 h-5 text-blue-500" />
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          Informasi Akademik
        </h2>
      </div>

      <div className="flex space-x-1 mb-6 bg-gray-100/50 dark:bg-gray-700/50 rounded-xl p-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
              }`}
            >
              <Icon className="w-3 h-3" />
              {tab.label}
            </button>
          );
        })}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {activeTab === 'grades' && (
          <div className="grid grid-cols-7 gap-2">
            {gradeConversion.map((item) => (
              <div
                key={item.grade}
                className="text-center p-2 bg-gray-50/50 dark:bg-gray-700/50 rounded-lg"
              >
                <div className="font-bold text-sm text-gray-800 dark:text-white">
                  {item.grade}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {item.percentage}%
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'predicates' && (
          <div className="space-y-2">
            {predicates[programLevel as keyof typeof predicates]?.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between p-2 bg-gray-50/50 dark:bg-gray-700/50 rounded-lg"
              >
                <span className="font-medium text-sm text-gray-800 dark:text-white">
                  {item.name}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {item.range}
                </span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'study' && (
          <div className="space-y-2">
            {studyLoad.map((item) => (
              <div
                key={item.program}
                className="p-3 bg-gray-50/50 dark:bg-gray-700/50 rounded-lg"
              >
                <div className="font-medium text-sm text-gray-800 dark:text-white mb-1">
                  {item.program}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {item.duration} • {item.credits}
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default InfoTabs;