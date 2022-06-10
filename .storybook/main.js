const custom = require('../webpack.config');

module.exports = {
  stories: [
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  core: {
    builder: "webpack5",
  },
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '../storybook-addons/preset.js'
  ],
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        fallback: { crypto: false },
      },
      module: {
        ...config.module,
        rules: custom.module.rules
      }
    };
  }
};
