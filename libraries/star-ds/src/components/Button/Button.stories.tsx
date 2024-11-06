import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { Text } from 'react-native';

import { Button } from './Button';

interface AdditionalStoryProps {
    showLeftContent: boolean;
    showRightContent: boolean;
}

type StoryButtonProps = ComponentProps<typeof Button> & AdditionalStoryProps;

const notes = `
| **Control** | **Description**                | **Default**     |
| ----------- | ------------------------------ | --------------- |
| text        | Текстовая надпись              |                 |
| value       | Значение кнопки                |                 |
| view        | Вид кнопки                     | 'default'       |
| size        | Размер кнопки                  | 'm'             |
| pin         | Скругление border-radius       | 'square-square' |
| stretching  | Поведение ширины кнопки        | 'auto'          |
| spacing     | Поведение ширины кнопки        | 'packed'        |
| focused     | Может ли фокусироваться кнопка | true            |
| disabled    | Кнопка неактивна               | false           |
| isLoading   | Состояние загрузки             | false           |
`;

const meta: Meta<StoryButtonProps> = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        notes,
    },
    args: {
        text: 'Hello',
        value: 'Value',
        view: 'default',
        size: 'm',
        pin: 'square-square',
        disabled: false,
        stretching: 'auto',
        spacing: 'packed',
        isLoading: false,
        // INFO: кастомные свойства для стори
        showLeftContent: false,
        showRightContent: false,
    },
    argTypes: {
        pin: {
            options: [
                'square-square',
                'square-clear',
                'clear-square',
                'clear-clear',
                'clear-circle',
                'circle-clear',
                'circle-circle',
            ],
            control: {
                type: 'select',
            },
        },
        size: {
            options: ['xs', 's', 'm', 'l'],
            control: {
                type: 'select',
            },
        },
        view: {
            options: ['default', 'clear'],
            control: {
                type: 'select',
            },
        },
        stretching: {
            options: ['auto', 'filled', 'fixed'],
            control: {
                type: 'select',
            },
        },
        spacing: {
            options: ['packed', 'space-between'],
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

const StoryDefault = (props: StoryButtonProps) => {
    const onPress = () => {
        alert('Произошёл onPress');
    };

    return (
        <Button
            {...props}
            onPress={onPress}
            contentLeft={props.showLeftContent && <Text style={{ color: 'red' }}>Left Content</Text>}
            contentRight={props.showRightContent && <Text style={{ color: 'green' }}>Right Content</Text>}
        />
    );
};

export const Default: StoryObj<StoryButtonProps> = {
    render: (args) => <StoryDefault {...args} />,
};
