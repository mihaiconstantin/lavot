import { useState } from "react";
import { useData } from "./useData";

interface Candidate {
    id: string;
    name: string;
    votes: number;
    percentage: number;
}

interface Props {
    from: string;
    to: string;
    value: number;
}

export const useEstimates = (props: Props) => {
    const [firstVotes, setFirstVotes] = useState(0);
    const [secondVotes, setSecondVotes] = useState(0);

    const data = useData();

    const { from, to, value } = props;
    const { first, second, dropouts } = data;

    const candidates: Candidate[] = [first, second, ...dropouts];

    // for each candidate in the array
    for (const candidate of candidates) {
        // if the candidate is the candidate is not the selected one continue
        if (candidate.id !== from) {
            continue;
        }

        // if the selected candidate send votes to the first candidate
        if (to === first.id) {
            setFirstVotes(candidate.votes * value);
            setSecondVotes(candidate.votes * (1 - value));
        }

        if (to === second.id) {
            setFirstVotes(candidate.votes * (1 - value));
            setSecondVotes(candidate.votes * value);
        }
    }

    return [firstVotes, secondVotes];
};
