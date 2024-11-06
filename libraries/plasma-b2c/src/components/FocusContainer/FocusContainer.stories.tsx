import { Text, View } from 'react-native';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { Checkbox } from '../Checkbox';
import { BodyM, H2 } from '../Typography';

import { FocusContainer } from './FocusContainer';

type StoryFocusContainerProps = ComponentProps<typeof FocusContainer>;

const notes = `
| **Control**              | **Description**          | **Default** |
|--------------------------|--------------------------|-------------|
| unfocusedBackgroundColor | Фон карточки в не фокуса |             |
| unfocusedTextColor       | Текст кнопки в не фокуса |             |
`;

const meta: Meta<StoryFocusContainerProps> = {
    title: 'Components/FocusContainer',
    component: FocusContainer,
    parameters: {
        notes,
    },
    args: {
        unfocusedBackgroundColor: '#ffffff1f',
        unfocusedTextColor: 'lightblue',
    },
};

export default meta;

const StoryDefault = (props: StoryFocusContainerProps) => {
    return (
        <FocusContainer
            unfocusedBackgroundColor={props.unfocusedBackgroundColor}
            unfocusedTextColor={props.unfocusedTextColor}
        >
            {({ focusedBackgroundColor, focused, focusedScale, focusedTextColor }) => {
                const styles = {
                    root: {
                        width: 300,
                        height: 150,
                        padding: 16,
                    },
                    background: {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        borderRadius: 16,
                        backgroundColor: focusedBackgroundColor,
                        transform: [
                            {
                                scale: focusedScale,
                            },
                        ],
                    } as any,
                    text: {
                        color: focusedTextColor,
                    },
                };

                return (
                    <View style={styles.root}>
                        <View style={styles.background} />
                        <Text style={styles.text}>Text</Text>
                        <Checkbox label="Label" focused={focused} />
                        <H2 focused={focused}>Title</H2>
                        <BodyM focused={focused}>Subtitle</BodyM>
                    </View>
                );
            }}
        </FocusContainer>
    );
};

export const Default: StoryObj<StoryFocusContainerProps> = {
    render: (args) => <StoryDefault {...args} />,
};
