import React, { useState } from "react";
import { useEstimates } from "../hooks/useEstimates";

const Candidate: React.FC = () => {
    const [value, setValue] = useState(0.5);
    useEstimates({ to: "1", from: "3", value: 0.7 });

    return (
        <div className="row align-items-top control candidate justify-content-between">
            <div className="b col-3 candidate-information">
                <div className="row identification">
                    <div className="col-12">
                        <span className="name">Nume Prenume</span>
                    </div>
                </div>

                <div className="row votes">
                    <div className="col-12">
                        <span className="count">2306090</span> voturi (
                        <span className="percentage">25%</span>)
                    </div>
                </div>
            </div>

            <div className="b col-4 candidate-slider">
                <div className="form-group">
                    <label htmlFor="candidateRange1">
                        Cate voturi ale candidatului...
                    </label>
                    <input
                        type="range"
                        className="form-range"
                        id="candidateRange1"
                        value={value}
                        onChange={(e) => setValue(parseFloat(e.target.value))}
                    />
                </div>
            </div>

            <div className="b col-4 candidate-receiver">
                <div className="form-group">
                    <label
                        className="control-label"
                        id="selection-label"
                        htmlFor="selection-selectized"
                    >
                        ...vor merge catre cine?
                    </label>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                    >
                        <option selected>Selecteaza candidatul</option>
                        <option value="1">Nume Prenume</option>
                        <option value="2">Nume Prenume</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Candidate;
