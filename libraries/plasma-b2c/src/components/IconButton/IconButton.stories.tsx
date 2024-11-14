import type { ComponentProps } from 'react';
import Svg, { Path } from 'react-native-svg';
import type { StoryObj, Meta } from '@storybook/react';

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

interface IconSvgProps {
    size?: number;
    color?: string;
}

// TODO: перенести для примеров в другое место
const PlasmaIcon: React.FC<IconSvgProps> = ({ size = 24, color }) => (
    <Svg viewBox="0 0 24 24" fill="none" width={size} height={size} color={color}>
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 14.0957 4.25846 16.0143 5.51587 17.4963C5.23619 16.745 5.08333 15.932 5.08333 15.0833C5.08333 11.2634 8.18003 8.16667 12 8.16667C15.82 8.16667 18.9167 11.2634 18.9167 15.0833C18.9167 15.932 18.7638 16.745 18.4841 17.4963C19.7415 16.0143 20.5 14.0957 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM15.7427 18.999C16.7742 18.0128 17.4167 16.6231 17.4167 15.0833C17.4167 12.0918 14.9915 9.66667 12 9.66667C9.00846 9.66667 6.58333 12.0918 6.58333 15.0833C6.58333 16.6231 7.2258 18.0128 8.25728 18.999C8.19795 18.731 8.16667 18.4525 8.16667 18.1667C8.16667 16.0496 9.88291 14.3333 12 14.3333C14.1171 14.3333 15.8333 16.0496 15.8333 18.1667C15.8333 18.4525 15.802 18.731 15.7427 18.999ZM12 20.5C13.2887 20.5 14.3333 19.4553 14.3333 18.1667C14.3333 16.878 13.2887 15.8333 12 15.8333C10.7113 15.8333 9.66667 16.878 9.66667 18.1667C9.66667 19.4553 10.7113 20.5 12 20.5ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            fill="currentColor"
        />
    </Svg>
);

const StoryDefault = (props: StoryButtonProps) => {
    const onPress = () => {
        alert('Произошёл onPress');
    };

    return (
        <IconButton {...props} onPress={onPress}>
            <PlasmaIcon />
        </IconButton>
    );
};

export const Default: StoryObj<StoryButtonProps> = {
    render: (args) => <StoryDefault {...args} />,
};