const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const { generate } = require('@storybook/react-native/scripts/generate');

const projectRoot = __dirname;
const monorepoRoot = path.resolve(projectRoot, '../..');

generate({
    configPath: path.resolve(projectRoot, './.storybook'),
});

const defaultConfig = getDefaultConfig(projectRoot);

// INFO: Необходимые настройки для работы монорепозитория
defaultConfig.watchFolders = [monorepoRoot];
defaultConfig.resolver.nodeModulesPaths = [
    path.resolve(projectRoot, 'node_modules'),
    path.resolve(monorepoRoot, 'node_modules'),
];

module.exports = defaultConfig;
