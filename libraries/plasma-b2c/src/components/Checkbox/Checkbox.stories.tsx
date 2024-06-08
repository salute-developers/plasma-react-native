import { useState } from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { Checkbox } from './Checkbox';

type StoryCheckboxProps = ComponentProps<typeof Checkbox>;

const notes = `
| **Control**  | **Description**                                              | **Default** |
| ------------ | ------------------------------------------------------------ | ----------- |
| checked      | Помечен ли такой элемент формы, как флажок или переключатель |  false      |
| label        | Метка-подпись к элементу                                     |             |
| description  | Описание элемента                                            |             |
| singleLine   | Label и description в одну строку или с переносом строк      | true        |
| view         | Вид чекбокса                                                 | 'default'   |
| size         | Размер чекбокса                                              | 'm'         |
| focused      | Может ли фокусироваться чекбокс                              | true        |
| disabled     | Чекбокс неактивен                                            | false       |
`;

const meta: Meta<StoryCheckboxProps> = {
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
        notes,
    },
    args: {
        view: 'accent',
        size: 'm',
        disabled: false,
        focused: true,
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

const StoryDefault = (props: StoryCheckboxProps) => {
    return (
        <>
            <Checkbox {...props} />
            <Checkbox checked name="item.name" value="item.value" label="Label" description="Description" {...props} />
            <Checkbox
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

export const Default: StoryObj<StoryCheckboxProps> = {
    render: (args) => <StoryDefault {...args} />,
};

const StoryControlled = (props: StoryCheckboxProps) => {
    const [checked, setChecked] = useState(false);

    const onValueChange = (value: boolean) => {
        setChecked(!value);
    };

    return (
        <>
            <Checkbox checked={checked} {...props} onValueChange={onValueChange} />
        </>
    );
};

export const Controlled: StoryObj<StoryCheckboxProps> = {
    args: {
        label: 'Label',
        description: 'Description',
    },
    render: (args) => <StoryControlled {...args} />,
};

const name = 'languages';

const items = [
    {
        name,
        value: 'natural',
        label: 'Natural languages',
        disabled: false,
        description: 'Languages that people speak. They were not designed by people and they evolved naturally.',
    },
    { name, value: 'russian', label: 'Russian', disabled: false, parent: 'natural' },
    {
        name,
        value: 'english',
        label: 'English',
        disabled: false,
        parent: 'natural',
        description: 'The most spoken language in the world',
    },
    { name, value: 'french', label: 'French', disabled: false, parent: 'natural' },
    { name, value: 'klingon', label: 'Klingon', disabled: false, parent: 'natural' },
    { name, value: 'elvish', label: 'Elvish', disabled: true, parent: 'natural' },
    { name, value: 'dothraki', label: 'Dothraki', disabled: true, parent: 'natural' },
    {
        name,
        value: 'chinese',
        label: 'Chinese is the hardest language',
        parent: 'natural',
    },
];

const getChildren = (value: string) => items.filter((item) => item.parent === value);

const getState = (values: Record<string, boolean | undefined>, value: string) => {
    const allChildren = getChildren(value);

    if (!allChildren.length) {
        return { checked: values[value], indeterminate: false };
    }

    const checkedChildren = allChildren.filter((child) => values[child.value]);

    if (checkedChildren.length === 0) {
        return { checked: false, indeterminate: false };
    }

    if (allChildren.length !== checkedChildren.length) {
        return { checked: false, indeterminate: true };
    }

    return { checked: true, indeterminate: false };
};

const StoryComplex = (props: StoryCheckboxProps) => {
    const [values, setValues] = useState({
        russian: true,
        english: true,
        french: true,
        klingon: false,
        elvish: true,
        dothraki: false,
        chinese: true,
    });

    const onValueChange = (item: any, checked: boolean) => {
        if (item.parent) {
            setValues({ ...values, [item.value]: !checked });
        } else {
            setValues({
                ...values,
                ...getChildren(item.value).reduce((acc, child) => ({ ...acc, [child.value]: !checked }), {}),
            });
        }
    };

    return items.map((item) => (
        <Checkbox
            {...getState(values, item.value)}
            style={{
                root: {
                    marginLeft: item.parent ? 36 : 0,
                },
            }}
            key={item.value}
            name={item.name}
            value={item.value}
            label={item.label}
            disabled={item.disabled}
            description={item.description}
            onValueChange={(checked) => onValueChange(item, checked)}
            {...props}
        />
    ));
};

export const Complex: StoryObj<StoryCheckboxProps> = {
    render: (args) => <StoryComplex {...args} />,
};
