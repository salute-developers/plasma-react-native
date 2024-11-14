import React from 'react';

import { MoviesOutline as Icon16 } from '../Icon.assets.16/MoviesOutline';
import { MoviesOutline as Icon24 } from '../Icon.assets.24/MoviesOutline';
import { MoviesOutline as Icon36 } from '../Icon.assets.36/MoviesOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMoviesOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};