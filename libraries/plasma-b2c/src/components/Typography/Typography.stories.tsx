import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import {
    BodyL,
    BodyM,
    BodyS,
    BodyXS,
    BodyXXS,
    DisplayL,
    DisplayM,
    DisplayS,
    H1,
    H2,
    H3,
    H4,
    H5,
    TextL,
    TextM,
    TextS,
    TextXS,
} from './Typography';

type Typography =
    | typeof BodyL
    | typeof BodyM
    | typeof BodyS
    | typeof BodyXS
    | typeof BodyXXS
    | typeof DisplayL
    | typeof DisplayM
    | typeof DisplayS
    | typeof H1
    | typeof H2
    | typeof H3
    | typeof H4
    | typeof H5
    | typeof TextL
    | typeof TextM
    | typeof TextS
    | typeof TextXS;

type StoryTypographyProps = ComponentProps<Typography>;

const meta: Meta<StoryTypographyProps> = {
    title: 'Components/Typography',
};

export default meta;

const StoryBody = () => {
    return (
        <>
            <BodyL>BodyL</BodyL>
            <BodyL bold>BodyL Bold</BodyL>
            <BodyM>BodyM</BodyM>
            <BodyM bold>BodyM Bold</BodyM>
            <BodyS>BodyS</BodyS>
            <BodyS bold>BodyS Bold</BodyS>
            <BodyXS>BodyXS</BodyXS>
            <BodyXS bold>BodyXS Bold</BodyXS>
            <BodyXXS>BodyXXS</BodyXXS>
            <BodyXXS bold>BodyXXS Bold</BodyXXS>
        </>
    );
};

export const Body: StoryObj = {
    render: (args) => <StoryBody {...args} />,
};

const StoryDisplay = () => {
    return (
        <>
            <DisplayL>DisplayL</DisplayL>
            <DisplayL bold>DisplayL Bold</DisplayL>
            <DisplayM>DisplayM</DisplayM>
            <DisplayM bold>DisplayM Bold</DisplayM>
            <DisplayS>DisplayS</DisplayS>
            <DisplayS bold>DisplayS Bold</DisplayS>
        </>
    );
};

export const Display: StoryObj = {
    render: (args) => <StoryDisplay {...args} />,
};

const StoryH = () => {
    return (
        <>
            <H1>H1</H1>
            <H1 bold>H1 Bold</H1>
            <H2>H2</H2>
            <H2 bold>H2 Bold</H2>
            <H3>H3</H3>
            <H3 bold>H3 Bold</H3>
            <H4>H4</H4>
            <H4 bold>H4 Bold</H4>
            <H5>H5</H5>
            <H5 bold>H5 Bold</H5>
        </>
    );
};

export const H: StoryObj = {
    render: (args) => <StoryH {...args} />,
};

const StoryText = () => {
    return (
        <>
            <TextL>TextL</TextL>
            <TextL bold>TextL Bold</TextL>
            <TextM>TextM</TextM>
            <TextM bold>TextM Bold</TextM>
            <TextS>TextS</TextS>
            <TextS bold>TextS Bold</TextS>
            <TextXS>TextXS</TextXS>
            <TextXS bold>TextXS Bold</TextXS>
        </>
    );
};

export const Text: StoryObj = {
    render: (args) => <StoryText {...args} />,
};
