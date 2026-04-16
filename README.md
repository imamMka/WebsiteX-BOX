🚀 Website X-BOX

Website portfolio modern berbasis React (Vite) dengan animasi menggunakan Framer Motion dan styling menggunakan Tailwind CSS.

✨ Features
⚡ Fast performance (Vite)
🎨 Modern UI dengan Tailwind CSS
🎞️ Smooth animation menggunakan Framer Motion
📱 Fully responsive design
📩 Contact form (EmailJS integration)
🔥 Clean & reusable component structure
🛠️ Tech Stack
⚛️ React (Vite)
🎨 Tailwind CSS
🎞️ Framer Motion
📧 EmailJS
📦 Installation

Ikuti langkah berikut untuk menjalankan project di lokal:

1. Clone Repository
git clone https://github.com/imamMka/WebsiteX-BOX.git
cd WebsiteX-BOX
2. Install Dependencies
npm install
3. Install Library Tambahan
npm install framer-motion
npm install react-toastify
npm install @emailjs/browser
4. Setup Tailwind CSS

Jika belum terinstall:

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Edit tailwind.config.js:

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

Tambahkan ke src/index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;
▶️ Running Project
npm run dev

Buka di browser:

http://localhost:5173
📁 Project Structure
src/
│── components/     # Reusable components
│── pages/          # Page sections
│── assets/         # Images & icons
│── App.jsx
│── main.jsx
🎞️ Framer Motion Usage

Contoh penggunaan animasi:

import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Hello World
</motion.div>
🎨 Tailwind Usage

Contoh styling:

<div className="bg-black text-white p-4 rounded-xl hover:scale-105 transition duration-300">
  Tailwind Component
</div>
📧 EmailJS Setup
Buat akun di EmailJS
Ambil:
Service ID
Template ID
Public Key

Contoh config:

const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";
📸 Preview

Tambahkan screenshot di sini nanti:

/public/preview.png
🚀 Deployment

Bisa deploy ke:

Vercel
Netlify
GitHub Pages

Contoh build:

npm run build
👨‍💻 Author

Imam Mka

GitHub: https://github.com/imamMka
📄 License

This project is open-source and free to use.