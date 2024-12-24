import { View } from 'react-native';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { LineSkeleton, RectSkeleton, TextSkeleton } from './Skeleton';

type StoryRectSkeletonProps = ComponentProps<typeof RectSkeleton>;

type StoryLineSkeletonProps = ComponentProps<typeof LineSkeleton>;

type StoryTextSkeletonProps = ComponentProps<typeof TextSkeleton>;

const meta: Meta = {
    title: 'Components/Skeleton',
};

export default meta;

const StoryDefault = () => {
    return (
        <>
            <LineSkeleton />
            <LineSkeleton />
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <RectSkeleton
                    style={{
                        root: {
                            marginTop: 2,
                            marginBottom: 2,
                        },
                    }}
                    width={150}
                    height={100}
                />
                <TextSkeleton lines={5} />
            </View>
            <TextSkeleton lines={4} />
        </>
    );
};

export const Default: StoryObj<StoryRectSkeletonProps> = {
    render: (args) => <StoryDefault {...args} />,
};

const StoryRectSkeleton = (props: StoryRectSkeletonProps) => {
    return <RectSkeleton {...props} />;
};

const rectNotes = `
| **Control** | **Description**                  | **Default** |
|-------------|----------------------------------|-------------|
| width       | Ширина скелетона                 |             |
| height      | Высота скелетона                 |             |
| roundness   | Размер скругления скелетона      | 16          |
| lighter     | Применить более светлый градиент | false       |
`;

export const Rect: StoryObj<StoryRectSkeletonProps> = {
    parameters: {
        notes: rectNotes,
    },
    args: {
        width: 150,
        height: 150,
        roundness: 16,
        lighter: false,
    },
    render: (args) => <StoryRectSkeleton {...args} />,
};

const sizes = [
    'bodyM',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'bodyL',
    'bodyS',
    'bodyXS',
    'bodyXXS',
    'displayL',
    'displayM',
    'displayS',
    'textL',
    'textM',
    'textS',
    'textXS',
];

const lineNotes = `
| **Control** | **Description**                  | **Default** |
|-------------|----------------------------------|-------------|
| size        | Размер скелетона                 | 'bodyM'     |
| roundness   | Размер скругления скелетона      | 16          |
| lighter     | Применить более светлый градиент | false       |
`;

const StoryLineSkeleton = (props: StoryLineSkeletonProps) => {
    return <LineSkeleton {...props} />;
};

export const Line: StoryObj<StoryLineSkeletonProps> = {
    parameters: {
        notes: lineNotes,
    },
    args: {
        size: 'bodyM',
        roundness: 16,
        lighter: false,
    },
    argTypes: {
        size: {
            options: sizes,
            control: {
                type: 'select',
            },
        },
    },
    render: (args) => <StoryLineSkeleton {...args} />,
};

const textNotes = `
| **Control** | **Description**                                                                                  | **Default** |
|-------------|--------------------------------------------------------------------------------------------------|-------------|
| lines       | Количество линий скелетона                                                                       |             |
| size        | Размер скелетона                                                                                 | 'bodyM'     |
| roundness   | Размер скругления скелетона                                                                      | 16          |
| lighter     | Применить более светлый градиент                                                                 | false       |
| width       | Заданная ширина линий в процентах; по умолчанию подбирается случайная для заданного кол-ва линий |             |
`;

const StoryTextSkeleton = (props: StoryTextSkeletonProps) => {
    return <TextSkeleton {...props} />;
};

export const Text: StoryObj<StoryTextSkeletonProps> = {
    parameters: {
        notes: textNotes,
    },
    args: {
        lines: 7,
        size: 'bodyM',
        roundness: 16,
        lighter: false,
        width: 0,
    },
    argTypes: {
        size: {
            options: sizes,
            control: {
                type: 'select',
            },
        },
    },
    render: (args) => <StoryTextSkeleton {...args} />,
};
