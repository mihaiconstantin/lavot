import React, { useState } from "react";
import { useEstimates } from "../hooks/useEstimates";
import { CandidateProps } from "../types/CandidateProps";
import { useData } from "../hooks/useData";


const DropoutCandidate: React.FC<CandidateProps> = ({ id, name, votes, percentage }) => {
    // Fetch the data array.
    const data = useData();

    // Extract the qualified candidates.
    const { first, second } = data;

    // Set the initial state for each dropped-out candidate.
    const [value, setValue] = useState(50);
    const [to, setTo] = useState("1");

    // Get the current values based on the starting state.
    useEstimates({ from: id, to, value });

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
                        <span className="count">{ votes }</span> voturi (
                        <span className="percentage">{ percentage }%</span>)
                    </div>
                </div>
            </div>

            <div className="b col-4 candidate-slider">
                <div className="form-group">
                    <label htmlFor={ id }>
                        Câte voturi ale candidatului vor fi realocate?
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

            {/* TODO: Fix the label IDs (i.e., also in other parts). */}
            <div className="b col-4 candidate-receiver">
                <div className="form-group">
                    <label
                        className="control-label"
                        id="selection-label"
                        htmlFor="selection-selectized"
                    >
                        Către cine vor merge voturile?
                    </label>
                    <select
                       className="form-select"
                       value={to}
                       onChange={(e) => setTo(e.target.value)}
                    >
                        <option value={ first.id }> { first.name } </option>
                        <option value={ second.id }> { second.name } </option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default DropoutCandidate;
