import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { Indicator } from './Indicator';

type StoryIndicatorProps = ComponentProps<typeof Indicator>;

const notes = `
| **Control** | **Description**                | **Default**     |
| ----------- | ------------------------------ | --------------- |
| view        | Вид индикатора                 | 'accent'        |
| size        | Размер индикатора              | 'm'             |
`;

const meta: Meta<StoryIndicatorProps> = {
    title: 'Components/Indicator',
    component: Indicator,
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
            options: ['default', 'accent', 'inactive', 'positive', 'warning', 'negative'],
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

const StoryDefault = (props: StoryIndicatorProps) => {
    return <Indicator {...props} />;
};

export const Default: StoryObj<StoryIndicatorProps> = {
    render: (args) => <StoryDefault {...args} />,
};
