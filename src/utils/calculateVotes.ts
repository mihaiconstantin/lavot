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
            to: secondCandidate.id,
            percentage: 50,
            proportion: 0.5
        });
    });

    // Return the allocations array.
    return allocations;
};


// Calculate the total number of votes.
export const calculateTotalVotes = (candidates: CandidateProps[]): number => {
    // Initialize the total votes.
    let totalVotes = 0;

    // For each candidate.
    candidates.forEach(candidate => {
        // Add the candidate votes to the total.
        totalVotes += candidate.votes;
    });

    // Return the total votes.
    return totalVotes;
};


// Helper to calculate votes allocation based.
export const calculateVotes = (firstCandidate: CandidateProps, secondCandidate: CandidateProps, dropoutCandidates: CandidateProps[], allocations: InputProps[]): CandidateProps[] => {
    // Merge the candidates.
    const candidates = [firstCandidate, secondCandidate, ...dropoutCandidates];

    // Initialize the candidate objects.
    const firstCandidateTotal: CandidateProps = { ...firstCandidate, votes: 0, percentage: 0 };
    const secondCandidateTotal: CandidateProps = { ...secondCandidate, votes: 0, percentage: 0 };

    // For each candidate.
    candidates.forEach(candidate => {
        // Find its corresponding allocation.
        const allocation = allocations.find(a => a.from === candidate.id);

        // If such an allocation exists.
        if (allocation) {
            // If the allocation is for the first candidate.
            if (allocation.to === firstCandidate.id) {
                firstCandidateTotal.votes += candidate.votes * allocation.proportion;
                secondCandidateTotal.votes += candidate.votes * (1 - allocation.proportion);
            }

            // If the allocation is for the second candidate.
            if (allocation.to === secondCandidate.id) {
                secondCandidateTotal.votes += candidate.votes * allocation.proportion;
                firstCandidateTotal.votes += candidate.votes * (1 - allocation.proportion);
            }
        }
    });

    // Round the votes to the nearest integer.
    firstCandidateTotal.votes = Math.round(firstCandidateTotal.votes);
    secondCandidateTotal.votes = Math.round(secondCandidateTotal.votes);

    // Calculate the total votes.
    const totalVotes = calculateTotalVotes(candidates);

    // Calculate the percentages.
    firstCandidateTotal.percentage = (firstCandidateTotal.votes / totalVotes) * 100;
    secondCandidateTotal.percentage = (secondCandidateTotal.votes / totalVotes) * 100;

    // Return the candidate array with totals.
    return [firstCandidateTotal, secondCandidateTotal];
};


// Helper to calculate the new votes.
export const initializeNewVoters = (candidate: CandidateProps, statistics: Statistics): NewVoters => {
    // Calculate the expected presence.
    const presence = calculateVotingPresence(statistics.voters, statistics.votesRoundOne);

    // Return the new votes object.
    return {
        to: candidate.id,
        presence: presence,
        percentage: 50,
        proportion: 0.5
    };
};

