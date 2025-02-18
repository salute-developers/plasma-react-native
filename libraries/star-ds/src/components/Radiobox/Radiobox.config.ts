import { Theme } from '@salutejs/core-components';

import { StylesSaluteTheme } from '../ThemeProvider';

export const getConfig = ({ data, mode, screenSize }: Theme<StylesSaluteTheme>) => ({
    defaults: {
        view: 'accent',
        size: 'm',
    },
    variations: {
        view: {
            accent: {
                fillColor: data.color[mode].textAccentMain,
                iconColor: data.color[mode].onDarkTextPrimary,
                labelColor: data.color[mode].textPrimary,
                descriptionColor: data.color[mode].textSecondary,
                triggerBorderColor: data.color[mode].textSecondary,
            },
        },
        size: {
            s: {
                margin: 0,
                triggerMargin: 0,
                triggerSize: 16,
                triggerBorderRadius: data.shape.round.l + 2, // TODO: Узнать почему нет этих значений в теме
                triggerBorderWidth: 2,
                triggerEllipseBorderWidth: 4,
                contentTopOffset: 0,
                contentLeftOffset: 8,
                labelFontFamilyRef: data.typography[screenSize].bodySNormal.fontFamilyRef,
                labelFontWeight: data.typography[screenSize].bodySNormal.fontWeight,
                labelFontStyle: data.typography[screenSize].bodySNormal.fontStyle,
                labelFontSize: data.typography[screenSize].bodySNormal.fontSize,
                labelLetterSpacing: data.typography[screenSize].bodySNormal.letterSpacing,
                labelLineHeight: data.typography[screenSize].bodySNormal.lineHeight,
                descriptionMarginTop: 2,
                descriptionFontFamilyRef: data.typography[screenSize].bodyXsNormal.fontFamilyRef,
                descriptionFontWeight: data.typography[screenSize].bodyXsNormal.fontWeight,
                descriptionFontStyle: data.typography[screenSize].bodyXsNormal.fontStyle,
                descriptionFontSize: data.typography[screenSize].bodyXsNormal.fontSize,
                descriptionLetterSpacing: data.typography[screenSize].bodyXsNormal.letterSpacing,
                descriptionLineHeight: data.typography[screenSize].bodyXsNormal.lineHeight,
            },
            m: {
                margin: 0,
                triggerMargin: 1,
                triggerSize: 22,
                triggerBorderRadius: data.shape.round.l + 2, // TODO: Узнать почему нет этих значений в теме
                triggerBorderWidth: 2,
                triggerEllipseBorderWidth: 6,
                contentTopOffset: 2,
                contentLeftOffset: 10,
                labelFontFamilyRef: data.typography[screenSize].bodyMNormal.fontFamilyRef,
                labelFontWeight: data.typography[screenSize].bodyMNormal.fontWeight,
                labelFontStyle: data.typography[screenSize].bodyMNormal.fontStyle,
                labelFontSize: data.typography[screenSize].bodyMNormal.fontSize,
                labelLetterSpacing: data.typography[screenSize].bodyMNormal.letterSpacing,
                labelLineHeight: data.typography[screenSize].bodyMNormal.lineHeight,
                descriptionMarginTop: 2,
                descriptionFontFamilyRef: data.typography[screenSize].bodySNormal.fontFamilyRef,
                descriptionFontWeight: data.typography[screenSize].bodySNormal.fontWeight,
                descriptionFontStyle: data.typography[screenSize].bodySNormal.fontStyle,
                descriptionFontSize: data.typography[screenSize].bodySNormal.fontSize,
                descriptionLetterSpacing: data.typography[screenSize].bodySNormal.letterSpacing,
                descriptionLineHeight: data.typography[screenSize].bodySNormal.lineHeight,
            },
        },
        disabled: {
            true: {
                disabledOpacity: 0.4,
            },
        },
        focused: {
            true: {
                fillColor: data.color[mode].onLightTextAccentMain,
                iconColor: data.color[mode].onDarkTextPrimary,
                labelColor: data.color[mode].onLightTextPrimary,
                descriptionColor: data.color[mode].onLightTextSecondary,
                triggerBorderColor: data.color[mode].onLightTextSecondary,
            },
        },
    },
});
