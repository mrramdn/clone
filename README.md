## 📁 Struktur Proyek

### File Utama
```
index.html          # Halaman utama website
```

### 📂 Direktori `js/` - JavaScript Modules
Berisi semua file JavaScript yang mengatur fungsionalitas website:

- **`index.js`** - File utama yang menginisialisasi semua modul JavaScript
- **`navbar.js`** - Mengatur fungsionalitas navigasi dan hamburger menu
- **`hover.js`** - Mengatur efek hover pada elemen-elemen UI
- **`image-overlay.js`** - Mengatur overlay gambar dan modal
- **`brands-loadmore.js`** - Fungsionalitas "load more" untuk halaman brands
- **`news-child.js`** - Mengatur konten child pada halaman news
- **`news.js`** - Fungsionalitas filter dan navigasi news

### 📂 Direktori `styles/` - Styling
Berisi semua file CSS dan SCSS untuk styling website:

- **`style.css`** - File CSS yang telah dikompilasi
- **`style.css.map`** - Source map untuk debugging CSS
- **`main.scss`** - File SCSS utama yang mengimpor semua komponen

#### 📂 `styles/scss/` - SCSS Components
- **`component/`** - Komponen styling yang dapat digunakan kembali:
  - `global` - Style global untuk seluruh website
  - `navbar` - Style untuk navigasi
  - `footer` - Style untuk footer
- **`pages/`** - Style khusus untuk setiap halaman:
  - `index` - Style untuk halaman utama
  - `base` - Style dasar untuk semua halaman
  - `base-child` - Style untuk halaman child

### 📂 Direktori `pages/` - Halaman Website
Berisi semua halaman website yang dapat diakses:

- **`artist-spotlight/`** - Halaman spotlight artis
- **`brands-collab/`** - Halaman kolaborasi brand
- **`community/`** - Halaman komunitas
- **`festival/`** - Halaman festival
- **`news/`** - Halaman berita
- **`our-fam/`** - Halaman tentang tim
- **`sports/`** - Halaman olahraga

### 📂 Direktori `images/` - Asset Gambar
Berisi semua asset gambar yang diorganisir berdasarkan kategori:

#### 📂 `images/artist-spotlight/`
- Hero image untuk halaman artist spotlight
- Gambar hover untuk berbagai artis dan konten musik:
  - A Stunning Size, Art Meets Music, B-sides
  - Beyond Grey, Dark Quirkiness, Xmas but not
  - Yuletide Hits

#### 📂 `images/brands-collab/`
- Hero image untuk halaman kolaborasi brand
- Gambar hover untuk berbagai brand:
  - ASICS TIGER, CINELEISURE, H&M
  - Hendriks Gin, Monkey Shoulder, Onitsuka Tiger
  - SUPERDRY, TWO LIPS
- **`collabs/`** - Sub-direktori untuk gambar kolaborasi

#### 📂 `images/community/`
- Hero image dan icon untuk halaman komunitas
- Gambar hover untuk konten komunitas:
  - A Different Take, A Film Treat
  - A Literary Game, Strung Together
  - Up Close and Personal

#### 📂 `images/festivals/`
- Hero image untuk halaman festival (desktop dan mobile)
- Icon festival
- Gambar hover untuk berbagai festival:
  - ABC, Block A, Clang!, District M
  - Sessions, St Jerome's Laneway Festival
- **`03 Girl Power/`** - Sub-direktori untuk konten khusus

#### 📂 `images/home/`
- Logo 19sixtyfive (berbagai versi)
- Gambar untuk navigasi halaman utama:
  - 24OWLS, 65, Artist Spotlight
  - Brands Collab, Community, Festivals
  - News, Sports, Tangent Moves
- Icon hamburger menu

#### 📂 `images/logo-icons/`
- Logo 19sixtyfive (SVG dan PNG)
- Icon navigasi (arrow, hamburger, close button)
- Logo partner media:
  - Rich Music Logo, The Philippine STAR Logo
  - The Straits Times Logo, Thrivin Logo

#### 📂 `images/news/`
- Asset gambar untuk halaman news

#### 📂 `images/our-fam/`
- Asset gambar untuk halaman our fam

#### 📂 `images/sports/`
- Asset gambar untuk halaman sports

## 🚀 Cara Menjalankan

1. **Setup Development Environment:**
   ```bash
   # Pastikan Anda memiliki web server lokal
   # Bisa menggunakan Live Server di VS Code atau tools lainnya
   ```

2. **Compile SCSS (Opsional):**
   ```bash
   # Jika Anda ingin mengubah styling, compile SCSS ke CSS
   sass styles/main.scss styles/style.css --watch
   ```

3. **Buka di Browser:**
   - Buka file `index.html` di browser
   - Atau gunakan live server untuk development

## 🎯 feat

### ✨ Navigasi
- **Hamburger Menu:** Navigation responsif dengan animasi smooth
- **Off-screen Menu:** Menu yang muncul dari samping dengan overlay

### 🖼️ Image Management
- **Image Overlay:** Modal untuk menampilkan gambar dalam ukuran penuh
- **Hover Effects:** Efek hover yang interaktif pada berbagai elemen

### 📄 Content Management
- **Load More:** Fungsionalitas pagination untuk konten brands dan news
- **News Filter:** Filter dan sorting untuk halaman berita


## 🔧 Development Notes

### JavaScript Modules
- Setiap fungsionalitas dipisah dalam modul terpisah untuk maintainability
- `index.js` berfungsi sebagai orchestrator untuk semua modul
- Event listeners diinisialisasi setelah DOM ready

### SCSS Structure
- Menggunakan `@use` dan `@import` untuk modular SCSS
- Komponen styling dipisah berdasarkan fungsi
- Google Fonts (DM Sans) digunakan untuk typography