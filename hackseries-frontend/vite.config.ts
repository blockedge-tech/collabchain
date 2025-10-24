// import react from '@vitejs/plugin-react'
// import { defineConfig } from 'vite'
// import { nodePolyfills } from 'vite-plugin-node-polyfills'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     nodePolyfills({
//       globals: {
//         Buffer: true,
//       },
//     }),
//   ],
// })





import react from '@vitejs/plugin-react';
import rollupNodePolyFill from 'rollup-plugin-node-polyfills';
import { defineConfig } from 'vite';

// --- Vite 5-compatible config that fixes WalletConnect build errors ---
export default defineConfig({
  plugins: [
    react(),
    // Rollup polyfills handle process, buffer, global, etc.
    {
      ...rollupNodePolyFill(),
      apply: 'build',
    },
  ],

  define: {
    global: 'globalThis', // WalletConnect expects a Node-style global
  },

  resolve: {
    alias: {
    process: 'process/browser',
    buffer: 'buffer',
    'use-sync-external-store/shim/with-selector.js':
      'use-sync-external-store/shim/with-selector', // Fix Rollup import mismatch
  },
  },

  optimizeDeps: {
    include: [
      '@walletconnect/sign-client',
      '@walletconnect/utils',
      '@walletconnect/core',
    ],
  },

  build: {
    rollupOptions: {
      plugins: [rollupNodePolyFill()],
    },
  },
});
