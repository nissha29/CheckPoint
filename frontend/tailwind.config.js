/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        tiltFloat: {
          '0%, 100%': { 
            transform: 'translateY(0) rotateX(0) rotateY(0)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          },
          '25%': { 
            transform: 'translateY(-20px) rotateX(3deg) rotateY(-3deg)',
            boxShadow: '0 35px 75px -15px rgba(0, 0, 0, 0.3)'
          },
          '75%': { 
            transform: 'translateY(-10px) rotateX(-3deg) rotateY(3deg)',
            boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.25)'
          },
        },
      },
      animation: {
        'tilt-float': 'tiltFloat 6s ease-in-out infinite',
        'tilt-float-delay-1': 'tiltFloat 6s ease-in-out 1.5s infinite',
        'tilt-float-delay-2': 'tiltFloat 6s ease-in-out 3s infinite',
        'tilt-float-delay-3': 'tilt-float 6s ease-in-out 4.5s infinite',
      },
    },
  },
  plugins: [],
}