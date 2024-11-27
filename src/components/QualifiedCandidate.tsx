import { useAtom } from "jotai";
import { CandidateProps } from "../types/CandidateProps";
import { allocationsAtom } from "../atoms/allocationAtoms";
import { useUpdateAllocation } from "../hooks/useUpdateAllocation";
import { useGetOpponent } from "../hooks/useOpponent";
import { formatNumber } from "../utils/formatNumbers";


const QualifiedCandidate: React.FC<CandidateProps> = ({ id, name, votes, percentage }) => {
    // Get the update function for the allocations.
    const updateAllocation = useUpdateAllocation();

    // Get the get function for the opponent.
    const getOpponent = useGetOpponent();

    // Get the global state of vote allocations.
    const [ allocations ] = useAtom(allocationsAtom);

    // Extract the allocation for the current candidate.
    const allocation = allocations.find(a => a.from === id)!;

    // Get the opponent of the current candidate.
    const opponent = getOpponent(id);

    // Determine the votes for the first candidate.
    const candidateVotes = Math.round(votes * (allocation.percentage / 100));

    // Determine the votes for the second candidate.
    const opponentVotes = votes - candidateVotes;

    // Define the change handler for the slider.
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Extract the new value from the event.
        const value = parseFloat(e.target.value);

        // Update the allocation based on the new value.
        updateAllocation(id, id, value);
    };

    return (
        <div className="row align-items-top control candidate justify-content-between">
        <div className="b col-3 candidate-information">
            <div className="row identification">
                <div className="col-12">
                        <span className="annotation"></span>
                        <span className="name">{ name }</span>
                </div>
            </div>

            <div className="row votes">
                <div className="col-12">
                        <span className="count">{ formatNumber(votes) }</span> voturi (
                        <span className="percentage">{ percentage.toFixed(2) }%</span>)
                </div>
            </div>
        </div>

        <div className="b col-4 candidate-slider">
            <div className="form-group">
                <label htmlFor={`${id}-slider`}>
                    Câte voturi preconizezi că va reține candidatul?
                </label>
                <input
                    type="range"
                    className = "form-range"
                    id={`${id}-slider`}
                    min="0"
                    max="100"
                    step="0.01"
                    value={allocation.percentage}
                    onChange={handleChange}
                />
            </div>
        </div>

        <div className="b col-4 candidate-receiver">
            <div className="row">
                <div className="col-12 feedback">
                    <span className="name">{name}</span> va reține <span className="fw-bold">{allocation.percentage.toFixed(2)}%</span> din voturi (<span className="">{formatNumber(candidateVotes)}</span>), iar restul de <span className="fw-bold">{(100 - allocation.percentage).toFixed(2)}%</span> (<span className="">{formatNumber(opponentVotes)}</span>) vor merge către <span className="name">{opponent.name}</span>.
                </div>
            </div>
        </div>
    </div>
    );
};

export default QualifiedCandidate;
