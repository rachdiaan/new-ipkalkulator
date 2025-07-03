import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import { Course, StudentData } from '../types';

export const exportToCSV = (courses: Course[], studentData: StudentData) => {
  const headers = ['Course Name', 'Credits', 'Grade', 'Semester', 'Year'];
  const csvContent = [
    headers.join(','),
    ...courses.map(course => [
      `"${course.name}"`,
      course.credits,
      course.grade,
      course.semester,
      course.year
    ].join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${studentData.name || 'student'}_courses.csv`;
  link.click();
  window.URL.revokeObjectURL(url);
};

export const exportToPDF = (courses: Course[], studentData: StudentData) => {
  const doc = new jsPDF();
  
  // Header
  doc.setFontSize(20);
  doc.text('Academic Transcript', 20, 30);
  
  doc.setFontSize(12);
  doc.text(`Student: ${studentData.name || 'N/A'}`, 20, 50);
  doc.text(`NIM: ${studentData.nim || 'N/A'}`, 20, 60);
  doc.text(`Program: ${studentData.programLevel.toUpperCase()}`, 20, 70);
  
  // Table headers
  let y = 90;
  doc.setFontSize(10);
  doc.text('Course Name', 20, y);
  doc.text('Credits', 120, y);
  doc.text('Grade', 150, y);
  doc.text('Semester', 170, y);
  
  // Table content
  courses.forEach((course, index) => {
    y += 10;
    if (y > 270) {
      doc.addPage();
      y = 30;
    }
    
    doc.text(course.name.substring(0, 40), 20, y);
    doc.text(course.credits.toString(), 120, y);
    doc.text(course.grade || '-', 150, y);
    doc.text(course.semester.toString(), 170, y);
  });
  
  doc.save(`${studentData.name || 'student'}_transcript.pdf`);
};

export const exportToExcel = (courses: Course[], studentData: StudentData) => {
  const worksheet = XLSX.utils.json_to_sheet(courses.map(course => ({
    'Course Name': course.name,
    'Credits': course.credits,
    'Grade': course.grade,
    'Semester': course.semester,
    'Year': course.year
  })));
  
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Courses');
  
  XLSX.writeFile(workbook, `${studentData.name || 'student'}_courses.xlsx`);
};