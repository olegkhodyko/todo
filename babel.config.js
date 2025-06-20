module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@app': './src/app',
          '@api': './src/api',
          '@shared': './src/shared',
          '@config': './src/config',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@interfaces': './src/interfaces',
          '@features': './src/features',
          '@theme': './src/theme',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
  ],
};
