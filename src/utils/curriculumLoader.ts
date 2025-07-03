export const loadCurriculumData = async () => {
  try {
    // Simulate loading curriculum data from CSV files
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Complete curriculum data structure based on the provided CSV files
    const curriculumData = {
      s1: {
        // D3 Programs
        'D3 Teknik Informatika': {
          'Reguler': {
            'Semester 1': [
              { name: 'Implementasi Algoritma', sks: 4 },
              { name: 'Dasar Sistem Komputer', sks: 3 },
              { name: 'Matematika Informatika 1', sks: 3 },
              { name: 'Bahasa Indonesia', sks: 2 },
              { name: 'Alat Bantu Gambar Digital untuk Antarmuka Aplikasi', sks: 3 },
              { name: 'Pancasila', sks: 2 },
              { name: 'Pembentukan Karakter HEI', sks: 1 }
            ],
            'Semester 2': [
              { name: 'Implementasi Struktur Data', sks: 4 },
              { name: 'Pemrograman Berbasis Web 1', sks: 4 },
              { name: 'Analisis Kebutuhan dan Pemodelan Perangkat Lunak', sks: 3 },
              { name: 'Matematika Informatika 2', sks: 3 },
              { name: 'Sistem Basis Data 1', sks: 4 },
              { name: 'Proyek Tingkat 1 (Aplikasi Web)', sks: 2 }
            ],
            'Semester 3': [
              { name: 'Instalasi Jaringan Komputer', sks: 4 },
              { name: 'Pemrograman Berbasis Web 2', sks: 4 },
              { name: 'Pemrograman Berorientasi Objek', sks: 4 },
              { name: 'Desain Perangkat Lunak', sks: 3 },
              { name: 'Kewarganegaraan', sks: 2 },
              { name: 'Pendidikan Agama dan Etika', sks: 2 }
            ],
            'Semester 4': [
              { name: 'Kewirausahaan', sks: 2 },
              { name: 'Pemrograman untuk Perangkat Bergerak 1', sks: 4 },
              { name: 'Sistem Basis Data 2', sks: 4 },
              { name: 'Pengantar Pengembangan Aplikasi Permainan (Game)', sks: 2 },
              { name: 'Bahasa Inggris 1', sks: 2 },
              { name: 'Olahraga (Pendidikan Jasmani dan Kesehatan)', sks: 2 },
              { name: 'Proyek Tingkat II (Aplikasi Desktop / Bergerak)', sks: 2 }
            ],
            'Semester 5': [
              { name: 'Pengembangan Profesionalisme', sks: 2 },
              { name: 'Pemrograman untuk Perangkat Bergerak 2', sks: 4 },
              { name: 'Pemrograman Berbasis Sensor', sks: 4 },
              { name: 'Multimedia Terapan', sks: 3 },
              { name: 'Validasi dan Verifikasi Perangkat Lunak (Pengujian Perangkat Lunak)', sks: 3 },
              { name: 'Manajemen Proyek IT (Pembangunan Perangkat Lunak)', sks: 3 }
            ],
            'Semester 6': [
              { name: 'Proyek Tingkat 3', sks: 4 },
              { name: 'Magang', sks: 12 }
            ]
          }
        },
        'D3 Sistem Informasi': {
          'Reguler': {
            'Semester 1': [
              { name: 'Algoritma dan Pemrograman Komputer', sks: 4 },
              { name: 'Bahasa Inggris', sks: 2 },
              { name: 'Dasar Manajemen dan Sistem Informasi', sks: 3 },
              { name: 'Pembentukan Karakter', sks: 1 },
              { name: 'Kewarganegaraan', sks: 2 },
              { name: 'Logika Matematika', sks: 3 },
              { name: 'Olahraga', sks: 2 },
              { name: 'Rekayasa Perangkat Lunak', sks: 3 }
            ],
            'Semester 2': [
              { name: 'Arsitektur dan Jaringan Komputer', sks: 3 },
              { name: 'Bahasa Inggris II', sks: 2 },
              { name: 'Implementasi User Experience Design', sks: 3 },
              { name: 'Matematika Diskrit', sks: 2 },
              { name: 'Pancasila', sks: 2 },
              { name: 'Pengolahan Basis Data', sks: 3 },
              { name: 'Pengujian Perangkat Lunak', sks: 2 },
              { name: 'Proyek I', sks: 2 }
            ],
            'Semester 3': [
              { name: 'Implementasi Desain Antarmuka Pengguna', sks: 4 },
              { name: 'Kewirausahaan', sks: 2 },
              { name: 'Pemodelan Proses Bisnis', sks: 3 },
              { name: 'Pemrograman Web', sks: 4 },
              { name: 'Pendidikan Agama (Budha, Hindu, Islam, Katolik, Konghucu, Kristen)', sks: 2 },
              { name: 'Perancangan Basis Data', sks: 3 },
              { name: 'Probabilitas dan Statistik', sks: 2 }
            ],
            'Semester 4': [
              { name: 'Analisis dan Perancangan Sistem Informasi', sks: 3 },
              { name: 'Bahasa Indonesia', sks: 2 },
              { name: 'Dasar Ilmu Data', sks: 3 },
              { name: 'Dasar Pemrograman Perangkat Bergerak', sks: 4 },
              { name: 'Literasi Manusia', sks: 2 },
              { name: 'Pengembangan Aplikasi Berbasis Web', sks: 2 },
              { name: 'Proyek II', sks: 2 }
            ],
            'Semester 5': [
              { name: 'Bahasa Inggris III', sks: 2 },
              { name: 'Pengembangan Profesionalisme', sks: 2 },
              { name: 'Ilmu Data Lanjut', sks: 3 },
              { name: 'Metodologi Penelitian', sks: 3 },
              { name: 'Pemrograman Basis Data', sks: 3 },
              { name: 'Pemrograman Perangkat Bergerak Lanjut', sks: 4 }
            ],
            'Semester 6': [
              { name: 'Magang', sks: 12 },
              { name: 'Proyek Akhir', sks: 4 }
            ]
          }
        },
        'D3 Teknik Komputer': {
          'Reguler': {
            'Semester 1': [
              { name: 'Sistem Komputer', sks: 3 },
              { name: 'Elektronika Dasar', sks: 3 },
              { name: 'Matematika Teknik 1', sks: 2 },
              { name: 'Pendidikan Agama dan Etika', sks: 2 },
              { name: 'Rangkaian Elektrik', sks: 3 },
              { name: 'Algoritma dan Pemrograman', sks: 4 },
              { name: 'Sistem Operasi', sks: 3 }
            ],
            'Semester 2': [
              { name: 'Sistem Digital', sks: 4 },
              { name: 'Mikroelektronika', sks: 4 },
              { name: 'Sistem Jaringan Komputer', sks: 3 },
              { name: 'Algoritma dan Pemrograman Lanjut', sks: 4 },
              { name: 'Matematika Teknik 2', sks: 2 },
              { name: 'Basis Data', sks: 3 }
            ]
          }
        },
        'D3 Digital Accounting (Sistem Informasi Akuntansi)': {
          'Reguler': {
            'Semester 1': [
              { name: 'Algoritma dan Pemrograman', sks: 4 },
              { name: 'Dasar Komputer dan Jaringan', sks: 2 },
              { name: 'Prinsip Akuntansi I', sks: 4 },
              { name: 'Pengantar Manajemen dan Bisnis', sks: 3 },
              { name: 'Logika Matematika', sks: 2 },
              { name: 'Bahasa Indonesia', sks: 2 },
              { name: 'Pancasila', sks: 2 },
              { name: 'HEI', sks: 1 }
            ]
          }
        },
        'D3 Digital Marketing': {
          'Reguler': {
            'Semester 1': [
              { name: 'Manajemen Pemasaran', sks: 4 },
              { name: 'Manajemen Bisnis', sks: 4 },
              { name: 'Pengantar Ilmu Ekonomi', sks: 3 },
              { name: 'Pancasila & Kewarganegaraan', sks: 3 },
              { name: 'Bahasa Indonesia', sks: 2 },
              { name: 'Pendidikan Agama & Etika', sks: 2 },
              { name: 'Praktikum Komputer Aplikasi Perkantoran', sks: 2 }
            ]
          }
        },
        'D3 Hospitality and Culinary Art': {
          'Reguler': {
            'Semester 1': [
              { name: 'Pengantar Ilmu Pariwisata dan Hospitality', sks: 2 },
              { name: 'Reservasi Hotel', sks: 3 },
              { name: 'Operasional Penyiapan Public Area Hotel', sks: 2 },
              { name: 'Operasional Restoran I', sks: 3 },
              { name: 'Teknik Pengolahan Makanan Kontinental', sks: 3 },
              { name: 'Etika Profesi', sks: 2 },
              { name: 'Pengantar Manajemen', sks: 2 },
              { name: 'Pancasila', sks: 2 },
              { name: 'Pembentukan Karakter HEI', sks: 1 }
            ]
          }
        },
        // S1 Terapan Programs
        'S1 Terapan Digital Creative Multimedia (DCM)': {
          'Reguler': {
            'Semester 1': [
              { name: 'Internalisasi Budaya dan Pembentukan Karakter', sks: 1 },
              { name: 'Literasi Data', sks: 2 },
              { name: 'Aljabar Linier Elementer', sks: 2 },
              { name: 'Matematika Diskrit', sks: 3 },
              { name: 'Konten Digital 2D', sks: 3 },
              { name: 'Sistem dan Jaringan Komputer', sks: 4 },
              { name: 'Bahasa Indonesia', sks: 2 },
              { name: 'Aplikasi Perkantoran', sks: 2 }
            ],
            'Semester 2': [
              { name: 'Bahasa Inggris', sks: 2 },
              { name: 'Agama', sks: 2 },
              { name: 'Desain Pengalaman Pengguna', sks: 2 },
              { name: 'Desain dan Teknologi Multimedia', sks: 3 },
              { name: 'Algoritma dan Pemrograman', sks: 4 },
              { name: 'Statistika', sks: 2 },
              { name: 'Konten Digital 3D', sks: 3 }
            ]
          }
        },
        'S1 Terapan Sistem Informasi Kota Cerdas': {
          'Reguler': {
            'Semester 1': [
              { name: 'Algoritma dan Pemrograman', sks: 4 },
              { name: 'Desain Antarmuka Pengguna', sks: 3 },
              { name: 'Pengantar Teknologi Informasi', sks: 2 },
              { name: 'Sistem Informasi Manajemen Kota Cerdas', sks: 3 },
              { name: 'Matematika Diskrit', sks: 2 },
              { name: 'Bahasa Inggris', sks: 2 },
              { name: 'Internalisasi Budaya dan Pembentukan Karakter', sks: 1 },
              { name: 'Jaringan Komputer', sks: 3 }
            ]
          }
        }
      },
      s2: {
        'S2 Manajemen': {
          'Kelas Reguler': {
            'Semester 1': [
              { name: 'Financial Management and Technology', sks: 3 },
              { name: 'Human Capital Management', sks: 3 },
              { name: 'Marketing Management in Digital Era', sks: 3 },
              { name: 'Managing Seamless Operation', sks: 3 },
              { name: 'Data Science in Decision Intelligence', sks: 4 },
              { name: 'Etika Bisnis', sks: 2 }
            ],
            'Semester 2': [
              { name: 'Manajemen Strategi & Ekosistem Bisnis', sks: 4 },
              { name: 'Design Thinking for Business', sks: 4 },
              { name: 'Mata Kuliah Pilihan Wajib', sks: 4 },
              { name: 'Research Method', sks: 3 },
              { name: 'Sertifikasi', sks: 1 },
              { name: 'Seminar', sks: 2 }
            ],
            'Semester 3': [
              { name: 'Mata Kuliah Pilihan 1', sks: 4 },
              { name: 'Mata Kuliah Pilihan 2', sks: 4 },
              { name: 'Tugas Akhir 1', sks: 8 },
              { name: 'Tugas Akhir 2', sks: 2 }
            ]
          },
          'Kelas Profesional dan Eksekutif': {
            'Semester 1': [
              { name: 'Financial Management and Technology', sks: 3 },
              { name: 'Human Capital Management', sks: 3 },
              { name: 'Marketing Management in Digital Era', sks: 3 },
              { name: 'Managing Seamless Operation', sks: 3 },
              { name: 'Data Science in Decision Intelligence', sks: 4 }
            ],
            'Semester 2': [
              { name: 'Manajemen Strategi & Ekosistem Bisnis', sks: 4 },
              { name: 'Design Thinking for Business', sks: 4 },
              { name: 'Etika Bisnis', sks: 2 },
              { name: 'Mata Kuliah Pilihan Wajib', sks: 4 },
              { name: 'Sertifikasi', sks: 1 }
            ],
            'Semester 3': [
              { name: 'Mata Kuliah Pilihan 1', sks: 4 },
              { name: 'Mata Kuliah Pilihan 2', sks: 4 },
              { name: 'Research Method', sks: 3 },
              { name: 'Seminar', sks: 2 }
            ],
            'Semester 4': [
              { name: 'Tugas Akhir 1', sks: 8 },
              { name: 'Tugas Akhir 2', sks: 2 }
            ]
          },
          'By Research': {
            'Semester 1': [
              { name: 'Financial Management and Technology', sks: 3 },
              { name: 'Human Capital Management', sks: 3 },
              { name: 'Marketing Management in Digital Era', sks: 3 },
              { name: 'Managing Seamless Operation', sks: 3 },
              { name: 'Data Science in Decision Intelligence', sks: 4 }
            ],
            'Semester 2': [
              { name: 'Manajemen Strategi & Ekosistem Bisnis', sks: 4 },
              { name: 'Preliminary Study', sks: 4 },
              { name: 'Study Literature', sks: 4 },
              { name: 'Laporan Progres/Publikasi 1-Jurnal Scopus Q3', sks: 3 }
            ],
            'Semester 3': [
              { name: 'Research Design', sks: 4 },
              { name: 'Pengumpulan Data', sks: 3 },
              { name: 'Analisis Data', sks: 3 },
              { name: 'Seminar Hasil', sks: 3 }
            ],
            'Semester 4': [
              { name: 'Tugas Akhir 1', sks: 8 },
              { name: 'Tugas Akhir 2', sks: 2 }
            ]
          }
        },
        'S2 Teknik Elektro': {
          'IWCSS': {
            'Semester 1': [
              { name: 'Advanced Engineering Mathematics', sks: 3 },
              { name: 'Deep Learning for Electrical Engineering', sks: 3 },
              { name: 'Entrepreneurship for Engineers', sks: 3 },
              { name: 'Research Philosophy and Ethics', sks: 3 },
              { name: 'Advanced Wireless Communications', sks: 3 },
              { name: 'Classical and Quantum Information Theory', sks: 3 }
            ],
            'Semester 2': [
              { name: 'Research Design', sks: 3 },
              { name: 'Artificial Intelligence for Wireless Communication', sks: 3 },
              { name: 'Advanced Digital Signal Processing and Applications', sks: 3 },
              { name: 'Elective Course 1 (Major)', sks: 3 },
              { name: 'Elective Course 2 (Major)', sks: 3 }
            ],
            'Semester 3': [
              { name: 'Thesis Proposal', sks: 3 },
              { name: 'Thesis 1: Publication', sks: 5 },
              { name: 'Advanced Satellite Systems', sks: 3 },
              { name: 'Elective Course 3 (Major/Minor)', sks: 3 }
            ],
            'Semester 4': [
              { name: 'Thesis 2', sks: 5 },
              { name: 'Elective Course 4 (Major/Minor)', sks: 3 }
            ]
          },
          'NECS': {
            'Semester 1': [
              { name: 'Advanced Engineering Mathematics', sks: 3 },
              { name: 'Deep Learning for Electrical Engineering', sks: 3 },
              { name: 'Entrepreneurship for Engineers', sks: 3 },
              { name: 'Research Philosophy and Ethics', sks: 3 },
              { name: 'Data Network & Protocols', sks: 3 },
              { name: 'Internet of Things and Edge Computing', sks: 3 }
            ],
            'Semester 2': [
              { name: 'Research Design', sks: 3 },
              { name: 'Advanced Network Security', sks: 3 },
              { name: 'Network Mathematics', sks: 3 },
              { name: 'Elective Course 1 (Major)', sks: 3 },
              { name: 'Elective Course 2 (Major)', sks: 3 }
            ],
            'Semester 3': [
              { name: 'Thesis Proposal', sks: 3 },
              { name: 'Thesis 1: Publication', sks: 5 },
              { name: 'Management and Audit of Cyber Security', sks: 3 },
              { name: 'Elective Course 3 (Major/Minor)', sks: 3 }
            ],
            'Semester 4': [
              { name: 'Thesis 2', sks: 5 },
              { name: 'Elective Course 4 (Major/Minor)', sks: 3 }
            ]
          },
          'RMT': {
            'Semester 1': [
              { name: 'Advanced Engineering Mathematics', sks: 3 },
              { name: 'Deep Learning for Electrical Engineering', sks: 3 },
              { name: 'Entrepreneurship for Engineers', sks: 3 },
              { name: 'Research Philosophy and Ethics', sks: 3 },
              { name: 'Digital Telecommunication Policy and Regulation', sks: 3 },
              { name: 'Telecommunication System and Network Planning', sks: 3 }
            ],
            'Semester 2': [
              { name: 'Research Design', sks: 3 },
              { name: 'Digital Business and Telecommunication Project Management', sks: 3 },
              { name: 'Management and Audit of Cyber Security', sks: 3 },
              { name: 'Elective Course 1 (Major)', sks: 3 },
              { name: 'Elective Course 2 (Major)', sks: 3 }
            ],
            'Semester 3': [
              { name: 'Thesis Proposal', sks: 3 },
              { name: 'Thesis 1: Publication', sks: 5 },
              { name: 'Management of Technology and Innovation', sks: 3 },
              { name: 'Elective Course 3 (Major)', sks: 3 }
            ],
            'Semester 4': [
              { name: 'Thesis 2', sks: 5 },
              { name: 'Elective Course 4 (Major)', sks: 3 }
            ]
          },
          'CIS': {
            'Semester 1': [
              { name: 'Advanced Engineering Mathematics', sks: 3 },
              { name: 'Deep Learning for Electrical Engineering', sks: 3 },
              { name: 'Entrepreneurship for Engineers', sks: 3 },
              { name: 'Research Philosophy and Ethics', sks: 3 },
              { name: 'Modeling and Simulation of Control System', sks: 3 },
              { name: 'Intelligence Internet of Things', sks: 3 }
            ],
            'Semester 2': [
              { name: 'Research Design', sks: 3 },
              { name: 'Advanced Embedded System', sks: 3 },
              { name: 'Advanced Robotics', sks: 3 },
              { name: 'Elective Course 1 (Major)', sks: 3 },
              { name: 'Elective Course 2 (Major)', sks: 3 }
            ],
            'Semester 3': [
              { name: 'Thesis Proposal', sks: 3 },
              { name: 'Thesis 1: Publication', sks: 5 },
              { name: 'Advanced Machine Learning', sks: 3 },
              { name: 'Elective Course 3 (Major)', sks: 3 }
            ],
            'Semester 4': [
              { name: 'Thesis 2', sks: 5 },
              { name: 'Elective Course 4 (Major)', sks: 3 }
            ]
          },
          'SES': {
            'Semester 1': [
              { name: 'Advanced Engineering Mathematics', sks: 3 },
              { name: 'Deep Learning for Electrical Engineering', sks: 3 },
              { name: 'Entrepreneurship for Engineers', sks: 3 },
              { name: 'Research Philosophy and Ethics', sks: 3 },
              { name: 'Operation and Control of Energy System', sks: 3 },
              { name: 'Sustainable Energy Planning', sks: 3 }
            ],
            'Semester 2': [
              { name: 'Research Design', sks: 3 },
              { name: 'Energy Regulation and Economics', sks: 3 },
              { name: 'Advanced Power Electronics', sks: 3 },
              { name: 'Elective Course 1 (Major)', sks: 3 },
              { name: 'Elective Course 2 (Major)', sks: 3 }
            ],
            'Semester 3': [
              { name: 'Thesis Proposal', sks: 3 },
              { name: 'Thesis 1: Publication', sks: 5 },
              { name: 'Grid Modernization', sks: 3 },
              { name: 'Elective Course 3 (Major)', sks: 3 }
            ],
            'Semester 4': [
              { name: 'Thesis 2', sks: 5 },
              { name: 'Elective Course 4 (Major)', sks: 3 }
            ]
          },
          'By Research': {
            'Semester 1': [
              { name: 'Advanced Engineering Mathematics', sks: 3 },
              { name: 'Deep Learning for Electrical Engineering', sks: 3 },
              { name: 'Research Philosophy and Ethics', sks: 3 },
              { name: 'Entrepreneurship for Engineers', sks: 3 },
              { name: 'Research Topics 1', sks: 5 }
            ],
            'Semester 2': [
              { name: 'Research Design', sks: 3 },
              { name: 'Thesis Proposal', sks: 3 },
              { name: 'Research Topics 2', sks: 5 },
              { name: 'Elective Course 1 (Major/Minor)', sks: 3 },
              { name: 'Elective Course 2 (Major/Minor)', sks: 3 }
            ],
            'Semester 3': [
              { name: 'Thesis 1', sks: 5 },
              { name: 'Research Topics 3', sks: 5 },
              { name: 'Elective Course 3 (Major/Minor)', sks: 3 }
            ],
            'Semester 4': [
              { name: 'Thesis 2', sks: 5 },
              { name: 'Research Topics 4', sks: 5 }
            ]
          }
        },
        'S2 Informatika': {
          'Data Science': {
            'Semester 1': [
              { name: 'Metodologi Riset', sks: 3 },
              { name: 'Desain Algoritma Lanjut', sks: 4 },
              { name: 'Prinsip Sains Data', sks: 3 },
              { name: 'Pemodelan dan Optimasi Lanjut', sks: 4 }
            ],
            'Semester 2': [
              { name: 'Kecerdasan Buatan Lanjut', sks: 4 },
              { name: 'Proposal Tesis', sks: 3 },
              { name: 'Pemodelan Statistik untuk Sains Data', sks: 4 },
              { name: 'Analitik Big Data Lanjut', sks: 4 }
            ],
            'Semester 3': [
              { name: 'Bisnis Digital', sks: 3 },
              { name: 'Penulisan Akademik dan Presentasi', sks: 4 },
              { name: 'Tugas Akhir 1', sks: 4 },
              { name: 'Pilihan 1', sks: 4 }
            ],
            'Semester 4': [
              { name: 'Pilihan 2', sks: 4 },
              { name: 'Tugas Akhir 2', sks: 6 }
            ]
          },
          'Socio Informatics': {
            'Semester 1': [
              { name: 'Metodologi Riset', sks: 3 },
              { name: 'Desain Algoritma Lanjut', sks: 4 },
              { name: 'Pengenalan sosio Informatika dan Etika', sks: 3 },
              { name: 'Pemodelan dan Optimasi Lanjut', sks: 4 }
            ],
            'Semester 2': [
              { name: 'Kecerdasan Buatan Lanjut', sks: 4 },
              { name: 'Proposal Tesis', sks: 3 },
              { name: 'Ilmu Jejaring', sks: 4 },
              { name: 'Representasi dan Penalaran Pengetahuan', sks: 4 }
            ],
            'Semester 3': [
              { name: 'Bisnis Digital', sks: 3 },
              { name: 'Penulisan Akademik dan Presentasi', sks: 4 },
              { name: 'Tugas Akhir 1', sks: 4 },
              { name: 'Pilihan 1', sks: 4 }
            ],
            'Semester 4': [
              { name: 'Pilihan 2', sks: 4 },
              { name: 'Tugas Akhir 2', sks: 6 }
            ]
          },
          'Computing Infrastructure and Services': {
            'Semester 1': [
              { name: 'Metodologi Riset', sks: 3 },
              { name: 'Desain Algoritma Lanjut', sks: 4 },
              { name: 'Pengenalan Infrastruktur dan Layanan Komputasi', sks: 3 },
              { name: 'Pemodelan dan Optimasi Lanjut', sks: 4 }
            ],
            'Semester 2': [
              { name: 'Kecerdasan Buatan Lanjut', sks: 4 },
              { name: 'Proposal Tesis', sks: 3 },
              { name: 'Internet of Things Lanjut', sks: 4 },
              { name: 'Komputasi Awan Lanjut', sks: 4 }
            ],
            'Semester 3': [
              { name: 'Bisnis Digital', sks: 3 },
              { name: 'Penulisan Akademik dan Presentasi', sks: 4 },
              { name: 'Tugas Akhir 1', sks: 4 },
              { name: 'Pilihan 1', sks: 4 }
            ],
            'Semester 4': [
              { name: 'Pilihan 2', sks: 4 },
              { name: 'Tugas Akhir 2', sks: 6 }
            ]
          },
          'Computer Vision': {
            'Semester 1': [
              { name: 'Metodologi Riset', sks: 3 },
              { name: 'Desain Algoritma Lanjut', sks: 4 },
              { name: 'Tren pada Visi Komputer', sks: 3 },
              { name: 'Pemodelan dan Optimasi Lanjut', sks: 4 }
            ],
            'Semester 2': [
              { name: 'Kecerdasan Buatan Lanjut', sks: 4 },
              { name: 'Proposal Tesis', sks: 3 },
              { name: 'Pengolahan Citra Digital Lanjut', sks: 4 },
              { name: 'Visi Komputer Fundamental', sks: 4 }
            ],
            'Semester 3': [
              { name: 'Bisnis Digital', sks: 3 },
              { name: 'Penulisan Akademik dan Presentasi', sks: 4 },
              { name: 'Tugas Akhir 1', sks: 4 },
              { name: 'Pilihan 1', sks: 4 }
            ],
            'Semester 4': [
              { name: 'Pilihan 2', sks: 4 },
              { name: 'Tugas Akhir 2', sks: 6 }
            ]
          },
          'Software Engineering': {
            'Semester 1': [
              { name: 'Metodologi Riset', sks: 3 },
              { name: 'Desain Algoritma Lanjut', sks: 4 },
              { name: 'Tren pada Rekayasa Perangkat Lunak', sks: 3 },
              { name: 'Pemodelan dan Optimasi Lanjut', sks: 4 }
            ],
            'Semester 2': [
              { name: 'Kecerdasan Buatan Lanjut', sks: 4 },
              { name: 'Proposal Tesis', sks: 3 },
              { name: 'Rekayasa Perangkat Lunak Lanjut', sks: 4 },
              { name: 'Rekayasa Perangkat Lunak Perusahaan', sks: 4 }
            ],
            'Semester 3': [
              { name: 'Bisnis Digital', sks: 3 },
              { name: 'Penulisan Akademik dan Presentasi', sks: 4 },
              { name: 'Tugas Akhir 1', sks: 4 },
              { name: 'Pilihan 1', sks: 4 }
            ],
            'Semester 4': [
              { name: 'Pilihan 2', sks: 4 },
              { name: 'Tugas Akhir 2', sks: 6 }
            ]
          }
        },
        'S2 Cybersecurity & Digital Forensics': {
          'Research Based': {
            'Semester 1': [
              { name: 'Prinsip Dasar Keamanan', sks: 4 },
              { name: 'Kerentanan Arsitektur Sistem Komputer dan Jaringan', sks: 3 },
              { name: 'Kerangka Kerja Forensik Digital', sks: 3 },
              { name: 'Sekuritas dan Privasi untuk Pengguna Teknologi Informasi', sks: 3 },
              { name: 'Proyek pada Akademik', sks: 3 },
              { name: 'Metodologi Riset', sks: 3 }
            ],
            'Semester 2': [
              { name: 'MK Lanjutan 1', sks: 3 },
              { name: 'MK Lanjutan 2', sks: 3 },
              { name: 'MK Pendukung 1', sks: 3 },
              { name: 'MK Pendukung 2', sks: 3 },
              { name: 'Implementasi Proyek 1', sks: 4 }
            ],
            'Semester 3': [
              { name: 'Implementasi Proyek 2', sks: 4 },
              { name: 'Keamanan Siber dan Forensik Digital pada Era Bisnis Digital', sks: 3 },
              { name: 'Penulisan Tesis/ Publikasi / Dokumen Prototipe', sks: 3 },
              { name: 'Proyek pada Industri', sks: 3 }
            ],
            'Semester 4': [
              { name: 'Thesis', sks: 6 }
            ]
          },
          'Course Based': {
            'Semester 1': [
              { name: 'Prinsip Dasar Keamanan', sks: 4 },
              { name: 'Kerentanan Arsitektur Sistem Komputer dan Jaringan', sks: 3 },
              { name: 'Kerangka Kerja Forensik Digital', sks: 3 },
              { name: 'Sekuritas dan Privasi untuk Pengguna Teknologi Informasi', sks: 3 },
              { name: 'Proyek pada Akademik', sks: 3 },
              { name: 'Metodologi Riset', sks: 3 }
            ],
            'Semester 2': [
              { name: 'MK Wajib Peminatan 1', sks: 3 },
              { name: 'MK Wajib Peminatan 2', sks: 3 },
              { name: 'MK Pendukung 1', sks: 3 },
              { name: 'MK Pendukung 2', sks: 3 },
              { name: 'Implementasi Proyek 1', sks: 4 }
            ],
            'Semester 3': [
              { name: 'Implementasi Proyek 2', sks: 4 },
              { name: 'Keamanan Siber dan Forensik Digital pada Era Bisnis Digital', sks: 3 },
              { name: 'Penulisan Tesis/ Publikasi / Dokumen Prototipe', sks: 3 },
              { name: 'Proyek pada Industri', sks: 3 }
            ],
            'Semester 4': [
              { name: 'Thesis', sks: 6 }
            ]
          },
          'Project Based': {
            'Semester 1': [
              { name: 'Prinsip Dasar Keamanan', sks: 4 },
              { name: 'Kerentanan Arsitektur Sistem Komputer dan Jaringan', sks: 3 },
              { name: 'Kerangka Kerja Forensik Digital', sks: 3 },
              { name: 'Sekuritas dan Privasi untuk Pengguna Teknologi Informasi', sks: 3 },
              { name: 'Proyek pada Akademik', sks: 3 },
              { name: 'Metodologi Riset', sks: 3 }
            ],
            'Semester 2': [
              { name: 'MK Lanjutan 1', sks: 3 },
              { name: 'MK Lanjutan 2', sks: 3 },
              { name: 'MK Pendukung 1', sks: 3 },
              { name: 'MK Pendukung 2', sks: 3 },
              { name: 'Implementasi Proyek 1', sks: 4 }
            ],
            'Semester 3': [
              { name: 'Implementasi Proyek 2', sks: 4 },
              { name: 'Keamanan Siber dan Forensik Digital pada Era Bisnis Digital', sks: 3 },
              { name: 'Penulisan Tesis/ Publikasi / Dokumen Prototipe', sks: 3 },
              { name: 'Proyek pada Industri', sks: 3 }
            ],
            'Semester 4': [
              { name: 'Thesis', sks: 6 }
            ]
          }
        },
        'S2 Teknik Industri': {
          'Skema by Course': {
            'Semester 1': [
              { name: 'Filsafat Teknik Industri', sks: 2 },
              { name: 'Analisis Statistik', sks: 3 },
              { name: 'Metode Optimasi', sks: 2 },
              { name: 'ICT Business Management', sks: 2 },
              { name: 'Pilihan 1', sks: 3 }
            ],
            'Semester 2': [
              { name: 'Pemodelan Sistem Lanjut', sks: 3 },
              { name: 'Metodologi Penelitian', sks: 3 },
              { name: 'Rekayasa Sistem Industri', sks: 3 },
              { name: 'Pilihan 2', sks: 3 },
              { name: 'Pilihan 3', sks: 3 }
            ],
            'Semester 3': [
              { name: 'Desk Evaluation', sks: 3 },
              { name: 'Proposal Tesis', sks: 6 }
            ],
            'Semester 4': [
              { name: 'Pemantauan', sks: 6 },
              { name: 'Thesis 1', sks: 6 },
              { name: 'Thesis 2', sks: 6 }
            ]
          },
          'Skema by Research': {
            'Semester 1': [
              { name: 'Filsafat Teknik Industri', sks: 2 },
              { name: 'Analisis Statistik', sks: 3 },
              { name: 'Metode Optimasi', sks: 2 },
              { name: 'ICT Business Management', sks: 2 },
              { name: 'Pilihan 1', sks: 3 }
            ],
            'Semester 2': [
              { name: 'Pemodelan Sistem Lanjut', sks: 3 },
              { name: 'Metodologi Penelitian', sks: 3 },
              { name: 'Rekayasa Sistem Industri', sks: 3 },
              { name: 'Pilihan 2', sks: 3 },
              { name: 'Pilihan 3', sks: 3 }
            ],
            'Semester 3': [
              { name: 'Penelitian Lapangan', sks: 3 },
              { name: 'Proposal Tesis', sks: 6 }
            ],
            'Semester 4': [
              { name: 'Publikasi', sks: 6 },
              { name: 'Thesis 1', sks: 6 },
              { name: 'Thesis 2', sks: 6 }
            ]
          },
          'Skema by Project': {
            'Semester 1': [
              { name: 'Filsafat Teknik Industri', sks: 2 },
              { name: 'Analisis Statistik', sks: 3 },
              { name: 'Metode Optimasi', sks: 2 },
              { name: 'ICT Business Management', sks: 2 },
              { name: 'Pilihan 1', sks: 3 }
            ],
            'Semester 2': [
              { name: 'Pemodelan Sistem Lanjut', sks: 3 },
              { name: 'Metodologi Penelitian', sks: 3 },
              { name: 'Rekayasa Sistem Industri', sks: 3 },
              { name: 'Pilihan 2', sks: 3 },
              { name: 'Pilihan 3', sks: 3 }
            ],
            'Semester 3': [
              { name: 'Workshop 1', sks: 3 },
              { name: 'Proposal Tesis', sks: 6 }
            ],
            'Semester 4': [
              { name: 'Workshop 2', sks: 6 },
              { name: 'Thesis 1', sks: 6 },
              { name: 'Thesis 2', sks: 6 }
            ]
          }
        },
        'S2 Akuntansi': {
          'Accounting and Financial Modelling': {
            'Semester 1': [
              { name: 'Kreativitas Bisnis dan Digipreneur', sks: 3 },
              { name: 'Analisis Akuntansi Perpajakan', sks: 4 },
              { name: 'Etika Bisnis', sks: 3 },
              { name: 'Pengantar Akuntansi Karbon', sks: 4 }
            ],
            'Semester 2': [
              { name: 'Analisis Standar Akuntansi Indonesia', sks: 4 },
              { name: 'Perilaku Keuangan dan Akuntansi', sks: 4 },
              { name: 'Kecerdasan Buatan dalam Bisnis', sks: 3 },
              { name: 'Lingkungan , Sosial, dan Tata Kelola', sks: 3 }
            ],
            'Semester 3': [
              { name: 'Metode Penelitian Akuntansi', sks: 4 },
              { name: 'Analisis Data Multivariat', sks: 4 },
              { name: 'Pemodelan Keuangan', sks: 3 },
              { name: 'Penilaian Perusahaan, Merger and Akuisisi', sks: 3 },
              { name: 'Seminar Akuntansi Keuangan', sks: 3 }
            ],
            'Semester 4': [
              { name: 'Proposal Tugas Akhir', sks: 3 },
              { name: 'Tugas Akhir', sks: 6 }
            ]
          },
          'Investigation Audit': {
            'Semester 1': [
              { name: 'Kreativitas Bisnis dan Digipreneur', sks: 3 },
              { name: 'Analisis Akuntansi Perpajakan', sks: 4 },
              { name: 'Etika Bisnis', sks: 3 },
              { name: 'Pengantar Akuntansi Karbon', sks: 4 }
            ],
            'Semester 2': [
              { name: 'Analisis Standar Akuntansi Indonesia', sks: 4 },
              { name: 'Perilaku Keuangan dan Akuntansi', sks: 4 },
              { name: 'Kecerdasan Buatan dalam Bisnis', sks: 3 },
              { name: 'Lingkungan , Sosial, dan Tata Kelola', sks: 3 }
            ],
            'Semester 3': [
              { name: 'Metode Penelitian Akuntansi', sks: 4 },
              { name: 'Analisis Data Multivariat', sks: 4 },
              { name: 'Akuntansi Forensik dan Investigasi Keuangan', sks: 3 },
              { name: 'Pencegahan Kecurangan', sks: 3 },
              { name: 'Masalah Terkini dalam Audit', sks: 3 }
            ],
            'Semester 4': [
              { name: 'Proposal Tugas Akhir', sks: 3 },
              { name: 'Tugas Akhir', sks: 6 }
            ]
          },
          'Management Accounting System': {
            'Semester 1': [
              { name: 'Kreativitas Bisnis dan Digipreneur', sks: 3 },
              { name: 'Analisis Akuntansi Perpajakan', sks: 4 },
              { name: 'Etika Bisnis', sks: 3 },
              { name: 'Pengantar Akuntansi Karbon', sks: 4 }
            ],
            'Semester 2': [
              { name: 'Analisis Standar Akuntansi Indonesia', sks: 4 },
              { name: 'Perilaku Keuangan dan Akuntansi', sks: 4 },
              { name: 'Kecerdasan Buatan dalam Bisnis', sks: 3 },
              { name: 'Lingkungan , Sosial, dan Tata Kelola', sks: 3 }
            ],
            'Semester 3': [
              { name: 'Metode Penelitian Akuntansi', sks: 4 },
              { name: 'Analisis Data Multivariat', sks: 4 },
              { name: 'Akuntansi Manajemen Menengah', sks: 3 },
              { name: 'Akuntansi Manajemen Strategis', sks: 3 },
              { name: 'Akuntansi Manajemen Kontemporer', sks: 3 }
            ],
            'Semester 4': [
              { name: 'Proposal Tugas Akhir', sks: 3 },
              { name: 'Tugas Akhir', sks: 6 }
            ]
          }
        },
        'S2 Ilmu Komunikasi': {
          'Digital Communication Management': {
            'Semester 1': [
              { name: 'Teori Komunikasi dan Media', sks: 4 },
              { name: 'Metode Riset Analitik', sks: 4 },
              { name: 'Etika Filsafat dan Komunikasi', sks: 3 },
              { name: 'Manajemen Kewirausahaan', sks: 3 },
              { name: 'Komunikasi Global di era Digital', sks: 3 },
              { name: 'Kepemimpinan dan Transformasi Digital', sks: 3 }
            ],
            'Semester 2': [
              { name: 'Manajemen Komunikasi Korporasi', sks: 4 },
              { name: 'Manajemen Isu dan Krisis', sks: 4 },
              { name: 'Audit Manajemen Komunikasi', sks: 4 },
              { name: 'Strategi dan Program Manajemen Komunikasi Digital', sks: 4 },
              { name: 'Sertifikasi', sks: 4 }
            ],
            'Semester 3': [
              { name: 'Kajian Literatur', sks: 4 },
              { name: 'Proposal Tugas Akhir', sks: 5 },
              { name: 'Tugas Akhir', sks: 7 }
            ]
          },
          'Digital Media': {
            'Semester 1': [
              { name: 'Teori Komunikasi dan Media', sks: 4 },
              { name: 'Metode Riset Analitik', sks: 4 },
              { name: 'Etika Filsafat dan Komunikasi', sks: 3 },
              { name: 'Manajemen Kewirausahaan', sks: 3 },
              { name: 'Komunikasi Global di era Digital', sks: 3 },
              { name: 'Kepemimpinan dan Transformasi Digital', sks: 3 }
            ],
            'Semester 2': [
              { name: 'Studi Budaya dan Media Digital', sks: 4 },
              { name: 'Ekonomi politik media digital', sks: 4 },
              { name: 'Bisnis Media Digital', sks: 4 },
              { name: 'Analisis Media Digital', sks: 4 },
              { name: 'Sertifikasi', sks: 4 }
            ],
            'Semester 3': [
              { name: 'Kajian Literatur', sks: 4 },
              { name: 'Proposal Tugas Akhir', sks: 5 },
              { name: 'Tugas Akhir', sks: 7 }
            ]
          }
        },
        'S2 Administrasi Bisnis': {
          'Business Governance': {
            'Semester 1': [
              { name: 'Corporate Governance Strategic', sks: 3 },
              { name: 'Business Global and Corporate Strategic', sks: 3 },
              { name: 'Human Capital Strategy', sks: 3 },
              { name: 'Knowledge Management Strategic', sks: 3 },
              { name: 'Enterprise Resource Planning', sks: 3 }
            ],
            'Semester 2': [
              { name: 'Corporate Finance Strategic', sks: 3 },
              { name: 'Supply Chain Management', sks: 3 },
              { name: 'Strategic Global Entrepreneurship', sks: 3 },
              { name: 'Research Method & Scientific Writing', sks: 3 },
              { name: 'Entrepreuneurial Marketing', sks: 3 }
            ],
            'Semester 3': [
              { name: 'Big Data Management & Analytics', sks: 3 },
              { name: 'Specialization Course 1: Corporate Performance Management', sks: 3 },
              { name: 'Specialization Course 2: Corporate Social Resposibility', sks: 3 },
              { name: 'Governance Risk Compliance', sks: 3 }
            ],
            'Semester 4': [
              { name: 'Proposal Thesis/Project', sks: 4 },
              { name: 'Thesis/Project', sks: 8 }
            ]
          },
          'Strategic Leadership': {
            'Semester 1': [
              { name: 'Corporate Governance Strategic', sks: 3 },
              { name: 'Business Global and Corporate Strategic', sks: 3 },
              { name: 'Human Capital Strategy', sks: 3 },
              { name: 'Knowledge Management Strategic', sks: 3 },
              { name: 'Enterprise Resource Planning', sks: 3 }
            ],
            'Semester 2': [
              { name: 'Corporate Finance Strategic', sks: 3 },
              { name: 'Supply Chain Management', sks: 3 },
              { name: 'Strategic Global Entrepreneurship', sks: 3 },
              { name: 'Research Method & Scientific Writing', sks: 3 },
              { name: 'Entrepreuneurial Marketing', sks: 3 }
            ],
            'Semester 3': [
              { name: 'Big Data Management & Analytics', sks: 3 },
              { name: 'Specialization Course 1: Digital Leadership', sks: 3 },
              { name: 'Specialization Course 2: Strategic Business Patnership', sks: 3 },
              { name: 'Corporate Culture', sks: 3 }
            ],
            'Semester 4': [
              { name: 'Proposal Thesis/Project', sks: 4 },
              { name: 'Thesis/Project', sks: 8 }
            ]
          },
          'Start-Up Business Strategy': {
            'Semester 1': [
              { name: 'Corporate Governance Strategic', sks: 3 },
              { name: 'Business Global and Corporate Strategic', sks: 3 },
              { name: 'Human Capital Strategy', sks: 3 },
              { name: 'Knowledge Management Strategic', sks: 3 },
              { name: 'Enterprise Resource Planning', sks: 3 }
            ],
            'Semester 2': [
              { name: 'Corporate Finance Strategic', sks: 3 },
              { name: 'Supply Chain Management', sks: 3 },
              { name: 'Strategic Global Entrepreneurship', sks: 3 },
              { name: 'Research Method & Scientific Writing', sks: 3 },
              { name: 'Entrepreuneurial Marketing', sks: 3 }
            ],
            'Semester 3': [
              { name: 'Big Data Management & Analytics', sks: 3 },
              { name: 'Specialization Course 1: Digital Innovation', sks: 3 },
              { name: 'Specialization Course 2: Business Idea and Opportunities', sks: 3 },
              { name: 'Investor Pitching Strategic', sks: 3 }
            ],
            'Semester 4': [
              { name: 'Proposal Thesis/Project', sks: 4 },
              { name: 'Thesis/Project', sks: 8 }
            ]
          },
          'Global Business Strategy': {
            'Semester 1': [
              { name: 'Corporate Governance Strategic', sks: 3 },
              { name: 'Business Global and Corporate Strategic', sks: 3 },
              { name: 'Human Capital Strategy', sks: 3 },
              { name: 'Knowledge Management Strategic', sks: 3 },
              { name: 'Enterprise Resource Planning', sks: 3 }
            ],
            'Semester 2': [
              { name: 'Corporate Finance Strategic', sks: 3 },
              { name: 'Supply Chain Management', sks: 3 },
              { name: 'Strategic Global Entrepreneurship', sks: 3 },
              { name: 'Research Method & Scientific Writing', sks: 3 },
              { name: 'Entrepreuneurial Marketing', sks: 3 }
            ],
            'Semester 3': [
              { name: 'Big Data Management & Analytics', sks: 3 },
              { name: 'Specialization Course 1: Global Expansion Strategy', sks: 3 },
              { name: 'Specialization Course 2: Managing Diversity', sks: 3 },
              { name: 'Global Business Communication', sks: 3 }
            ],
            'Semester 4': [
              { name: 'Proposal Thesis/Project', sks: 4 },
              { name: 'Thesis/Project', sks: 8 }
            ]
          }
        },
        'S2 Desain': {
          'Skema by Research': {
            'Semester 1': [
              { name: 'Design Thinking', sks: 6 },
              { name: 'Design, Culture, and Humanity', sks: 6 },
              { name: 'Design, Business, and Strategy', sks: 6 }
            ],
            'Semester 2': [
              { name: 'MK Pilihan: Service Design / Sustainability Design', sks: 2 },
              { name: 'Design Thinking & Research Methods', sks: 6 },
              { name: 'Pra Thesis', sks: 6 },
              { name: 'Academic Writing', sks: 4 }
            ],
            'Semester 3': [
              { name: 'Final Exam (Thesis)', sks: 8 },
              { name: 'Publication Ethics', sks: 4 },
              { name: 'Academic Publication', sks: 6 }
            ]
          },
          'Skema by Project': {
            'Semester 1': [
              { name: 'Design Thinking', sks: 6 },
              { name: 'Design, Culture, and Humanity', sks: 6 },
              { name: 'Design, Business, and Strategy', sks: 6 }
            ],
            'Semester 2': [
              { name: 'MK Pilihan: Service Design / Sustainability Design', sks: 2 },
              { name: 'Design & Innovation for Project', sks: 6 },
              { name: 'Pra Project', sks: 6 },
              { name: 'Portofolio', sks: 4 }
            ],
            'Semester 3': [
              { name: 'Final Exam (Thesis)', sks: 8 },
              { name: 'Intelectual Property Management', sks: 4 },
              { name: 'Design Expo', sks: 6 }
            ]
          }
        }
      }
    };
    
    return curriculumData;
  } catch (error) {
    console.error('Failed to load curriculum data:', error);
    throw error;
  }
};