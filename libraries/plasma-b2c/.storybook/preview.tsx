import React, { useState } from 'react';
import type { Preview, StoryFn, StoryContext } from '@storybook/react';
import { ScrollView, Switch, Text, View, Platform } from 'react-native';

import { plasma_b2c } from '@salutejs/plasma-themes-native';
import { ThemeProvider } from '@salutejs/core-components';

type ThemeMode = 'light' | 'dark';

interface CustomToolbarProps {
    themeMode?: ThemeMode;
    onThemeModeToggle?: (value: boolean) => void;
}

const CustomToolbar = (props: CustomToolbarProps) => {
    const value = props.themeMode === 'dark' ? true : false;

    return (
        <View>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    marginBottom: 8,
                    marginRight: 8,
                    gap: 8,
                }}
            >
                <Text>Light</Text>
                <Switch value={value} onValueChange={props.onThemeModeToggle} />
                <Text>Dark</Text>
            </View>
            <View
                style={{
                    height: 1,
                    width: '100%',
                    backgroundColor: '#dee2e3',
                }}
            />
        </View>
    );
};

export const withPaddings = (Story: StoryFn) => {
    return (
        <ScrollView
            style={{
                flex: 1,
                padding: 8,
            }}
        >
            <Story />
        </ScrollView>
    );
};

export const withThemeProvider = (Story: StoryFn, context: StoryContext) => {
    const [themeMode, setThemeMode] = useState<ThemeMode>(context.globals.theme);

    const data = plasma_b2c;

    const onThemeModeToggle = (value: boolean) => {
        const themeMode = value ? 'dark' : 'light';

        context.globals.theme = themeMode;
        setThemeMode(themeMode);
    };

    return (
        <ThemeProvider
            theme={{
                mode: themeMode,
                screenSize: 'screenM', // TODO: Сделать это свойство динамическим
                data,
            }}
        >
            <>
                {!Platform.isTV && <CustomToolbar themeMode={themeMode} onThemeModeToggle={onThemeModeToggle} />}
                <View
                    style={{
                        backgroundColor: data.color[themeMode].backgroundPrimary,
                        height: '100%',
                    }}
                >
                    <Story />
                </View>
            </>
        </ThemeProvider>
    );
};

const preview: Preview = {
    parameters: {
        controls: { expanded: true },
    },
    decorators: [withPaddings, withThemeProvider],
    globalTypes: {
        theme: {
            name: 'Theme',
            defaultValue: 'dark',
        },
    },
};

export default preview;
