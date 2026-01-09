## E-Faktur Protototype - Coretax System 2026
Sebuah aplikasi web prototype yang mensimulasikan sistem faktur pajak elektronik terintegrasi dengan ekosistem administrasi perpajakan Coretax DJP Indonesia, yang diproyeksikan aktif penuh pada tahun 2026.
Aplikasi ini dibuat sebagai proyek portofolio menggunakan Node.js (Express.js) dan Tailwind CSS, menggunakan database lokal berbasis JSON (lowdb).
### Fitur Unggulan
Aplikasi ini mencakup fitur-fitur utama yang diharapkan ada dalam sistem Coretax modern:
#### 🌐 Dashboard Terpusat: Melihat ringkasan total PPN terhutang.
#### 🧾 Perekaman Faktur Keluaran: Input data transaksi secara real-time.
#### 📐 Kalkulasi PPN Otomatis: Menggunakan tarif PPN standar Indonesia saat ini (11%).
#### 🆔 Dukungan NPWP 16 Digit: Format identitas pajak terkini yang berlaku.
#### 🔒 Simulasi Validasi QR Code: Setiap faktur yang disimpan akan menghasilkan QR Code unik, mensimulasikan validasi langsung ke server DJP.
#### 🗑️ Manajemen Data: Fitur untuk menghapus data faktur (simulasi pembatalan).
#### 📦 Database Lokal (JSON): Kemudahan deployment tanpa perlu setup server database terpisah.
### Teknologi yang Digunakan
#### Backend: Node.js, Express.js
#### Frontend: EJS (Embedded JavaScript Templating), Tailwind CSS (untuk tampilan UI yang modern dan responsif).
#### Database: lowdb (database JSON lokal).
#### Library Tambahan: uuid (untuk ID unik), qrcode (untuk generate QR Code validasi).
### Instalasi dan Menjalankan Aplikasi
Pastikan Anda telah menginstal Node.js di komputer Anda.
Clone repositori ini:
#### Install
    npm install
#### Jalankan Aplikasi
     npm start
#### Akses Aplikasi:
Buka web browser Anda dan kunjungi alamat berikut:
     http://localhost:3000
#### Kontribusi
Proyek ini bersifat open source dan terbuka untuk kontribusi.
Jika Anda ingin menambahkan fitur seperti ekspor PDF asli atau integrasi database yang lebih kuat (seperti MongoDB),
silakan buat Pull Request atau laporkan Issue.
