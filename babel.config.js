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
          '@theme': './src/theme',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
