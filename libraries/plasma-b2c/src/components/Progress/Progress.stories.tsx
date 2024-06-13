import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { Progress } from './Progress';

type StoryProgressProps = ComponentProps<typeof Progress>;

const notes = `
| **Control**   | **Description**                | **Default**          |
| ------------- | ------------------------------ | -------------------- |
| view          | Вид прогресса                             | 'accent'  |
| size          | Размер прогресса                          | 'm'       |
| value         | Значение прогресса в процентах            | 0         |
| displayValue  | Отображать числовое значение прогресса    | true      |
`;

const meta: Meta<StoryProgressProps> = {
    title: 'Components/Progress',
    component: Progress,
    parameters: {
        notes,
    },
    args: {
        view: 'accent',
        size: 'm',
        value: 25,
        displayValue: true,
    },
    argTypes: {
        size: {
            options: ['m'],
            control: {
                type: 'select',
            },
        },
        view: {
            options: ['default', 'secondary', 'accent', 'accent-gradient', 'positive', 'warning', 'negative'],
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

const StoryDefault = (props: StoryProgressProps) => {
    return <Progress {...props} />;
};

export const Default: StoryObj<StoryProgressProps> = {
    render: (args) => <StoryDefault {...args} />,
};
