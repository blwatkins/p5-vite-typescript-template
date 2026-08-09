/*
 * Copyright (c) 2026 Brittni Watkins.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom
 * the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE
 * AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
 * FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import path from 'path';

import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __dirname: string = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    base: './',
    publicDir: path.resolve(__dirname, 'public'),
    build: {
        outDir: '_dist',
        emptyOutDir: true,
        rolldownOptions: {
            output: {
                entryFileNames: '[name].[hash:6].js',
                chunkFileNames: '[name].[hash:6].js',
                assetFileNames: '[name].[hash:6][extname]'
            }
        }
    },
    server: {
        host: '127.0.0.1',
        port: 8080,
        open: true,
        strictPort: true
    }
});
