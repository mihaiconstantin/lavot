import { CandidateProps } from "../types/CandidateProps";
import { InputProps } from "../types/InputProps";


// Helper to initialize allocations.
export const initializeAllocations = (firstCandidate: CandidateProps, secondCandidate: CandidateProps, dropoutCandidates: CandidateProps[]): InputProps[] => {
    // Merge the qualified candidates.
    const qualifiedCandidates = [firstCandidate, secondCandidate];

    // Initialize the allocations array.
    const allocations: InputProps[] = [];

    // For each qualified candidate.
    qualifiedCandidates.forEach(candidate => {
        // Add the initial allocation for the candidate.
        allocations.push({
            from: candidate.id,
            to: candidate.id,
            percentage: 100,
            proportion: 1
        });
    });

    // For each dropout candidate.
    dropoutCandidates.forEach(candidate => {
        // Add the initial allocation for the candidate.
        allocations.push({
            from: candidate.id,
            to: firstCandidate.id,
            percentage: 50,
            proportion: 0.5
        });
    });

    // Return the allocations array.
    return allocations;
};
