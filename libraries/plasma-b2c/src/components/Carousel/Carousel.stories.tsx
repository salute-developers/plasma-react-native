import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { BodyM, H2 } from '../Typography';

import { Carousel } from './Carousel';

type CarouselProps = ComponentProps<typeof Carousel>;
type StoryCarouselProps = Omit<CarouselProps, 'items' | 'renderItem' | 'getItem' | 'CellRendererComponent'>;

const notes = `
| **Control**   | **Description**                                 | **Default** |
|---------------|-------------------------------------------------|-------------|
| align         | Позиционирование активного элемента при скролле | 'center'    |
| itemsOverflow | Отображение элементов за пределами контейнера   | 'hidden'    |
`;

const meta: Meta<CarouselProps> = {
    title: 'Components/Carousel',
    component: Carousel,
    parameters: {
        notes,
    },
    args: {
        align: 'center',
        itemsOverflow: 'hidden',
    },
    argTypes: {
        align: {
            options: ['left', 'center', 'right'],
            control: {
                type: 'select',
            },
        },
        itemsOverflow: {
            options: ['visible', 'hidden'],
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

const items = Array.from({ length: 15 }).map((_, i) => ({
    title: `Title #${i + 1}`,
    subtitle: `Subtitle ${i + 1}`,
}));

type CustomItem = typeof items[number];

const PseudoCard = memo(({ item, focused }: { item: CustomItem; focused?: boolean }) => {
    const styles = StyleSheet.create({
        root: {
            width: 300,
            height: 150,
            padding: 16,
        },
        background: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            borderRadius: 16,
            backgroundColor: focused ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.12)',
            transform: [
                {
                    scale: focused ? 1.05 : 1,
                },
            ],
        },
    });

    return (
        <View style={styles.root}>
            <View style={styles.background} />
            <H2 focused={focused}>{item.title}</H2>
            <BodyM focused={focused}>{item.subtitle}</BodyM>
        </View>
    );
});

const StoryDefault = (props: StoryCarouselProps) => {
    const renderItem = (item: CustomItem) => <PseudoCard item={item} />;

    const onFocus = (index: number, item: CustomItem) => {
        console.log('onFocus', index, item);
    };

    const onPress = (index: number, item: CustomItem) => {
        alert(`Press on ${index} item: ${JSON.stringify(item)}`);
    };

    return (
        <View style={{ flex: 1, padding: 50 }}>
            <Carousel items={items} renderItem={renderItem} onItemFocus={onFocus} onItemPress={onPress} {...props} />
        </View>
    );
};

export const Default: StoryObj<StoryCarouselProps> = {
    render: (args) => <StoryDefault {...args} />,
};
