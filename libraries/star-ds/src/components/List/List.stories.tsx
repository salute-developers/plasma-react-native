import { View, Text } from 'react-native';
import { useState } from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { IconPlasma, IconShazam } from '@salutejs/plasma-icons-native';

import { Checkbox } from '../Checkbox';
import { Radiobox } from '../Radiobox';
import { BodyL } from '../Typography';
import { Switch } from '../Switch';
import { Cell } from '../Cell';

import { List } from './List';

type ListProps = ComponentProps<typeof List>;
type StoryListProps = Omit<ListProps, 'items' | 'renderItem'>;

const notes = `
| **Control**       | **Description**                           | **Default** |
|-------------------|-------------------------------------------|-------------|
| view              | Вид списка                                | 'default'   |
| size              | Размер списка                             | 'm'         |
`;

const meta: Meta<ListProps> = {
    title: 'Components/List',
    component: List,
    parameters: {
        notes,
    },
    args: {
        view: 'default',
        size: 'm',
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
    },
};

export default meta;

const items = ({ switchChecked, checkboxChecked, radioboxChecked }: Record<string, boolean>) => [
    {
        exampleWithDisclosure: true,
        test: 'test',
        label: 'Label',
        title: 'Title',
        subtitle: 'Subtitle',
        contentLeft: <IconShazam />,
        onItemPress: () => {
            alert('Press on item');
        },
        hasDisclosure: true,
    },
    {
        exampleWithDisclosure: true,
        label: 'Label',
        title: 'Title',
        subtitle: 'Subtitle',
        contentLeft: <IconShazam />,
        onItemPress: () => {
            alert('Press on item');
        },
        disclosureText: 'Disclosure',
        hasDisclosure: true,
    },
    {
        label: 'Label',
        title: 'Title',
        subtitle: 'Subtitle',
        contentLeft: <IconShazam />,
        name: 'checkboxChecked',
        contentRight: <Checkbox checked={checkboxChecked} />,
    },
    {
        label: 'Label',
        title: 'Title',
        subtitle: 'Subtitle',
        contentLeft: <IconShazam />,
        name: 'radioboxChecked',
        contentRight: <Radiobox checked={radioboxChecked} />,
    },
    {
        label: 'Label',
        title: 'Title',
        subtitle: 'Subtitle',
        contentLeft: <IconShazam />,
        name: 'switchChecked',
        contentRight: <Switch checked={switchChecked} />,
    },
    {
        label: 'Label',
        title: 'Title',
        subtitle: 'Subtitle',
        contentLeft: <IconShazam />,
        contentRight: <IconPlasma />,
    },
    {
        label: 'Label',
        title: 'Title',
        subtitle: 'Subtitle',
        contentLeft: <IconShazam />,
        contentRight: <BodyL>Hello</BodyL>,
    },
    {
        label: 'Label',
        title: 'Title',
        subtitle: 'Subtitle',
        contentLeft: <IconShazam />,
        contentRight: <Text>Plain text</Text>,
    },
];

type CustomItem = ReturnType<typeof items>[number];

const renderItem = (size: ListProps['size']) => ({
    contentLeft,
    contentRight,
    label,
    subtitle,
    title,
    disclosureText,
    hasDisclosure,
    exampleWithDisclosure,
}: CustomItem) => {
    if (exampleWithDisclosure) {
        return (
            <Cell
                size={size}
                contentLeft={contentLeft}
                label={label}
                title={title}
                subtitle={subtitle}
                hasDisclosure={hasDisclosure}
                disclosureText={disclosureText}
            />
        );
    }

    return (
        <Cell
            size={size}
            contentLeft={contentLeft}
            contentRight={contentRight}
            label={label}
            title={title}
            subtitle={subtitle}
        />
    );
};

const StoryDefault = (props: StoryListProps) => {
    const [selectedItemIndex, setSelectedItemIndex] = useState<undefined | number>(undefined);
    const [inputState, setInputState] = useState<Record<string, boolean>>({
        checkboxChecked: false,
        radioboxChecked: false,
        switchChecked: false,
    });

    const onSelectItem = (index: number, item: CustomItem) => {
        setSelectedItemIndex(selectedItemIndex === index ? undefined : index);

        if (item.name) {
            const { name } = item;
            setInputState((values) => ({ ...values, [name]: !inputState[name] }));
        }
    };

    return (
        <View style={{ gap: 20, padding: 50, width: '50%' }}>
            <List
                selectedItemIndex={selectedItemIndex}
                onItemSelect={onSelectItem}
                renderItem={renderItem(props.size)}
                items={items(inputState)}
                {...props}
            />
        </View>
    );
};

export const Default: StoryObj<StoryListProps> = {
    render: (args) => <StoryDefault {...args} />,
};
