import React from 'react';

import { ViewBeautyOutline as Icon16 } from '../Icon.assets.16/ViewBeautyOutline';
import { ViewBeautyOutline as Icon24 } from '../Icon.assets.24/ViewBeautyOutline';
import { ViewBeautyOutline as Icon36 } from '../Icon.assets.36/ViewBeautyOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconViewBeautyOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};