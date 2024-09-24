import { View, Text } from 'react-native';
import { useState } from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { Path, Svg } from 'react-native-svg';

import { Checkbox } from '../Checkbox';
import { Radiobox } from '../Radiobox';
import { BodyL } from '../Typography';
import { Switch } from '../Switch';
import { Cell } from '../Cell';

import { List } from './List';

type ListProps = ComponentProps<typeof List>;
type StoryListProps = Omit<ComponentProps<typeof List>, 'items' | 'renderItem'>;

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

// TODO: перенести для примеров в другое место
const ContentLeft = () => (
    <View style={{ backgroundColor: 'red', opacity: 0.25, width: 22, height: 22, borderRadius: 50 }} />
);

const items = ({ switchChecked, checkboxChecked, radioboxChecked }: Record<string, boolean>) => [
    {
        exampleWithDisclosure: true,
        test: 'test',
        label: 'Label',
        title: 'Title',
        subtitle: 'Subtitle',
        contentLeft: <ContentLeft />,
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
        contentLeft: (
            <View
                style={{
                    backgroundColor: 'red',
                    opacity: 0.25,
                    width: 22,
                    height: 22,
                    borderRadius: 50,
                }}
            />
        ),
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
        contentLeft: <ContentLeft />,
        name: 'checkboxChecked',
        contentRight: <Checkbox checked={checkboxChecked} />,
    },
    {
        label: 'Label',
        title: 'Title',
        subtitle: 'Subtitle',
        contentLeft: <ContentLeft />,
        name: 'radioboxChecked',
        contentRight: <Radiobox checked={radioboxChecked} />,
    },
    {
        label: 'Label',
        title: 'Title',
        subtitle: 'Subtitle',
        contentLeft: <ContentLeft />,
        name: 'switchChecked',
        contentRight: <Switch checked={switchChecked} />,
    },
    {
        label: 'Label',
        title: 'Title',
        subtitle: 'Subtitle',
        contentLeft: <ContentLeft />,
        contentRight: <PlasmaIcon />,
    },
    {
        label: 'Label',
        title: 'Title',
        subtitle: 'Subtitle',
        contentLeft: <ContentLeft />,
        contentRight: <BodyL>Hello</BodyL>,
    },
    {
        label: 'Label',
        title: 'Title',
        subtitle: 'Subtitle',
        contentLeft: <ContentLeft />,
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
