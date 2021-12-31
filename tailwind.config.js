module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'very-light-gray-lt': 'hsl(0, 0%, 98%)',
        'very-light-grayish-blue-lt': 'hsl(236, 33%, 92%)',
        'light-grayish-blue-lt': 'hsl(233, 11%, 84%)',
        'dark-grayish-blue-lt': 'hsl(236, 9%, 61%)',
        'very-dark-grayish-blue-lt': 'hsl(235, 19%, 35%)',
        'very-dark-blue-dt': 'hsl(235, 21%, 11%)',
        'bg-card': 'hsl(235, 24%, 19%)',
        'light-grayish-blue-dt': 'hsl(234, 39%, 85%)',
        'light-grayish-blue-hover-dt': 'hsl(236, 33%, 92%)',
        'dark-grayish-blue-dt': 'hsl(234, 11%, 52%)',
        'input-info': 'hsl(233, 14%, 35%)',
        'circle-border': 'hsl(237, 14%, 26%)',
        'check-linear-start': 'hsl(192, 100%, 67%)',
        'check-linear-end': 'hsl(280, 87%, 65%)',
        'bright-blue': 'hsl(220, 98%, 61%)',
      },
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif'],
      },
      backgroundImage: {
        'desktop-dark': "url('/src/images/bg-desktop-dark.jpg')",
        'desktop-light': "url('/src/images/bg-desktop-light.jpg')",
        'mobile-dark': "url('/src/images/bg-mobile-dark.jpg')",
        'mobile-light': "url('/src/images/bg-mobile-light.jpg')",
      },
    },
  },
  plugins: [],
};
