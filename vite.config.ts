import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

interface VitestConfigExport extends UserConfig {
  test: {
    globals: boolean;
    environment: string;
    setupFiles: string[];
  };
}

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
  envPrefix: 'VITE_',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/__tests__/setupTests.ts'],
  }
} as VitestConfigExport)