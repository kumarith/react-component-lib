import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.ts', // ✅ main entry
  output: {
    file: 'dist/index.js',
    format: 'esm',
    sourcemap: true,
  },
  external: ['react', 'react-dom'],
  plugins: [
    resolve({
      extensions: ['.js', '.ts', '.jsx', '.tsx'], // ✅ include .tsx
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      jsx: 'react-jsx',               // ✅ explicitly handle JSX
      declaration: true,
      declarationDir: 'dist',
      rootDir: 'src',
      exclude: ['**/*.test.ts', '**/*.stories.tsx'],
    }),
  ],
};
