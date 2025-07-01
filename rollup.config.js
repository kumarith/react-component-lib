import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import esbuild from 'rollup-plugin-esbuild';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'es',
    sourcemap: true,
    preserveModules: true,
    preserveModulesRoot: 'src',
    entryFileNames: '[name].js',
    interop: 'auto'
  },
  plugins: [
    resolve({ extensions: ['.js', '.ts', '.tsx'] }),
    commonjs({
      include: /node_modules/,
    }),
    esbuild({
      include: /\.[jt]sx?$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2022',
      jsx: 'automatic',
      sourceMap: true,
      tsconfig: 'tsconfig.json',
    }),
  ],
  external: ['react', 'react-dom'],
};
