import { View } from 'react-native';

import { Theme, withTheme } from '../ThemeProvider';
import { buttonCore } from '../Button';
import { PropsType } from '../../types';

import { IconButtonConfig, IconButtonProps } from './IconButton.types';

export const iconButtonCore = buttonCore as <T extends IconButtonConfig>(
    config?: T,
    theme?: Theme,
) => (props: IconButtonProps & PropsType<T['variations']>, externalRef: React.ForwardedRef<View>) => JSX.Element;

export const iconButtonComponent = withTheme(iconButtonCore);
