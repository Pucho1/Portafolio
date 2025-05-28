import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      reporter: ['text', 'json', 'html'],
      provider: 'istanbul', // O 'istanbul'. 'v8' es para c8.
      enabled: false, // Habilita la recolección de coverage
			
			// statements: 80,
      // branches: 80,
      // functions: 80,
      // lines: 80,
			exclude: [
				'node_modules/',
        'dist/',
        '.*.js', // Archivos de configuración como vite.config.ts, vitest.config.ts
        '*.d.ts', // Archivos de declaración de TypeScript
        'src/main.tsx', // Por ejemplo, tu punto de entrada principal si no quieres cubrirlo
        'src/App.tsx', // Si App.tsx es un componente contenedor que no necesita pruebas unitarias profundas
        'src/vite-env.d.ts', // Archivo de entorno de Vite
        'src/setupTests.ts', // Archivo de setup de Vitest
        '**/*.stories.{js,jsx,ts,tsx}', // Archivos de Storybook si los tienes
      ],

      

			// 'text': Informe en la consola
			// 'json': Archivo JSON con los datos de cobertura
			// 'html': Genera un directorio con un informe HTML interactivo (muy útil)
			// Directorio donde se guardarán los informes de cobertura
      // dir: './coverage', 
    },
    globals: true,
    // --- Configuración por defecto para JSDOM ---
    environment: 'jsdom', // JSDOM es el entorno predeterminado y más rápido
    // setupFiles: './src/setupTests.ts', // Archivo de setup de pruebas si lo tienes
    browser: {
        enabled: false,            // Habilito el modo navegador
        provider: 'playwright',   // O 'webdriverio'
        // https://vitest.dev/guide/browser/playwright
        instances: [              // Instancias de navegador si necesito probar en múltiples navegadores
          { browser: 'chromium' },
          { browser: 'firefox' },
        ],
        headless: true, // Siempre es bueno ejecutar en modo headless en CI/CD y localmente
    },
    setupFiles: './src/setupTests.ts', // <-- 
  },
})