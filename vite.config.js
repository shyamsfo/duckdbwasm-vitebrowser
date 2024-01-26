import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        target: "esnext", // Needed so that build can occur with the top-level 'await' statements,,
        rollupOptions: {
            output: {
                entryFileNames: `[name].js`,
                chunkFileNames: `[name].js`,
                assetFileNames: `[name].[ext]`
            },
            input: {
                duck_wasm: 'index.html',
            },
        }
    },
    server: {
        open: './index.html',
    },
})
