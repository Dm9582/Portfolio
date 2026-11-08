import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base keeps assets working on Vercel, Netlify and GitHub Pages subpaths.
export default defineConfig({
  plugins: [react()],
  base: './',
});
