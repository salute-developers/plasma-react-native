import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { IconPlasma } from '@salutejs/plasma-icons-native';

import { IconButton } from './IconButton';

type StoryButtonProps = ComponentProps<typeof IconButton>;

const notes = `
| **Control** | **Description**                | **Default**     |
| ----------- | ------------------------------ | --------------- |
| view        | Вид кнопки                     | 'default'       |
| size        | Размер кнопки                  | 'm'             |
| pin         | Скругление border-radius       | 'square-square' |
| focused     | Может ли фокусироваться кнопка | true            |
| disabled    | Кнопка неактивна               | false           |
| isLoading   | Состояние загрузки             | false           |
`;

const meta: Meta<StoryButtonProps> = {
    title: 'Components/IconButton',
    component: IconButton,
    parameters: {
        notes,
    },
    args: {
        view: 'default',
        size: 'm',
        pin: 'square-square',
        disabled: false,
        isLoading: false,
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
    },
};

export default meta;

const StoryDefault = (props: StoryButtonProps) => {
    const onPress = () => {
        alert('Произошёл onPress');
    };

    return (
        <IconButton {...props} onPress={onPress}>
            <IconPlasma />
        </IconButton>
    );
};

export const Default: StoryObj<StoryButtonProps> = {
    render: (args) => <StoryDefault {...args} />,
};
