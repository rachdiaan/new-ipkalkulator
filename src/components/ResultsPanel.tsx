import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, TrendingUp, Award, Target } from 'lucide-react';
import { GPAResult, StudentData, Course } from '../types';

interface ResultsPanelProps {
  gpaResult: GPAResult;
  predicate: string;
  studentData: StudentData;
  courses: Course[];
}

const ResultsPanel: React.FC<ResultsPanelProps> = ({
  gpaResult,
  predicate,
  studentData,
  courses
}) => {
  const getGPAColor = (gpa: number) => {
    if (gpa >= 3.5) return 'text-green-500';
    if (gpa >= 3.0) return 'text-telkom-red';
    if (gpa >= 2.5) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getPredicateIcon = (predicate: string) => {
    if (predicate.includes('Sempurna')) return <Trophy className="w-6 h-6 text-yellow-500" />;
    if (predicate.includes('Pujian')) return <Award className="w-6 h-6 text-purple-500" />;
    if (predicate.includes('Sangat')) return <TrendingUp className="w-6 h-6 text-telkom-red" />;
    return <Target className="w-6 h-6 text-gray-500" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-telkom p-8 border border-red-100 dark:border-gray-700"
    >
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Hasil Perhitungan IPK
      </h2>

      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className={`text-6xl font-bold mb-2 ${getGPAColor(gpaResult.gpa)}`}
        >
          {gpaResult.gpa.toFixed(2)}
        </motion.div>
        
        <div className="flex items-center justify-center gap-2 mb-2">
          {getPredicateIcon(predicate)}
          <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            {predicate}
          </span>
        </div>
        
        <p className="text-sm text-telkom-gray dark:text-gray-400">
          Berdasarkan {gpaResult.totalCredits} SKS dari {gpaResult.completedCourses} mata kuliah
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
          <div className="text-2xl font-bold text-telkom-red dark:text-telkom-brightRed">
            {gpaResult.totalCredits}
          </div>
          <div className="text-sm text-telkom-red dark:text-telkom-brightRed">
            Total SKS
          </div>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            {gpaResult.completedCourses}
          </div>
          <div className="text-sm text-green-600 dark:text-green-400">
            Mata Kuliah Selesai
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-red-50 dark:bg-gray-700 rounded-lg">
        <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
          Statistik Cepat
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-telkom-gray dark:text-gray-400">Rata-rata SKS per Mata Kuliah:</span>
            <span className="font-medium text-gray-800 dark:text-white">
              {gpaResult.completedCourses > 0 ? (gpaResult.totalCredits / gpaResult.completedCourses).toFixed(1) : '0'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-telkom-gray dark:text-gray-400">Total Poin Nilai:</span>
            <span className="font-medium text-gray-800 dark:text-white">
              {gpaResult.totalPoints.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ResultsPanel;