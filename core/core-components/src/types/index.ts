export type PropsType<J extends Record<string, any> = Record<string, any>> = {
    [L in keyof J]?: keyof J[L] extends 'true' ? boolean : keyof J[L];
};

export type VariationsFromConfig<
    T extends (
        props: any,
    ) => {
        variations: Record<K, Record<string, Record<string, any>>>;
    },
    K extends string
> = keyof ReturnType<T>['variations'][K];

export interface Config {
    defaults: {
        [x: string]: string;
    };
    variations: {
        [x: string]: {
            [x: string]: {
                [x: string]: any;
            };
        };
    };
    intersections?: {
        style?: {
            [k: string]: any;
        };
    }[];
}
