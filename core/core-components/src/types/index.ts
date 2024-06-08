export type PropsType<J extends Record<string, any> = Record<string, any>> = {
    [L in keyof J]?: keyof J[L] extends 'true' ? boolean : keyof J[L];
};
