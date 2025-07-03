import React from 'react';
import { motion } from 'framer-motion';
import { X, BookOpen } from 'lucide-react';
import { Course, GradingScale } from '../types';
import { getGradeOptions } from '../utils/gradeOptions';

interface CourseCardProps {
  course: Course;
  updateCourse: (id: string, updates: Partial<Course>) => void;
  removeCourse: (id: string) => void;
  gradingScale: GradingScale;
}

const CourseCard: React.FC<CourseCardProps> = ({
  course,
  updateCourse,
  removeCourse,
  gradingScale
}) => {
  const gradeOptions = getGradeOptions(gradingScale);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-red-50 dark:bg-gray-700 rounded-xl p-6 border border-red-100 dark:border-gray-600 hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-telkom-red" />
          <input
            type="text"
            value={course.name}
            onChange={(e) => updateCourse(course.id, { name: e.target.value })}
            placeholder="Nama Mata Kuliah"
            className="text-lg font-medium bg-transparent border-none outline-none text-gray-800 dark:text-white placeholder-gray-400 flex-1"
          />
        </div>
        
        <button
          onClick={() => removeCourse(course.id)}
          className="p-1 text-gray-400 hover:text-telkom-red transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-xs font-medium text-telkom-gray dark:text-gray-400 mb-1">
            SKS
          </label>
          <input
            type="number"
            min="1"
            max="10"
            value={course.credits}
            onChange={(e) => updateCourse(course.id, { credits: parseInt(e.target.value) || 1 })}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-telkom-red focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-telkom-gray dark:text-gray-400 mb-1">
            Nilai
          </label>
          <select
            value={course.grade}
            onChange={(e) => updateCourse(course.id, { grade: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-telkom-red focus:border-transparent"
          >
            <option value="">Pilih Nilai</option>
            {gradeOptions.map((option) => (
              <option key={option.grade} value={option.grade}>
                {option.grade} ({option.percentage})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-telkom-gray dark:text-gray-400 mb-1">
            Semester
          </label>
          <input
            type="number"
            min="1"
            max="8"
            value={course.semester}
            onChange={(e) => updateCourse(course.id, { semester: parseInt(e.target.value) || 1 })}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-telkom-red focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-telkom-gray dark:text-gray-400 mb-1">
            Tahun
          </label>
          <input
            type="number"
            min="2020"
            max="2030"
            value={course.year}
            onChange={(e) => updateCourse(course.id, { year: parseInt(e.target.value) || new Date().getFullYear() })}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-telkom-red focus:border-transparent"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;