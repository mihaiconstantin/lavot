import { useAtom } from "jotai";
import { CandidateProps } from "../types/CandidateProps";
import { allocationsAtom, votesAtom } from "../atoms/allocationAtoms";
import { useUpdateAllocation } from "../hooks/useUpdateAllocation";
import { formatNumber } from "../utils/formatNumbers";


const DropoutCandidate: React.FC<CandidateProps> = ({ id, name, votes, percentage }) => {
    // Get the update function for the allocations.
    const updateAllocation = useUpdateAllocation();

    // Get the global state of vote allocations.
    const [ allocations ] = useAtom(allocationsAtom);

    // Get the global state of vote calculations.
    const [ candidateTotals ] = useAtom(votesAtom);

    // Extract the first and second candidate.
    const firstCandidate: CandidateProps = candidateTotals[0];
    const secondCandidate: CandidateProps = candidateTotals[1];

    // Extract the allocation for the current candidate.
    const allocation = allocations.find(a => a.from === id)!;

    // Define the change handler for the slider.
    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Extract the new value from the event.
        const newPercentage = parseInt(e.target.value);

        // Update the allocation based on the new value.
        updateAllocation(id, allocation.to, newPercentage);
    };

    // Define the change handler for the radio buttons.
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Extract the new value from the event.
        const newRecipient = e.target.value;

        // Update the allocation based on the new value.
        updateAllocation(id, newRecipient, allocation.percentage);
    };

    // Determine the number of votes to be reallocated to the first candidate.
    const addedToFirst = allocation.to === firstCandidate.id
        ? {
            votes: Math.round(votes * (allocation.percentage / 100)),
            percentage: allocation.percentage
        }
        : {
            votes: votes - Math.round(votes * (allocation.percentage / 100)),
            percentage: 100 - allocation.percentage
        };

    // Determine the number of votes to be reallocated to the second candidate.
    const addedToSecond = allocation.to === secondCandidate.id
        ? {
            votes: Math.round(votes * (allocation.percentage / 100)),
            percentage: allocation.percentage
        }
        : {
            votes: votes - Math.round(votes * (allocation.percentage / 100)),
            percentage: 100 - allocation.percentage
        };


    return (
        <div className="row align-items-top control candidate justify-content-between">
            <div className="b col-3 candidate-information">
                <div className="row identification">
                    <div className="col-12">
                        <span className="name">{ name }</span>
                    </div>
                </div>

                <div className="row votes">
                    <div className="col-12">
                        <span className="count">{ formatNumber(votes) }</span> voturi (
                        <span className="percentage">{ percentage }%</span>)
                    </div>
                </div>
            </div>

            <div className="b col-4 candidate-slider">
                <div className="form-group">
                    <label className="b" htmlFor={`${id}-slider`}>
                        Câte voturi ale candidatului vor fi realocate?
                    </label>
                    <input
                        type="range"
                        className="form-range"
                        id={`${id}-slider`}
                        min="0"
                        max="100"
                        value={allocation.percentage}
                        onChange={handleSliderChange}
                    />
                </div>
            </div>

            <div className="b col-4 candidate-receiver">
                <div className="b question">
                    Către cine vor fi realocate voturile?
                </div>
                <div className="b form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name={name}
                        id={`${id}-${firstCandidate.name}-radio`}
                        value={firstCandidate.id}
                        checked={allocation.to === firstCandidate.id}
                        onChange={handleRadioChange}
                    />
                    <label
                        className="form-check-label"
                        htmlFor={`${id}-${firstCandidate.name}-radio`}>
                        {firstCandidate.name} <span className="votes-added fw-light text-secondary"><span className="votes-added-count">{formatNumber(addedToFirst.votes)}</span> voturi <span className="votes-added-percentage">({addedToFirst.percentage}%)</span></span>
                    </label>
                </div>
                <div className="b form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name={name}
                        id={`${id}-${secondCandidate.name}-radio`}
                        value={secondCandidate.id}
                        checked={allocation.to === secondCandidate.id}
                        onChange={handleRadioChange}
                    />
                    <label
                        className="form-check-label"
                        htmlFor={`${id}-${secondCandidate.name}-radio`}>
                        {secondCandidate.name} <span className="votes-added fw-light text-secondary"><span className="votes-added-count">{formatNumber(addedToSecond.votes)}</span> voturi <span className="votes-added-percentage">({addedToSecond.percentage}%)</span></span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default DropoutCandidate;
