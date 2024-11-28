import { CandidateProps } from "../types/CandidateProps";
import { InputProps } from "../types/InputProps";
import { NewVoters } from "../types/NewVoters";
import { SankeyData } from "../types/SankeyData";
import { Statistics } from "../types/Statistics";
import { calculateNewVotes } from "./calculateVotes";
import { extractLastName } from "./parseStrings";


// Helper to prepare the Sankey data.
export const prepareSankeyData = (candidates: CandidateProps[], statistics: Statistics, allocations: InputProps[], totalVotes: CandidateProps[], newVoters: NewVoters): SankeyData[] => {
    // Extract the qualified candidates with their totals.
    const [firstCandidate, secondCandidate] = totalVotes;

    // Prepare target candidates' names.
    const firstCandidateName = `${extractLastName(firstCandidate.name)} (II)`;
    const secondCandidateName = `${extractLastName(secondCandidate.name)} (II)`;

    // Initialize the Sankey data array.
    const sankeyData: SankeyData[] = [];

    // Loop through the allocations.
    allocations.forEach((allocation: InputProps) => {
        // Get the candidate holding the votes to spare.
        const candidate = candidates.find((candidate: CandidateProps) => candidate.id === allocation.from);

        // If a candidate hasn't been found, then return.
        if (!candidate) { return; }

        // Extract the candidate's last name.
        const lastName = `${extractLastName(candidate.name)} (I)`;

        // Calculate directed votes.
        const directedVotes = Math.round(candidate.votes * allocation.proportion);

        // Calculate leftover votes.
        const leftoverVotes = Math.round(candidate.votes * (1 - allocation.proportion));

        // If the candidate allocates to the first candidate.
        if (allocation.to === firstCandidate.id) {
            // If there are any votes for the first candidate.
            if (directedVotes > 0) {
                // Add the Sankey data for the first candidate.
                sankeyData.push({
                    from: lastName,
                    to: firstCandidateName,
                    weight: directedVotes
                });
            }

            // If there are any votes for the second candidate.
            if (leftoverVotes > 0) {
                // Add the Sankey data for the second candidate.
                sankeyData.push({
                    from: lastName,
                    to: secondCandidateName,
                    weight: leftoverVotes
                });
            }
        }

        // If the candidate allocates to the second candidate.
        if (allocation.to === secondCandidate.id) {
            // If there are any votes for the second candidate.
            if (directedVotes > 0) {
                // Add the Sankey data for the second candidate.
                sankeyData.push({
                    from: lastName,
                    to: secondCandidateName,
                    weight: directedVotes
                });
            }

            // If there are any votes for the first candidate.
            if (leftoverVotes > 0) {
                // Add the Sankey data for the first candidate.
                sankeyData.push({
                    from: lastName,
                    to: firstCandidateName,
                    weight: leftoverVotes
                });
            }
        }
    });

    // Prepare the name for the people.
    const peopleName = "Votanți Noi (II)";

    // Calculate the new votes from the people.
    const newVotes = calculateNewVotes(statistics.voters, statistics.votesRoundOne, newVoters.presence);

    // Calculate the direct votes from the people.
    const directedVotesPeople = Math.round(newVotes * newVoters.proportion);

    // Calculate the leftover votes from the people.
    const leftoverVotesPeople = Math.round(newVotes * (1 - newVoters.proportion));

    // If the people are to allocate to the first candidate.
    if (newVoters.to === firstCandidate.id) {
        // If there are any votes for the first candidate.
        if (directedVotesPeople > 0) {
            // Add the Sankey data for the first candidate.
            sankeyData.push({
                from: peopleName,
                to: firstCandidateName,
                weight: directedVotesPeople
            });
        }

        // If there are any votes for the second candidate.
        if (leftoverVotesPeople > 0) {
            // Add the Sankey data for the second candidate.
            sankeyData.push({
                from: peopleName,
                to: secondCandidateName,
                weight: leftoverVotesPeople
            });
        }
    }

    // If the people are to allocate to the second candidate.
    if (newVoters.to === secondCandidate.id) {
        // If there are any votes for the second candidate.
        if (directedVotesPeople > 0) {
            // Add the Sankey data for the second candidate.
            sankeyData.push({
                from: peopleName,
                to: secondCandidateName,
                weight: directedVotesPeople
            });
        }

        // If there are any votes for the first candidate.
        if (leftoverVotesPeople > 0) {
            // Add the Sankey data for the first candidate.
            sankeyData.push({
                from: peopleName,
                to: firstCandidateName,
                weight: leftoverVotesPeople
            });
        }
    }

    // Return the Sankey data array.
    return sankeyData;
};


// Add helper function to convert the Sankey data to an array.
export const convertSankeyDataToArray = (data: SankeyData[]): (string | number)[][] => {
    // Map each SankeyData object to an array of its values.
    const dataRows: (string | number)[][] = data.map(item => [
        item.from,
        item.to,
        item.weight
    ]);

    // Return the data rows.
    return dataRows;
};
