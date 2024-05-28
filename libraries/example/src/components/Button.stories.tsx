import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { Button } from 'react-native';

type StoryButtonProps = ComponentProps<typeof Button>;

const meta: Meta<StoryButtonProps> = {
    title: 'Example',
    args: {
        title: 'Example',
    },
};

export default meta;

const StoryDefault = (props: StoryButtonProps) => {
    const onPress = () => {
        alert('Произошёл onPress');
    };

    return <Button onPress={onPress} {...props} />;
};

export const Default: StoryObj<StoryButtonProps> = {
    render: (args) => <StoryDefault {...args} />,
};
