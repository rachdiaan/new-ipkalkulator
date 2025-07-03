import { Course } from '../types';

export const importFromCSV = (file: File): Promise<Partial<Course>[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        const lines = text.split('\n').filter(line => line.trim());
        
        if (lines.length < 2) {
          reject(new Error('Invalid CSV format'));
          return;
        }
        
        const headers = lines[0].split(',').map(h => h.replace(/"/g, '').trim().toLowerCase());
        const courses: Partial<Course>[] = [];
        
        for (let i = 1; i < lines.length; i++) {
          const values = lines[i].split(',').map(v => v.replace(/"/g, '').trim());
          
          if (values.length >= 3) {
            const course: Partial<Course> = {
              name: values[0] || '',
              credits: parseInt(values[1]) || 3,
              grade: values[2] || '',
              semester: parseInt(values[3]) || 1,
              year: parseInt(values[4]) || new Date().getFullYear()
            };
            
            if (course.name) {
              courses.push(course);
            }
          }
        }
        
        resolve(courses);
      } catch (error) {
        reject(error);
      }
    };
    
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsText(file);
  });
};