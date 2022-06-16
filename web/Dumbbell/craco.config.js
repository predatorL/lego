const CracoLessPlugin = require('craco-less');
const CracoAlias = require('craco-alias');
const CracoMultiplePage = require('craco-multiple-page');

module.exports = {
    plugins: [
      {
        plugin: CracoAlias,
        options: {
          source: "tsconfig",
          baseUrl: "./src",
          tsConfigPath: "./tsconfig.paths.json"
        }
      },
      {
        plugin: CracoLessPlugin,
        options: {
          lessLoaderOptions: {
            lessOptions: {
              javascriptEnabled: true,
            },
          },
        },
      },
      {
        plugin: CracoMultiplePage,
        options: {
          pages: [
            {
              name: 'home',
              template: './public/home.html',
              entry: './src/pages/home/index.tsx',
            },
            {
              name: 'chinese',
              template: './public/chinese.html',
              entry: './src/pages/chinese/index.tsx',
            },
          ],
        },
      },
    ],
  };