import { LabelPlacement, TextFieldConfig } from '../../TextField.types';

export const getPlaceHolderColor = (
    labelPlacement?: LabelPlacement,
    size?: string,
    readOnly?: boolean,
    viewStyle?: TextFieldConfig['variations']['view'][string],
) => {
    if (labelPlacement === 'inner' && size !== 'xs') {
        return 'transparent';
    }

    return readOnly ? viewStyle?.backgroundColorReadOnly : viewStyle?.placeholderColor;
};
