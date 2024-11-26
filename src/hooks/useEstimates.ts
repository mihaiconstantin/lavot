import { useMemo } from "react";
import { useData } from "./useData";
import { CandidateProps } from "../types/CandidateProps";
import { InputProps } from "../types/InputProps";


// Distribute the votes accordingly.
export const useEstimates = (input: InputProps) => {
    // Get the data.
    const data = useData();

    // Extract the relevant objects.
    const { first, second, dropouts } = data;

    // Extract the variables from the user input object.
    const { from, to } = input;

    // Convert the value to a floating point number.
    const value = input.value / 100;

    // Define the array of candidates.
    const candidates: CandidateProps[] = [first, second, ...dropouts];

    // Calculate the votes.
    const [votesFirstCandidate, votesSecondCandidate] = useMemo(() => {
        // The initial new votes.
        let newVotesFirstCandidate = 0;
        let newVotesSecondCandidate = 0;

        // If the input is coming from a qualified candidate.
        if (from === to) {
            // If the interface candidate is the first qualified candidate.
            if (from === first.id) {
                // Distribute its own votes.
                newVotesFirstCandidate = first.votes * value;
                newVotesSecondCandidate = first.votes * (1 - value);
            }

            // If the interface candidate is the second qualified candidate.
            if (from === second.id) {
                // Distribute its own votes.
                newVotesFirstCandidate = second.votes * (1 - value);
                newVotesSecondCandidate = second.votes * value;
            }
        // Otherwise, search for the candidate.
        } else {
            // Otherwise, search for the candidate in the array.
            for (const candidate of candidates) {
                // If the candidate in the array matches the giver from the input.
                if (from === candidate.id) {
                    // If the target is the first qualified candidate.
                    if (to === first.id) {
                        // Distribute the votes.
                        newVotesFirstCandidate = first.votes + candidate.votes * value;
                        newVotesSecondCandidate = second.votes + candidate.votes * (1 - value);
                    }

                    // If the target is the second qualified candidate.
                    if (to === second.id) {
                        // Distribute the votes.
                        newVotesFirstCandidate = first.votes + candidate.votes * (1 - value);
                        newVotesSecondCandidate = second.votes + candidate.votes * value;
                    }

                    // Break free once the candidate is found and processed.
                    break;
                }
            }
        }

        // Return the votes.
        return [
            Math.round(newVotesFirstCandidate),
            Math.round(newVotesSecondCandidate)
        ];

    }, [from, to, value, candidates]);

    // Return the updated votes.
    return [votesFirstCandidate, votesSecondCandidate];
};
