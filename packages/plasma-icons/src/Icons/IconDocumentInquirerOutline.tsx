import React from 'react';

import { DocumentInquirerOutline as Icon16 } from '../Icon.assets.16/DocumentInquirerOutline';
import { DocumentInquirerOutline as Icon24 } from '../Icon.assets.24/DocumentInquirerOutline';
import { DocumentInquirerOutline as Icon36 } from '../Icon.assets.36/DocumentInquirerOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDocumentInquirerOutline: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
