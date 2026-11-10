# Asesmen & Learning Management System — SD Daya Susila

Aplikasi web statis untuk manajemen asesmen dan pembelajaran, dirancang berdasarkan dokumen kebutuhan dan arsitektur aplikasi.

## Fitur
- Dashboard dan identitas sekolah
- Data peserta didik
- Alur penyusunan asesmen 8 tahap
- Pemetaan CP & TP
- Generator/pengelolaan kisi-kisi L1–L3 dan C1–C6
- Bank soal PG, MCMA, menjodohkan, isian, uraian, observasi, kinerja, proyek
- Review soal dengan status DRAFT, IN_REVIEW, APPROVED, REJECTED
- Rubrik penilaian
- Perakitan asesmen dengan distribusi kelas 1–6
- Perencanaan pembelajaran dan empat tahap Pedagogi Genre
- Input nilai dan klasifikasi SOLO
- Rekap CSV serta backup/restore JSON

## Menjalankan lokal
Cukup buka `index.html` di browser. Untuk pengalaman terbaik jalankan server lokal:
```bash
python -m http.server 8000
```
Lalu buka `http://localhost:8000`.

## Deploy ke GitHub Pages
1. Buat repository baru di GitHub.
2. Unggah seluruh isi folder project ini ke root repository.
3. Buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main`, folder `/ (root)`, lalu **Save**.
6. Tunggu proses deployment selesai dan buka URL GitHub Pages.

## Penyimpanan dan batasan
Versi ini menggunakan LocalStorage browser. Data hanya tersedia di browser/perangkat tempat data dimasukkan. Gunakan menu **Backup & Data** untuk ekspor/impor JSON secara berkala. Aplikasi statis ini belum menyediakan sinkronisasi multi-user, autentikasi server, atau database terpusat. Pemilihan peran pada login adalah simulasi antarmuka RBAC, bukan keamanan produksi.

## Struktur
```text
.
├── index.html
├── manifest.json
├── assets/
│   ├── css/style.css
│   └── js/
│       ├── main.js
│       └── utils.js
├── docs/
│   ├── ALUR_PENYUSUNAN_SOAL.md
│   ├── KISI_KISI_TEMPLATE.md
│   └── RUBRIK_PENILAIAN.md
├── .github/workflows/deploy.yml
├── .gitignore
└── README.md
```
