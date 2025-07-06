import React from 'react';
import { motion } from 'framer-motion';
import { User, Hash, GraduationCap, Globe, Building, BookOpen } from 'lucide-react';
import { StudentData } from '../types';
import { checkEnglishRequirement } from '../utils/englishRequirements';

interface StudentInfoProps {
  studentData: StudentData;
  setStudentData: (data: StudentData) => void;
  curriculumData: any;
}

const facultyData = {
  'Fakultas Teknik Elektro (FTE)': {
    s1: ['S1 Teknik Telekomunikasi', 'S1 Teknik Elektro', 'S1 Teknik Komputer', 'S1 Smart Science & Technology', 'S1 Teknik Biomedis', 'S1 Electrical Energy Engineering'],
    s2: ['S2 Teknik Elektro'],
    s3: []
  },
  'Fakultas Rekayasa Industri (FRI)': {
    s1: ['S1 Sistem Informasi', 'S1 Teknik Industri', 'S1 Digital Supply Chain', 'S1 Manajemen Rekayasa Industri'],
    s2: ['S2 Teknik Industri'],
    s3: []
  },
  'Fakultas Informatika (FIF)': {
    s1: ['S1 Informatika', 'S1 Rekayasa Perangkat Lunak', 'S1 Teknologi Informasi (Cyber Security & Digital Innovation)', 'S1 Sains Data'],
    s2: ['S2 Informatika', 'S2 Cybersecurity & Digital Forensics'],
    s3: []
  },
  'Fakultas Ekonomi dan Bisnis (FEB)': {
    s1: ['S1 Manajemen Bisnis Telekomunikasi & Informatika (MBTI)', 'S1 Akuntansi', 'S1 Leisure Management', 'S1 Administrasi Bisnis', 'S1 Bisnis Digital (Digital Business)'],
    s2: ['S2 Manajemen', 'S2 Akuntansi', 'S2 Administrasi Bisnis'],
    s3: []
  },
  'Fakultas Komunikasi dan Ilmu Sosial (FKS)': {
    s1: ['S1 Ilmu Komunikasi', 'S1 Digital Public Relation', 'S1 Digital Content Broadcasting', 'S1 Psikologi (Digital Psychology)'],
    s2: ['S2 Ilmu Komunikasi'],
    s3: []
  },
  'Fakultas Industri Kreatif (FIK)': {
    s1: ['S1 Desain Komunikasi Visual', 'S1 Desain Interior', 'S1 Desain Produk & Inovasi', 'S1 Kriya (Fashion & Textile Design)', 'S1 Creative Arts (Intermedia Visual Arts)', 'S1 Film dan Animasi'],
    s2: ['S2 Desain'],
    s3: []
  },
  'Fakultas Ilmu Terapan (FIT)': {
    s1: ['D3 Teknik Informatika', 'D3 Sistem Informasi', 'D3 Teknik Komputer', 'D3 Digital Accounting (Sistem Informasi Akuntansi)', 'D3 Digital Marketing', 'D3 Hospitality and Culinary Art', 'S1 Terapan Digital Creative Multimedia (DCM)', 'S1 Terapan Sistem Informasi Kota Cerdas'],
    s2: [],
    s3: []
  }
};

const StudentInfo: React.FC<StudentInfoProps> = ({ 
  studentData, 
  setStudentData, 
  curriculumData 
}) => {
  const englishResult = checkEnglishRequirement(studentData.englishScore, studentData.programLevel);

  const handleInputChange = (field: keyof StudentData, value: string | number) => {
    setStudentData({ ...studentData, [field]: value });
  };

  const handleFacultyChange = (faculty: string) => {
    const level = studentData.programLevel;
    const majors = facultyData[faculty as keyof typeof facultyData]?.[level] || [];
    const firstMajor = majors[0] || '';
    
    setStudentData({ 
      ...studentData, 
      faculty, 
      major: firstMajor 
    });
  };

  const handleProgramLevelChange = (level: string) => {
    // Reset faculty and major when program level changes
    setStudentData({
      ...studentData,
      programLevel: level as 's1' | 's2' | 's3',
      faculty: '',
      major: ''
    });
  };

  const getAvailableFaculties = () => {
    const level = studentData.programLevel;
    return Object.keys(facultyData).filter(faculty => 
      facultyData[faculty as keyof typeof facultyData][level].length > 0
    );
  };

  const getAvailableMajors = () => {
    if (!studentData.faculty) return [];
    const level = studentData.programLevel;
    return facultyData[studentData.faculty as keyof typeof facultyData]?.[level] || [];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card rounded-3xl p-6 lg:p-8 border border-white/20 backdrop-blur-xl shadow-2xl"
    >
      <div className="flex items-center gap-4 mb-6 lg:mb-8">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="p-3 bg-gradient-to-br from-telkom-red to-telkom-brightRed rounded-2xl shadow-lg"
        >
          <User className="w-6 h-6 text-white" />
        </motion.div>
        <div>
          <h2 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-white">
            Informasi Mahasiswa
          </h2>
          <p className="text-sm text-telkom-gray dark:text-gray-400">
            Lengkapi data akademik Anda
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        <div className="space-y-3">
          <label className="block text-sm font-medium text-telkom-gray dark:text-gray-300">
            Nama Lengkap
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={studentData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-telkom-red focus:border-transparent bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-white transition-all duration-200"
              placeholder="Masukkan nama lengkap"
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium text-telkom-gray dark:text-gray-300">
            Nomor Induk Mahasiswa (NIM)
          </label>
          <div className="relative">
            <Hash className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={studentData.nim}
              onChange={(e) => handleInputChange('nim', e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-telkom-red focus:border-transparent bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-white transition-all duration-200"
              placeholder="Masukkan NIM"
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium text-telkom-gray dark:text-gray-300">
            Jenjang Pendidikan
          </label>
          <div className="relative">
            <GraduationCap className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={studentData.programLevel}
              onChange={(e) => handleProgramLevelChange(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-telkom-red focus:border-transparent bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-white transition-all duration-200"
            >
              <option value="s1">D3/S1/S1 Terapan</option>
              <option value="s2">S2/S2 Terapan</option>
              <option value="s3">S3/S3 Terapan</option>
            </select>
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium text-telkom-gray dark:text-gray-300">
            Skor Bahasa Inggris (TOEFL/EPrT)
          </label>
          <div className="relative">
            <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="number"
              value={studentData.englishScore || ''}
              onChange={(e) => handleInputChange('englishScore', parseInt(e.target.value) || 0)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-telkom-red focus:border-transparent bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-white transition-all duration-200"
              placeholder="Contoh: 450"
            />
          </div>
          {studentData.englishScore > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-sm font-medium ${
                englishResult.meets ? 'text-green-600' : 'text-telkom-red'
              }`}
            >
              {englishResult.meets ? '✓' : '✗'} {englishResult.message}
            </motion.div>
          )}
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium text-telkom-gray dark:text-gray-300">
            Fakultas
          </label>
          <div className="relative">
            <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={studentData.faculty}
              onChange={(e) => handleFacultyChange(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-telkom-red focus:border-transparent bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-white transition-all duration-200"
            >
              <option value="">Pilih Fakultas</option>
              {getAvailableFaculties().map(faculty => (
                <option key={faculty} value={faculty}>{faculty}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium text-telkom-gray dark:text-gray-300">
            Program Studi
          </label>
          <div className="relative">
            <BookOpen className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              value={studentData.major}
              onChange={(e) => handleInputChange('major', e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-telkom-red focus:border-transparent bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-white transition-all duration-200"
              disabled={!studentData.faculty}
            >
              <option value="">Pilih Program Studi</option>
              {getAvailableMajors().map(major => (
                <option key={major} value={major}>{major}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StudentInfo;