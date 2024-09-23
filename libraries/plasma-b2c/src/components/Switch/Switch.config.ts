import { Theme } from '@salutejs/core-components';

import { PlasmaB2CTheme } from '../ThemeProvider';

// TODO: Забрать значение из data.shadow.down.hardS, когда появятся значения
const shadow = {
    elevation: 4,
    color: 'rgb(8, 8, 8)',
    offsetHeight: 0,
    offsetWidth: 4,
    opacity: 0.16,
    radius: 12,
} as const;

export const getConfig = ({ data, mode, screenSize }: Theme<PlasmaB2CTheme>) => ({
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: {
                thumbBackgroundColor: data.color[mode].onDarkSurfaceSolidDefault,
                thumbShadow: shadow,
                trackBackgroundColorOn: data.color[mode].surfaceAccent,
                trackBackgroundColorOff: data.color[mode].surfaceTransparentTertiaryActive,
                labelColor: data.color[mode].textPrimary,
                descriptionColor: data.color[mode].textSecondary,
            },
        },
        size: {
            l: {
                trackWidth: 44,
                trackHeight: 28,
                trackBorderRadius: data.shape.round.s + 2, // TODO: Узнать почему нет этих значений в теме
                thumbOffset: 2,
                thumbPressScale: 1.25,
                thumbSize: 24,
                thumbBorderRadius: data.shape.round.s, // TODO: Узнать почему нет этих значений в теме
                labelOffset: 12,
                labelFontFamilyRef: data.typography[screenSize].bodyLNormal.fontFamilyRef,
                labelFontWeight: data.typography[screenSize].bodyLNormal.fontWeight,
                labelFontStyle: data.typography[screenSize].bodyLNormal.fontStyle,
                labelFontSize: data.typography[screenSize].bodyLNormal.fontSize,
                labelLetterSpacing: data.typography[screenSize].bodyLNormal.letterSpacing,
                labelLineHeight: data.typography[screenSize].bodyLNormal.lineHeight,
                descriptionMarginTop: 4,
                descriptionFontFamilyRef: data.typography[screenSize].bodyMNormal.fontFamilyRef,
                descriptionFontWeight: data.typography[screenSize].bodyMNormal.fontWeight,
                descriptionFontStyle: data.typography[screenSize].bodyMNormal.fontStyle,
                descriptionFontSize: data.typography[screenSize].bodyMNormal.fontSize,
                descriptionLetterSpacing: data.typography[screenSize].bodyMNormal.letterSpacing,
                descriptionLineHeight: data.typography[screenSize].bodyMNormal.lineHeight,
            },
            m: {
                trackWidth: 44,
                trackHeight: 28,
                trackBorderRadius: data.shape.round.s + 2, // TODO: Узнать почему нет этих значений в теме
                thumbOffset: 2,
                thumbPressScale: 1.25,
                thumbSize: 24,
                thumbBorderRadius: data.shape.round.s, // TODO: Узнать почему нет этих значений в теме
                labelOffset: 12,
                labelFontFamilyRef: data.typography[screenSize].bodyMNormal.fontFamilyRef,
                labelFontWeight: data.typography[screenSize].bodyMNormal.fontWeight,
                labelFontStyle: data.typography[screenSize].bodyMNormal.fontStyle,
                labelFontSize: data.typography[screenSize].bodyMNormal.fontSize,
                labelLetterSpacing: data.typography[screenSize].bodyMNormal.letterSpacing,
                labelLineHeight: data.typography[screenSize].bodyMNormal.lineHeight,
                descriptionMarginTop: 4,
                descriptionFontFamilyRef: data.typography[screenSize].bodySNormal.fontFamilyRef,
                descriptionFontWeight: data.typography[screenSize].bodySNormal.fontWeight,
                descriptionFontStyle: data.typography[screenSize].bodySNormal.fontStyle,
                descriptionFontSize: data.typography[screenSize].bodySNormal.fontSize,
                descriptionLetterSpacing: data.typography[screenSize].bodySNormal.letterSpacing,
                descriptionLineHeight: data.typography[screenSize].bodySNormal.lineHeight,
            },
            s: {
                trackWidth: 44,
                trackHeight: 28,
                trackBorderRadius: data.shape.round.s + 2, // TODO: Узнать почему нет этих значений в теме
                thumbOffset: 2,
                thumbPressScale: 1.25,
                thumbSize: 24,
                thumbBorderRadius: data.shape.round.s, // TODO: Узнать почему нет этих значений в теме
                labelOffset: 12,
                labelFontFamilyRef: data.typography[screenSize].bodySNormal.fontFamilyRef,
                labelFontWeight: data.typography[screenSize].bodySNormal.fontWeight,
                labelFontStyle: data.typography[screenSize].bodySNormal.fontStyle,
                labelFontSize: data.typography[screenSize].bodySNormal.fontSize,
                labelLetterSpacing: data.typography[screenSize].bodySNormal.letterSpacing,
                labelLineHeight: data.typography[screenSize].bodySNormal.lineHeight,
                descriptionMarginTop: 4,
                descriptionFontFamilyRef: data.typography[screenSize].bodyXsNormal.fontFamilyRef,
                descriptionFontWeight: data.typography[screenSize].bodyXsNormal.fontWeight,
                descriptionFontStyle: data.typography[screenSize].bodyXsNormal.fontStyle,
                descriptionFontSize: data.typography[screenSize].bodyXsNormal.fontSize,
                descriptionLetterSpacing: data.typography[screenSize].bodyXsNormal.letterSpacing,
                descriptionLineHeight: data.typography[screenSize].bodyXsNormal.lineHeight,
            },
        },
        disabled: {
            true: {
                disabledOpacity: 0.4,
            },
        },
        focused: {
            true: {
                thumbBackgroundColor: data.color[mode].onDarkSurfaceSolidDefault,
                thumbShadow: shadow,
                trackBackgroundColorOn: data.color[mode].onLightSurfaceAccent,
                trackBackgroundColorOff: data.color[mode].onLightSurfaceTransparentTertiary,
                labelColor: data.color[mode].onLightTextPrimary,
                descriptionColor: data.color[mode].onLightTextSecondary,
            },
        },
    },
});
