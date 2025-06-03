import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Tawhed_studio/', // Caminho certo para GitHub Pages
  plugins: [react()],
});
