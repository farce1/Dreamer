const { join } = require('path')

const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind')

module.exports = {
  mode: 'jit',
  presets: [require('../../tailwind-workspace-preset.js')],
  content: [
    join(__dirname, 'pages/**/*.{ts,tsx}'),
    join(__dirname, 'components/**/*.{ts,tsx}'),
    join(__dirname, 'sections/**/*.{ts,tsx}'),
    ...createGlobPatternsForDependencies(__dirname)
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
