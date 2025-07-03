import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import StudentInfo from './components/StudentInfo';
import CourseManager from './components/CourseManager';
import ResultsPanel from './components/ResultsPanel';
import InfoTabs from './components/InfoTabs';
import ThemeToggle from './components/ThemeToggle';
import AIAssistant from './components/AIAssistant';
import PerformanceAnalytics from './components/PerformanceAnalytics';
import CurriculumPlanner from './components/CurriculumPlanner';
import { Course, StudentData, GradingScale } from './types';
import { calculateGPA, getPredicate } from './utils/gpaCalculations';
import { loadCurriculumData } from './utils/curriculumLoader';
import './styles/animations.css';

function App() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [studentData, setStudentData] = useState<StudentData>({
    name: '',
    nim: '',
    programLevel: 's1',
    englishScore: 0,
    faculty: '',
    major: ''
  });
  const [gradingScale, setGradingScale] = useState<GradingScale>('4.0');
  const [darkMode, setDarkMode] = useState(false);
  const [curriculumData, setCurriculumData] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        const data = await loadCurriculumData();
        setCurriculumData(data);
      } catch (error) {
        console.error('Failed to load curriculum data:', error);
      } finally {
        setLoading(false);
      }
    };

    initializeApp();
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const gpaResult = calculateGPA(courses, gradingScale);
  const predicate = getPredicate(gpaResult.gpa, studentData.programLevel);

  const addCourse = (course?: Partial<Course>) => {
    const newCourse: Course = {
      id: Date.now().toString(),
      name: course?.name || '',
      credits: course?.credits || 3,
      grade: course?.grade || '',
      semester: course?.semester || 1,
      year: course?.year || new Date().getFullYear()
    };
    setCourses(prev => [...prev, newCourse]);
  };

  const updateCourse = (id: string, updates: Partial<Course>) => {
    setCourses(prev => prev.map(course => 
      course.id === id ? { ...course, ...updates } : course
    ));
  };

  const removeCourse = (id: string) => {
    setCourses(prev => prev.filter(course => course.id !== id));
  };

  const clearAllCourses = () => {
    setCourses([]);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="relative">
            <div className="w-20 h-20 border-4 border-telkom-red/20 border-t-telkom-red rounded-full animate-spin mx-auto mb-6"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-telkom-brightRed/30 border-b-telkom-brightRed rounded-full animate-spin mx-auto mt-2 ml-2" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-telkom-gray dark:text-gray-300 font-medium"
          >
            Memuat Kalkulator Akademik...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-telkom-red/10 to-telkom-brightRed/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-l from-telkom-red/5 to-telkom-brightRed/5 rounded-full blur-2xl"
        />
      </div>

      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: darkMode ? '#374151' : '#ffffff',
            color: darkMode ? '#f3f4f6' : '#1f2937',
            borderRadius: '12px',
            border: '1px solid rgba(182, 37, 42, 0.1)',
            boxShadow: '0 10px 30px rgba(182, 37, 42, 0.1)',
          },
        }}
      />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Header />
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Left Column - Input Forms */}
          <div className="xl:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <StudentInfo 
                studentData={studentData}
                setStudentData={setStudentData}
                curriculumData={curriculumData}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <CurriculumPlanner
                curriculumData={curriculumData}
                studentData={studentData}
                addCourse={addCourse}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <CourseManager
                courses={courses}
                addCourse={addCourse}
                updateCourse={updateCourse}
                removeCourse={removeCourse}
                clearAllCourses={clearAllCourses}
                gradingScale={gradingScale}
                setGradingScale={setGradingScale}
                curriculumData={curriculumData}
                studentData={studentData}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <PerformanceAnalytics courses={courses} />
            </motion.div>
          </div>

          {/* Right Column - Results and Info */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ResultsPanel
                gpaResult={gpaResult}
                predicate={predicate}
                studentData={studentData}
                courses={courses}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <AIAssistant 
                courses={courses}
                gpaResult={gpaResult}
                studentData={studentData}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <InfoTabs programLevel={studentData.programLevel} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Theme Toggle */}
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;