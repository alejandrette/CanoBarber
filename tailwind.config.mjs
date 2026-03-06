/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Paleta "Modern Barber" (Sin pasteles)
        dark: {
          DEFAULT: '#0F0F0F', // Negro casi puro para fondos
          soft: '#1E1E1E',    // Gris muy oscuro para tarjetas/secciones
        },
        accent: {
          light: '#E5E5E5',   // Gris claro para bordes o textos secundarios
          dark: '#404040',    // Gris medio para detalles
        },
        surface: '#FFFFFF',   // Blanco puro para resaltar limpieza
      },
      fontFamily: {
        title: ['"Playfair Display"', 'serif'], // Para H1, H2, H3
        body: ['"Lato"', 'sans-serif'],        // Para párrafos y botones
      },
    },
  },
  plugins: [],
}