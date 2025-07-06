import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Upload, Download, Trash2, BookOpen, Settings } from 'lucide-react';
import { Course, StudentData, GradingScale } from '../types';
import CourseCard from './CourseCard';
import { exportToCSV, exportToPDF, exportToExcel } from '../utils/exportUtils';
import { importFromCSV } from '../utils/importUtils';
import toast from 'react-hot-toast';

interface CourseManagerProps {
  courses: Course[];
  addCourse: (course?: Partial<Course>) => void;
  updateCourse: (id: string, updates: Partial<Course>) => void;
  removeCourse: (id: string) => void;
  clearAllCourses: () => void;
  gradingScale: GradingScale;
  setGradingScale: (scale: GradingScale) => void;
  curriculumData: any;
  studentData: StudentData;
}

const CourseManager: React.FC<CourseManagerProps> = ({
  courses,
  addCourse,
  updateCourse,
  removeCourse,
  clearAllCourses,
  gradingScale,
  setGradingScale,
  curriculumData,
  studentData
}) => {
  const [showSettings, setShowSettings] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const importedCourses = await importFromCSV(file);
      importedCourses.forEach(course => addCourse(course));
      toast.success(`Berhasil mengimpor ${importedCourses.length} mata kuliah!`);
    } catch (error) {
      toast.error('Gagal mengimpor mata kuliah. Periksa format file.');
    }
    
    event.target.value = '';
  };

  const handleExport = (format: 'csv' | 'pdf' | 'excel') => {
    try {
      switch (format) {
        case 'csv':
          exportToCSV(courses, studentData);
          break;
        case 'pdf':
          exportToPDF(courses, studentData);
          break;
        case 'excel':
          exportToExcel(courses, studentData);
          break;
      }
      toast.success(`Berhasil mengekspor ke ${format.toUpperCase()}!`);
    } catch (error) {
      toast.error(`Gagal mengekspor ke ${format.toUpperCase()}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card rounded-3xl p-6 lg:p-8 border border-white/20 backdrop-blur-xl shadow-2xl"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="p-3 bg-gradient-to-br from-telkom-red to-telkom-brightRed rounded-2xl shadow-lg"
          >
            <BookOpen className="w-6 h-6 text-white" />
          </motion.div>
          <div>
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-white">
              Manajemen Mata Kuliah
            </h2>
            <p className="text-sm text-telkom-gray dark:text-gray-400">
              Kelola mata kuliah dan nilai akademik Anda
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-2 text-gray-500 hover:text-telkom-red dark:text-gray-400 dark:hover:text-telkom-brightRed transition-colors"
          >
            <Settings className="w-5 h-5" />
          </button>
          
          <div className="flex flex-wrap gap-2">
            <label className="btn-secondary cursor-pointer text-xs lg:text-sm">
              <Upload className="w-4 h-4" />
              <span className="hidden sm:inline">Impor CSV</span>
              <input
                type="file"
                accept=".csv"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
            
            <div className="relative group">
              <button className="btn-secondary text-xs lg:text-sm">
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Ekspor</span>
              </button>
              <div className="absolute right-0 top-full mt-2 w-32 bg-white dark:bg-gray-700 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <button
                  onClick={() => handleExport('csv')}
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-t-lg"
                >
                  CSV
                </button>
                <button
                  onClick={() => handleExport('excel')}
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  Excel
                </button>
                <button
                  onClick={() => handleExport('pdf')}
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-b-lg"
                >
                  PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-6 p-4 bg-red-50 dark:bg-gray-700 rounded-lg"
          >
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-telkom-gray dark:text-gray-300">
                Skala Penilaian
              </label>
              <select
                value={gradingScale}
                onChange={(e) => setGradingScale(e.target.value as GradingScale)}
                className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-telkom-red"
              >
                <option value="4.0">Skala 4.0</option>
                <option value="100">Skala 100</option>
              </select>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6">
        <AnimatePresence>
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                transition: { 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.8, 
                y: -20,
                transition: { duration: 0.2 }
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CourseCard
                course={course}
                updateCourse={updateCourse}
                removeCourse={removeCourse}
                gradingScale={gradingScale}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <motion.button
          onClick={() => addCourse()}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary flex-1"
        >
          <Plus className="w-4 h-4" />
          Tambah Mata Kuliah
        </motion.button>
        
        {courses.length > 0 && (
          <motion.button
            onClick={clearAllCourses}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-danger"
          >
            <Trash2 className="w-4 h-4" />
            <span className="hidden sm:inline">Hapus Semua</span>
            <span className="sm:hidden">Hapus</span>
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default CourseManager;