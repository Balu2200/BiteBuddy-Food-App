module.exports = {
  presets: [
      // Transpile modern JavaScript based on the current Node.js version
      ['@babel/preset-env', { targets: { node: 'current' } }],
      // Enable JSX and React-specific transformations
      ['@babel/preset-react', { runtime: 'automatic' }],
  ],
};

  