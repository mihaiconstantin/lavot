/**
 * Formats a number with commas as thousand separators.
 * @param num - The number to format.
 * @returns The formatted number as a string.
 */
export const formatNumber = (num: number): string => {
    // Round to two decimal places.
    num = Math.round(num);

    return num.toLocaleString();
};


/**
 * Rounds a number to two decimal places.
 *
 * This function takes a number as input and returns the number rounded to two decimal places.
 * It uses `Math.round` and `Number.EPSILON` to ensure accurate rounding.
 *
 * @param num - The number to be rounded.
 * @returns The number rounded to two decimal places.
 */
export const roundToTwoDecimals = (num: number): number => {
    return Math.round((num + Number.EPSILON) * 100) / 100;
};
