# 🧊 CP-ReactGo

Company Profile website built with **React + TypeScript** (frontend) and **Go** (backend, coming soon).  
Menggunakan tema **Liquid Glass** terinspirasi dari iOS 26.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Go](https://img.shields.io/badge/Go-Backend-00ADD8?logo=go&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📸 Preview

| Hero | Stats | Portfolio |
|------|-------|-----------|
| Glassmorphic navbar & ambient glow | Frosted glass stat cards | Translucent project cards |

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19, TypeScript, Vite 8 |
| **Styling** | Vanilla CSS (Liquid Glass design system) |
| **Icons** | Lucide React |
| **Backend** | Go *(planned)* |
| **Database** | PostgreSQL *(planned)* |

---

## 📂 Project Structure

```
CP-ReactGo/
├── frontend/                   # React + TypeScript app
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/         # Navbar, Footer
│   │   │   ├── sections/       # Hero, Stats, Portfolio, About, etc.
│   │   │   ├── Button.tsx
│   │   │   ├── Icon.tsx
│   │   │   └── Logo.tsx
│   │   ├── index.css           # Liquid Glass design tokens & global styles
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
├── backend/                    # Go API server (coming soon)
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18
- **npm** >= 9
- **Go** >= 1.21 *(untuk backend nanti)*

### Installation

```bash
# 1. Clone repository
git clone https://github.com/KangBasrengg/CP-ReactGo.git
cd CP-ReactGo

# 2. Install frontend dependencies
cd frontend
npm install

# 3. Run development server
npm run dev
```

Frontend akan berjalan di `http://localhost:5173`

### Build for Production

```bash
cd frontend
npm run build
npm run preview   # preview production build
```

---

## 🎨 Design System — Liquid Glass

Project ini menggunakan custom CSS design system bertema **Liquid Glass** (terinspirasi iOS 26):

| Token | Value | Deskripsi |
|-------|-------|-----------|
| `--glass-bg` | Multi-stop gradient, 2-8% white | Background translucent berlapis |
| `--glass-blur` | `blur(24px) saturate(180%)` | Backdrop blur + saturasi warna |
| `--glass-border` | `rgba(255,255,255,0.12)` | Border tipis seperti tepi kaca |
| `--glass-shadow` | Inset highlight + outer shadow | Simulasi pantulan cahaya |
| `--glass-radius` | `20px` | Rounded corners konsisten |

### Cara Pakai

```tsx
// Cukup tambahkan className "glass-card" untuk efek liquid glass
<div className="glass-card">
  <h3>Your Content</h3>
</div>
```

---

## 👥 Kolaborasi

### Untuk Kolaborator Baru

1. **Fork** repository ini, atau minta akses sebagai collaborator
2. **Clone** ke local machine:
   ```bash
   git clone https://github.com/KangBasrengg/CP-ReactGo.git
   ```
3. **Buat branch baru** untuk setiap fitur:
   ```bash
   git checkout -b feature/nama-fitur
   ```
4. **Commit** dengan pesan yang jelas:
   ```bash
   git commit -m "feat: tambah halaman contact"
   ```
5. **Push** dan buat Pull Request:
   ```bash
   git push origin feature/nama-fitur
   ```

### Branching Strategy

| Branch | Kegunaan |
|--------|----------|
| `main` | Production-ready code |
| `develop` | Development & integration |
| `feature/*` | Fitur baru |
| `fix/*` | Bug fixes |

### Commit Convention

Gunakan format [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: fitur baru
fix: perbaikan bug
style: perubahan styling/CSS
refactor: refactoring kode
docs: update dokumentasi
chore: konfigurasi, dependencies
```

### Code Style

- Gunakan **TypeScript** untuk semua komponen
- Styling menggunakan **Vanilla CSS** + design tokens dari `index.css`
- Komponen harus modular — satu file per komponen
- Gunakan class `.glass-card` untuk elemen dengan efek kaca

---

## 📋 Roadmap

- [x] Setup project React + Vite + TypeScript
- [x] Implementasi Liquid Glass design system
- [x] Hero section dengan ambient glow
- [x] Stats section
- [x] Portfolio section
- [x] About / Team section
- [x] Navbar & Footer
- [ ] Responsive design (mobile)
- [ ] Halaman Contact form
- [ ] Dark/Light mode toggle
- [ ] Backend API (Go)
- [ ] Database integration (PostgreSQL)
- [ ] Deployment

---

## 📄 License

This project is licensed under the MIT License.

---

<p align="center">
  Built with ☕ by <a href="https://github.com/KangBasrengg">KangBasrengg</a> & team
</p>
