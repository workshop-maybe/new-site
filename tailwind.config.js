// tailwind.config.js
module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      container: {
        center: true,
      },
      fontFamily: {
        'sans': ['Noto Sans', 'ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['Courier Prime', 'ui-monospace', 'SFMono-Regular'],
        'title': ['Saira', 'ui-sans-serif', 'system-ui'],
        'dandelion': ['RocknRoll One', 'ui-sans-serif', 'system-ui'],
      },
      extend: {
        zIndex: {
          '-10': '-10',
          '-20': '-20',
         },
         backgroundImage: theme => ({
          'tinker' : "url('/tinker.jpeg')",
          'learn' : "url('/learn.jpeg')",
          'collab' : "url('/collab.jpeg')",
          'polygon' : "url('/polygon.png')",
         })
      },
    },
    variants: {
      width: ["responsive", "hover", "focus"],
      scale: ["responsive", "hover", "focus"],
      extend: {
        display: ['hover', 'focus'],
        boxSizing: ['hover', 'focus'],
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }