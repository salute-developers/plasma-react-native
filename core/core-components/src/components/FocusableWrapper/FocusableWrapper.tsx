import { cloneElement, ReactElement } from 'react';

import { FocusableWrapperProps } from './FocusableWrapper.types';

export const FocusableWrapper = ({ children, iconColor, style, focused }: FocusableWrapperProps) => {
    if (!children) {
        return null;
    }

    return cloneElement(children as ReactElement, {
        focused,
        style: [(children as ReactElement)?.props?.style, style],
        color: iconColor,
    });
};
