/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';
import { join } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';
// import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: join(__dirname, 'tsconfig.lib.json'),
      entryRoot: join(__dirname, 'src'),
      insertTypesEntry: true,
      logLevel: 'silent'
    }),
    react(),
    viteTsConfigPaths({
      root: '../../../'
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'README.md',
          dest: ''
        }
      ]
    }),
    // libInjectCss()
  ],

  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    cssCodeSplit: false,
    lib: {
      entry: 'src/index.ts',
      name: '@a-ui/react',
      fileName: 'index',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: [
        {
          format: 'es',
          dir: 'dist/es',
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
        {
          format: 'cjs',
          dir: 'dist/cjs',
          preserveModules: true,
          preserveModulesRoot: 'src',
        }
      ]
    }
  },
  test: {
    globals: true,
    cache: {
      dir: '../../../node_modules/.vitest'
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
  }
});
