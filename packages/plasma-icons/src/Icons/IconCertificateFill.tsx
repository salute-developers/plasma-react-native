import React from 'react';

import { CertificateFill as Icon16 } from '../Icon.assets.16/CertificateFill';
import { CertificateFill as Icon24 } from '../Icon.assets.24/CertificateFill';
import { CertificateFill as Icon36 } from '../Icon.assets.36/CertificateFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCertificateFill: React.FC<IconProps> = ({ size = 's', color, style }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size]?.size);

    if (!IconComponent) {
        return null;
    }

    return <IconRoot size={size} color={color} icon={IconComponent} style={style} />;
};
