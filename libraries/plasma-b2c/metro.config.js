const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const { generate } = require('@storybook/react-native/scripts/generate');

const projectRoot = __dirname;
const monorepoRoot = path.resolve(projectRoot, '../..');

generate({
    configPath: path.resolve(projectRoot, './.storybook'),
});

const defaultConfig = getDefaultConfig(projectRoot);

defaultConfig.watchFolders = [monorepoRoot];

// INFO: Необходимые настройки для работы монорепозитория
const dedupePackages = {
    react: path.resolve(projectRoot, 'node_modules/react/index.js'),
    'react-dom': path.resolve(projectRoot, 'node_modules/react-dom/index.js'),
    // INFO: Закомментировать две строчки ниже если нужно разрабатывать в браузере
    'react-native': path.resolve(projectRoot, 'node_modules/react-native/index.js'),
    'react-native-svg': path.resolve(projectRoot, 'node_modules/react-native-svg/lib/commonjs/index.js'),
};

defaultConfig.resolver = {
    ...defaultConfig.resolver,
    nodeModulesPaths: [path.resolve(projectRoot, 'node_modules'), path.resolve(monorepoRoot, 'node_modules')],
    resolveRequest: (context, moduleName, platform) => {
        if (dedupePackages[moduleName]) {
            return {
                filePath: dedupePackages[moduleName],
                type: 'sourceFile',
            };
        }

        return context.resolveRequest(context, moduleName, platform);
    },
};

module.exports = defaultConfig;
