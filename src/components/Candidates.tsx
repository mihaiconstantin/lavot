import React from "react";
import Summary from "./Summary";
import QualifiedCandidate from "./QualifiedCandidate";
import DropoutCandidate from "./DropoutCandidate";
import { data } from "../data/data";
import Debug from "./Debug";


const Candidates: React.FC = () => {
    // Extract relevant information from the data array.
    const { first, second, dropouts } = data;

    // Construct the array of qualified candidates.
    const qualified = [first, second];

    return (
        <section id="controls" className="row">
            <div className="col-12 shadow controls-wrapper">
                <Debug />

                {/* Render the summary. */}
                <Summary />

                <div className="b row text-muted display-6 section-subtitle">
                    <div className="col-12">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark-fill" viewBox="0 0 16 16">
                            <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"/>
                        </svg>
                        <span>Candidații Din Turul Doi</span>
                    </div>
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
                    <div className="col-12">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark-fill" viewBox="0 0 16 16">
                            <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2"/>
                        </svg>
                        <span>Candidații Eliminați</span>
                    </div>
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
