import { data } from "../data/data";
import { CandidateProps } from "../types/CandidateProps";


// Get the opponent of a current qualifed candidate by `ID`.
export const useGetOpponent = () => {
    // Extract the relevant objects.
    const { first, second } = data;

    const getOpponent = (id: string): CandidateProps => {
        // Return the opponent.
        return id === first.id ? second : first;
    }

    // Return the get function.
    return getOpponent;
};
