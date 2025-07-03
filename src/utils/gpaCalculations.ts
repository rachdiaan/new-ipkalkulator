import { Course, GPAResult, GradingScale } from '../types';

const gradePoints: Record<string, number> = {
  'A': 4.0,
  'AB': 3.5,
  'B': 3.0,
  'BC': 2.5,
  'C': 2.0,
  'D': 1.0,
  'E': 0.0
};

const gradePoints100: Record<string, number> = {
  'A': 95,
  'AB': 80,
  'B': 70,
  'BC': 62.5,
  'C': 55,
  'D': 45,
  'E': 20
};

export const calculateGPA = (courses: Course[], scale: GradingScale = '4.0'): GPAResult => {
  const completedCourses = courses.filter(course => course.grade && course.credits > 0);
  
  if (completedCourses.length === 0) {
    return {
      gpa: 0,
      totalCredits: 0,
      totalPoints: 0,
      completedCourses: 0
    };
  }

  const points = scale === '4.0' ? gradePoints : gradePoints100;
  
  let totalPoints = 0;
  let totalCredits = 0;

  completedCourses.forEach(course => {
    const gradePoint = points[course.grade] || 0;
    totalPoints += gradePoint * course.credits;
    totalCredits += course.credits;
  });

  const gpa = totalCredits > 0 ? totalPoints / totalCredits : 0;

  return {
    gpa,
    totalCredits,
    totalPoints,
    completedCourses: completedCourses.length
  };
};

export const getPredicate = (gpa: number, programLevel: string): string => {
  const predicates = {
    s1: [
      { min: 3.91, name: 'Sempurna' },
      { min: 3.51, name: 'Dengan Pujian' },
      { min: 3.01, name: 'Sangat Memuaskan' },
      { min: 2.76, name: 'Memuaskan' }
    ],
    s2: [
      { min: 3.96, name: 'Sempurna' },
      { min: 3.76, name: 'Dengan Pujian' },
      { min: 3.51, name: 'Sangat Memuaskan' },
      { min: 3.26, name: 'Memuaskan' }
    ],
    s3: [
      { min: 3.96, name: 'Sempurna' },
      { min: 3.76, name: 'Dengan Pujian' },
      { min: 3.51, name: 'Sangat Memuaskan' },
      { min: 3.26, name: 'Memuaskan' }
    ]
  };

  const levelPredicates = predicates[programLevel as keyof typeof predicates] || predicates.s1;
  
  for (const predicate of levelPredicates) {
    if (gpa >= predicate.min) {
      return predicate.name;
    }
  }

  return 'Below Minimum Standard';
};

export const calculateSemesterGPA = (courses: Course[], semester: number, year: number): number => {
  const semesterCourses = courses.filter(
    course => course.semester === semester && course.year === year && course.grade
  );
  
  if (semesterCourses.length === 0) return 0;
  
  let totalPoints = 0;
  let totalCredits = 0;
  
  semesterCourses.forEach(course => {
    const gradePoint = gradePoints[course.grade] || 0;
    totalPoints += gradePoint * course.credits;
    totalCredits += course.credits;
  });
  
  return totalCredits > 0 ? totalPoints / totalCredits : 0;
};