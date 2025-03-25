export const roundNumberToDecimal = (value: number, decimalPlaces = 2) =>
    Math.round((value + Number.EPSILON) * 10 ** decimalPlaces) / 10 ** decimalPlaces;
