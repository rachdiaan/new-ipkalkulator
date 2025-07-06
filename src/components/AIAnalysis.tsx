import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  TrendingUp, 
  Target, 
  BookOpen, 
  Award, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  Lightbulb,
  BarChart3
} from 'lucide-react';
import { Course, GPAResult, StudentData } from '../types';

interface AIAnalysisProps {
  courses: Course[];
  gpaResult: GPAResult;
  studentData: StudentData;
}

interface CourseRecommendation {
  courseName: string;
  currentGrade: string;
  targetGrade: string;
  recommendations: string[];
  priority: 'high' | 'medium' | 'low';
  impactOnGPA: number;
}

interface StudyPlan {
  week: number;
  focus: string;
  activities: string[];
  resources: string[];
}

const AIAnalysis: React.FC<AIAnalysisProps> = ({
  courses,
  gpaResult,
  studentData
}) => {
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<{
    courseRecommendations: CourseRecommendation[];
    studyPlan: StudyPlan[];
    overallStrategy: string[];
    potentialGPA: number;
  } | null>(null);

  const generateAnalysis = async () => {
    setLoading(true);
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const nonACourses = courses.filter(course => 
      course.grade && !['A'].includes(course.grade)
    );

    const courseRecommendations: CourseRecommendation[] = nonACourses.map(course => {
      const recommendations = generateCourseRecommendations(course);
      const priority = getPriority(course.grade);
      const impactOnGPA = calculateGPAImpact(course, courses);
      
      return {
        courseName: course.name,
        currentGrade: course.grade,
        targetGrade: 'A',
        recommendations,
        priority,
        impactOnGPA
      };
    });

    const studyPlan = generateStudyPlan(courseRecommendations);
    const overallStrategy = generateOverallStrategy(gpaResult, studentData);
    const potentialGPA = calculatePotentialGPA(courses);

    setAnalysis({
      courseRecommendations,
      studyPlan,
      overallStrategy,
      potentialGPA
    });
    
    setLoading(false);
  };

  const generateCourseRecommendations = (course: Course): string[] => {
    const baseRecommendations = [
      'Buat jadwal belajar rutin untuk mata kuliah ini',
      'Bergabung dengan study group atau diskusi kelompok',
      'Konsultasi dengan dosen pengampu secara berkala',
      'Manfaatkan jam konsultasi dan office hours',
      'Buat catatan ringkasan setiap selesai kuliah'
    ];

    const gradeSpecificRecommendations: Record<string, string[]> = {
      'AB': [
        'Fokus pada detail dan ketelitian dalam mengerjakan tugas',
        'Tingkatkan partisipasi aktif dalam kelas',
        'Pelajari materi tambahan dari sumber referensi lain'
      ],
      'B': [
        'Identifikasi kelemahan dalam pemahaman konsep',
        'Latihan soal-soal tambahan secara intensif',
        'Minta feedback detail dari dosen tentang kekurangan',
        'Buat mind map untuk memahami hubungan antar konsep'
      ],
      'BC': [
        'Mulai dari dasar, pastikan konsep fundamental dipahami',
        'Alokasikan waktu belajar lebih banyak untuk mata kuliah ini',
        'Cari tutor atau mentor yang bisa membantu',
        'Ikuti kelas remedial jika tersedia'
      ],
      'C': [
        'Evaluasi metode belajar yang selama ini digunakan',
        'Konsultasi dengan academic advisor',
        'Pertimbangkan untuk mengulang mata kuliah',
        'Fokus pada pemahaman konsep dasar terlebih dahulu'
      ],
      'D': [
        'Segera konsultasi dengan dosen dan academic advisor',
        'Pertimbangkan untuk drop dan mengulang semester depan',
        'Identifikasi masalah mendasar dalam belajar',
        'Cari bantuan profesional jika diperlukan'
      ],
      'E': [
        'Wajib mengulang mata kuliah ini',
        'Evaluasi total strategi dan metode belajar',
        'Konsultasi dengan konselor akademik',
        'Pertimbangkan untuk mengambil cuti akademik jika perlu'
      ]
    };

    return [
      ...baseRecommendations,
      ...(gradeSpecificRecommendations[course.grade] || [])
    ];
  };

  const getPriority = (grade: string): 'high' | 'medium' | 'low' => {
    if (['D', 'E'].includes(grade)) return 'high';
    if (['C', 'BC'].includes(grade)) return 'medium';
    return 'low';
  };

  const calculateGPAImpact = (course: Course, allCourses: Course[]): number => {
    const currentPoints = allCourses.reduce((sum, c) => {
      const gradePoints: Record<string, number> = {
        'A': 4.0, 'AB': 3.5, 'B': 3.0, 'BC': 2.5, 'C': 2.0, 'D': 1.0, 'E': 0.0
      };
      return sum + (gradePoints[c.grade] || 0) * c.credits;
    }, 0);

    const currentCredits = allCourses.reduce((sum, c) => sum + c.credits, 0);
    const currentGPA = currentCredits > 0 ? currentPoints / currentCredits : 0;

    // Calculate GPA if this course gets an A
    const gradePoints: Record<string, number> = {
      'A': 4.0, 'AB': 3.5, 'B': 3.0, 'BC': 2.5, 'C': 2.0, 'D': 1.0, 'E': 0.0
    };
    
    const newPoints = currentPoints - (gradePoints[course.grade] || 0) * course.credits + 4.0 * course.credits;
    const newGPA = newPoints / currentCredits;

    return newGPA - currentGPA;
  };

  const generateStudyPlan = (recommendations: CourseRecommendation[]): StudyPlan[] => {
    const highPriorityCourses = recommendations.filter(r => r.priority === 'high');
    const mediumPriorityCourses = recommendations.filter(r => r.priority === 'medium');
    
    return [
      {
        week: 1,
        focus: 'Assessment dan Perencanaan',
        activities: [
          'Evaluasi kondisi akademik saat ini',
          'Identifikasi mata kuliah prioritas tinggi',
          'Buat jadwal belajar mingguan yang realistis',
          'Siapkan materi dan sumber belajar'
        ],
        resources: [
          'Silabus dan RPS mata kuliah',
          'Buku referensi utama',
          'Platform e-learning',
          'Aplikasi manajemen waktu'
        ]
      },
      {
        week: 2,
        focus: 'Penguatan Konsep Dasar',
        activities: [
          'Review materi fundamental',
          'Latihan soal-soal dasar',
          'Konsultasi dengan dosen',
          'Bergabung dengan study group'
        ],
        resources: [
          'Catatan kuliah',
          'Video pembelajaran online',
          'Bank soal',
          'Forum diskusi mahasiswa'
        ]
      },
      {
        week: 3,
        focus: 'Implementasi dan Praktik',
        activities: [
          'Kerjakan tugas dan project',
          'Latihan soal tingkat menengah',
          'Diskusi kelompok intensif',
          'Review progress mingguan'
        ],
        resources: [
          'Software/tools praktikum',
          'Jurnal dan paper referensi',
          'Mentor atau tutor',
          'Lab komputer/praktikum'
        ]
      },
      {
        week: 4,
        focus: 'Evaluasi dan Perbaikan',
        activities: [
          'Ujian simulasi',
          'Review kesalahan dan kelemahan',
          'Perbaikan strategi belajar',
          'Persiapan ujian akhir'
        ],
        resources: [
          'Soal-soal ujian tahun sebelumnya',
          'Ringkasan materi',
          'Feedback dari dosen',
          'Grup belajar intensif'
        ]
      }
    ];
  };

  const generateOverallStrategy = (gpaResult: GPAResult, studentData: StudentData): string[] => {
    const strategies = [
      'Fokus pada mata kuliah dengan nilai rendah untuk dampak maksimal pada IPK',
      'Manfaatkan sistem kredit untuk mengoptimalkan beban belajar',
      'Bangun hubungan baik dengan dosen dan asisten dosen',
      'Aktif dalam kegiatan akademik dan organisasi yang relevan'
    ];

    if (gpaResult.gpa < 3.0) {
      strategies.push(
        'Pertimbangkan untuk mengurangi beban SKS semester depan',
        'Fokus pada perbaikan nilai mata kuliah wajib',
        'Konsultasi rutin dengan academic advisor'
      );
    } else if (gpaResult.gpa < 3.5) {
      strategies.push(
        'Target peningkatan konsisten 0.1-0.2 poin per semester',
        'Ambil mata kuliah pilihan yang sesuai dengan minat dan kemampuan',
        'Pertimbangkan untuk mengambil research atau project tambahan'
      );
    } else {
      strategies.push(
        'Pertahankan konsistensi performa tinggi',
        'Fokus pada pengembangan soft skills dan leadership',
        'Pertimbangkan untuk mengambil mata kuliah advanced atau lintas jurusan'
      );
    }

    return strategies;
  };

  const calculatePotentialGPA = (courses: Course[]): number => {
    const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
    const maxPoints = totalCredits * 4.0; // All A grades
    return totalCredits > 0 ? maxPoints / totalCredits : 4.0;
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-red-500 bg-red-50 dark:bg-red-900/20';
      case 'medium': return 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20';
      case 'low': return 'border-green-500 bg-green-50 dark:bg-green-900/20';
      default: return 'border-gray-500 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return <XCircle className="w-5 h-5 text-red-500" />;
      case 'medium': return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'low': return <CheckCircle className="w-5 h-5 text-green-500" />;
      default: return <Target className="w-5 h-5 text-gray-500" />;
    }
  };

  if (courses.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center py-20">
            <Brain className="w-20 h-20 mx-auto mb-6 text-gray-400 opacity-50" />
            <h2 className="text-2xl font-bold text-gray-600 dark:text-gray-400 mb-4">
              Belum Ada Data untuk Dianalisis
            </h2>
            <p className="text-gray-500 dark:text-gray-500">
              Tambahkan mata kuliah dan nilai terlebih dahulu untuk mendapatkan analisis AI
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              Analisis AI Akademik
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Analisis mendalam dan rekomendasi personal untuk meningkatkan performa akademik Anda
          </p>
        </motion.div>

        {/* Generate Analysis Button */}
        {!analysis && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <button
              onClick={generateAnalysis}
              disabled={loading}
              className="btn-primary text-lg px-8 py-4 disabled:opacity-50"
            >
              {loading ? (
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Menganalisis Data Akademik...
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Brain className="w-6 h-6" />
                  Mulai Analisis AI
                </div>
              )}
            </button>
          </motion.div>
        )}

        <AnimatePresence>
          {analysis && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Overview Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="glass-card rounded-2xl p-6 text-center"
                >
                  <BarChart3 className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">IPK Saat Ini</h3>
                  <p className="text-3xl font-bold text-blue-500">{gpaResult.gpa.toFixed(2)}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="glass-card rounded-2xl p-6 text-center"
                >
                  <Target className="w-8 h-8 text-green-500 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">Potensi IPK</h3>
                  <p className="text-3xl font-bold text-green-500">{analysis.potentialGPA.toFixed(2)}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="glass-card rounded-2xl p-6 text-center"
                >
                  <TrendingUp className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">Mata Kuliah Perlu Perbaikan</h3>
                  <p className="text-3xl font-bold text-purple-500">{analysis.courseRecommendations.length}</p>
                </motion.div>
              </div>

              {/* Course Recommendations */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-card rounded-3xl p-8"
              >
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-telkom-red" />
                  Rekomendasi Perbaikan Mata Kuliah
                </h2>
                
                <div className="space-y-6">
                  {analysis.courseRecommendations.map((rec, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className={`border-l-4 rounded-lg p-6 ${getPriorityColor(rec.priority)}`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            {getPriorityIcon(rec.priority)}
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                              {rec.courseName}
                            </h3>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                            <span>Nilai Saat Ini: <strong>{rec.currentGrade}</strong></span>
                            <span>Target: <strong>{rec.targetGrade}</strong></span>
                            <span>Dampak IPK: <strong>+{rec.impactOnGPA.toFixed(3)}</strong></span>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          rec.priority === 'high' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' :
                          rec.priority === 'medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' :
                          'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                        }`}>
                          {rec.priority.toUpperCase()} PRIORITY
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {rec.recommendations.map((recommendation, recIndex) => (
                          <div key={recIndex} className="flex items-start gap-2">
                            <Lightbulb className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">{recommendation}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Study Plan */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="glass-card rounded-3xl p-8"
              >
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                  <Target className="w-6 h-6 text-blue-500" />
                  Rencana Belajar 4 Minggu
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {analysis.studyPlan.map((week, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6"
                    >
                      <div className="text-center mb-4">
                        <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-2">
                          {week.week}
                        </div>
                        <h3 className="font-semibold text-gray-800 dark:text-white">{week.focus}</h3>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Aktivitas:</h4>
                          <ul className="space-y-1">
                            {week.activities.map((activity, actIndex) => (
                              <li key={actIndex} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1">
                                <span className="w-1 h-1 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></span>
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sumber Daya:</h4>
                          <ul className="space-y-1">
                            {week.resources.map((resource, resIndex) => (
                              <li key={resIndex} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1">
                                <span className="w-1 h-1 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                                {resource}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Overall Strategy */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="glass-card rounded-3xl p-8"
              >
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                  <Award className="w-6 h-6 text-purple-500" />
                  Strategi Keseluruhan
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {analysis.overallStrategy.map((strategy, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-start gap-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl"
                    >
                      <TrendingUp className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{strategy}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-center"
              >
                <button
                  onClick={generateAnalysis}
                  className="btn-primary"
                >
                  <Brain className="w-5 h-5" />
                  Analisis Ulang
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AIAnalysis;