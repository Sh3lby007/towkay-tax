/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        animation: { typing: ' typing 1.5s steps(14), blink 0.3s' },
        keyframes: {
            typing: {
                from: { width: '0' },
                to: { width: '14ch' }
            },
            blink: {
                from: { 'border-right-color': 'transparent' },
                to: { 'border-right-color': 'transparent' }
            }
        }
    },
    plugins: []
}
