import { useState } from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { View } from 'react-native';

import { Switch } from './Switch';

type StorySwitchProps = ComponentProps<typeof Switch>;

const notes = `
| **Control**  | **Description**                                              | **Default** |
| ------------ | ------------------------------------------------------------ | ----------- |
| checked      | Помечен ли такой элемент формы, как флажок или переключатель |  false      |
| label        | Метка-подпись к элементу                                     |             |
| description  | Описание элемента                                            |             |
| view         | Вид свитча                                                   | 'default'   |
| size         | Размер свитча                                                | 'm'         |
| focused      | Может ли фокусироваться свитч                                | true        |
| disabled     | Свитч неактивен                                              | false       |
`;

const meta: Meta<StorySwitchProps> = {
    title: 'Components/Switch',
    component: Switch,
    parameters: {
        notes,
    },
    args: {
        view: 'default',
        size: 'm',
        disabled: false,
        focused: true,
    },
    argTypes: {
        size: {
            options: ['s', 'm', 'l'],
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
    },
};

export default meta;

const StoryDefault = (props: StorySwitchProps) => {
    const [checked, setChecked] = useState(false);

    const onValueChange = (value: boolean) => {
        setChecked(!value);
    };

    return (
        <>
            <View style={{ width: 250 }}>
                <Switch checked={checked} {...props} onValueChange={onValueChange} />
            </View>
        </>
    );
};

export const Default: StoryObj<StorySwitchProps> = {
    args: {
        label: 'Label',
        description: 'Description',
    },
    render: (args) => <StoryDefault {...args} />,
};
