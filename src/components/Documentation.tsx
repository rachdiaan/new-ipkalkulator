import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Calculator, 
  Users, 
  BarChart3, 
  Brain, 
  Download, 
  Upload,
  Settings,
  Award,
  Target,
  Lightbulb,
  TrendingUp,
  ChevronRight,
  Sparkles,
  Zap,
  Shield,
  Globe
} from 'lucide-react';

const Documentation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [navVisible, setNavVisible] = useState(true);

  const sections = [
    { id: 'overview', title: 'Tentang Aplikasi', icon: BookOpen },
    { id: 'features', title: 'Fitur Utama', icon: Calculator },
    { id: 'usage', title: 'Cara Penggunaan', icon: Users },
    { id: 'grading', title: 'Skala Penilaian', icon: Award },
    { id: 'predicates', title: 'Predikat Kelulusan', icon: Target },
    { id: 'ai-features', title: 'Fitur AI', icon: Brain },
    { id: 'technical', title: 'Informasi Teknis', icon: Settings }
  ];

  const features = [
    {
      icon: Calculator,
      title: 'Perhitungan IPK Otomatis',
      description: 'Sistem menghitung IPK secara real-time berdasarkan mata kuliah dan nilai yang dimasukkan dengan skala 4.0 atau 100.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: BookOpen,
      title: 'Perencanaan Kurikulum',
      description: 'Akses kurikulum lengkap untuk semua program studi di Telkom University dengan fitur auto-fill mata kuliah per semester.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Brain,
      title: 'AI Assistant',
      description: 'Rekomendasi cerdas untuk meningkatkan performa akademik dan strategi belajar yang dipersonalisasi.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Analisis Performa',
      description: 'Visualisasi data akademik dengan grafik distribusi nilai, progress semester, dan statistik komprehensif.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Download,
      title: 'Export Data',
      description: 'Ekspor data akademik ke format CSV, Excel, atau PDF untuk keperluan dokumentasi dan backup.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Upload,
      title: 'Import Data',
      description: 'Import data mata kuliah dari file CSV untuk mempercepat input data akademik.',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const steps = [
    {
      step: 1,
      title: 'Input Data Mahasiswa',
      description: 'Masukkan informasi dasar seperti nama, NIM, jenjang pendidikan, fakultas, dan program studi.',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      step: 2,
      title: 'Pilih Mata Kuliah',
      description: 'Gunakan fitur perencanaan kurikulum atau tambah mata kuliah manual sesuai kebutuhan.',
      icon: BookOpen,
      color: 'bg-green-500'
    },
    {
      step: 3,
      title: 'Input Nilai',
      description: 'Masukkan nilai untuk setiap mata kuliah dengan skala A, AB, B, BC, C, D, atau E.',
      icon: Award,
      color: 'bg-yellow-500'
    },
    {
      step: 4,
      title: 'Analisis Hasil',
      description: 'Lihat hasil IPK, predikat kelulusan, dan analisis performa akademik secara real-time.',
      icon: BarChart3,
      color: 'bg-purple-500'
    },
    {
      step: 5,
      title: 'Dapatkan Rekomendasi',
      description: 'Gunakan AI Assistant untuk mendapatkan saran peningkatan akademik yang dipersonalisasi.',
      icon: Brain,
      color: 'bg-pink-500'
    }
  ];

  const gradeScale = [
    { grade: 'A', points: '4.0', percentage: '> 85%', description: 'Sangat Baik', color: 'bg-green-500' },
    { grade: 'AB', points: '3.5', percentage: '75-85%', description: 'Baik Sekali', color: 'bg-green-400' },
    { grade: 'B', points: '3.0', percentage: '65-75%', description: 'Baik', color: 'bg-blue-500' },
    { grade: 'BC', points: '2.5', percentage: '60-65%', description: 'Cukup Baik', color: 'bg-blue-400' },
    { grade: 'C', points: '2.0', percentage: '50-60%', description: 'Cukup', color: 'bg-yellow-500' },
    { grade: 'D', points: '1.0', percentage: '40-50%', description: 'Kurang', color: 'bg-orange-500' },
    { grade: 'E', points: '0.0', percentage: '≤ 40%', description: 'Gagal', color: 'bg-red-500' }
  ];

  const predicates = [
    { name: 'Sempurna', s1: '3.91 - 4.00', s2: '3.96 - 4.00', description: 'Prestasi akademik tertinggi', icon: '🏆', color: 'from-yellow-400 to-yellow-600' },
    { name: 'Dengan Pujian', s1: '3.51 - 3.90', s2: '3.76 - 3.95', description: 'Prestasi akademik sangat baik', icon: '🥇', color: 'from-purple-400 to-purple-600' },
    { name: 'Sangat Memuaskan', s1: '3.01 - 3.50', s2: '3.51 - 3.75', description: 'Prestasi akademik baik', icon: '🥈', color: 'from-blue-400 to-blue-600' },
    { name: 'Memuaskan', s1: '2.76 - 3.00', s2: '3.26 - 3.50', description: 'Prestasi akademik cukup baik', icon: '🥉', color: 'from-green-400 to-green-600' }
  ];

  // Auto-hide navigation after 3 seconds of inactivity
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setNavVisible(false);
    }, 3000);

    const handleMouseMove = () => {
      setNavVisible(true);
      clearTimeout(timer);
      setTimeout(() => setNavVisible(false), 3000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            {/* Hero Section */}
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-telkom-red to-telkom-brightRed rounded-3xl mb-8 shadow-2xl"
              >
                <Calculator className="w-12 h-12 text-white" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute"
                >
                  <Sparkles className="w-6 h-6 text-yellow-300" />
                </motion.div>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-telkom-red via-telkom-brightRed to-telkom-red bg-clip-text text-transparent mb-6">
                Kalkulator Akademik Terpadu
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-12 max-w-4xl mx-auto">
                Aplikasi web modern yang dirancang khusus untuk mahasiswa Telkom University. 
                Membantu mengelola data akademik, menghitung IPK, merencanakan kurikulum, 
                dan mendapatkan insight untuk meningkatkan performa akademik melalui teknologi AI.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-3xl border border-blue-200 dark:border-blue-700/30"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Untuk Mahasiswa</h3>
                <p className="text-gray-600 dark:text-gray-400">Semua jenjang pendidikan</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-3xl border border-green-200 dark:border-green-700/30"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-6 shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Real-time</h3>
                <p className="text-gray-600 dark:text-gray-400">Perhitungan otomatis</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-3xl border border-purple-200 dark:border-purple-700/30"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">AI-Powered</h3>
                <p className="text-gray-600 dark:text-gray-400">Rekomendasi cerdas</p>
              </motion.div>
            </div>
          </motion.div>
        );

      case 'features':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Fitur Utama</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Solusi lengkap untuk manajemen akademik modern</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group p-8 bg-white/50 dark:bg-gray-800/50 rounded-3xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 backdrop-blur-xl"
                >
                  <div className="flex items-start gap-6">
                    <div className={`p-4 bg-gradient-to-br ${feature.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'usage':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Cara Penggunaan</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Panduan langkah demi langkah</p>
            </div>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-start gap-6 p-8 bg-white/50 dark:bg-gray-800/50 rounded-3xl border border-gray-200 dark:border-gray-700 backdrop-blur-xl"
                >
                  <div className={`flex-shrink-0 w-16 h-16 ${step.color} text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg`}>
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon className="w-6 h-6 text-telkom-red" />
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'grading':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Skala Penilaian</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Sistem penilaian Telkom University</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {gradeScale.map((grade, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 bg-white/50 dark:bg-gray-800/50 rounded-3xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 backdrop-blur-xl"
                >
                  <div className={`w-16 h-16 ${grade.color} text-white rounded-2xl flex items-center justify-center font-bold text-2xl mx-auto mb-4 shadow-lg`}>
                    {grade.grade}
                  </div>
                  <div className="space-y-2">
                    <div className="text-lg font-bold text-gray-800 dark:text-white">{grade.points} Poin</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{grade.percentage}</div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{grade.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'predicates':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Predikat Kelulusan</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Standar kelulusan berdasarkan IPK</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {predicates.map((predicate, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="p-8 bg-white/50 dark:bg-gray-800/50 rounded-3xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 backdrop-blur-xl"
                >
                  <div className="flex items-start gap-6">
                    <div className={`p-4 bg-gradient-to-br ${predicate.color} rounded-2xl shadow-lg text-2xl`}>
                      {predicate.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">{predicate.name}</h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 dark:text-gray-400">S1/D3:</span>
                          <span className="font-bold text-gray-800 dark:text-white">{predicate.s1}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 dark:text-gray-400">S2/S3:</span>
                          <span className="font-bold text-gray-800 dark:text-white">{predicate.s2}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{predicate.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'ai-features':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Fitur AI Assistant</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Kecerdasan buatan untuk optimasi akademik</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-3xl border border-purple-200 dark:border-purple-700/30 backdrop-blur-xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Analisis Performa</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Evaluasi mendalam terhadap prestasi akademik dengan rekomendasi spesifik untuk setiap mata kuliah.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-3xl border border-blue-200 dark:border-blue-700/30 backdrop-blur-xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Rekomendasi Target</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Saran pencapaian IPK dan predikat kelulusan berdasarkan performa saat ini dan target yang diinginkan.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-8 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-3xl border border-green-200 dark:border-green-700/30 backdrop-blur-xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Strategi Belajar</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Tips dan metode belajar yang efektif disesuaikan dengan gaya belajar dan kebutuhan individual.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-8 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-3xl border border-orange-200 dark:border-orange-700/30 backdrop-blur-xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Peningkatan Nilai</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Identifikasi mata kuliah yang perlu diperbaiki dengan prioritas dan strategi yang tepat.
                </p>
              </motion.div>
            </div>
          </motion.div>
        );

      case 'technical':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Informasi Teknis</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Teknologi dan spesifikasi aplikasi</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-8 bg-white/50 dark:bg-gray-800/50 rounded-3xl border border-gray-200 dark:border-gray-700 backdrop-blur-xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-telkom-red to-telkom-brightRed rounded-xl shadow-lg">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Teknologi yang Digunakan</h3>
                </div>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-3">
                    <ChevronRight className="w-4 h-4 text-telkom-red" />
                    React 18 dengan TypeScript
                  </li>
                  <li className="flex items-center gap-3">
                    <ChevronRight className="w-4 h-4 text-telkom-red" />
                    Tailwind CSS untuk styling
                  </li>
                  <li className="flex items-center gap-3">
                    <ChevronRight className="w-4 h-4 text-telkom-red" />
                    Framer Motion untuk animasi
                  </li>
                  <li className="flex items-center gap-3">
                    <ChevronRight className="w-4 h-4 text-telkom-red" />
                    Recharts untuk visualisasi data
                  </li>
                  <li className="flex items-center gap-3">
                    <ChevronRight className="w-4 h-4 text-telkom-red" />
                    Lucide React untuk ikon
                  </li>
                  <li className="flex items-center gap-3">
                    <ChevronRight className="w-4 h-4 text-telkom-red" />
                    Vite sebagai build tool
                  </li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-8 bg-white/50 dark:bg-gray-800/50 rounded-3xl border border-gray-200 dark:border-gray-700 backdrop-blur-xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Fitur Browser</h3>
                </div>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-3">
                    <ChevronRight className="w-4 h-4 text-telkom-red" />
                    Responsive design untuk semua perangkat
                  </li>
                  <li className="flex items-center gap-3">
                    <ChevronRight className="w-4 h-4 text-telkom-red" />
                    Dark mode support
                  </li>
                  <li className="flex items-center gap-3">
                    <ChevronRight className="w-4 h-4 text-telkom-red" />
                    Local storage untuk data persistence
                  </li>
                  <li className="flex items-center gap-3">
                    <ChevronRight className="w-4 h-4 text-telkom-red" />
                    Progressive Web App (PWA) ready
                  </li>
                  <li className="flex items-center gap-3">
                    <ChevronRight className="w-4 h-4 text-telkom-red" />
                    Export/Import data CSV, Excel, PDF
                  </li>
                  <li className="flex items-center gap-3">
                    <ChevronRight className="w-4 h-4 text-telkom-red" />
                    Real-time calculation
                  </li>
                </ul>
              </motion.div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-12 bg-gradient-to-br from-telkom-red/10 to-telkom-brightRed/10 rounded-3xl text-center border border-telkom-red/20 backdrop-blur-xl"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-telkom-red to-telkom-brightRed rounded-2xl shadow-lg">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white">Dikembangkan dengan ❤️</h3>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                © 2025 Rachdian - Untuk kemajuan pendidikan di Telkom University
              </p>
            </motion.div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Auto-hide Navigation - Centered */}
      <AnimatePresence>
        {navVisible && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-white/25 dark:bg-gray-800/25 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-2xl p-2 shadow-2xl">
              <div className="flex items-center gap-2 overflow-x-auto">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <motion.button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center justify-center p-3 rounded-xl transition-all duration-200 ${
                        activeSection === section.id
                          ? 'bg-telkom-red text-white shadow-lg'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-gray-800/50'
                      }`}
                      title={section.title}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default Documentation;