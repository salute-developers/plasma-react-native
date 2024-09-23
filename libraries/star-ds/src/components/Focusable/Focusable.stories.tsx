import { View } from 'react-native';
import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { Button } from '../Button';
import { Progress } from '../Progress';
import { LineSkeleton } from '../Skeleton';
import { Spinner } from '../Spinner';
import { TextField } from '../TextField';
import { BodyL } from '../Typography';

const meta: Meta = {
    title: 'Components/Focusable',
};

export default meta;

const StoryDefault = () => {
    return (
        <View style={{ display: 'flex', gap: 10, padding: 20, width: '50%' }}>
            <TextField label="Label" captionLeft="Caption" value="Textfield value" />
            <Progress value={50} />
            <LineSkeleton size="bodyL" />
            <Button text="Button 1" />
            <Spinner size="l" />
            <BodyL>Example BodyL</BodyL>
            <Button stretching="filled" text="Button 2" />
        </View>
    );
};

export const Default: StoryObj = {
    render: (args) => <StoryDefault {...args} />,
};
