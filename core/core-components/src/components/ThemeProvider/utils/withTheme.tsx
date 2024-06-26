import { PropsType } from '../../../types';
import { Theme } from '../ThemeProvider.types';
import { useTheme } from '../hooks';

export const withTheme = <T extends Record<string, any>, K extends {} & PropsType<T['variations']>>(
    component: (config?: T, theme?: Theme) => (props: K) => React.JSX.Element | null,
) => {
    return (getConfig?: (theme: Theme<any>) => T) => {
        return (props: K) => {
            const theme = useTheme();

            if (!getConfig) {
                return component()(props);
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

            return component(config, theme)(newProps);
        };
    };
};
