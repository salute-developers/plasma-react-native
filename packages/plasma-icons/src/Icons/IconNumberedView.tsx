import React from 'react';

import { NumberedView as Icon16 } from '../Icon.assets.16/NumberedView';
import { NumberedView as Icon24 } from '../Icon.assets.24/NumberedView';
import { NumberedView as Icon36 } from '../Icon.assets.36/NumberedView';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconNumberedView: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
