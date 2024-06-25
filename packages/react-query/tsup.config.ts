import { options } from '@suspensive/tsup'
import { defineConfig } from 'tsup'

export default defineConfig([
  options,
  {
    clean: true,
    target: ['chrome51', 'firefox53', 'edge18', 'safari11', 'ios11', 'opera38', 'es6', 'node14'],
    entry: ['src/scripts/*.{ts,tsx}', 'src/scripts/**/*.{ts,tsx}', '!**/*.{spec,test,test-d,bench}.*'],
    outDir: 'dist/scripts',
    format: ['cjs'],
    sourcemap: true,
    dts: true,
  },
])
