import React from "react";
import Summary from "./Summary";
import QualifiedCandidate from "./QualifiedCandidate";
import DropoutCandidate from "./DropoutCandidate";
import { data } from "../data/data";

const Candidates: React.FC = () => {
    // Extract relevant information from the data array.
    const { first, second, dropouts } = data;

    // Construct the array of qualified candidates.
    const qualified = [first, second];

    return (
        <section id="controls" className="row">
            <div className="col-12 shadow controls-wrapper">
                {/* Render the summary. */}
                <Summary />

                <div className="b row text-muted display-6 section-subtitle">
                    <div className="col-12">Candidații Din Turul Doi</div>
                </div>

                {/* Render the qualified candidates. */}
                {qualified.map((candidate) => (
                    <QualifiedCandidate
                        key={candidate.id}
                        id={candidate.id}
                        name={candidate.name}
                        votes={candidate.votes}
                        percentage={candidate.percentage}
                    />
                ))}

                <div className="b row text-muted lead section-subtitle">
                    <div className="col-12">Candidații Eliminați</div>
                </div>

                {/* Render the dropouts. */}
                {dropouts.map((candidate) => (
                    <DropoutCandidate
                        key={candidate.id}
                        id={candidate.id}
                        name={candidate.name}
                        votes={candidate.votes}
                        percentage={candidate.percentage}
                    />
                ))}
            </div>
        </section>
    );
};

export default Candidates;
