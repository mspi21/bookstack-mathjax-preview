import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';

export default {
    input: 'index.js', // The entry point of your library
    output: {
        file: 'dist/bundle.js', // Output file
        format: 'esm', // Use ES Module format
    },
    plugins: [
        resolve(), // Resolve dependencies from node_modules
        commonjs(), // Convert CommonJS modules to ES Modules
        json(),
        terser(),
    ],
};