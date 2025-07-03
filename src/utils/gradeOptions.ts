import { GradePoint, GradingScale } from '../types';

export const getGradeOptions = (scale: GradingScale): GradePoint[] => {
  if (scale === '100') {
    return [
      { grade: 'A', points: 95, percentage: '> 85' },
      { grade: 'AB', points: 80, percentage: '75-85' },
      { grade: 'B', points: 70, percentage: '65-75' },
      { grade: 'BC', points: 62.5, percentage: '60-65' },
      { grade: 'C', points: 55, percentage: '50-60' },
      { grade: 'D', points: 45, percentage: '40-50' },
      { grade: 'E', points: 20, percentage: '≤ 40' }
    ];
  }

  return [
    { grade: 'A', points: 4.0, percentage: '> 85' },
    { grade: 'AB', points: 3.5, percentage: '75-85' },
    { grade: 'B', points: 3.0, percentage: '65-75' },
    { grade: 'BC', points: 2.5, percentage: '60-65' },
    { grade: 'C', points: 2.0, percentage: '50-60' },
    { grade: 'D', points: 1.0, percentage: '40-50' },
    { grade: 'E', points: 0.0, percentage: '≤ 40' }
  ];
};