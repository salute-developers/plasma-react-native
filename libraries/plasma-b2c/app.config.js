export default ({ config }) => ({
    ...config,
    name: 'Plasma B2C',
    slug: 'plasma-b2c',
    extra: {
        storybookEnabled: process.env.STORYBOOK_ENABLED,
    },
    plugins: ['@react-native-tvos/config-tv'],
    android: {
        package: 'com.anonymous.plasmab2c',
    },
    ios: {
        bundleIdentifier: 'com.anonymous.plasmab2c',
    },
});
