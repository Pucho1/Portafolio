import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  // If you want to keep running your existing tests in Node.js, uncomment the next line.
  // 'vite.config.ts',
  {
    extends: 'vite.config.ts',
    test: {
      browser: {
        enabled: true,            // Habilito el modo navegador
        provider: 'playwright',   // O 'webdriverio'
        // https://vitest.dev/guide/browser/playwright
        instances: [              // Instancias de navegador si necesito probar en múltiples navegadores
          { browser: 'chromium' },
          { browser: 'firefox' },
        ],
      },
    },
  },
])
