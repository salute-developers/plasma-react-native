import { forwardRef, useMemo } from 'react';
import { Pressable, View } from 'react-native';

import { FocusableWrapperProps } from './FocusableWrapper.types';
import { getStyle } from './FocusableWrapper.style';

export const FocusableWrapper = forwardRef<View, FocusableWrapperProps>((props, ref) => {
    const { children, focused, style: externalStyle, hasFocus = true } = props;

    const style = useMemo(() => getStyle(externalStyle, focused), [externalStyle, focused]);

    return (
        <Pressable {...props} style={style.root} ref={ref}>
            {children}
            {hasFocus && <View style={style.focus} />}
        </Pressable>
    );
});
