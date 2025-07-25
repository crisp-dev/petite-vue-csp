import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  esbuild: {
    minify: true
  },
  build: {
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      format: {
        comments: false
      },

      mangle: {
        reserved: ["$", "_"]
      }
    },
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'PetiteVue',
      formats: ['es', 'umd', 'iife']
    },
    rollupOptions: {
      plugins: [
        {
          name: 'remove-collection-handlers',
          transform(code, id) {
            if (id.endsWith('reactivity.esm-bundler.js')) {
              return code
                .replace(`mutableCollectionHandlers,`, `null,`)
                .replace(`readonlyCollectionHandlers,`, `null,`)
            }
          }
        }
      ]
    }
  }
})
