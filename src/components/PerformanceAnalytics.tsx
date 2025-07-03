import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { BarChart3, TrendingUp, PieChart as PieChartIcon } from 'lucide-react';
import { Course } from '../types';

interface PerformanceAnalyticsProps {
  courses: Course[];
}

const PerformanceAnalytics: React.FC<PerformanceAnalyticsProps> = ({ courses }) => {
  const gradeDistribution = courses.reduce((acc, course) => {
    if (course.grade) {
      acc[course.grade] = (acc[course.grade] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  const gradeData = Object.entries(gradeDistribution).map(([grade, count]) => ({
    grade,
    count,
    percentage: ((count / courses.filter(c => c.grade).length) * 100).toFixed(1)
  }));

  const semesterData = courses.reduce((acc, course) => {
    const key = `Sem ${course.semester}`;
    if (!acc[key]) {
      acc[key] = { semester: key, courses: 0, credits: 0 };
    }
    acc[key].courses += 1;
    acc[key].credits += course.credits;
    return acc;
  }, {} as Record<string, any>);

  const semesterArray = Object.values(semesterData);

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#F97316', '#06B6D4'];

  if (courses.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700"
      >
        <div className="flex items-center gap-3 mb-6">
          <BarChart3 className="w-6 h-6 text-blue-500" />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Performance Analytics
          </h2>
        </div>
        
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          <BarChart3 className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <p>Add courses to see performance analytics</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-center gap-3 mb-6">
        <BarChart3 className="w-6 h-6 text-blue-500" />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Performance Analytics
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Grade Distribution */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
            <PieChartIcon className="w-5 h-5" />
            Grade Distribution
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={gradeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ grade, percentage }) => `${grade} (${percentage}%)`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
              >
                {gradeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Semester Progress */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Semester Progress
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={semesterArray}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="semester" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="credits" fill="#3B82F6" name="Credits" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {courses.filter(c => c.grade === 'A').length}
          </div>
          <div className="text-sm text-blue-600 dark:text-blue-400">A Grades</div>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            {Math.max(...courses.map(c => c.semester), 0)}
          </div>
          <div className="text-sm text-green-600 dark:text-green-400">Current Semester</div>
        </div>
        
        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
            {(courses.reduce((sum, c) => sum + c.credits, 0) / courses.length || 0).toFixed(1)}
          </div>
          <div className="text-sm text-yellow-600 dark:text-yellow-400">Avg Credits</div>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            {courses.filter(c => c.grade && !['D', 'E'].includes(c.grade)).length}
          </div>
          <div className="text-sm text-purple-600 dark:text-purple-400">Passed Courses</div>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceAnalytics;