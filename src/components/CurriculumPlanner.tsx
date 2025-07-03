import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Calendar, Plus, Search, ChevronDown, Building, GraduationCap } from 'lucide-react';
import { StudentData, CurriculumCourse } from '../types';
import toast from 'react-hot-toast';

interface CurriculumPlannerProps {
  curriculumData: any;
  studentData: StudentData;
  addCourse: (course?: Partial<any>) => void;
}

const CurriculumPlanner: React.FC<CurriculumPlannerProps> = ({
  curriculumData,
  studentData,
  addCourse
}) => {
  const [selectedSemester, setSelectedSemester] = useState(1);
  const [selectedConcentration, setSelectedConcentration] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const getCurrentCurriculum = () => {
    const level = studentData.programLevel;
    const major = studentData.major;
    
    if (!level || !major || !curriculumData[level] || !curriculumData[level][major]) {
      return {};
    }
    
    return curriculumData[level][major] || {};
  };

  const getAvailableConcentrations = () => {
    const curriculum = getCurrentCurriculum();
    return Object.keys(curriculum);
  };

  const getCurrentConcentration = () => {
    const concentrations = getAvailableConcentrations();
    if (concentrations.length === 0) return '';
    
    if (selectedConcentration && concentrations.includes(selectedConcentration)) {
      return selectedConcentration;
    }
    
    return concentrations[0];
  };

  const curriculum = getCurrentCurriculum();
  const currentConcentration = getCurrentConcentration();
  const semesterCourses = curriculum[currentConcentration]?.[`Semester ${selectedSemester}`] || [];

  const filteredCourses = semesterCourses.filter((course: CurriculumCourse) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddCourse = (course: CurriculumCourse) => {
    addCourse({
      name: course.name,
      credits: course.sks,
      semester: selectedSemester,
      year: new Date().getFullYear()
    });
    toast.success(`Mata kuliah "${course.name}" berhasil ditambahkan!`);
  };

  const totalSKS = semesterCourses.reduce((sum: number, course: CurriculumCourse) => sum + course.sks, 0);

  // Don't show the planner if no major is selected
  if (!studentData.major) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card rounded-3xl p-8 border border-white/20 backdrop-blur-xl shadow-2xl"
      >
        <div className="text-center py-12">
          <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-400 opacity-50" />
          <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
            Perencanaan Kurikulum
          </h3>
          <p className="text-gray-500 dark:text-gray-500">
            Pilih fakultas dan program studi terlebih dahulu untuk mengakses perencanaan kurikulum
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card rounded-3xl p-8 border border-white/20 backdrop-blur-xl shadow-2xl"
    >
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="p-3 bg-gradient-to-br from-telkom-red to-telkom-brightRed rounded-2xl shadow-lg"
          >
            <Calendar className="w-6 h-6 text-white" />
          </motion.div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Perencanaan Kurikulum
            </h2>
            <div className="flex items-center gap-2 text-sm text-telkom-gray dark:text-gray-400 mt-1">
              <Building className="w-4 h-4" />
              <span>{studentData.faculty}</span>
              <span>•</span>
              <GraduationCap className="w-4 h-4" />
              <span>{studentData.major}</span>
            </div>
          </div>
        </div>
        
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 bg-telkom-red/10 text-telkom-red rounded-xl hover:bg-telkom-red/20 transition-all duration-200 font-medium"
        >
          {isExpanded ? 'Tutup' : 'Buka'}
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Controls */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-telkom-gray dark:text-gray-300 mb-3">
                  Konsentrasi/Jalur
                </label>
                <select
                  value={selectedConcentration}
                  onChange={(e) => setSelectedConcentration(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-telkom-red focus:border-transparent transition-all duration-200"
                >
                  {getAvailableConcentrations().map(concentration => (
                    <option key={concentration} value={concentration}>{concentration}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-telkom-gray dark:text-gray-300 mb-3">
                  Pilih Semester
                </label>
                <select
                  value={selectedSemester}
                  onChange={(e) => setSelectedSemester(parseInt(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-telkom-red focus:border-transparent transition-all duration-200"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                    <option key={sem} value={sem}>Semester {sem}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-telkom-gray dark:text-gray-300 mb-3">
                  Cari Mata Kuliah
                </label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Cari mata kuliah..."
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-telkom-red focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            {/* Semester Info */}
            <motion.div 
              className="bg-gradient-to-r from-telkom-red/5 to-telkom-brightRed/5 dark:from-telkom-red/10 dark:to-telkom-brightRed/10 rounded-2xl p-6 border border-telkom-red/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-telkom-red mb-1">
                    Semester {selectedSemester} - {currentConcentration}
                  </h3>
                  <p className="text-telkom-gray dark:text-gray-300">
                    Total SKS: <span className="font-bold text-telkom-red">{totalSKS}</span> • 
                    {' '}{semesterCourses.length} mata kuliah
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-telkom-red">{totalSKS}</div>
                  <div className="text-xs text-telkom-gray dark:text-gray-400">SKS</div>
                </div>
              </div>
            </motion.div>

            {/* Course List */}
            <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
              <AnimatePresence>
                {filteredCourses.map((course: CurriculumCourse, index: number) => (
                  <motion.div
                    key={course.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.05 }}
                    className="group flex items-center justify-between p-5 bg-white/30 dark:bg-gray-800/30 rounded-2xl border border-white/20 dark:border-gray-700/20 backdrop-blur-sm hover:bg-white/40 dark:hover:bg-gray-800/40 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-telkom-red/10 rounded-xl group-hover:bg-telkom-red/20 transition-colors duration-200">
                        <BookOpen className="w-5 h-5 text-telkom-red" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                          {course.name}
                        </h3>
                        <p className="text-sm text-telkom-gray dark:text-gray-400">
                          {course.sks} SKS
                        </p>
                      </div>
                    </div>
                    
                    <motion.button
                      onClick={() => handleAddCourse(course)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-telkom-red text-white rounded-xl hover:bg-telkom-brightRed transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <Plus className="w-5 h-5" />
                    </motion.button>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {filteredCourses.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-400 opacity-50" />
                  <p className="text-telkom-gray dark:text-gray-400 text-lg">
                    Tidak ada mata kuliah yang ditemukan
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                    Coba ubah semester atau kata kunci pencarian
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CurriculumPlanner;