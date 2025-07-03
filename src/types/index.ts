export interface Course {
  id: string;
  name: string;
  credits: number;
  grade: string;
  semester: number;
  year: number;
  category?: string;
}

export interface StudentData {
  name: string;
  nim: string;
  programLevel: 's1' | 's2' | 's3';
  englishScore: number;
  faculty: string;
  major: string;
}

export interface GPAResult {
  gpa: number;
  totalCredits: number;
  totalPoints: number;
  completedCourses: number;
}

export type GradingScale = '4.0' | '100';

export interface GradePoint {
  grade: string;
  points: number;
  percentage: string;
}

export interface CurriculumCourse {
  name: string;
  sks: number;
}

export interface AIRecommendation {
  type: 'improvement' | 'course' | 'study' | 'goal';
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}