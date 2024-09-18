export default ({ config }) => ({
    ...config,
    name: 'Star DS',
    slug: 'star-ds',
    extra: {
        storybookEnabled: process.env.STORYBOOK_ENABLED,
    },
    plugins: ['@react-native-tvos/config-tv'],
    android: {
        package: 'com.anonymous.stards',
    },
    ios: {
        bundleIdentifier: 'com.anonymous.stards',
    },
});
