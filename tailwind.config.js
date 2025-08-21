/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '320px', 
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    fontFamily: {
      sans: ['"Inter var"', 'sans-serif'],
    },
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 70s linear infinite",
        "bounce-up-down": "bounceUpDown 3s infinite", 
        "side-to-side": "SideToSide 7s infinite", 
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        bounceUpDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        SideToSide: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-10px)' },
        },
      },
      backgroundImage: {
        'hero1': "url('/src/images/pexels-stywo-1054218.jpg')",
        'texture': "url('/src/images/bg-texture.png')",
           'window': "url('/src/images/eran-menashri--JaaRZYHY0s-unsplash.jpg')",
      },
    },
  },
  plugins: [],
};
