import { useAtom } from "jotai";
import { useUpdateNewVoters } from "../hooks/useUpdateNewVotes";
import { newVotersAtom } from "../atoms/allocationAtoms";
import { CandidateProps } from "../types/CandidateProps";
import { Statistics } from "../types/Statistics";
import { calculateNewVotes, calculateVotingPresence } from "../utils/calculateVotes";
import { formatNumber, roundToTwoDecimals } from "../utils/formatNumbers";
import { useEffect } from "react";


// Define the new voters properties interface.
interface NewVotersProps {
    statistics: Statistics;
    firstCandidate: CandidateProps;
    secondCandidate: CandidateProps;
}


const NewVoters: React.FC<NewVotersProps> = ({ statistics, firstCandidate, secondCandidate }) => {
    // Get the update function for the new voters.
    const updateNewVoters = useUpdateNewVoters();

    // Get the global state of new voters.
    const [ newVoters ] = useAtom(newVotersAtom);

    // Calculate the voting presence in the first round.
    let presenceRoundOne = roundToTwoDecimals(calculateVotingPresence(statistics.voters, statistics.votesRoundOne));

    // Decide the minimum additional voters for the second round.
    const additionalVoters = 0.01

    // Increment the presence by 0.1%.
    presenceRoundOne += additionalVoters;

    // Update the voters at mount time to keep the interface consistent.
    useEffect(() => {
        // Update the new voters based on the new value.
        updateNewVoters(newVoters.to, roundToTwoDecimals(newVoters.presence + additionalVoters), newVoters.percentage);
    }, []);

    // Calculate the new votes in the second round.
    const newVotes = calculateNewVotes(statistics.voters, statistics.votesRoundOne, newVoters.presence);

    // Define the change handler for the vote presence slider.
    const handlePresenceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Extract the new value from the event.
        const newPresence = parseFloat(e.target.value);

        // Update the new voters based on the new value.
        updateNewVoters(newVoters.to, newPresence, newVoters.percentage);
    };


    // Define the change handler for the vote reallocation slider.
    const handleReallocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Extract the new value from the event.
        const newPercentage = parseFloat(e.target.value);

        // Update the new voters based on the new presence value.
        updateNewVoters(newVoters.to, newVoters.presence, newPercentage);
    };

    // Define the change handler for the radio buttons.
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Extract the new value from the event.
        const newTo = e.target.value;

        // Update the new voters based on the new value.
        updateNewVoters(newTo, newVoters.presence, newVoters.percentage);
    };

    // Determine the number of votes to be reallocated to the first candidate.
    const addedToFirst = newVoters.to === firstCandidate.id
        ? {
            votes: Math.round(newVotes * newVoters.proportion),
            percentage: newVoters.percentage
        }
        : {
            votes: newVotes - Math.round(newVotes * newVoters.proportion),
            percentage: 100 - newVoters.percentage
        };

    // Determine the number of votes to be reallocated to the second candidate.
    const addedToSecond = newVoters.to === secondCandidate.id
        ? {
            votes: Math.round(newVotes * newVoters.proportion),
            percentage: newVoters.percentage
        }
        : {
            votes: newVotes - Math.round(newVotes * newVoters.proportion),
            percentage: 100 - newVoters.percentage
        };

    return (
        <div className="row control candidate align-items-top justify-content-between">
            <div className="col-12 col-lg-3 candidate-slider">
                <div className="form-group">
                    <label htmlFor="round-two-presence">Care va fi prezența la vot în turul doi?</label>
                    <input
                        type="range"
                        className="form-range"
                        id="round-two-presence"
                        step="0.01"
                        min={presenceRoundOne}
                        max="90"
                        value={newVoters.presence}
                        onChange={handlePresenceChange}
                    />
                </div>
            </div>

            <div className="col-12 col-lg-3 candidate-slider">
                <div className="form-group">
                    <label htmlFor="people-allocation">Cate din noile voturi vor fi alocate?</label>
                    <input
                        type="range"
                        className="form-range"
                        id="people-allocation"
                        step="0.01"
                        min="0"
                        max="100"
                        value={newVoters.percentage}
                        onChange={handleReallocationChange}
                    />
                </div>
            </div>

            <div className="col-12 col-lg-3 candidate-receiver">
                <div className="question">Către cine vor fi alocate voturile?</div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="candidate"
                        id={`people-${firstCandidate.name}`}
                        value={firstCandidate.id}
                        checked={newVoters.to === firstCandidate.id}
                        onChange={handleRadioChange}
                    />
                    <label
                        className="form-check-label"
                        htmlFor={`people-${firstCandidate.name}`}>
                        {firstCandidate.name}{" "}
                        <span className="votes-added fw-light text-secondary">
                            <span className="votes-added-count">{formatNumber(addedToFirst.votes)}</span> voturi <span className="votes-added-percentage">({addedToFirst.percentage.toFixed(2)}%)</span>
                        </span>
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="candidate"
                        id={`people-${secondCandidate.name}`}
                        value={secondCandidate.id}
                        checked={newVoters.to === secondCandidate.id}
                        onChange={handleRadioChange}
                    />
                    <label
                        className="form-check-label"
                        htmlFor={`people-${secondCandidate.name}`}>
                        {secondCandidate.name} {""}
                        <span className="votes-added fw-light text-secondary">
                            <span className="votes-added-count">{formatNumber(addedToSecond.votes)}</span> voturi <span className="votes-added-percentage">({addedToSecond.percentage.toFixed(2)}%)</span>
                        </span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default NewVoters;
