import React, { useState } from 'react';
import type { Preview, StoryFn, StoryContext } from '@storybook/react';
import { Switch, Text, View } from 'react-native';

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
        <View
            style={{
                flex: 1,
                padding: 8,
            }}
        >
            <Story />
        </View>
    );
};

export const withThemeProvider = (Story: StoryFn, context: StoryContext) => {
    const [themeMode, setThemeMode] = useState<ThemeMode>(context.globals.theme);

    const color = themeMode === 'dark' ? 'black' : 'white';

    const onThemeModeToggle = (value: boolean) => {
        const themeMode = value ? 'dark' : 'light';

        context.globals.theme = themeMode;
        setThemeMode(themeMode);
    };

    return (
        <>
            <CustomToolbar themeMode={themeMode} onThemeModeToggle={onThemeModeToggle} />
            <View
                style={{
                    backgroundColor: color,
                    height: '100%',
                }}
            >
                <Story />
            </View>
        </>
    );
};

const preview: Preview = {
    decorators: [withPaddings, withThemeProvider],
    globalTypes: {
        theme: {
            name: 'Theme',
            defaultValue: 'light',
        },
    },
};

export default preview;
