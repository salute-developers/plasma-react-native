import { View } from 'react-native';
import React from 'react';
import { Path, Svg } from 'react-native-svg';
import type { StoryObj, Meta } from '@storybook/react';

import { Button } from '../Button';
import { Progress } from '../Progress';
import { LineSkeleton } from '../Skeleton';
import { Spinner } from '../Spinner';
import { TextField } from '../TextField';
import { BodyL } from '../Typography';

interface IconSvgProps {
    size?: number;
    color?: string;
}

export const Done: React.FC<IconSvgProps> = ({ size = 18, color }) => (
    <Svg viewBox="0 0 18 18" fill="none" width={size} height={size} color={color}>
        <Path
            fill="currentColor"
            d="m5.70711,8.15582c-0.39053,-0.39052 -1.02369,-0.39052 -1.41422,0c-0.39052,0.39053 -0.39052,1.02369 0,1.41422l3.70666,3.70666l6.71095,-6.70248c0.3908,-0.39027 0.3912,-1.02344 0.0009,-1.41421c-0.3903,-0.39077 -1.02344,-0.39117 -1.41421,-0.00089l-5.29674,5.29004l-2.29334,-2.29334z"
        />
    </Svg>
);

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
            <Button value="Value" text="Button 1" contentLeft={<Done />} />
            <Button value="Value" text="Button 1" />
            <Button spacing="space-between" text="Button 1" contentLeft={<Done />} />
            <Spinner size="l" />
            <BodyL>Example BodyL</BodyL>
            <Button spacing="space-between" stretching="filled" value="Value" text="Button 2" contentLeft={<Done />} />
            <Button stretching="filled" value="Value" text="Button 2" />
            <BodyL>Example BodyL</BodyL>
            <Button spacing="space-between" stretching="fixed" value="Value" text="Button 2" contentLeft={<Done />} />
            <Button spacing="space-between" stretching="fixed" value="Value" text="Button 2" />
        </View>
    );
};

export const Default: StoryObj = {
    render: (args) => <StoryDefault {...args} />,
};
