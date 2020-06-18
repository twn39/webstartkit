import json from '@rollup/plugin-json';
import {terser} from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import image from '@rollup/plugin-image';

export default {
    input: 'web/index.ts',
    output: [
        {
            file: 'public/dist/bundle.js',
            format: 'esm',
            sourcemap: true
        },
        {
            file: 'public/dist/bundle.min.js',
            format: 'iife',
            name: 'version',
            plugins: [terser()]
        }
    ],
    plugins: [
        babel({
            exclude: 'node_modules/**',
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs'],
        }),
        json(),
        image(),
        resolve(),
    ]
};