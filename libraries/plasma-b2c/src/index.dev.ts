// eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
const { registerRootComponent } = require('expo');

// eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
const storybook = require('../../.storybook');

const AppEntryPoint = storybook.default;
registerRootComponent(AppEntryPoint);
