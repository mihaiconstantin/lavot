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
    const { from, to, value } = input;

    // Convert the value to a floating point number.
    const proportion = value / 100;

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
                newVotesFirstCandidate = first.votes * proportion;
                newVotesSecondCandidate = first.votes * (1 - proportion);
            }

            // If the interface candidate is the second qualified candidate.
            if (from === second.id) {
                // Distribute its own votes.
                newVotesFirstCandidate = second.votes * (1 - proportion);
                newVotesSecondCandidate = second.votes * proportion;
            }
        // Otherwise, search for the candidate.
        } else {
            // Find the candidate efficiently.
            const candidate = dropouts.find(c => c.id === from);

            // If the candidate is found.
            if (candidate) {
                // If the target is the first qualified candidate.
                if (to === first.id) {
                    // Distribute the votes.
                    newVotesFirstCandidate = first.votes + candidate.votes * proportion;
                    newVotesSecondCandidate = second.votes + candidate.votes * (1 - proportion);
                }

                // If the target is the second qualified candidate.
                if (to === second.id) {
                    // Distribute the votes.
                    newVotesFirstCandidate = first.votes + candidate.votes * (1 - proportion);
                    newVotesSecondCandidate = second.votes + candidate.votes * proportion;
                }
            }
        }

        // Return the votes.
        return [
            Math.round(newVotesFirstCandidate),
            Math.round(newVotesSecondCandidate)
        ];

    }, [from, to, proportion, candidates]);

    // Return the updated votes.
    return [votesFirstCandidate, votesSecondCandidate];
};
