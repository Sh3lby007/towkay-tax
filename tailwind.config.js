/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        animation: { typing: ' typing 1.5s steps(37)' },
        keyframes: {
            typing: {
                '0%': {
                    width: '0%'
                },
                '100%': {
                    width: '100%'
                }
            }
        }
    },
    plugins: []
}
