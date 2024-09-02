export const extractAlphaFromHex = (hex: string) => {
    hex = hex.replace(/^#/, '');

    if (hex.length === 6) {
        hex += 'ff';
    } else if (hex.length !== 8) {
        throw new Error('Invalid HEX color.');
    }

    const alpha = parseInt(hex.substring(6, 8), 16) / 255;

    return Math.round(alpha * 100) / 100;
};
