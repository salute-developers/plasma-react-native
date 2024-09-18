import { View } from 'react-native';
import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { Progress } from '../Progress';
import { Radiobox } from '../Radiobox';
import { LineSkeleton } from '../Skeleton';
import { Switch } from '../Switch';
import { Spinner } from '../Spinner';
import { TextField } from '../TextField';
import { BodyL } from '../Typography';

const meta: Meta = {
    title: 'Components/Focusable',
};

export default meta;

const StoryDefault = () => {
    return (
        <View style={{ display: 'flex', gap: 10 }}>
            <Button text="Button 1" />
            <Progress value={50} />
            <Checkbox label="Label" description="Description" />
            <LineSkeleton size="bodyL" />
            <Radiobox label="Label" description="Description" />
            <Spinner size="l" />
            <Switch label="Label" description="Description" />
            <BodyL>Example BodyL</BodyL>
            <TextField label="Label" captionLeft="Caption" value="Textfield value" />
            <Button text="Button 2" />
        </View>
    );
};

export const Default: StoryObj = {
    render: (args) => <StoryDefault {...args} />,
};
