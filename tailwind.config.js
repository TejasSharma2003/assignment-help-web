/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
        './src/**/*.{js,jsx}',
    ],
    theme: {
        // '2xl': { 'max': '1535px' },
        // 'xl': { 'max': '1279px' },
        // 'lg': { 'max': '1023px' },
        // 'md': { 'max': '900px' },
        // 'sm': { 'max': '639px' },
        // 'sm-2': { 'max': '690px' },
        // 'tiny': { 'max' : '474px' },
        container: {
            center: true,
            padding: "1rem",
            screens: {
                "lg": "70rem",
            },
        },
        extend: {
            gridTemplateColumns: {
                'footer': '1.5fr 1fr 1fr 1fr 1.5fr',
                'expert-layout-cols': 'minmax(150px,350px) minmax(0,200px) minmax(0,200px) minmax(0,200px)'
            },
            gridTemplateRows: {
                'expert-layout-rows': '120px 200px 170px'
            },
            backgroundImage: {
                // 'hero-image': "url('/aboutus.png')",
                'hero-image': "url('/hero-2.jpg')",
                'light-gradient': "linear-gradient(122deg, rgba(91, 72, 197, 0.02) -3.16%, rgba(224, 65, 124, 0.02) 95.65%)",
                'fade-left': 'linear-gradient(91deg, #ffff,17%, rgba(255, 255, 255, 0.00) 20%)',
                'fade-right': 'linear-gradient(270deg, #ffff,17%, rgba(255, 255, 255, 0.00) 20%)',
            },
            fontFamily: {
                "poppins-light": ["var(--poppins-light)"],
                "poppins-medium": ["var(--poppins-medium)"],
                "poppins-regular": ["var(--poppins-regular)"],
                "poppins-bold": ["var(--poppins-bold)"],
                "poppins-semibold": ["var(--poppins-semibold)"],
            },
            fontSize: {
                sm: '0.7rem',
                base: '0.8rem',
                lg: '0.9rem',
                xl: '1rem',
                '2xl': '1.7rem',
                '3xl': '1.953rem',
                '4xl': '2.441rem',
                '5xl': '3.052rem',
            },
            boxShadow: {

                "light": "var(--light)",
            },
            colors: {
                overlay: 'rgba(0, 0, 0, 0.75)',
                "sub-heading-fill": "hsl(var(--sub-heading-fill))",
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                "background-gray": "hsl(var(--background-gray))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                    700: "#41338C",
                    dark: "#251d4f"
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
}
