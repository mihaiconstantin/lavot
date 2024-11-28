import { atom } from "jotai";
import { InputProps } from "../types/InputProps";
import { data } from "../data/data";
import { calculateVotes, initializeAllocations, initializeNewVoters } from "../utils/calculateVotes";
import { CandidateProps } from "../types/CandidateProps";
import { NewVoters } from "../types/NewVoters";
import { SankeyData } from "../types/SankeyData";
import { prepareSankeyData } from "../utils/prepareData";


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
    (get) => calculateVotes(
        data.statistics, data.first, data.second, data.dropouts,
        get(allocationsAtom), get(newVotersAtom)
    )
);


// Define the new votes atom with the initial value.
export const newVotersAtom = atom<NewVoters>(
    // Initialize the new votes based on the data.
    initializeNewVoters(data.second, data.statistics)
)


// Define the new derived Sankey data atom with the initial value.
export const sankeyDataAtom = atom<SankeyData[]>(
    // Initialize the Sankey data based on the data and other atoms.
    (get) => prepareSankeyData(
        [data.first, data.second, ...data.dropouts], data.statistics,
        get(allocationsAtom), get(votesAtom), get(newVotersAtom)
    )
);
