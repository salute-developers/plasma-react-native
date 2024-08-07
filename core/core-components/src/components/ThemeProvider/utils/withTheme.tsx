import { forwardRef } from 'react';

import { PropsType } from '../../../types';
import { Theme } from '../ThemeProvider.types';
import { useTheme } from '../hooks';

export const withTheme = <T extends Record<string, any>, K extends {} & PropsType<T['variations']>>(
    componentBuilder: (
        config?: T,
        theme?: Theme,
    ) => (props: K, ref: React.ForwardedRef<any>) => React.JSX.Element | null,
) => {
    return (getConfig?: (theme: Theme<any>) => T) => {
        return forwardRef((props: K, ref: React.ForwardedRef<any>) => {
            const theme = useTheme();

            if (!getConfig) {
                return componentBuilder()(props, ref);
            }

            const config = getConfig(theme);

            const { defaults } = config;

            // TODO: Подумать, надо ли делать автоматический маппинг, или оставить на уровне каждого компонента
            const defaultProps = Object.entries(defaults).reduce((acc, [key, defaultValue]) => {
                return {
                    ...acc,
                    [key]: props[key] || defaultValue,
                };
            }, {});

            const newProps = {
                ...props,
                ...defaultProps,
            };

            return componentBuilder(config, theme)(newProps, ref);
        });
    };
};
