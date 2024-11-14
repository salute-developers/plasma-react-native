import { View, Text } from 'react-native';
import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { IconPlasma, IconShazam } from '@salutejs/plasma-icons-native';

import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { Progress } from '../Progress';
import { Radiobox } from '../Radiobox';
import { LineSkeleton } from '../Skeleton';
import { Switch } from '../Switch';
import { Spinner } from '../Spinner';
import { TextField } from '../TextField';
import { BodyL, BodyM, H2 } from '../Typography';
import { Cell } from '../Cell';
import { List } from '../List';
import { IconButton } from '../IconButton';
import { FocusContainer } from '../FocusContainer';

const meta: Meta = {
    title: 'Components/Focusable',
};

export default meta;

const StoryDefault = () => {
    const [selectedItemIndex, setSelectedItemIndex] = useState<undefined | number>(undefined);

    return (
        <View style={{ display: 'flex', gap: 10, padding: 50, width: '50%' }}>
            <FocusContainer unfocusedBackgroundColor="#ffffff1f" unfocusedTextColor="lightblue">
                {({ focusedBackgroundColor, focused, focusedScale, focusedTextColor }) => {
                    const styles = {
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
                            backgroundColor: focusedBackgroundColor,
                            transform: [
                                {
                                    scale: focusedScale,
                                },
                            ],
                        } as any,
                        text: {
                            color: focusedTextColor,
                        },
                    };

                    return (
                        <View style={styles.root}>
                            <View style={styles.background} />
                            <Text style={styles.text}>Text</Text>
                            <Checkbox label="Label" focused={focused} />
                            <H2 focused={focused}>Title</H2>
                            <BodyM focused={focused}>Subtitle</BodyM>
                        </View>
                    );
                }}
            </FocusContainer>
            <Button text="Button 2" contentLeft={<IconPlasma />} />
            <IconButton>
                <IconPlasma />
            </IconButton>
            <Progress value={50} />
            <List
                selectedItemIndex={selectedItemIndex}
                onItemSelect={(index) => {
                    setSelectedItemIndex(selectedItemIndex === index ? undefined : index);
                }}
                renderItem={({
                    contentLeft,
                    contentRight,
                    label,
                    subtitle,
                    title,
                    disclosureText,
                    hasDisclosure,
                    exampleWithDisclosure,
                }) => {
                    if (exampleWithDisclosure) {
                        return (
                            <Cell
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
                            contentLeft={contentLeft}
                            contentRight={contentRight}
                            label={label}
                            title={title}
                            subtitle={subtitle}
                        />
                    );
                }}
                items={[
                    {
                        exampleWithDisclosure: true,
                        label: 'Label',
                        title: 'Title',
                        subtitle: 'Subtitle',
                        contentLeft: <IconShazam />,
                        hasDisclosure: true,
                    },
                    {
                        exampleWithDisclosure: true,
                        label: 'Label',
                        title: 'Title',
                        subtitle: 'Subtitle',
                        contentLeft: <IconShazam />,
                        disclosureText: 'Disclosure',
                        hasDisclosure: true,
                    },
                    {
                        label: 'Label',
                        title: 'Title',
                        subtitle: 'Subtitle',
                        contentLeft: <IconShazam />,
                        contentRight: <Checkbox checked />,
                    },
                    {
                        label: 'Label',
                        title: 'Title',
                        subtitle: 'Subtitle',
                        contentLeft: <IconShazam />,
                        contentRight: <Radiobox />,
                    },
                    {
                        label: 'Label',
                        title: 'Title',
                        subtitle: 'Subtitle',
                        contentLeft: <IconShazam />,
                        contentRight: <Switch checked />,
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
                ]}
            />
            <LineSkeleton size="bodyL" />
            <Spinner size="l" />
            <BodyL>Hello</BodyL>
            <TextField
                label="Label"
                contentLeft={<IconPlasma />}
                captionLeft="Caption"
                labelPlacement="inner"
                value="Textfield value"
            />
            <BodyL>Example BodyL</BodyL>
            <TextField label="Label" contentLeft={<IconPlasma />} captionLeft="Caption" value="Textfield value" />
            <Button text="Button 2" value="Value" spacing="space-between" stretching="filled" />
        </View>
    );
};

export const Default: StoryObj = {
    render: (args) => <StoryDefault {...args} />,
};
