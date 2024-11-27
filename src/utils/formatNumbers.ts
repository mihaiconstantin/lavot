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

