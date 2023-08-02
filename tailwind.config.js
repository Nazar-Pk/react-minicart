/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,vue,svelte}', './**/*.{liquid,json}'],
    theme: {
        extend: {
            fontFamily: {
                heading: 'var(--font-heading-family)',
                body: 'var(--font-body-family)'
            },
            height: {
                'inherit': 'inherit'
            },
            minHeight: {
                'xs': '16rem'
            },
            lineHeight: {
                '0': '0'
            },
            width:{
                '22': '5.5rem'
            },
            maxWidth:{
                '3xl': '51.7rem',
                '8xl':'84rem'
            },
            minWidth: {
                'md': '28rem'
            },
            fontSize: {
                sm: ['var(--font-size-sm)', '1.428'],
                base: ['var(--font-size-base)', '1.5'],
                lg: ['var(--font-size-lg)', '1.555'],
                xl: ['var(--font-size-xl)', '1.4']
            },
            colors: {
                'orange': '#FF7D1A',
                'pale-orange': 'hsl(25, 100%, 94%)',
                'very-dark-blue': 'hsl(220, 13%, 13%)',
                'dark-grayish-blue': 'hsl(222, 4%, 48%)',
                'grayish-blue': 'hsl(230, 4%, 72%)',
                'light-grayish-blue': '#F7F8FD',
                'white': '#fff',
                'black': '#000',
                'orange-shadow': 'hsl(27, 100%, 80%)'
            },
            transitionTimingFunction: {
                wiggle: 'cubic-bezier(0.22, 1, 0.36, 1)'
            }
        }
    }
}