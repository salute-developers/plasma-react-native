import type { ComponentProps } from 'react';
import { cardComponent, VariationsFromConfig } from '@salutejs/core-components';

import { getConfig as getHorizontalConfig } from './CardHorizontal.config';
import { getConfig as getSquareConfig } from './CardSquare.config';
import { getConfig as getVerticalConfig } from './CardVertical.config';

export const CardHorizontal = cardComponent(getHorizontalConfig);
export const CardSquare = cardComponent(getSquareConfig);
export const CardVertical = cardComponent(getVerticalConfig);

type CardHorizontalProps = {
    ratio: 'horizontal';
    size?: VariationsFromConfig<typeof getHorizontalConfig, 'size'>;
};

type CardSquareProps = {
    ratio: 'square';
    size?: VariationsFromConfig<typeof getSquareConfig, 'size'>;
};

type CardVerticalProps = {
    ratio: 'vertical';
    size?: VariationsFromConfig<typeof getVerticalConfig, 'size'>;
};

type BaseComponentProps = Omit<ComponentProps<typeof CardHorizontal>, 'size'> &
    (CardHorizontalProps | CardSquareProps | CardVerticalProps);

export const Card = <T extends 'horizontal' | 'square' | 'vertical'>(
    props: Extract<BaseComponentProps, { ratio?: T }>,
) => {
    if (props.ratio === 'vertical') {
        return <CardVertical {...(props as CardVerticalProps)} />;
    }

    if (props.ratio === 'square') {
        return <CardSquare {...(props as CardSquareProps)} />;
    }

    return <CardHorizontal {...(props as CardHorizontalProps)} />;
};
