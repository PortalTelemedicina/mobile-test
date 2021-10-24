const MetroConfig = require('@ui-kitten/metro-config');
const defaultConfig = require('metro-config/src/defaults').getDefaultValues();

const evaConfig = {
  evaPackage: '@eva-design/eva',
  customMappingPath: './src/app/UI/shared/styles/font-mapping.json',
};

module.exports = MetroConfig.create(evaConfig, {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
  },
});
