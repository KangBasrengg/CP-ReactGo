# 🧊 CP-ReactGo (Company Profile)

Company Profile website built with **React + TypeScript** and powered by **Vite**.  
Menggunakan tema **Liquid Glass** yang terinspirasi dari antarmuka modern (iOS 26-style).

![React](https://img.shields.io/badge/React-19.2.8-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0.2-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.2.0-646CFF?logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.18.2-CA4245?logo=react-router&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📸 Preview

| Hero | Stats | Portfolio |
|------|-------|-----------|
| Glassmorphic navbar & ambient glow | Frosted glass stat cards | Translucent project cards |

---

## 🏗️ Tech Stack & Versions

Project ini menggunakan stack modern dengan versi terbaru:

| Teknologi | Versi | Deskripsi |
|-----------|-------|-----------|
| **React** | `^19.2.8` | UI Library utama |
| **React DOM** | `^19.2.8` | DOM render untuk React |
| **React Router DOM** | `^7.18.2` | Routing client-side |
| **TypeScript** | `~6.0.2` | Static typing |
| **Vite** | `^8.2.0` | Build tool & Dev server |
| **Lucide React** | `^1.29.0` | Icon set |
| **Oxlint** | `^1.75.0` | Linter ultra-cepat |
| **Styling** | `Vanilla CSS` | Liquid Glass design system |

---

## 📂 Project Structure

```
CP-ReactGo/
├── public/                     # Static assets (favicon, icons)
├── src/                        # Source code utama
│   ├── components/             # Reusable UI components
│   │   ├── layout/             # Navbar, Footer, MainLayout
│   │   ├── sections/           # Hero, Stats, Portfolio, About, dll.
│   │   ├── Button.tsx
│   │   ├── Icon.tsx
│   │   └── Logo.tsx
│   ├── hooks/                  # Custom hooks (e.g., useScrollReveal)
│   ├── pages/                  # Halaman utama (Home, About, Contact, dll.)
│   ├── index.css               # Design tokens & global styles (Liquid Glass)
│   ├── App.tsx                 # Root component dengan routing
│   └── main.tsx                # Entry point aplikasi
├── index.html                  # HTML template
├── package.json                # Dependencies & scripts
├── tsconfig.json               # Konfigurasi TypeScript
└── vite.config.ts              # Konfigurasi Vite
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18 (disarankan versi 20+)
- **npm** >= 9

### Installation

```bash
# 1. Clone repository
git clone https://github.com/KangBasrengg/CP-ReactGo.git
cd CP-ReactGo

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`

### Build for Production

```bash
# Build aplikasi untuk production
npm run build

# Preview hasil build production
npm run preview
```

---

## 🎨 Design System — Liquid Glass

Project ini menggunakan custom CSS design system bertema **Liquid Glass**:

| Token | Deskripsi |
|-------|-----------|
| `--glass-bg` | Background translucent berlapis (Multi-stop gradient, 2-8% white) |
| `--glass-blur` | Backdrop blur + saturasi warna (`blur(24px) saturate(180%)`) |
| `--glass-border` | Border tipis seperti tepi kaca (`rgba(255,255,255,0.12)`) |
| `--glass-shadow` | Simulasi pantulan cahaya (Inset highlight + outer shadow) |
| `--glass-radius` | Rounded corners konsisten (`20px` atau `16px`) |

### Cara Pakai

```tsx
// Cukup tambahkan className "glass-card" untuk efek liquid glass
<div className="glass-card">
  <h3>Your Content</h3>
</div>
```

---

## 👥 Kolaborasi

### Untuk Kolaborator (Frontend)

Sekarang project berada di root direktori. Tidak perlu lagi `cd frontend`.
1. **Pull terbaru**: `git pull origin main`
2. **Install dependencies**: `npm install` (jika ada update di `package.json`)
3. **Buat branch fitur**: `git checkout -b feature/nama-fitur`
4. **Commit**: `git commit -m "feat: tambah fitur X"`
5. **Push & PR**: `git push origin feature/nama-fitur`

### Code Style

- Gunakan **TypeScript** untuk semua komponen (`.tsx`).
- Styling menggunakan **Vanilla CSS** + design tokens dari `index.css`.
- Hindari inline styles sebisa mungkin. Gunakan class utilitas dan komponen yang sudah ada.

---

## 📄 License

This project is licensed under the MIT License.
