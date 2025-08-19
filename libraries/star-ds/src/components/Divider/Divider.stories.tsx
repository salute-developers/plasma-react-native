import { View, Text, StyleProp, ViewStyle } from 'react-native';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { Divider } from './Divider';

type StoryDividerProps = ComponentProps<typeof Divider>;

const notes = `
| **Control** | **Description**         | **Default**  |
|-------------|-------------------------|--------------|
| view        | Вид разделителя         | 'default'    |
| size        | Размер разделителя      | 'm'          |
| orientation | Направление разделителя | 'horizontal' |
| length      | Длина разделителя       | 100          |
`;

const meta: Meta<StoryDividerProps> = {
    title: 'Components/Divider',
    component: Divider,
    parameters: {
        notes,
    },
    args: {
        view: 'default',
        size: 'm',
        orientation: 'horizontal',
        length: 100,
    },
    argTypes: {
        size: {
            options: ['m'],
            control: {
                type: 'select',
            },
        },
        view: {
            options: ['default'],
            control: {
                type: 'select',
            },
        },
        orientation: {
            options: ['horizontal', 'vertical'],
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

const StoryDefault = (props: StoryDividerProps) => {
    const wrapperStyle: StyleProp<ViewStyle> =
        props.orientation === 'vertical' ? { flexDirection: 'row', height: 360 } : {};

    return (
        <View style={{ display: 'flex', gap: 16, ...wrapperStyle }}>
            <Text style={{ color: 'white', fontWeight: '600', fontSize: 16 }}>Before</Text>
            <Divider {...props} />
            <Text style={{ color: 'white', fontWeight: '600', fontSize: 16 }}>After</Text>
        </View>
    );
};

export const Default: StoryObj<StoryDividerProps> = {
    render: (args) => <StoryDefault {...args} />,
};
