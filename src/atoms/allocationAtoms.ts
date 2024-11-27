import { atom } from "jotai";
import { InputProps } from "../types/InputProps";
import { data } from "../data/data";
import { calculateVotes, initializeAllocations } from "../utils/calculateVotes";
import { CandidateProps } from "../types/CandidateProps";


// Define the votes atom with initial allocations.
export const allocationsAtom = atom<InputProps[]>(
    // Initialize the allocations based on the data.
    initializeAllocations(
        data.first,
        data.second,
        data.dropouts
));

// Define the calculation derived atom with the initial value.
export const votesAtom = atom<CandidateProps[]>(
    // Calculate the votes based on the initial allocations.
    (get) => calculateVotes(data.first, data.second, data.dropouts, get(allocationsAtom))
);
