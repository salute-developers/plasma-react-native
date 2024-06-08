import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { Spinner } from './Spinner';

type StorySpinnerProps = ComponentProps<typeof Spinner>;

const notes = `
| **Control** | **Description**                | **Default**     |
| ----------- | ------------------------------ | --------------- |
| view        | Вид спиннера                   | 'accent'       |
| size        | Размер спиннера                | 'm'             |
`;

const meta: Meta<StorySpinnerProps> = {
    title: 'Components/Spinner',
    component: Spinner,
    parameters: {
        notes,
    },
    args: {
        view: 'accent',
        size: 'm',
    },
    argTypes: {
        size: {
            options: ['s', 'm', 'l'],
            control: {
                type: 'select',
            },
        },
        view: {
            options: ['default', 'accent', 'secondary', 'tertiary', 'positive', 'warning', 'negative'],
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

const StoryDefault = (props: StorySpinnerProps) => {
    return <Spinner {...props} />;
};

export const Default: StoryObj<StorySpinnerProps> = {
    render: (args) => <StoryDefault {...args} />,
};
