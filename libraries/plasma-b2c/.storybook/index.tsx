import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';
import { theme } from '@storybook/react-native-theming';

import { view } from './storybook.requires';

const StorybookUIRoot = view.getStorybookUI({
    storage: {
        getItem: AsyncStorage.getItem,
        setItem: AsyncStorage.setItem,
    },
    theme,
});

const Storybook = () => {
    const [fontsLoaded] = useFonts({
        'SBSansDisplay-Bold': require('assets/fonts/SBSansDisplay-Bold.otf'),
        'SBSansDisplay-Medium': require('assets/fonts/SBSansDisplay-Medium.otf'),
        'SBSansDisplay-Regular': require('assets/fonts/SBSansDisplay-Regular.otf'),
        'SBSansDisplay-Semibold': require('assets/fonts/SBSansDisplay-Semibold.otf'),
        'SBSansDisplay-Thin': require('assets/fonts/SBSansDisplay-Thin.otf'),
        'SBSansDisplay-Light': require('assets/fonts/SBSansDisplay-Light.otf'),
        'SBSansText-Bold': require('assets/fonts/SBSansText-Bold.otf'),
        'SBSansText-BoldItalic': require('assets/fonts/SBSansText-BoldItalic.otf'),
        'SBSansText-Italic': require('assets/fonts/SBSansText-Italic.otf'),
        'SBSansText-Light': require('assets/fonts/SBSansText-Light.otf'),
        'SBSansText-LightItalic': require('assets/fonts/SBSansText-LightItalic.otf'),
        'SBSansText-Medium': require('assets/fonts/SBSansText-Medium.otf'),
        'SBSansText-Regular': require('assets/fonts/SBSansText-Regular.otf'),
        'SBSansText-Semibold': require('assets/fonts/SBSansText-Semibold.otf'),
        'SBSansText-SemiboldItalic': require('assets/fonts/SBSansText-SemiboldItalic.otf'),
        'SBSansText-Thin': require('assets/fonts/SBSansText-Thin.otf'),
    });

    if (!fontsLoaded) return null;

    return <StorybookUIRoot />;
};

export default Storybook;
