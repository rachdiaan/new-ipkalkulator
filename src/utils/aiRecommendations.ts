import { Course, GPAResult, StudentData, AIRecommendation } from '../types';

export const generateAIRecommendations = async (
  courses: Course[],
  gpaResult: GPAResult,
  studentData: StudentData
): Promise<AIRecommendation[]> => {
  // Simulate AI processing delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const recommendations: AIRecommendation[] = [];
  
  // GPA-based recommendations
  if (gpaResult.gpa < 3.0) {
    recommendations.push({
      type: 'improvement',
      title: 'Focus on Grade Improvement',
      description: 'Your current GPA is below 3.0. Consider retaking courses with low grades and seeking academic support.',
      priority: 'high'
    });
  } else if (gpaResult.gpa < 3.5) {
    recommendations.push({
      type: 'improvement',
      title: 'Aim for Higher Performance',
      description: 'You\'re doing well! Focus on achieving A grades in upcoming courses to reach cum laude status.',
      priority: 'medium'
    });
  }
  
  // Course load recommendations
  const avgCreditsPerSemester = gpaResult.totalCredits / Math.max(1, Math.max(...courses.map(c => c.semester)));
  if (avgCreditsPerSemester < 18) {
    recommendations.push({
      type: 'course',
      title: 'Consider Increasing Course Load',
      description: 'Your average course load is below optimal. Consider taking 18-21 credits per semester for timely graduation.',
      priority: 'medium'
    });
  }
  
  // Grade distribution analysis
  const gradeDistribution = courses.reduce((acc, course) => {
    if (course.grade) acc[course.grade] = (acc[course.grade] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const lowGrades = (gradeDistribution['D'] || 0) + (gradeDistribution['E'] || 0);
  if (lowGrades > 0) {
    recommendations.push({
      type: 'study',
      title: 'Address Failing Grades',
      description: `You have ${lowGrades} course(s) with D or E grades. Consider retaking these courses or seeking academic counseling.`,
      priority: 'high'
    });
  }
  
  // Study strategy recommendations
  if (gpaResult.gpa >= 3.5) {
    recommendations.push({
      type: 'goal',
      title: 'Maintain Excellence',
      description: 'Excellent work! Continue your current study strategies and consider leadership opportunities or research projects.',
      priority: 'low'
    });
  }
  
  // English score recommendations
  const englishReq = { s1: 450, s2: 475, s3: 500 }[studentData.programLevel] || 450;
  if (studentData.englishScore > 0 && studentData.englishScore < englishReq) {
    recommendations.push({
      type: 'improvement',
      title: 'Improve English Proficiency',
      description: `Your English score (${studentData.englishScore}) is below the graduation requirement (${englishReq}). Consider taking English preparation courses.`,
      priority: 'high'
    });
  }
  
  return recommendations;
};