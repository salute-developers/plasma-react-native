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
        'SB Sans Display Bold': require('assets/fonts/SBSansDisplay-Bold.otf'),
        'SB Sans Display Medium': require('assets/fonts/SBSansDisplay-Medium.otf'),
        'SB Sans Display': require('assets/fonts/SBSansDisplay-Regular.otf'),
        'SB Sans Display Semibold': require('assets/fonts/SBSansDisplay-Semibold.otf'),
        'SB Sans Display Thin': require('assets/fonts/SBSansDisplay-Thin.otf'),
        'SB Sans Display Light': require('assets/fonts/SBSansDisplay-Light.otf'),
        'SB Sans Text Bold': require('assets/fonts/SBSansText-Bold.otf'),
        'SB Sans Text Bold Italic': require('assets/fonts/SBSansText-BoldItalic.otf'),
        'SB Sans Text Italic': require('assets/fonts/SBSansText-Italic.otf'),
        'SB Sans Text Light': require('assets/fonts/SBSansText-Light.otf'),
        'SB Sans Text Light Italic': require('assets/fonts/SBSansText-LightItalic.otf'),
        'SB Sans Text Medium': require('assets/fonts/SBSansText-Medium.otf'),
        'SB Sans Text': require('assets/fonts/SBSansText-Regular.otf'),
        'SB Sans Text Semibold': require('assets/fonts/SBSansText-Semibold.otf'),
        'SB Sans Text Semibold Italic': require('assets/fonts/SBSansText-SemiboldItalic.otf'),
        'SB Sans Text Thin': require('assets/fonts/SBSansText-Thin.otf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return <StorybookUIRoot />;
};

export default Storybook;
