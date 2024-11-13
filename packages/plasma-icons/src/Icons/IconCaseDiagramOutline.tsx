import React from 'react';

import { CaseDiagramOutline as Icon16 } from '../Icon.assets.16/CaseDiagramOutline';
import { CaseDiagramOutline as Icon24 } from '../Icon.assets.24/CaseDiagramOutline';
import { CaseDiagramOutline as Icon36 } from '../Icon.assets.36/CaseDiagramOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCaseDiagramOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
