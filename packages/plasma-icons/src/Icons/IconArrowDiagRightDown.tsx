import React from 'react';

import { ArrowDiagRightDown as Icon16 } from '../Icon.assets.16/ArrowDiagRightDown';
import { ArrowDiagRightDown as Icon24 } from '../Icon.assets.24/ArrowDiagRightDown';
import { ArrowDiagRightDown as Icon36 } from '../Icon.assets.36/ArrowDiagRightDown';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconArrowDiagRightDown: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};