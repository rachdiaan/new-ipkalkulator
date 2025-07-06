import React from 'react';
import { motion } from 'framer-motion';
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
  TrendingUp
} from 'lucide-react';

const Documentation: React.FC = () => {
  const features = [
    {
      icon: Calculator,
      title: 'Perhitungan IPK Otomatis',
      description: 'Sistem menghitung IPK secara real-time berdasarkan mata kuliah dan nilai yang dimasukkan dengan skala 4.0 atau 100.'
    },
    {
      icon: BookOpen,
      title: 'Perencanaan Kurikulum',
      description: 'Akses kurikulum lengkap untuk semua program studi di Telkom University dengan fitur auto-fill mata kuliah per semester.'
    },
    {
      icon: Brain,
      title: 'AI Assistant',
      description: 'Rekomendasi cerdas untuk meningkatkan performa akademik dan strategi belajar yang dipersonalisasi.'
    },
    {
      icon: BarChart3,
      title: 'Analisis Performa',
      description: 'Visualisasi data akademik dengan grafik distribusi nilai, progress semester, dan statistik komprehensif.'
    },
    {
      icon: Download,
      title: 'Export Data',
      description: 'Ekspor data akademik ke format CSV, Excel, atau PDF untuk keperluan dokumentasi dan backup.'
    },
    {
      icon: Upload,
      title: 'Import Data',
      description: 'Import data mata kuliah dari file CSV untuk mempercepat input data akademik.'
    }
  ];

  const steps = [
    {
      step: 1,
      title: 'Input Data Mahasiswa',
      description: 'Masukkan informasi dasar seperti nama, NIM, jenjang pendidikan, fakultas, dan program studi.'
    },
    {
      step: 2,
      title: 'Pilih Mata Kuliah',
      description: 'Gunakan fitur perencanaan kurikulum atau tambah mata kuliah manual sesuai kebutuhan.'
    },
    {
      step: 3,
      title: 'Input Nilai',
      description: 'Masukkan nilai untuk setiap mata kuliah dengan skala A, AB, B, BC, C, D, atau E.'
    },
    {
      step: 4,
      title: 'Analisis Hasil',
      description: 'Lihat hasil IPK, predikat kelulusan, dan analisis performa akademik secara real-time.'
    },
    {
      step: 5,
      title: 'Dapatkan Rekomendasi',
      description: 'Gunakan AI Assistant untuk mendapatkan saran peningkatan akademik yang dipersonalisasi.'
    }
  ];

  const gradeScale = [
    { grade: 'A', points: '4.0', percentage: '> 85%', description: 'Sangat Baik' },
    { grade: 'AB', points: '3.5', percentage: '75-85%', description: 'Baik Sekali' },
    { grade: 'B', points: '3.0', percentage: '65-75%', description: 'Baik' },
    { grade: 'BC', points: '2.5', percentage: '60-65%', description: 'Cukup Baik' },
    { grade: 'C', points: '2.0', percentage: '50-60%', description: 'Cukup' },
    { grade: 'D', points: '1.0', percentage: '40-50%', description: 'Kurang' },
    { grade: 'E', points: '0.0', percentage: '≤ 40%', description: 'Gagal' }
  ];

  const predicates = [
    { name: 'Sempurna', s1: '3.91 - 4.00', s2: '3.96 - 4.00', description: 'Prestasi akademik tertinggi' },
    { name: 'Dengan Pujian', s1: '3.51 - 3.90', s2: '3.76 - 3.95', description: 'Prestasi akademik sangat baik' },
    { name: 'Sangat Memuaskan', s1: '3.01 - 3.50', s2: '3.51 - 3.75', description: 'Prestasi akademik baik' },
    { name: 'Memuaskan', s1: '2.76 - 3.00', s2: '3.26 - 3.50', description: 'Prestasi akademik cukup baik' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-telkom-red to-telkom-brightRed rounded-2xl shadow-lg">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-telkom-red via-telkom-brightRed to-telkom-red bg-clip-text text-transparent">
              Dokumentasi Aplikasi
            </h1>
          </div>
          <p className="text-xl text-telkom-gray dark:text-gray-300 max-w-3xl mx-auto">
            Panduan lengkap penggunaan Kalkulator Akademik Terpadu Telkom University
          </p>
        </motion.div>

        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card rounded-3xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Tentang Aplikasi</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            Kalkulator Akademik Terpadu adalah aplikasi web modern yang dirancang khusus untuk mahasiswa Telkom University. 
            Aplikasi ini membantu mahasiswa dalam mengelola data akademik, menghitung IPK, merencanakan kurikulum, 
            dan mendapatkan insight untuk meningkatkan performa akademik melalui teknologi AI.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-telkom-red/10 rounded-xl">
              <Users className="w-8 h-8 text-telkom-red mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800 dark:text-white">Untuk Mahasiswa</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Semua jenjang pendidikan</p>
            </div>
            <div className="text-center p-4 bg-blue-500/10 rounded-xl">
              <Calculator className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800 dark:text-white">Real-time</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Perhitungan otomatis</p>
            </div>
            <div className="text-center p-4 bg-green-500/10 rounded-xl">
              <Brain className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800 dark:text-white">AI-Powered</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Rekomendasi cerdas</p>
            </div>
          </div>
        </motion.section>

        {/* Features */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Fitur Utama</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-telkom-red/10 rounded-lg">
                    <feature.icon className="w-6 h-6 text-telkom-red" />
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* How to Use */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card rounded-3xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Cara Penggunaan</h2>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="flex items-start gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-telkom-red text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-1">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Grade Scale */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card rounded-3xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Skala Penilaian</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">Nilai</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">Poin</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">Persentase</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">Keterangan</th>
                </tr>
              </thead>
              <tbody>
                {gradeScale.map((grade, index) => (
                  <tr key={index} className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 px-4">
                      <span className="font-bold text-telkom-red">{grade.grade}</span>
                    </td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{grade.points}</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{grade.percentage}</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{grade.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Predicates */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card rounded-3xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Predikat Kelulusan</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">Predikat</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">S1/D3</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">S2/S3</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-800 dark:text-white">Keterangan</th>
                </tr>
              </thead>
              <tbody>
                {predicates.map((predicate, index) => (
                  <tr key={index} className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 px-4">
                      <span className="font-bold text-telkom-red">{predicate.name}</span>
                    </td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{predicate.s1}</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{predicate.s2}</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{predicate.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* AI Features */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-card rounded-3xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Fitur AI Assistant</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                <TrendingUp className="w-6 h-6 text-purple-500" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Analisis Performa</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Evaluasi mendalam terhadap prestasi akademik</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                <Target className="w-6 h-6 text-blue-500" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Rekomendasi Target</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Saran pencapaian IPK dan predikat</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                <Lightbulb className="w-6 h-6 text-green-500" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Strategi Belajar</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Tips dan metode belajar yang efektif</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                <Award className="w-6 h-6 text-orange-500" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Peningkatan Nilai</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Saran mata kuliah untuk diperbaiki</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Technical Info */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="glass-card rounded-3xl p-8"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">Informasi Teknis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Teknologi yang Digunakan</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• React 18 dengan TypeScript</li>
                <li>• Tailwind CSS untuk styling</li>
                <li>• Framer Motion untuk animasi</li>
                <li>• Recharts untuk visualisasi data</li>
                <li>• Lucide React untuk ikon</li>
                <li>• Vite sebagai build tool</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Fitur Browser</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Responsive design untuk semua perangkat</li>
                <li>• Dark mode support</li>
                <li>• Local storage untuk data persistence</li>
                <li>• Progressive Web App (PWA) ready</li>
                <li>• Export/Import data CSV, Excel, PDF</li>
                <li>• Real-time calculation</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-telkom-red/10 rounded-xl text-center">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Dikembangkan dengan ❤️</h3>
            <p className="text-gray-600 dark:text-gray-300">
              © 2025 Rachdian - Untuk kemajuan pendidikan di Telkom University
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Documentation;