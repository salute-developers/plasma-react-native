export default ({ config }) => ({
    ...config,
    name: 'Plasma B2C',
    slug: 'plasma-b2c',
    extra: {
        storybookEnabled: process.env.STORYBOOK_ENABLED,
    },
});
