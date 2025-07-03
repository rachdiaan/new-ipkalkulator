import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Lightbulb, Target, TrendingUp, MessageCircle } from 'lucide-react';
import { Course, GPAResult, StudentData, AIRecommendation } from '../types';
import { generateAIRecommendations } from '../utils/aiRecommendations';

interface AIAssistantProps {
  courses: Course[];
  gpaResult: GPAResult;
  studentData: StudentData;
}

const AIAssistant: React.FC<AIAssistantProps> = ({
  courses,
  gpaResult,
  studentData
}) => {
  const [recommendations, setRecommendations] = useState<AIRecommendation[]>([]);
  const [loading, setLoading] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const getRecommendations = async () => {
    setLoading(true);
    try {
      const recs = await generateAIRecommendations(courses, gpaResult, studentData);
      setRecommendations(recs);
    } catch (error) {
      console.error('Failed to generate recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500 bg-red-50 dark:bg-red-900/20';
      case 'medium': return 'text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20';
      case 'low': return 'text-green-500 bg-green-50 dark:bg-green-900/20';
      default: return 'text-gray-500 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'improvement': return <TrendingUp className="w-5 h-5" />;
      case 'course': return <Target className="w-5 h-5" />;
      case 'study': return <Lightbulb className="w-5 h-5" />;
      case 'goal': return <Target className="w-5 h-5" />;
      default: return <Brain className="w-5 h-5" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Brain className="w-6 h-6 text-purple-500" />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            AI Assistant
          </h2>
        </div>
        
        <button
          onClick={() => setShowChat(!showChat)}
          className="p-2 text-gray-500 hover:text-purple-500 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4">
        <button
          onClick={getRecommendations}
          disabled={loading || courses.length === 0}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Analyzing...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              Get AI Recommendations
            </div>
          )}
        </button>

        <AnimatePresence>
          {recommendations.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-3"
            >
              {recommendations.map((rec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-lg border ${getPriorityColor(rec.priority)}`}
                >
                  <div className="flex items-start gap-3">
                    {getTypeIcon(rec.type)}
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                        {rec.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {rec.description}
                      </p>
                      <span className={`inline-block mt-2 px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(rec.priority)}`}>
                        {rec.priority.toUpperCase()} PRIORITY
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {courses.length === 0 && (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            <Brain className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p>Add some courses to get personalized AI recommendations</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AIAssistant;