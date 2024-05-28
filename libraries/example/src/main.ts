import '@expo/metro-runtime';

import { registerRootComponent } from 'expo';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const AppEntryPoint = require('../.storybook').default;

registerRootComponent(AppEntryPoint);
