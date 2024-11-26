import { useData } from "./useData";
import { CandidateProps } from "../types/CandidateProps";


// Get the opponent of a current qualifed candidate by `ID`.
export const useOpponent = (id: string): CandidateProps => {
    // Get the data.
    const data = useData();

    // Extract the relevant objects.
    const { first, second } = data;

    // Return the opponent.
    return id === first.id ? second : first;
};
