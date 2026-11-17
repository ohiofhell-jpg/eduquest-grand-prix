/**
 * EduQuest - Data Materi & Bank Soal (Scuderia Ferrari & STEM Edition)
 * File ini memuat data kurikulum edukatif (Fisika, Kimia, Matematika Wajib & Lanjut, TIK/Koding)
 * dilengkapi studi kasus nyata sains balap Formula 1 Ferrari (Aerodinamika, KERS, Telemetri, ECU)
 * serta 52 bank soal pilihan ganda lengkap dengan pembahasan.
 */

// ==========================================
// DATA MATERI BELAJAR (10 Bab Lengkap + Studi Kasus F1)
// ==========================================
const MATERI_DATA = [
  // --- FISIKA ---
  {
    id: "fis-01",
    kategori: "Fisika",
    jenjang: "SMP / SMA",
    judul: "Hukum Gerak Newton & Penerapannya",
    icon: "🍎",
    deskripsi: "Memahami bagaimana benda bergerak, pengaruh gaya, dan mekanika klasik pada kendaraan balap.",
    estimasiWaktu: "10 Menit",
    tujuanBelajar: [
      "Membedakan konsep Hukum I, II, dan III Newton.",
      "Mampu menghitung percepatan menggunakan rumus F = m × a.",
      "Memahami bagaimana downforce sayap mobil Ferrari SF-25 bekerja berdasarkan Hukum III Newton."
    ],
    rangkumanPoin: [
      {
        subjudul: "1. Hukum I Newton (Kelembaman / Inersia)",
        teks: "Benda yang diam akan tetap diam, dan benda yang bergerak lurus beraturan akan tetap bergerak, kecuali ada gaya luar yang mempengaruhinya (ΣF = 0). Contoh: Tubuh pembalap tertekan ke sabuk pengaman saat pengereman mendadak di tikungan."
      },
      {
        subjudul: "2. Hukum II Newton (Percepatan & Massa)",
        teks: "Percepatan berbanding lurus dengan gaya dorong mesin dan berbanding terbalik dengan massa mobil (F = m × a). Mobil Ferrari F1 dibuat seringan mungkin (±798 kg) agar menghasilkan akselerasi 0-100 km/jam hanya dalam 2,4 detik!"
      },
      {
        subjudul: "3. Hukum III Newton (Aksi - Reaksi & Downforce)",
        teks: "F_aksi = -F_reaksi. Sayap aerodinamika Ferrari membelokkan aliran udara ke atas (aksi), sehingga udara memberikan gaya reaksi ke bawah (downforce) yang menekan ban ke aspal dengan gaya ribuan Newton."
      }
    ],
    ilustrasi: {
      tipe: "formula",
      label: "🏎️ Studi Kasus F1: Akselerasi Mobil Ferrari SF-25",
      konten: "Massa mobil F1 (m) = 800 kg\nGaya dorong mesin V6 Turbo Hybrid (F) = 9.600 N\n\nPercepatan (a) = F / m = 9.600 / 800 = 12 m/s² (1,22 G Force!)\nArtinya kecepatan bertambah 43,2 km/jam setiap detiknya!"
    },
    tipsMengingat: "Ingat prinsip F1: F = m · a. Ingin akselerasi kencang? Naikkan tenaga mesin (F) atau pangkas bobot mobil (m) seringan mungkin!"
  },
  {
    id: "fis-02",
    kategori: "Fisika",
    jenjang: "SMA",
    judul: "Energi, Usaha, dan Kekekalan Energi Mekanik",
    icon: "⚡",
    deskripsi: "Eksplorasi hubungan antara gaya, perpindahan, energi kinetik, dan sistem regenerasi energi KERS.",
    estimasiWaktu: "12 Menit",
    tujuanBelajar: [
      "Mendefinisikan usaha dalam fisika dan syarat terjadinya usaha.",
      "Menghitung Energi Potensial Gravitasi dan Energi Kinetik.",
      "Menganalisis sistem MGU-K / KERS Formula 1 dalam memulihkan energi kinetik saat pengereman."
    ],
    rangkumanPoin: [
      {
        subjudul: "1. Usaha (Work)",
        teks: "Usaha terjadi jika gaya (F) menyebabkan perpindahan benda (s). W = F × s × cos(θ). Saat mobil balap mengerem, gaya gesek rem melakukan usaha negatif untuk memperlambat laju mobil."
      },
      {
        subjudul: "2. Energi Kinetik & Potensial",
        teks: "Energi Kinetik adalah energi gerak: Ek = ½ × m × v². Karena kecepatan (v) dikuadratkan, melaju pada 300 km/jam memiliki energi kinetik 4 kali lebih besar dibanding melaju pada 150 km/jam!"
      },
      {
        subjudul: "3. Hukum Kekekalan Energi & F1 KERS",
        teks: "Energi tidak musnah, melainkan berubah bentuk. Pada Ferrari F1, sistem MGU-K menangkap energi kinetik yang terbuang saat pengereman dan mengubahnya menjadi energi listrik baterai berdaya 160 HP!"
      }
    ],
    ilustrasi: {
      tipe: "diagram",
      label: "🏎️ Siklus Energi MGU-K Ferrari F1",
      konten: "Akselerasi Penuh  : Energi Kimia Bahan Bakar + Baterai -> Energi Kinetik Roda\nPengereman Keras : Energi Kinetik Mobil -> MGU-K Generator -> Energi Listrik Baterai\nKeluar Tikungan   : Baterai menembakkan dorongan ekstra 120 kW (160 HP)!"
    },
    tipsMengingat: "Kinetik itu 'Gerak Kuadrat' (½ m v²). Makin kencang mobil melaju, energi kinetik melonjak kuadratik!"
  },

  // --- KIMIA ---
  {
    id: "kim-01",
    kategori: "Kimia",
    jenjang: "SMA",
    judul: "Struktur Atom & Tabel Periodik Unsur",
    icon: "🧪",
    deskripsi: "Menyelami penyusun materi: proton, neutron, elektron, serta rahasia serat karbon dan material canggih.",
    estimasiWaktu: "10 Menit",
    tujuanBelajar: [
      "Mengetahui partikel dasar penyusun atom (proton, elektron, neutron).",
      "Membaca nomor atom dan nomor massa pada notasi unsur.",
      "Memahami sifat atom Karbon (C) yang memungkinkan terbentuknya sasis serat karbon kokoh pada mobil F1."
    ],
    rangkumanPoin: [
      {
        subjudul: "1. Partikel Subatomik",
        teks: "Inti atom terdiri dari Proton bermuatan positif dan Neutron netral, dikelilingi Elektron negatif pada kulit orbital. Muatan seimbang membuat atom netral."
      },
      {
        subjudul: "2. Notasi Atom",
        teks: "Notasi: ᵃ_z X. A = Nomor Massa (Proton + Neutron), Z = Nomor Atom (Jumlah Proton = Elektron). Jumlah neutron = A - Z."
      },
      {
        subjudul: "3. Keistimewaan Atom Karbon (¹²₆C)",
        teks: "Karbon memiliki 4 elektron valensi yang mampu membentuk ikatan kovalen rantai panjang yang sangat kuat dan ringan. Ini menjadi fondasi komposit serat karbon (carbon fiber) sasis mobil balap Ferrari!"
      }
    ],
    ilustrasi: {
      tipe: "formula",
      label: "Contoh Notasi Karbon & Natrium",
      konten: "¹²₆C (Karbon Sasis F1) : Proton = 6, Elektron = 6, Neutron = 12 - 6 = 6\n²³₁₁Na (Natrium Pendingin): Proton = 11, Elektron = 11, Neutron = 23 - 11 = 12"
    },
    tipsMengingat: "GOLONGAN = elektron terluar. PERIODE = jumlah lapisan kulit. Karbon Golongan IVA adalah raja material modern!"
  },
  {
    id: "kim-02",
    kategori: "Kimia",
    jenjang: "SMA",
    judul: "Ikatan Kimia: Kovalen vs Ionik",
    icon: "🔬",
    deskripsi: "Mengapa atom berikatan? Kaidah oktet, transfer elektron, dan kekuatan ikatan polimer ban balap.",
    estimasiWaktu: "11 Menit",
    tujuanBelajar: [
      "Memahami aturan oktet dan duplet untuk mencapai kestabilan.",
      "Membedakan ikatan ionik dan ikatan kovalen.",
      "Mengetahui peran ikatan kovalen pada polimer karet ban balap Pirelli F1."
    ],
    rangkumanPoin: [
      {
        subjudul: "1. Kaidah Kestabilan (Oktet)",
        teks: "Atom-atom berikatan untuk mencapai 8 elektron valensi yang stabil seperti konfigurasi gas mulia."
      },
      {
        subjudul: "2. Ikatan Ionik (Elektrovalen)",
        teks: "Serah-terima elektron antara Logam dan Non-Logam membentuk ion positif dan negatif dengan gaya tarik elektrostatik tinggi. Contoh: NaCl (garam), LiF pada baterai."
      },
      {
        subjudul: "3. Ikatan Kovalen & Vulkanisasi Karet",
        teks: "Pemakaian bersama pasangan elektron sesama non-logam. Pada ban balap F1, rantai polimer karet diikat silang oleh jembatan kovalen sulfur (vulkanisasi) agar tahan gesekan suhu 110°C di sirkuit!"
      }
    ],
    ilustrasi: {
      tipe: "diagram",
      label: "Perbandingan Cepat Ikatan",
      konten: "IKATAN IONIK  : Logam + Non-Logam (Transfer Elektron) -> Garam, Kristal Elektrolit\nIKATAN KOVALEN: Non-Logam + Non-Logam (Sharing Elektron) -> Polimer Ban Balap, H₂O, CO₂"
    },
    tipsMengingat: "IONIK = 'Ikhlas serah terima beda logam'. KOVALEN = 'Kongsi patungan elektron sesama non-logam'."
  },

  // --- MATEMATIKA WAJIB ---
  {
    id: "mat-w01",
    kategori: "Matematika Wajib",
    jenjang: "SMP / SMA",
    judul: "Persamaan & Fungsi Kuadrat",
    icon: "📐",
    deskripsi: "Bentuk umum ax² + bx + c = 0, rumus ABC, diskriminan, dan lintasan parabola proyektil.",
    estimasiWaktu: "12 Menit",
    tujuanBelajar: [
      "Menentukan akar-akar persamaan kuadrat dengan pemfaktoran dan rumus kuadratik (Rumus ABC).",
      "Menganalisis jenis akar menggunakan nilai Diskriminan (D = b² - 4ac).",
      "Memahami kurva parabola fungsi kuadrat."
    ],
    rangkumanPoin: [
      {
        subjudul: "1. Bentuk Umum Persamaan Kuadrat",
        teks: "ax² + bx + c = 0 dengan a ≠ 0. Nilai x pembuat nol disebut akar-akar persamaan kuadrat (x₁ dan x₂)."
      },
      {
        subjudul: "2. Rumus ABC",
        teks: "x₁,₂ = [-b ± √(b² - 4ac)] / (2a). Berlaku untuk semua bentuk persamaan kuadrat baik rasional maupun irasional."
      },
      {
        subjudul: "3. Diskriminan (D = b² - 4ac)",
        teks: "D > 0: 2 akar real berbeda. D = 0: 2 akar real kembar (menyinggung sumbu X). D < 0: akar imajiner (tidak memotong sumbu X)."
      }
    ],
    ilustrasi: {
      tipe: "formula",
      label: "Contoh Soal",
      konten: "x² - 5x + 6 = 0\n(x - 2)(x - 3) = 0  -> x₁ = 2 atau x₂ = 3\nDiskriminan: D = (-5)² - 4(1)(6) = 25 - 24 = 1 (> 0, 2 akar real nyata)."
    },
    tipsMengingat: "Nilai 'a' menentukan bentuk kurva: a > 0 senyum (terbuka ke atas), a < 0 cemberut (terbuka ke bawah)."
  },
  {
    id: "mat-w02",
    kategori: "Matematika Wajib",
    jenjang: "SMA",
    judul: "Barisan & Deret Aritmatika serta Geometri",
    icon: "🔢",
    deskripsi: "Pola bilangan teratur: selisih beda konstan vs rasio pengali konstan.",
    estimasiWaktu: "10 Menit",
    tujuanBelajar: [
      "Membedakan barisan aritmatika (beda b) dan geometri (rasio r).",
      "Menghitung suku ke-n (Un) dan jumlah n suku pertama (Sn).",
      "Menganalisis strategi penghematan bahan bakar lap per lap di balapan."
    ],
    rangkumanPoin: [
      {
        subjudul: "1. Barisan Aritmatika",
        teks: "Penambahan/pengurangan konstan: b = Uₙ - Uₙ₋₁. Suku ke-n: Un = a + (n - 1)b. Deret: Sn = n/2 × (a + Un)."
      },
      {
        subjudul: "2. Barisan Geometri",
        teks: "Perkalian/pembagian konstan: r = Uₙ / Uₙ₋₁. Suku ke-n: Un = a · rⁿ⁻¹. Deret: Sn = a(rⁿ - 1) / (r - 1)."
      },
      {
        subjudul: "3. Deret Geometri Tak Hingga",
        teks: "Untuk deret konvergen (-1 < r < 1): S_∞ = a / (1 - r)."
      }
    ],
    ilustrasi: {
      tipe: "formula",
      label: "Rumus Kunci",
      konten: "Aritmatika (Beda +) : Un = a + (n - 1)b\nGeometri   (Rasio ×) : Un = a · r^(n - 1)\nTak Hingga (Konvergen): S_∞ = a / (1 - r)"
    },
    tipsMengingat: "Aritmatika = Aditif (tambah beda). Geometri = Gandakan (kali rasio)."
  },

  // --- MATEMATIKA LANJUT ---
  {
    id: "mat-l01",
    kategori: "Matematika Lanjut",
    jenjang: "SMA Lanjut",
    judul: "Trigonometri Dasar & Identitas Sudut",
    icon: "📐",
    deskripsi: "Sinus, Kosinus, Tangen, sudut istimewa, dan geometri sudut apex tikungan sirkuit.",
    estimasiWaktu: "12 Menit",
    tujuanBelajar: [
      "Mendefinisikan sin, cos, tan sebagai perbandingan sisi segitiga siku-siku.",
      "Menghafal perbandingan sudut istimewa (0°, 30°, 45°, 60°, 90°).",
      "Membuktikan dan memakai identitas sin²(x) + cos²(x) = 1."
    ],
    rangkumanPoin: [
      {
        subjudul: "1. Perbandingan Siku-Siku",
        teks: "sin(θ) = Depan / Miring (Demi), cos(θ) = Samping / Miring (Sami), tan(θ) = Depan / Samping (Desa)."
      },
      {
        subjudul: "2. Sudut Istimewa Kuadran I",
        teks: "sin 30° = 1/2, sin 45° = 1/2 √2, sin 60° = 1/2 √3, sin 90° = 1. cos bernilai terbalik dari sin."
      },
      {
        subjudul: "3. Identitas Trigonometri Utama",
        teks: "sin²(θ) + cos²(θ) = 1. Dari rumus ini diperoleh 1 + tan²(θ) = sec²(θ)."
      }
    ],
    ilustrasi: {
      tipe: "diagram",
      label: "Trigonometri Sudut Tikungan (Apex)",
      konten: "sin(θ) = DE / MI (Sin-De-Mi)\ncos(θ) = SA / MI (Cos-Sa-Mi)\ntan(θ) = DE / SA (Tan-De-Sa)\n\nHubungan Pythagoras: sin²(x) + cos²(x) = 1"
    },
    tipsMengingat: "Ingat 'Sin-Demi, Cos-Sami, Tan-Desa'. Sudut 45°: tan(45°) = 1, sin(45°) = cos(45°) = 1/2 √2."
  },
  {
    id: "mat-l02",
    kategori: "Matematika Lanjut",
    jenjang: "SMA Lanjut",
    judul: "Pengantar Kalkulus: Turunan Fungsi Aljabar",
    icon: "📈",
    deskripsi: "Konsep laju perubahan sesaat, aturan pangkat, dan telemetri percepatan mobil balap F1.",
    estimasiWaktu: "14 Menit",
    tujuanBelajar: [
      "Memahami definisi turunan sebagai limit laju perubahan fungsi.",
      "Menerapkan aturan pangkat turunan fungsi aljabar f(x) = axⁿ.",
      "Menganalisis hubungan jarak s(t), kecepatan v(t) = s'(t), dan percepatan a(t) = v'(t) pada telemetri Ferrari F1."
    ],
    rangkumanPoin: [
      {
        subjudul: "1. Aturan Dasar Pangkat",
        teks: "Jika f(x) = a · xⁿ, maka turunannya adalah f'(x) = n · a · xⁿ⁻¹. Turunan konstanta adalah 0."
      },
      {
        subjudul: "2. Aturan Operasi Turunan",
        teks: "[u ± v]' = u' ± v'. Perkalian: [u · v]' = u'v + uv'. Pembagian: [u / v]' = (u'v - uv') / v²."
      },
      {
        subjudul: "3. Aplikasi Nyata: Telemetri Balap F1",
        teks: "Posisi s(t) diturunkan menghasilkan Kecepatan v(t) = ds/dt. Kecepatan diturunkan menghasilkan Percepatan/Deselerasi a(t) = dv/dt. Titik stasioner v'(t) = 0 menunjukkan puncak kecepatan maksimum di lintasan lurus!"
      }
    ],
    ilustrasi: {
      tipe: "formula",
      label: "🏎️ Studi Kasus F1: Telemetri Akselerasi",
      konten: "Persamaan jarak: s(t) = 4t³ + 2t²\nKecepatan sesaat : v(t) = s'(t) = 12t² + 4t\nPercepatan sesaat: a(t) = v'(t) = 24t + 4\nPada t = 2 detik, percepatan mobil = 24(2) + 4 = 52 m/s²!"
    },
    tipsMengingat: "'Pangkat turun ke depan jadi pengali, pangkat di atas berkurang satu'."
  },

  // --- TIK & KODING ---
  {
    id: "tik-01",
    kategori: "TIK & Koding",
    jenjang: "SMP / SMA",
    judul: "Logika Pemrograman & Algoritma Dasar",
    icon: "💻",
    deskripsi: "Berpikir komputasional, percabangan if-else, perulangan, dan algoritma kontrol ECU mobil balap.",
    estimasiWaktu: "12 Menit",
    tujuanBelajar: [
      "Memahami 4 pilar Computational Thinking.",
      "Menerapkan struktur percabangan (if-else) dan perulangan (looping).",
      "Menganalisis algoritma pembuka sayap DRS (Drag Reduction System) pada mobil F1."
    ],
    rangkumanPoin: [
      {
        subjudul: "1. Empat Pilar Computational Thinking",
        teks: "Dekomposisi (memecah masalah), Pengenalan Pola (identifikasi kesamaan), Abstraksi (fokus inti), Algoritma (langkah teratur)."
      },
      {
        subjudul: "2. Percabangan (If - Else) & Logika DRS F1",
        teks: "Komputer mengambil keputusan berdasarkan kondisi boolean. Contoh logika DRS F1: JIKA (jarakKeMobilDepan <= 1.0 detik) DAN (beradaDiZonaDRS == true) MAKA bukaSayapDRS()!"
      },
      {
        subjudul: "3. Perulangan (Looping)",
        teks: "Mengeksekusi blok kode berulang: For-loop (jumlah putaran pasti, misal 53 putaran balapan) dan While-loop (berputar selama kondisi true)."
      }
    ],
    ilustrasi: {
      tipe: "code",
      label: "🏎️ Logika Algoritma DRS F1",
      konten: "JIKA (selisihWaktu <= 1.0 DAN zonaDRSAktif == BENAR) MAKA\n    STATUS_DRS = 'TERBUKA' // Kecepatan puncak bertambah 15-20 km/jam!\nLAINNYA\n    STATUS_DRS = 'TERTUTUP'\nAKHIR-JIKA"
    },
    tipsMengingat: "Algoritma ibarat 'Instruksi Pit-Stop': teratur, tanpa salah langkah, dan dieksekusi dengan kecepatan tinggi!"
  },
  {
    id: "tik-02",
    kategori: "TIK & Koding",
    jenjang: "SMA",
    judul: "Fondasi Web: HTML, CSS, dan JavaScript",
    icon: "🌐",
    deskripsi: "Trio pembangun web modern: HTML (kerangka), CSS (desain aerodinamis), dan JS (mesin interaktif).",
    estimasiWaktu: "15 Menit",
    tujuanBelajar: [
      "Memahami peran spesifik HTML, CSS, dan JavaScript.",
      "Mengenal manipulasi DOM (Document Object Model).",
      "Memahami penyimpanan data lokal browser menggunakan Web Storage API (localStorage)."
    ],
    rangkumanPoin: [
      {
        subjudul: "1. Analogi Mobil Balap F1",
        teks: "HTML adalah sasis monokok serat karbon (struktur tombol, teks, gambar). CSS adalah livery merah Ferrari dan sayap aerodinamis (tata letak, warna, animasi). JavaScript adalah mesin V6 Turbo Hybrid dan ECU (logika interaktif, timer, pencatat skor)."
      },
      {
        subjudul: "2. DOM (Document Object Model)",
        teks: "Pohon elemen dokumen yang dapat diakses dan diubah secara dinamis oleh JavaScript menggunakan document.getElementById atau querySelector."
      },
      {
        subjudul: "3. LocalStorage Browser",
        teks: "Fitur penyimpanan data di sisi klien peramban (key-value) yang tidak hilang saat halaman di-refresh. Contoh: menyimpan rekor skor balapan kuis."
      }
    ],
    ilustrasi: {
      tipe: "code",
      label: "Sintaks Dasar LocalStorage",
      konten: "// Menyimpan rekor lap balapan\nlocalStorage.setItem('lapRecord', JSON.stringify({ pembalap: 'Hafidz', skor: 280 }));\n\n// Membaca data kembali\nconst data = JSON.parse(localStorage.getItem('lapRecord'));\nconsole.log(data.pembalap); // Menghasilkan: 'Hafidz'"
    },
    tipsMengingat: "HTML = Struktur, CSS = Tampilan Visual, JS = Perilaku Interaktif!"
  }
];

// ==========================================
// BANK SOAL KUIS PILIHAN GANDA (52 SOAL LENGKAP)
// ==========================================
const BANK_SOAL = [
  // --- FISIKA (11 Soal - Termasuk F1 Downforce & Akselerasi) ---
  {
    id: "q-fis-01",
    kategori: "Fisika",
    tingkat: "Mudah",
    pertanyaan: "Hukum gerak yang menyatakan bahwa 'setiap aksi selalu ada reaksi yang sama besar dan berlawanan arah' adalah...",
    opsi: [
      "Hukum I Newton",
      "Hukum II Newton",
      "Hukum III Newton",
      "Hukum Gravitasi Universal"
    ],
    jawabanBenar: 2,
    penjelasan: "Hukum III Newton menyatakan bahwa gaya aksi dan reaksi selalu berpasangan, besarnya sama, arahnya berlawanan, dan bekerja pada dua benda yang berbeda."
  },
  {
    id: "q-fis-02",
    kategori: "Fisika",
    tingkat: "Sedang",
    pertanyaan: "Sebuah mobil balap Formula 1 bermassa 800 kg didorong oleh mesin dengan gaya 9.600 N. Berapakah percepatan yang dialami mobil tersebut?",
    opsi: [
      "6 m/s²",
      "8 m/s²",
      "12 m/s²",
      "16 m/s²"
    ],
    jawabanBenar: 2,
    penjelasan: "Berdasarkan Hukum II Newton: a = F / m = 9.600 N / 800 kg = 12 m/s²."
  },
  {
    id: "q-fis-03",
    kategori: "Fisika",
    tingkat: "Mudah",
    pertanyaan: "Saat mobil yang melaju kencang direm mendadak, tubuh penumpang akan terdorong ke depan. Peristiwa ini merupakan bukti dari...",
    opsi: [
      "Sifat kelembaman (inersia) benda",
      "Gaya gesek ban mobil",
      "Percepatan gravitasi bumi",
      "Gaya magnetik aspal"
    ],
    jawabanBenar: 0,
    penjelasan: "Sesuai Hukum I Newton, benda cenderung mempertahankan keadaan geraknya (kelembaman/inersia), sehingga tubuh tetap ingin bergerak maju saat mobil berhenti."
  },
  {
    id: "q-fis-04",
    kategori: "Fisika",
    tingkat: "Sedang",
    pertanyaan: "Sebuah kelapa bermassa 2 kg jatuh dari pohon berketinggian 10 meter (g = 10 m/s²). Berapakah energi potensial gravitasi kelapa di puncak pohon?",
    opsi: [
      "20 Joule",
      "100 Joule",
      "200 Joule",
      "400 Joule"
    ],
    jawabanBenar: 2,
    penjelasan: "Energi Potensial: Ep = m × g × h = 2 kg × 10 m/s² × 10 m = 200 Joule."
  },
  {
    id: "q-fis-05",
    kategori: "Fisika",
    tingkat: "Sulit",
    pertanyaan: "Sebuah mobil bermassa 1.000 kg melaju dengan kecepatan 20 m/s. Jika mobil dipercepat hingga kecepatannya menjadi 30 m/s, berapakah usaha yang dilakukan mesin mobil?",
    opsi: [
      "250.000 Joule",
      "500.000 Joule",
      "100.000 Joule",
      "350.000 Joule"
    ],
    jawabanBenar: 0,
    penjelasan: "Usaha sama dengan perubahan energi kinetik: W = ΔEk = ½ m (v₂² - v₁²) = ½(1000)(30² - 20²) = 500 × (900 - 400) = 500 × 500 = 250.000 Joule."
  },
  {
    id: "q-fis-06",
    kategori: "Fisika",
    tingkat: "Mudah",
    pertanyaan: "Satuan standar internasional (SI) untuk mengukur Gaya dan Usaha berturut-turut adalah...",
    opsi: [
      "Joule dan Watt",
      "Newton dan Joule",
      "Pascal dan Newton",
      "Kilogram dan Meter"
    ],
    jawabanBenar: 1,
    penjelasan: "Satuan SI untuk gaya adalah Newton (N) dan satuan untuk usaha/energi adalah Joule (J)."
  },
  {
    id: "q-fis-07",
    kategori: "Fisika",
    tingkat: "Sedang",
    pertanyaan: "Benda yang dicelupkan sebagian atau seluruhnya ke dalam zat cair akan mengalami gaya ke atas sebesar berat zat cair yang dipindahkan. Ini adalah bunyi...",
    opsi: [
      "Hukum Pascal",
      "Hukum Archimedes",
      "Hukum Boyle",
      "Hukum Bernoulli"
    ],
    jawabanBenar: 1,
    penjelasan: "Hukum Archimedes menjelaskan fenomena gaya apung (Fa = ρ × g × V celup) yang dialami benda di dalam zat cair."
  },
  {
    id: "q-fis-08",
    kategori: "Fisika",
    tingkat: "Mudah",
    pertanyaan: "Rentang frekuensi gelombang bunyi yang dapat didengar oleh telinga manusia normal (audiosonik) adalah...",
    opsi: [
      "Kurang dari 20 Hz",
      "20 Hz sampai 20.000 Hz",
      "20.000 Hz sampai 40.000 Hz",
      "Di atas 50.000 Hz"
    ],
    jawabanBenar: 1,
    penjelasan: "Frekuensi audiosonik manusia berada pada rentang 20 Hz hingga 20.000 Hz (20 kHz)."
  },
  {
    id: "q-fis-09",
    kategori: "Fisika",
    tingkat: "Sedang",
    pertanyaan: "Sayap aerodinamika pada mobil balap Ferrari dirancang untuk menghasilkan gaya tekan ke bawah agar ban mencengkeram kuat di lintasan. Gaya ini disebut...",
    opsi: [
      "Updraft",
      "Downforce",
      "Sentrifugal",
      "Inersia murni"
    ],
    jawabanBenar: 1,
    penjelasan: "Downforce adalah gaya aerodinamika ke bawah yang dihasilkan oleh sayap dan lantai mobil balap untuk meningkatkan traksi ban saat menikung pada kecepatan tinggi."
  },
  {
    id: "q-fis-10",
    kategori: "Fisika",
    tingkat: "Sulit",
    pertanyaan: "Sebuah hambatan listrik 10 Ohm dihubungkan dengan sumber tegangan baterai 20 Volt. Kuat arus listrik yang mengalir dalam rangkaian tersebut adalah...",
    opsi: [
      "0,5 Ampere",
      "2 Ampere",
      "10 Ampere",
      "200 Ampere"
    ],
    jawabanBenar: 1,
    penjelasan: "Berdasarkan Hukum Ohm: I = V / R = 20 Volt / 10 Ohm = 2 Ampere."
  },
  {
    id: "q-fis-11",
    kategori: "Fisika",
    tingkat: "Sedang",
    pertanyaan: "Sistem KERS / MGU-K pada mobil balap F1 menerapkan hukum kekekalan energi dengan mengubah...",
    opsi: [
      "Energi nuklir menjadi energi kinetik",
      "Energi kinetik saat pengereman menjadi energi listrik",
      "Energi potensial menjadi energi panas",
      "Energi bunyi menjadi energi cahaya"
    ],
    jawabanBenar: 1,
    penjelasan: "KERS (Kinetic Energy Recovery System) menangkap energi kinetik yang terbuang saat pengereman dan menyimpannya sebagai energi listrik baterai untuk tenaga akselerasi tambahan."
  },

  // --- KIMIA (10 Soal) ---
  {
    id: "q-kim-01",
    kategori: "Kimia",
    tingkat: "Mudah",
    pertanyaan: "Partikel subatomik yang bermuatan listrik negatif dan beredar mengelilingi inti atom adalah...",
    opsi: [
      "Proton",
      "Neutron",
      "Elektron",
      "Positron"
    ],
    jawabanBenar: 2,
    penjelasan: "Elektron bermuatan negatif (-1) dan berada di kulit atom, sedangkan proton (+1) dan neutron (netral) berada di dalam inti atom."
  },
  {
    id: "q-kim-02",
    kategori: "Kimia",
    tingkat: "Sedang",
    pertanyaan: "Unsur Natrium memiliki notasi ²³₁₁Na. Berapakah jumlah elektron, proton, dan neutron pada atom netral tersebut berturut-turut?",
    opsi: [
      "11, 11, 12",
      "11, 12, 11",
      "23, 11, 12",
      "12, 11, 23"
    ],
    jawabanBenar: 0,
    penjelasan: "Nomor atom Z = 11 (Proton = 11, Elektron = 11). Nomor massa A = 23, sehingga Neutron = A - Z = 23 - 11 = 12."
  },
  {
    id: "q-kim-03",
    kategori: "Kimia",
    tingkat: "Mudah",
    pertanyaan: "Ikatan kimia yang terbentuk akibat serah-terima elektron antara unsur logam dan non-logam disebut...",
    opsi: [
      "Ikatan Logam",
      "Ikatan Ionik",
      "Ikatan Kovalen Polar",
      "Ikatan Hidrogen"
    ],
    jawabanBenar: 1,
    penjelasan: "Ikatan ionik terbentuk karena adanya perpindahan (serah-terima) elektron dari atom logam ke atom non-logam."
  },
  {
    id: "q-kim-04",
    kategori: "Kimia",
    tingkat: "Sedang",
    pertanyaan: "Molekul air (H₂O) terbentuk dari hidrogen dan oksigen yang merupakan unsur non-logam. Ikatan yang menyatukan kedua unsur tersebut adalah...",
    opsi: [
      "Ikatan Kovalen",
      "Ikatan Ion",
      "Ikatan Logam",
      "Ikatan Van der Waals"
    ],
    jawabanBenar: 0,
    penjelasan: "Ikatan kovalen adalah ikatan yang terbentuk karena pemakaian pasangan elektron bersama antara sesama unsur non-logam."
  },
  {
    id: "q-kim-05",
    kategori: "Kimia",
    tingkat: "Sulit",
    pertanyaan: "Konfigurasi elektron suatu unsur netral adalah 2, 8, 7. Di manakah letak unsur tersebut dalam tabel periodik unsur?",
    opsi: [
      "Golongan IIA, Periode 7",
      "Golongan VIIA, Periode 3",
      "Golongan IIIA, Periode 7",
      "Golongan VIIIA, Periode 2"
    ],
    jawabanBenar: 1,
    penjelasan: "Elektron valensi = 7 menunjukkan Golongan VIIA (Halogen). Jumlah lintasan kulit terisi = 3 menunjukkan Periode 3."
  },
  {
    id: "q-kim-06",
    kategori: "Kimia",
    tingkat: "Sedang",
    pertanyaan: "Berapa jumlah elektron valensi yang dicapai oleh sebagian besar atom untuk memenuhi aturan oktet agar menjadi stabil?",
    opsi: [
      "2",
      "4",
      "8",
      "18"
    ],
    jawabanBenar: 2,
    penjelasan: "Aturan oktet menyatakan bahwa atom-atom cenderung bergabung sehingga masing-masing memiliki 8 elektron pada kulit valensinya."
  },
  {
    id: "q-kim-07",
    kategori: "Kimia",
    tingkat: "Mudah",
    pertanyaan: "Larutan yang memiliki nilai derajat keasaman pH = 3 tergolong ke dalam larutan yang bersifat...",
    opsi: [
      "Asam",
      "Basa",
      "Netral",
      "Garam netral"
    ],
    jawabanBenar: 0,
    penjelasan: "Pada skala pH: pH < 7 bersifat asam, pH = 7 bersifat netral, dan pH > 7 bersifat basa."
  },
  {
    id: "q-kim-08",
    kategori: "Kimia",
    tingkat: "Sedang",
    pertanyaan: "'Dalam sistem tertutup, massa zat sebelum dan sesudah reaksi kimia adalah sama'. Pernyataan ini merupakan...",
    opsi: [
      "Hukum Kekekalan Massa (Lavoisier)",
      "Hukum Perbandingan Tetap (Proust)",
      "Hukum Kelipatan Perbandingan (Dalton)",
      "Hukum Perbandingan Volume (Gay-Lussac)"
    ],
    jawabanBenar: 0,
    penjelasan: "Antoine Lavoisier menemukan bahwa dalam sistem tertutup, massa zat sebelum bereaksi sama dengan massa zat hasil reaksi."
  },
  {
    id: "q-kim-09",
    kategori: "Kimia",
    tingkat: "Sulit",
    pertanyaan: "Berapakah jumlah partikel atom yang terkandung dalam 1 mol zat menurut ketetapan bilangan Avogadro?",
    opsi: [
      "6,02 × 10²³ partikel",
      "3,14 × 10²² partikel",
      "1,60 × 10⁻¹⁹ partikel",
      "9,80 × 10⁸ partikel"
    ],
    jawabanBenar: 0,
    penjelasan: "Bilangan Avogadro bernilai sekitar 6,022 × 10²³ partikel/mol."
  },
  {
    id: "q-kim-10",
    kategori: "Kimia",
    tingkat: "Mudah",
    pertanyaan: "Unsur kimia di bawah ini yang tergolong ke dalam kelompok Gas Mulia (Golongan VIIIA) adalah...",
    opsi: [
      "Helium (He)",
      "Oksigen (O)",
      "Klorin (Cl)",
      "Natrium (Na)"
    ],
    jawabanBenar: 0,
    penjelasan: "Helium (He), Neon (Ne), Argon (Ar), Kripton (Kr), Xenon (Xe), dan Radon (Rn) adalah unsur-unsur gas mulia yang stabil."
  },

  // --- MATEMATIKA WAJIB (10 Soal) ---
  {
    id: "q-matw-01",
    kategori: "Matematika Wajib",
    tingkat: "Mudah",
    pertanyaan: "Akar-akar dari persamaan kuadrat x² - 7x + 10 = 0 adalah...",
    opsi: [
      "x = 2 atau x = 5",
      "x = -2 atau x = -5",
      "x = 1 atau x = 10",
      "x = -1 atau x = -10"
    ],
    jawabanBenar: 0,
    penjelasan: "Faktorkan (x - 2)(x - 5) = 0, sehingga x₁ = 2 atau x₂ = 5."
  },
  {
    id: "q-matw-02",
    kategori: "Matematika Wajib",
    tingkat: "Sedang",
    pertanyaan: "Jika suatu persamaan kuadrat memiliki nilai Diskriminan D = b² - 4ac bernilai 0 (nol), maka sifat akar-akarnya adalah...",
    opsi: [
      "Dua akar real berlainan",
      "Dua akar real kembar (sama)",
      "Akar-akar tidak real (imajiner)",
      "Tidak memiliki penyelesaian matematika"
    ],
    jawabanBenar: 1,
    penjelasan: "Nilai D = 0 menghasilkan dua akar real kembar (x₁ = x₂ = -b / 2a), dan grafiknya menyinggung sumbu X tepat di satu titik."
  },
  {
    id: "q-matw-03",
    kategori: "Matematika Wajib",
    tingkat: "Mudah",
    pertanyaan: "Diberikan barisan aritmatika: 3, 7, 11, 15, ... Beda (b) dan suku pertama (a) dari barisan tersebut adalah...",
    opsi: [
      "a = 3 dan b = 4",
      "a = 4 dan b = 3",
      "a = 3 dan b = 7",
      "a = 7 dan b = 4"
    ],
    jawabanBenar: 0,
    penjelasan: "Suku pertama a = 3. Beda b = U₂ - U₁ = 7 - 3 = 4."
  },
  {
    id: "q-matw-04",
    kategori: "Matematika Wajib",
    tingkat: "Sedang",
    pertanyaan: "Suku ke-10 dari barisan aritmatika 5, 8, 11, 14, ... adalah...",
    opsi: [
      "32",
      "35",
      "38",
      "41"
    ],
    jawabanBenar: 0,
    penjelasan: "a = 5, b = 3. Suku ke-n: Un = a + (n - 1)b = 5 + (10 - 1)(3) = 5 + 27 = 32."
  },
  {
    id: "q-matw-05",
    kategori: "Matematika Wajib",
    tingkat: "Sulit",
    pertanyaan: "Jumlah 6 suku pertama dari deret geometri 2 + 6 + 18 + 54 + ... adalah...",
    opsi: [
      "242",
      "728",
      "486",
      "1.458"
    ],
    jawabanBenar: 1,
    penjelasan: "a = 2, r = 3 (r > 1). Sn = a(rⁿ - 1) / (r - 1) = 2(3⁶ - 1) / (3 - 1) = 728."
  },
  {
    id: "q-matw-06",
    kategori: "Matematika Wajib",
    tingkat: "Sedang",
    pertanyaan: "Fungsi kuadrat f(x) = 2x² - 8x + 6 memiliki sumbu simetri pada garis...",
    opsi: [
      "x = 1",
      "x = 2",
      "x = 4",
      "x = -2"
    ],
    jawabanBenar: 1,
    penjelasan: "Rumus sumbu simetri: x = -b / (2a) = -(-8) / (2 × 2) = 8 / 4 = 2."
  },
  {
    id: "q-matw-07",
    kategori: "Matematika Wajib",
    tingkat: "Mudah",
    pertanyaan: "Sebuah segitiga siku-siku memiliki panjang sisi tegak 3 cm dan 4 cm. Panjang sisi miring segitiga tersebut adalah...",
    opsi: [
      "5 cm",
      "6 cm",
      "7 cm",
      "25 cm"
    ],
    jawabanBenar: 0,
    penjelasan: "Berdasarkan Teorema Pythagoras: c = √(3² + 4²) = √25 = 5 cm."
  },
  {
    id: "q-matw-08",
    kategori: "Matematika Wajib",
    tingkat: "Sedang",
    pertanyaan: "Jika x + y = 10 dan x - y = 4, maka nilai dari x dan y berturut-turut adalah...",
    opsi: [
      "x = 7 dan y = 3",
      "x = 8 dan y = 2",
      "x = 6 dan y = 4",
      "x = 5 dan y = 5"
    ],
    jawabanBenar: 0,
    penjelasan: "Jumlahkan: 2x = 14 → x = 7. Substitusikan: y = 10 - 7 = 3."
  },
  {
    id: "q-matw-09",
    kategori: "Matematika Wajib",
    tingkat: "Mudah",
    pertanyaan: "Sebuah dadu bersisi 6 dilempar sekali. Peluang munculnya mata dadu bernilai genap adalah...",
    opsi: [
      "1/6",
      "1/3",
      "1/2",
      "2/3"
    ],
    jawabanBenar: 2,
    penjelasan: "Titik sampel genap = {2, 4, 6} (3 kemungkinan). Ruang sampel total = 6. Peluang = 3/6 = 1/2."
  },
  {
    id: "q-matw-10",
    kategori: "Matematika Wajib",
    tingkat: "Sedang",
    pertanyaan: "Nilai rata-rata (mean) dari data ulangan matematika: 7, 8, 6, 9, 10 adalah...",
    opsi: [
      "7,5",
      "8,0",
      "8,5",
      "9,0"
    ],
    jawabanBenar: 1,
    penjelasan: "Mean = (7 + 8 + 6 + 9 + 10) / 5 = 40 / 5 = 8,0."
  },

  // --- MATEMATIKA LANJUT (10 Soal) ---
  {
    id: "q-matl-01",
    kategori: "Matematika Lanjut",
    tingkat: "Mudah",
    pertanyaan: "Berapakah nilai dari sin(30°) dan cos(60°)?",
    opsi: [
      "1/2 dan 1/2",
      "1/2 √2 dan 1/2 √2",
      "1/2 √3 dan 1/2",
      "1 dan 0"
    ],
    jawabanBenar: 0,
    penjelasan: "Nilai sudut istimewa: sin(30°) = 1/2 dan cos(60°) = 1/2."
  },
  {
    id: "q-matl-02",
    kategori: "Matematika Lanjut",
    tingkat: "Mudah",
    pertanyaan: "Berdasarkan identitas dasar trigonometri, nilai dari sin²(40°) + cos²(40°) adalah...",
    opsi: [
      "0",
      "1",
      "2",
      "tan²(40°)"
    ],
    jawabanBenar: 1,
    penjelasan: "Identitas Pythagoras: sin²(x) + cos²(x) = 1 untuk semua sudut x."
  },
  {
    id: "q-matl-03",
    kategori: "Matematika Lanjut",
    tingkat: "Sedang",
    pertanyaan: "Turunan pertama dari f(x) = 4x³ - 5x² + 7x - 12 terhadap x adalah...",
    opsi: [
      "12x² - 10x + 7",
      "12x³ - 10x² + 7",
      "4x² - 5x + 7",
      "7x² - 10x + 12"
    ],
    jawabanBenar: 0,
    penjelasan: "Aturan pangkat: f'(x) = 3(4)x² - 2(5)x + 7 = 12x² - 10x + 7."
  },
  {
    id: "q-matl-04",
    kategori: "Matematika Lanjut",
    tingkat: "Sulit",
    pertanyaan: "Sebuah segitiga siku-siku memiliki panjang sisi depan sudut θ sebesar 6 cm dan sisi miring 10 cm. Berapakah nilai tan(θ)?",
    opsi: [
      "3/5",
      "4/5",
      "3/4",
      "4/3"
    ],
    jawabanBenar: 2,
    penjelasan: "Sisi samping = √(10² - 6²) = √64 = 8 cm. tan(θ) = 6 / 8 = 3/4."
  },
  {
    id: "q-matl-05",
    kategori: "Matematika Lanjut",
    tingkat: "Sulit",
    pertanyaan: "Titik stasioner dari kurva fungsi f(x) = x³ - 3x² + 2 terjadi pada nilai x = ...",
    opsi: [
      "x = 0 dan x = 2",
      "x = 1 dan x = -1",
      "x = 2 dan x = 3",
      "x = -2 dan x = 0"
    ],
    jawabanBenar: 0,
    penjelasan: "f'(x) = 3x² - 6x = 0 → 3x(x - 2) = 0 → x = 0 atau x = 2."
  },
  {
    id: "q-matl-06",
    kategori: "Matematika Lanjut",
    tingkat: "Sedang",
    pertanyaan: "Turunan dari fungsi f(x) = (2x + 1)(3x - 2) adalah...",
    opsi: [
      "12x - 1",
      "6x² - x - 2",
      "12x + 1",
      "6x - 1"
    ],
    jawabanBenar: 0,
    penjelasan: "f(x) = 6x² - x - 2. Maka f'(x) = 12x - 1."
  },
  {
    id: "q-matl-07",
    kategori: "Matematika Lanjut",
    tingkat: "Mudah",
    pertanyaan: "Nilai perbandingan trigonometri dari tan(45°) dan sin(90°) berturut-turut adalah...",
    opsi: [
      "1 dan 1",
      "0 dan 1",
      "1 dan 0",
      "1/2 dan 1"
    ],
    jawabanBenar: 0,
    penjelasan: "tan(45°) = 1 dan sin(90°) = 1."
  },
  {
    id: "q-matl-08",
    kategori: "Matematika Lanjut",
    tingkat: "Sedang",
    pertanyaan: "Hasil integral tak tentu dari ∫ (6x² - 4x + 3) dx adalah...",
    opsi: [
      "2x³ - 2x² + 3x + C",
      "3x³ - 2x² + 3x + C",
      "12x - 4 + C",
      "2x³ - 4x² + 3x + C"
    ],
    jawabanBenar: 0,
    penjelasan: "∫ (6x² - 4x + 3) dx = (6/3)x³ - (4/2)x² + 3x + C = 2x³ - 2x² + 3x + C."
  },
  {
    id: "q-matl-09",
    kategori: "Matematika Lanjut",
    tingkat: "Sedang",
    pertanyaan: "Nilai dari limit lim (x → 2) (x² - 4) / (x - 2) adalah...",
    opsi: [
      "0",
      "2",
      "4",
      "Tak terdefinisi"
    ],
    jawabanBenar: 2,
    penjelasan: "(x - 2)(x + 2) / (x - 2) = x + 2. Masukkan x = 2: 2 + 2 = 4."
  },
  {
    id: "q-matl-10",
    kategori: "Matematika Lanjut",
    tingkat: "Mudah",
    pertanyaan: "Persamaan lingkaran yang berpusat di titik asal O(0,0) dengan jari-jari r = 5 adalah...",
    opsi: [
      "x² + y² = 10",
      "x² + y² = 25",
      "(x - 5)² + y² = 25",
      "x² - y² = 25"
    ],
    jawabanBenar: 1,
    penjelasan: "Bentuk baku persamaan lingkaran berpusat di (0,0): x² + y² = r² = 5² = 25."
  },

  // --- TIK & KODING (11 Soal - Termasuk ECU & Algoritma Telemetri) ---
  {
    id: "q-tik-01",
    kategori: "TIK & Koding",
    tingkat: "Mudah",
    pertanyaan: "Tahapan memecah masalah besar yang kompleks menjadi bagian-bagian kecil yang lebih mudah dikelola disebut...",
    opsi: [
      "Abstraksi",
      "Dekomposisi",
      "Pengenalan Pola",
      "Algoritma"
    ],
    jawabanBenar: 1,
    penjelasan: "Dekomposisi adalah teknik memecah masalah besar menjadi sub-masalah kecil yang terkelola."
  },
  {
    id: "q-tik-02",
    kategori: "TIK & Koding",
    tingkat: "Mudah",
    pertanyaan: "Dalam pengembangan web, teknologi yang bertanggung jawab memberikan tata letak, warna, font, dan tampilan estetika adalah...",
    opsi: [
      "HTML",
      "CSS",
      "JavaScript",
      "SQL"
    ],
    jawabanBenar: 1,
    penjelasan: "CSS (Cascading Style Sheets) mengatur tata letak dan estetika desain visual."
  },
  {
    id: "q-tik-03",
    kategori: "TIK & Koding",
    tingkat: "Sedang",
    pertanyaan: "Metode JavaScript yang tepat digunakan untuk menyimpan data ke penyimpanan lokal peramban (browser) adalah...",
    opsi: [
      "localStorage.storeData(key, value)",
      "localStorage.setItem(key, value)",
      "localStorage.save(key, value)",
      "browser.storage.write(key, value)"
    ],
    jawabanBenar: 1,
    penjelasan: "Sintaks standar Web Storage API adalah localStorage.setItem('kunci', 'nilai')."
  },
  {
    id: "q-tik-04",
    kategori: "TIK & Koding",
    tingkat: "Sedang",
    pertanyaan: "Perhatikan cuplikan logika berikut:\nlet x = 5;\nif (x > 3 && x < 10) {\n  hasil = 'A';\n} else {\n  hasil = 'B';\n}\nApakah nilai dari variabel 'hasil'?",
    opsi: [
      "'A'",
      "'B'",
      "undefined",
      "Error sintaks"
    ],
    jawabanBenar: 0,
    penjelasan: "Kedua kondisi benar (5 > 3 dan 5 < 10 bernilai true), sehingga hasil = 'A'."
  },
  {
    id: "q-tik-05",
    kategori: "TIK & Koding",
    tingkat: "Sedang",
    pertanyaan: "Elemen HTML yang benar untuk menyisipkan kode JavaScript eksternal ke dalam berkas HTML adalah...",
    opsi: [
      "<js src='app.js'></js>",
      "<script src='app.js'></script>",
      "<javascript href='app.js'></javascript>",
      "<link rel='script' href='app.js'>"
    ],
    jawabanBenar: 1,
    penjelasan: "Tag standar HTML untuk memuat skrip JS adalah <script src='nama_file.js'></script>."
  },
  {
    id: "q-tik-06",
    kategori: "TIK & Koding",
    tingkat: "Sulit",
    pertanyaan: "Berapa kali perulangan berikut akan mencetak tulisan ke konsol?\nfor (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
    opsi: [
      "4 kali",
      "5 kali",
      "6 kali",
      "Tak hingga"
    ],
    jawabanBenar: 1,
    penjelasan: "Berjalan untuk i = 0, 1, 2, 3, dan 4. Tepat sebanyak 5 kali putaran."
  },
  {
    id: "q-tik-07",
    kategori: "TIK & Koding",
    tingkat: "Mudah",
    pertanyaan: "Komponen perangkat keras komputer yang berfungsi sebagai memori kerja utama yang bersifat sementara (volatile) adalah...",
    opsi: [
      "Hard Disk Drive (HDD)",
      "Random Access Memory (RAM)",
      "Read Only Memory (ROM)",
      "Power Supply"
    ],
    jawabanBenar: 1,
    penjelasan: "RAM menyimpan instruksi proses aplikasi yang sedang berjalan dan bersifat volatile."
  },
  {
    id: "q-tik-08",
    kategori: "TIK & Koding",
    tingkat: "Sedang",
    pertanyaan: "Dalam CSS modern, properti tata letak yang dirancang satu dimensi untuk mengatur posisi elemen secara fleksibel adalah...",
    opsi: [
      "display: flex",
      "display: block",
      "position: absolute",
      "float: left"
    ],
    jawabanBenar: 0,
    penjelasan: "CSS Flexbox (`display: flex`) adalah modul tata letak satu dimensi yang fleksibel."
  },
  {
    id: "q-tik-09",
    kategori: "TIK & Koding",
    tingkat: "Mudah",
    pertanyaan: "Tipe data dalam pemrograman yang hanya memiliki dua nilai: benar (true) atau salah (false) adalah...",
    opsi: [
      "String",
      "Integer",
      "Boolean",
      "Float"
    ],
    jawabanBenar: 2,
    penjelasan: "Tipe data Boolean merepresentasikan nilai kebenaran logika."
  },
  {
    id: "q-tik-10",
    kategori: "TIK & Koding",
    tingkat: "Sedang",
    pertanyaan: "Dalam JavaScript, hasil dari ekspresi logika (true || false) && true adalah...",
    opsi: [
      "true",
      "false",
      "null",
      "undefined"
    ],
    jawabanBenar: 0,
    penjelasan: "(true || false) menghasilkan true. Kemudian true && true menghasilkan true."
  },
  {
    id: "q-tik-11",
    kategori: "TIK & Koding",
    tingkat: "Sedang",
    pertanyaan: "Unit kontrol elektronik pada mobil modern dan balap F1 yang menjalankan jutaan baris kode perangkat lunak untuk mengendalikan mesin disebut...",
    opsi: [
      "ECU (Electronic Control Unit)",
      "GPU (Graphics Processing Unit)",
      "SSD (Solid State Drive)",
      "VGA Card"
    ],
    jawabanBenar: 0,
    penjelasan: "ECU (Electronic Control Unit) adalah komputer mini terpasang yang memproses data sensor dan mengendalikan sistem mesin kendaraan secara real-time."
  }
];

// Helper ekspor data untuk browser environment
if (typeof window !== "undefined") {
  window.MATERI_DATA = MATERI_DATA;
  window.BANK_SOAL = BANK_SOAL;
}
