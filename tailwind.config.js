const { fontFamily } = require("tailwindcss/defaultTheme")

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
        container: {
          center: true,
          padding: "1.5rem", 
          screens: {
            "2xl": "1280px", 
          },
        },
        extend: {
          colors: {
            border: "hsl(var(--border))",
            input: "hsl(var(--input))",
            ring: "hsl(var(--ring))",
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            primary: {
              DEFAULT: "hsl(var(--primary))",
              foreground: "hsl(var(--primary-foreground))",
            },
            secondary: {
              DEFAULT: "hsl(var(--secondary))",
              foreground: "hsl(var(--secondary-foreground))",
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
            daySnap: {
              white: "hsl(var(--daySnap-white))",
              lightGray: "hsl(var(--daySnap-lightGray))",
              gray: "hsl(var(--daySnap-gray))",
              mediumGray: "hsl(var(--daySnap-mediumGray))",
              darkGray: "hsl(var(--daySnap-darkGray))",
              charcoal: "hsl(var(--daySnap-charcoal))",
              black: "hsl(var(--daySnap-black))",
            }
          },
          borderRadius: {
            xl: "calc(var(--radius) + 4px)", 
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
          },
          fontFamily: {
            sans: ["var(--font-sans)", ...fontFamily.sans],
            display: ["var(--font-display)", ...fontFamily.sans],
          },
          boxShadow: {
            'subtle': '0 2px 4px hsla(var(--primary) / 0.05)',
            'subtle-lg': '0 4px 12px hsla(var(--primary) / 0.08)',
            'capsule': '0 5px 15px hsla(var(--primary) / 0.1), 0 2px 6px hsla(var(--primary) / 0.08)',
          },
          keyframes: {
            "accordion-down": {
              from: { height: "0" },
              to: { height: "var(--radix-accordion-content-height)" },
            },
            "accordion-up": {
              from: { height: "var(--radix-accordion-content-height)" },
              to: { height: "0" },
            },
            "subtle-pulse": {
              "0%, 100%": { opacity: 1 },
              "50%": { opacity: 0.8 },
            },
            "slide-in-up": {
              "0%": { transform: "translateY(20px)", opacity: 0 },
              "100%": { transform: "translateY(0)", opacity: 1 },
            },
            "fade-in": {
              "0%": { opacity: 0 },
              "100%": { opacity: 1 },
            }
          },
          animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
            "subtle-pulse": "subtle-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            "slide-in-up": "slide-in-up 0.5s ease-out forwards",
            "fade-in": "fade-in 0.5s ease-out forwards",
          },
          backgroundImage: {
            'subtle-gradient-light': 'linear-gradient(180deg, hsl(var(--background)), hsl(var(--daySnap-lightGray)))',
            'subtle-gradient-dark': 'linear-gradient(180deg, hsl(var(--background)), hsl(var(--daySnap-charcoal)))',
          }
        },
      },
      plugins: [require("tailwindcss-animate")],
    }