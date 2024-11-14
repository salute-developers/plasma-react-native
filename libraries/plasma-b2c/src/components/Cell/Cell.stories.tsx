import { View, Text } from 'react-native';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { IconPlasma, IconShazam } from '@salutejs/plasma-icons-native';

import { Checkbox } from '../Checkbox';
import { Radiobox } from '../Radiobox';
import { BodyM } from '../Typography';
import { Switch } from '../Switch';

import { Cell } from './Cell';

type CellProps = ComponentProps<typeof Cell>;

type StoryCellProps = Omit<CellProps, 'hasDisclosure' | 'disclosureText' | 'contentRight' | 'alignContentRight'>;

const notes = `
| **Control**       | **Description**                           | **Default** |
|-------------------|-------------------------------------------|-------------|
| view              | Вид ячейки                                | 'default'   |
| size              | Размер ячейки                             | 'm'         |
| label             | Текст для Label                           |             |
| title             | Текст для Title                           |             |
| subtitle          | Текст для Subtitle                        |             |
| stretching        | Поведение ширины ячейки                   | 'auto'      |
| alignContentLeft  | Вертикальное выравнивание контента слева  | 'center'    |
| alignContentRight | Вертикальное выравнивание контента справа | 'center'    |
`;

const meta: Meta<CellProps> = {
    title: 'Components/Cell',
    component: Cell,
    parameters: {
        notes,
    },
    args: {
        view: 'default',
        size: 'm',
        stretching: 'filled',
        label: 'Label',
        title: 'Title',
        subtitle: 'Subtitle',
        alignContentLeft: 'center',
        alignContentRight: 'center',
    },
    argTypes: {
        size: {
            options: ['xs', 's', 'm', 'l'],
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
        stretching: {
            options: ['auto', 'filled', 'fixed'],
            control: {
                type: 'select',
            },
        },
        alignContentLeft: {
            options: ['center', 'top', 'bottom'],
            control: {
                type: 'select',
            },
        },
        alignContentRight: {
            options: ['center', 'top', 'bottom'],
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

const StoryDefault = (props: StoryCellProps) => {
    return (
        <View style={{ gap: 20 }}>
            <Cell contentLeft={<IconShazam />} contentRight={<IconPlasma />} {...props} />
            <Cell contentLeft={<IconShazam />} {...props} />
            <Cell hasDisclosure contentLeft={<IconShazam />} {...props} />
            <Cell disclosureText="Disclosure" hasDisclosure contentLeft={<IconShazam />} {...props} />
            <Cell contentLeft={<IconShazam />} contentRight={<Checkbox checked />} {...props} />
            <Cell contentLeft={<IconShazam />} contentRight={<Radiobox checked />} {...props} />
            <Cell contentLeft={<IconShazam />} contentRight={<Switch checked />} {...props} />
            <Cell contentLeft={<IconShazam />} contentRight={<Text>Plain text</Text>} {...props} />
            <Cell contentLeft={<IconShazam />} contentRight={<BodyM>BodyM</BodyM>} {...props} />
        </View>
    );
};

export const Default: StoryObj<StoryCellProps> = {
    render: (args) => <StoryDefault {...args} />,
};
