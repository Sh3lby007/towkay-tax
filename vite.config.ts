import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import basicSSL from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    return {
        plugins: [
            vue(),
            VitePWA({
                registerType: 'autoUpdate',
                // Manifest JSON
                manifest: {
                    name: 'Towkay-tax'
                }
            }),
            // Enable https by default
            // https://vitejs.dev/config/server-options.html#server-https
            // https://vitejs.dev/guide/migration.html#automatic-https-certificate-generation
            basicSSL()
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },

        // When deploying to Github pages, the base URL will be your repo's name,
        // Thus the production base URL must be changed here for it to work when deployed.
        // Ref: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#next-steps
        base: mode === 'github-pages' ? '/towkay-tax/' : '/'
    }
})
