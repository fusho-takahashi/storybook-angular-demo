const path = require('path');

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: {
          parser: 'typescript',
        },
      },
    ],
    include: [path.resolve(__dirname, '../stories')],
    enforce: 'pre',
  });
  return config;
};
