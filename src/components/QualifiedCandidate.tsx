import React, { useState } from "react";
import { useEstimates } from "../hooks/useEstimates";
import { CandidateProps } from "../types/CandidateProps";
import { useOpponent } from "../hooks/useOpponent";


const QualifiedCandidate: React.FC<CandidateProps> = ({ id, name, votes, percentage }) => {
    // Get the opponent of the current candidate.
    const opponent = useOpponent(id);

    // Set the initial state for each dropped-out candidate.
    const [value, setValue] = useState(100);

    // Get the current values based on the starting state.
    const [firstCandidateVotes, secondCandidateVotes] = useEstimates({ from: id, to: id, value });

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
                        <span className="count">{ votes }</span> voturi (
                        <span className="percentage">{ percentage }%</span>)
                </div>
            </div>
        </div>

        <div className="b col-4 candidate-slider">
            <div className="form-group">
                <label htmlFor={ id }>
                    Câte voturi preconizezi că va reține candidatul?
                </label>
                <input
                    type="range"
                    className = "form-range"
                    id={id}
                    min="0"
                    max="100"
                    value={value}
                    onChange={(e) => setValue(parseFloat(e.target.value))}
                />
            </div>
        </div>

        <div className="b col-4 candidate-receiver">
            <div className="row">
                <div className="col-12 feedback">
                    <span className="name gain">{name}</span> va reține <span className="gain">{value}%</span> din voturi (<span className="gain">{ firstCandidateVotes }</span>), iar restul de <span className="loss">{100 - value}%</span> (<span className="loss">{ secondCandidateVotes }</span>) vor merge către <span className="name loss">{ opponent.name }</span>.
                </div>
            </div>
        </div>
    </div>
    );
};

export default QualifiedCandidate;
