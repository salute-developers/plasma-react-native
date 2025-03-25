import { Theme } from '@salutejs/core-components';

import { StylesSaluteTheme } from '../ThemeProvider';

export const getConfig = ({ data, mode, screenSize }: Theme<StylesSaluteTheme>) => ({
    defaults: {
        view: 'default',
        size: 'xs',
    },
    variations: {
        view: {
            default: {
                titleColor: data.color[mode].textPrimary,
                subtitleColor: data.color[mode].textSecondary,
                contentTopLeftColor: data.color[mode].textPrimary,
                contentTopRightColor: data.color[mode].textPrimary,
                contentBottomRightColor: data.color[mode].textPrimary,
                contentBottomLeftColor: data.color[mode].textPrimary,
                timelineBarColor: data.color[mode].onDarkSurfaceTransparentTertiary,
                timelineProgressColor: data.color[mode].onDarkSurfaceSolidDefault,
            },
        },
        size: {
            xs: {
                height: 120,
                width: 120,
                contentPadding: 8,
                textBoxGap: 4,
                scale: 1,
                borderRadius: data.shape.round.m,
                borderWidth: 1,
                titleFontFamilyRef: data.typography[screenSize].bodySNormal.fontFamilyRef,
                titleFontWeight: data.typography[screenSize].bodySBold.fontWeight,
                titleFontStyle: data.typography[screenSize].bodySNormal.fontStyle,
                titleFontSize: data.typography[screenSize].bodySNormal.fontSize,
                titleLetterSpacing: data.typography[screenSize].bodySNormal.letterSpacing,
                titleLineHeight: data.typography[screenSize].bodySNormal.lineHeight,
                subtitleFontFamilyRef: data.typography[screenSize].bodyXsNormal.fontFamilyRef,
                subtitleFontWeight: data.typography[screenSize].bodyXsNormal.fontWeight,
                subtitleFontStyle: data.typography[screenSize].bodyXsNormal.fontStyle,
                subtitleFontSize: data.typography[screenSize].bodyXsNormal.fontSize,
                subtitleLetterSpacing: data.typography[screenSize].bodyXsNormal.letterSpacing,
                subtitleLineHeight: data.typography[screenSize].bodyXsNormal.lineHeight,
            },
            l: {
                height: 256,
                width: 256,
                contentPadding: 8,
                textBoxGap: 4,
                scale: 1,
                borderRadius: data.shape.round.m,
                borderWidth: 1,
                titleFontFamilyRef: data.typography[screenSize].bodySNormal.fontFamilyRef,
                titleFontWeight: data.typography[screenSize].bodySBold.fontWeight,
                titleFontStyle: data.typography[screenSize].bodySNormal.fontStyle,
                titleFontSize: data.typography[screenSize].bodySNormal.fontSize,
                titleLetterSpacing: data.typography[screenSize].bodySNormal.letterSpacing,
                titleLineHeight: data.typography[screenSize].bodySNormal.lineHeight,
                subtitleFontFamilyRef: data.typography[screenSize].bodyXsNormal.fontFamilyRef,
                subtitleFontWeight: data.typography[screenSize].bodyXsNormal.fontWeight,
                subtitleFontStyle: data.typography[screenSize].bodyXsNormal.fontStyle,
                subtitleFontSize: data.typography[screenSize].bodyXsNormal.fontSize,
                subtitleLetterSpacing: data.typography[screenSize].bodyXsNormal.letterSpacing,
                subtitleLineHeight: data.typography[screenSize].bodyXsNormal.lineHeight,
            },
        },
        disabled: {
            true: {
                disabledOpacity: 0.4,
            },
        },
        focused: {
            true: {
                titleColor: data.color[mode].textPrimary,
                subtitleColor: data.color[mode].textSecondary,
                contentTopLeftColor: data.color[mode].textPrimary,
                contentTopRightColor: data.color[mode].textPrimary,
                contentBottomRightColor: data.color[mode].textPrimary,
                contentBottomLeftColor: data.color[mode].textPrimary,
                timelineBarColor: data.color[mode].onDarkSurfaceTransparentTertiary,
                timelineProgressColor: data.color[mode].onDarkSurfaceSolidDefault,
            },
        },
    },
    intersections: [
        {
            focused: true,
            size: 'xs',
            style: {
                scale: 1.15,
            },
        },
        {
            focused: true,
            size: 'l',
            style: {
                scale: 1.08,
            },
        },
    ],
});
