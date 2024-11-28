// Helper to extract the last name of a person from a full name.
/**
 * Extracts the last name from a full name string.
 * If the last name is hyphenated, it returns the last part of the hyphenated name.
 *
 * @param name - The full name string from which to extract the last name.
 * @returns The extracted last name.
 */
export const extractLastName = (name: string) => {
    // Split the full name into parts.
    const parts = name.split(" ");

    // Extract the last name.
    let lastName = parts[parts.length - 1];

    // Check if the last name is a hyphenated one.
    if (lastName.includes("-")) {
        // Split the last name into parts.
        const lastParts = lastName.split("-");

        // Get the last part.
        lastName = lastParts[lastParts.length - 1];
    }

    // Return the last name.
    return lastName;
}
