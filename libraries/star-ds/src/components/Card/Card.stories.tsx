import type { ComponentProps } from 'react';
import { Image, Text, View } from 'react-native';
import type { StoryObj, Meta } from '@storybook/react';
import { IconPlasma, IconShazam } from '@salutejs/plasma-icons-native';

import { Card } from './Card';

type StoryCardProps = ComponentProps<typeof Card>;

const notes = `
| **Control**   | **Description**                              | **Default** |
|---------------|----------------------------------------------|-------------|
| size          | Размер карточки                              |             |
| timelineValue | Значение прогресса в процентах               |             |
| title         | Текст для Title                              |             |
| subtitle      | Текст для Subtitle                           |             |
| stretching    | Поведение ширины ячейки                      | 'auto'      |
| alignTextBox  | Горизонтальное выравнивание текстового блока | 'center'    |
| disabled      | Карточка неактивна                           | false       |
`;

const meta: Meta<StoryCardProps> = {
    title: 'Components/Card',
    component: Card,
    parameters: {
        notes,
    },
    args: {
        title: 'Title',
        subtitle: 'Subtitle',
        timelineValue: 50,
        alignTextBox: 'left',
        disabled: false,
    },
    argTypes: {
        alignTextBox: {
            options: ['left', 'right', 'center'],
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

const StoryHorizontal = (props: StoryCardProps) => {
    const onPress = () => {
        alert('Произошёл onPress');
    };

    const images: Record<string, any> = {
        xs: {
            source: require('./src/card_horizontal_xs.png'),
            imageSize: { width: 120, height: 68 },
            iconSize: 'xs',
            textSize: 10,
        },
        s: {
            source: require('./src/card_horizontal_s.png'),
            imageSize: { width: 188, height: 106 },
            iconSize: 's',
            textSize: 10,
        },
    };

    const styles = images[props.size || 'xs'];

    return (
        <View style={{ padding: 40 }}>
            <Card
                {...props}
                size={props.size as any}
                ratio="horizontal"
                onPress={onPress}
                image={<Image source={styles.source} style={styles.imageSize} />}
                contentTopLeft={<IconPlasma size={styles.iconSize} />}
                contentTopRight={<IconShazam size={styles.iconSize} />}
                contentBottomRight={<IconPlasma size={styles.iconSize} />}
                contentBottomLeft={
                    <Text style={{ color: 'white', fontWeight: '600', fontSize: styles.textSize }}>Ещё 1 ч 35 мин</Text>
                }
            />
        </View>
    );
};

export const Horizontal: StoryObj<StoryCardProps> = {
    args: {
        size: 'xs',
    },
    argTypes: {
        size: {
            options: ['xs', 's'],
            control: {
                type: 'select',
            },
        },
    },
    render: (args: StoryCardProps) => <StoryHorizontal {...args} />,
};

const StorySquare = (props: StoryCardProps) => {
    const onPress = () => {
        alert('Произошёл onPress');
    };

    const images: Record<string, any> = {
        xs: {
            source: require('./src/card_square_xs.png'),
            imageSize: { width: 120, height: 120 },
            iconSize: 'xs',
            textSize: 10,
        },
        l: {
            source: require('./src/card_square_l.png'),
            imageSize: { width: 256, height: 256 },
            iconSize: 's',
            textSize: 10,
        },
    };

    const styles = images[props.size || 'xs'];

    return (
        <View style={{ padding: 40 }}>
            <Card
                {...props}
                size={props.size as any}
                ratio="square"
                onPress={onPress}
                image={<Image source={styles.source} style={styles.imageSize} />}
                contentTopLeft={<IconPlasma size={styles.iconSize} />}
                contentTopRight={<IconShazam size={styles.iconSize} />}
                contentBottomRight={<IconPlasma size={styles.iconSize} />}
                contentBottomLeft={
                    <Text style={{ color: 'white', fontWeight: '600', fontSize: styles.textSize }}>Ещё 1 ч 35 мин</Text>
                }
            />
        </View>
    );
};

export const Square: StoryObj<StoryCardProps> = {
    args: {
        size: 'xs',
    },
    argTypes: {
        size: {
            options: ['xs', 'l'],
            control: {
                type: 'select',
            },
        },
    },
    render: (args: StoryCardProps) => <StorySquare {...args} />,
};

const StoryVertical = (props: StoryCardProps) => {
    const onPress = () => {
        alert('Произошёл onPress');
    };

    const images: Record<string, any> = {
        s: {
            source: require('./src/card_vertical_s.png'),
            imageSize: { width: 120, height: 180 },
            iconSize: 'xs',
            textSize: 10,
        },
        m: {
            source: require('./src/card_vertical_m.png'),
            imageSize: { width: 188, height: 256 },
            iconSize: 's',
            textSize: 10,
        },
    };

    const styles = images[props.size || 's'];

    return (
        <View style={{ padding: 40 }}>
            <Card
                {...props}
                onPress={onPress}
                size={props.size as any}
                ratio="vertical"
                image={<Image source={styles.source} style={styles.imageSize} />}
                contentTopLeft={<IconPlasma size={styles.iconSize} />}
                contentTopRight={<IconShazam size={styles.iconSize} />}
                contentBottomRight={<IconPlasma size={styles.iconSize} />}
                contentBottomLeft={
                    <Text style={{ color: 'white', fontWeight: '600', fontSize: styles.textSize }}>Ещё 1 ч 35 мин</Text>
                }
            />
        </View>
    );
};

export const Vertical: StoryObj<StoryCardProps> = {
    args: {
        size: 'm',
    },
    argTypes: {
        size: {
            options: ['s', 'm'],
            control: {
                type: 'select',
            },
        },
    },
    render: (args: StoryCardProps) => <StoryVertical {...args} />,
};
