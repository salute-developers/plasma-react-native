import { useState } from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { Radiobox } from './Radiobox';

type StoryRadioboxProps = ComponentProps<typeof Radiobox>;

const notes = `
| **Control**  | **Description**                                              | **Default** |
| ------------ | ------------------------------------------------------------ | ----------- |
| checked      | Помечен ли такой элемент формы, как флажок или переключатель | false       |
| label        | Метка-подпись к элементу                                     |             |
| description  | Описание элемента                                            |             |
| singleLine   | Label и description в одну строку или с переносом строк      | true        |
| view         | Вид кнопки                                                   | 'default'   |
| size         | Размер кнопки                                                | 'm'         |
| focused      | Может ли фокусироваться кнопка                               | true        |
| disabled     | Кнопка неактивна                                             | false       |
`;

const meta: Meta<StoryRadioboxProps> = {
    title: 'Components/Radiobox',
    component: Radiobox,
    parameters: {
        notes,
    },
    args: {
        view: 'accent',
        size: 'm',
        disabled: false,
        singleLine: true,
    },
    argTypes: {
        size: {
            options: ['s', 'm'],
            control: {
                type: 'select',
            },
        },
        view: {
            options: ['default', 'secondary', 'tertiary', 'paragraph', 'accent', 'positive', 'warning', 'negative'],
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

const StoryDefault = (props: StoryRadioboxProps) => {
    return (
        <>
            <Radiobox {...props} />
            <Radiobox checked name="item.name" value="item.value" label="Label" description="Description" {...props} />
            <Radiobox
                name="item.name"
                value="item.value"
                singleLine
                label="Label looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger"
                description="Description looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger"
                {...props}
            />
        </>
    );
};

export const Default: StoryObj<StoryRadioboxProps> = {
    render: (args) => <StoryDefault {...args} />,
};

const StoryControlled = (props: StoryRadioboxProps) => {
    const [checked, setChecked] = useState(false);

    const onValueChange = (value: boolean) => {
        setChecked(!value);
    };

    return (
        <>
            <Radiobox checked={checked} {...props} onValueChange={onValueChange} />
        </>
    );
};

export const Controlled: StoryObj<StoryRadioboxProps> = {
    args: {
        label: 'Label',
        description: 'Description',
    },
    render: (args) => <StoryControlled {...args} />,
};

const langName = 'language';

const items = [
    {
        name: langName,
        value: 'c',
        label: 'C',
        disabled: false,
        description: 'A general-purpose, procedural computer programming language',
    },
    { name: langName, value: 'cpp', label: 'C++', disabled: false },
    { name: langName, value: 'assembly', label: 'Assembly', disabled: false },
    { name: langName, value: 'elixir', label: 'Elixir', disabled: true },
];

const StoryComplex = (props: StoryRadioboxProps) => {
    const [checkedValue, setCheckedValue] = useState('cpp');

    const onValueChange = (item: any) => {
        setCheckedValue(item.value);
    };

    return items.map((item) => (
        <Radiobox
            checked={item.value === checkedValue}
            key={item.value}
            name={item.name}
            value={item.value}
            label={item.label}
            disabled={item.disabled}
            description={item.description}
            onValueChange={() => onValueChange(item)}
            {...props}
        />
    ));
};

export const Complex: StoryObj<StoryRadioboxProps> = {
    render: (args) => <StoryComplex {...args} />,
};
