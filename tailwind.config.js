module.exports = {
  content: [
    './index.html',
    './node_modules/flowbite/**/*.js',
    './node_modules/daisyui/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
        secondary: '#14171A',
        accent: '#657786',
        background: '#E1E8ED',
        surface: '#F5F8FA',
        danger: '#E0245E',
        success: '#17BF63',
        warning: '#FFAD1F',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Menlo', 'monospace'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#1DA1F2",
          "secondary": "#14171A",
          "accent": "#657786",
          "neutral": "#3D4451",
          "base-100": "#FFFFFF",
          "info": "#2094f3",
          "success": "#17BF63",
          "warning": "#FFAD1F",
          "error": "#E0245E",
        },
      },
    ],
  },
}
