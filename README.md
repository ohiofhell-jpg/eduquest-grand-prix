# EduQuest - Scuderia Tifosi Edition 🏎️
### Platform Belajar Interaktif Sains & Koding (Fisika, Kimia, Matematika, TIK)

EduQuest **Scuderia Tifosi Edition** adalah aplikasi media pembelajaran berbasis web untuk siswa SMP hingga SMA. Aplikasi ini memadukan keindahan visual malam hari (*Magical Nightlight*), spektrum warna pembelajaran (*Rainbow Spectrum*), dan **DNA balap Formula 1 Scuderia Ferrari** (kecepatan, aerodinamika, presisi telemetri, dan komputasi ECU).

---

## 👥 Tim Pengembang (Tifosi)
- **Hafidz**
- **Afif**
- **Intan**
- **Deka**
- **Taqiy**

---

## 🏎️ Unsur Ferrari F1 yang Diintegrasikan ke EduQuest

### 1. 🎨 Palet Warna & Visual Identitas Scuderia
- **Rosso Corsa (`#e10600`) & Giallo Modena (`#ffea00`)**: Warna legendaris mobil balap Ferrari Formula 1.
- **Tekstur Serat Karbon (Carbon Fiber Weave)**: Pola geometris sasis monokok balap F1 pada kartu UI dan latar belakang.
- **Garis Kecepatan Balap (*Italian Racing Stripe*)**: Aksen pita merah, putih, dan hijau di beranda dan footer.
- **Logo Badge Scuderia**: Lencana ikonik bertulisan *"Scuderia Tifosi Edition"*.

### 2. 🎛️ Switcher Tema 3-Mode (Sekali Klik)
Tombol ikon di navbar memungkinkan pengguna berganti suasana seketika:
- 🌙 **Mode Nightlight Ajaib**: Nuansa langit malam ungu-indigo dengan pendaran lentera lembut (sangat nyaman untuk belajar malam hari).
- 🏎️ **Mode Scuderia Ferrari**: Nuansa balap berdaya tinggi dengan tekstur carbon fiber, aksen merah Rosso Corsa, dan suara raungan mesin F1 sintetis (*pure Web Audio API*).
- ☀️ **Mode Siang Hangat**: Tampilan cerah bersih untuk kenyamanan membaca di siang hari.

### 3. 🔬 Studi Kasus Sains Nyata F1 di Modul Belajar (`materi.html`)
Penerapan konsep kurikulum SMP & SMA pada teknologi mobil balap Ferrari SF-25:
- **Fisika Dinamika (Hukum Newton)**: Menghitung akselerasi $F = m \cdot a$ (0-100 km/jam dalam 2,4 detik) dan pembentukan gaya tekan ke bawah *(downforce)* dari sayap aerodinamika.
- **Fisika Energi Mekanik**: Sistem **MGU-K / KERS** yang mengubah energi kinetik pengereman menjadi dorongan tenaga baterai listrik 160 HP.
- **Kimia Material**: Ikatan kovalen atom Karbon (¹²₆C) pembentuk sasis serat karbon yang ringan (798 kg) serta vulkanisasi sulfur ban Pirelli yang tahan suhu 110°C.
- **Kalkulus Turunan**: Menganalisis grafik telemetri balap: $v(t) = s'(t)$ dan deselerasi $a(t) = v'(t)$ dari 320 km/jam ke 80 km/jam dalam 1,8 detik!
- **TIK & Koding**: Unit Kontrol Elektronik (ECU) yang memproses 300+ sensor per detik dan algoritma pembuka sayap DRS (*Drag Reduction System*).

### 4. ⏱️ Kuis Interaktif dengan Tachometer F1 (`kuis.html`)
- **Indikator Tachometer Rev-LEDs**: 5 lampu LED yang berubah warna seiring hitungan mundur 20 detik (Hijau $\rightarrow$ Kuning $\rightarrow$ Merah Berdenyut *Redline Shift*).
- **DRS Speed Bonus**: Jawaban benar cepat memberikan bonus kecepatan: `10 Poin Dasar + (Sisa Detik x 1)`.
- **Layar Podium Finish**: Kibaran bendera *Checkered Flag* 🏁, status finis balap (P1 Pole Position, Finish Podium, atau Pit Stop).

### 5. 🏆 Papan Peringkat Grand Prix (`peringkat.html`)
- **Podium Kejuaraan Dunia Pembalap**:
  - 🥇 **P1 / Winner**: Lencana emas berpendar dengan laurel kemenangan.
  - 🥈 **P2 / Podium 2**: Lencana perak balap.
  - 🥉 **P3 / Podium 3**: Lencana perunggu balap.
- **Highlight Pembalap Terakhir**: Baris pemain pada sesi terakhir diberi sorotan merah Rosso Corsa dengan label *"Pembalap Terakhir"*.
- **Penyimpanan Lokal**: Otomatis tersimpan di `localStorage` peramban tanpa backend server.

---

## 💻 Cara Menjalankan

Website EduQuest dibuat murni menggunakan **HTML5, CSS3, dan Vanilla JavaScript**.

1. Cukup klik ganda berkas [index.html](file:///C:/Users/LENOVO/.gemini/antigravity/scratch/eduquest/index.html).
2. Langsung terbuka di Google Chrome, Mozilla Firefox, Microsoft Edge, atau Safari.

---
© 2026 EduQuest - Scuderia Tifosi Edition. Tugas Kelompok Pengembangan Media Pembelajaran Interaktif.
