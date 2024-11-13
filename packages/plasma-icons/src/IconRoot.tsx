import React from 'react';
import type { ViewProps } from 'react-native';

export const sizeMap = {
    xs: {
        size: 16,
    },
    s: {
        size: 24,
    },
    m: {
        size: 36,
    },
};

export type IconSize = keyof typeof sizeMap;

export interface IconProps {
    size?: IconSize;
    color?: string;
    style?: ViewProps['style'];
}

interface IconRootProps extends IconProps {
    icon: React.FC<IconProps>;
}

export const getIconComponent = (
    icon16: React.FC<IconProps> | null,
    icon24: React.FC<IconProps> | null,
    icon36: React.FC<IconProps> | null,
    size: number,
) => {
    if (size === 16 && icon16 !== null) {
        return icon16;
    }

    if (size === 24 && icon24 !== null) {
        return icon24;
    }

    if (size === 36 && icon36 !== null) {
        return icon36;
    }

    return icon16 || icon24 || icon36;
};

// INFO: Данный компонент нужен, чтобы добавить для всех иконок значения по умолчанию в одном месте
export const IconRoot: React.FC<IconRootProps> = ({
    icon: Icon,
    size = 's',
    color = 'white',
    style: externalStyle,
}) => {
    return <Icon color={color} style={externalStyle} size={size} />;
};
