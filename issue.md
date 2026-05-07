# Project Setup Plan: Bun + ElysiaJS + Drizzle + MySQL

## Tujuan
Menginisialisasi dan mengatur fondasi proyek backend baru di dalam direktori ini. Proyek ini akan menggunakan Bun sebagai runtime utama, ElysiaJS sebagai framework web, dan Drizzle ORM untuk berinteraksi dengan database MySQL.

## Langkah-langkah Implementasi (High-Level)

1. **Inisialisasi Proyek Bun**
   - Lakukan inisialisasi proyek Bun baru di root folder ini.
   - Pastikan file dasar seperti `package.json` dan file konfigurasi TypeScript (jika menggunakan TS) telah dibuat.

2. **Instalasi Dependensi Utama**
   - Tambahkan framework web: `elysia`.
   - Tambahkan dependensi untuk ORM dan database: `drizzle-orm`, driver MySQL yang direkomendasikan (misalnya `mysql2`), dan `drizzle-kit` (untuk keperluan migrasi/development).

3. **Pengaturan Konfigurasi Database (Drizzle & MySQL)**
   - Buat file konfigurasi `drizzle.config.ts`.
   - Buat setup koneksi ke database MySQL menggunakan Drizzle.
   - Gunakan environment variables (misalnya file `.env`) untuk menyimpan kredensial koneksi database dengan aman.
   - Definisikan setidaknya satu schema sederhana sebagai kerangka awal.

4. **Setup Server ElysiaJS**
   - Buat file entry point aplikasi (misalnya di `src/index.ts`).
   - Inisialisasi server ElysiaJS dan jalankan di port yang ditentukan.
   - Buat minimal satu route dasar (seperti `GET /`) untuk memverifikasi bahwa server sudah berjalan dengan baik.

5. **Pengecekan Akhir**
   - Pastikan server dapat dijalankan menggunakan perintah script Bun.
   - Lakukan pengetesan sederhana pada endpoint untuk memastikan tidak ada error pada inisialisasi maupun koneksi database.

---
*Catatan untuk Implementator: Dokumen ini berisi instruksi secara high-level. Anda bebas mengatur struktur folder dan menulis detail kodenya sesuai dengan best practices dari teknologi yang disebutkan.*
