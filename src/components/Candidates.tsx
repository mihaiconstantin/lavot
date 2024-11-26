import React from "react";
import QualifiedCandidate from "./QualifiedCandidate";
import DropoutCandidate from "./DropoutCandidate";
import { useData } from "../hooks/useData";

const Candidates: React.FC = () => {
    // Get the data array.
    const data = useData();

    // Extract relevant information from the data array.
    const { first, second, dropouts, statistics } = data;

    // Construct the array of qualified candidates.
    const qualified = [first, second];

    return (
        <section id="controls" className="row">
            <div className="col-12 shadow controls-wrapper">
                <div className="row control">
                    <div className="section-title">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="currentColor"
                            className="bi bi-bar-chart-steps"
                            viewBox="0 0 16 16"
                        >
                            <path d="M.5 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 .5 0M2 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <span>Împarte Voturile</span>
                    </div>

                    <div className="section-description">
                        Pe baza ultimelor date de la ROAEP, <span className="total-votes-round-one">{statistics.roundOne}</span> persoane
                        au votat în primul tur din {statistics.eligible} câte erau eligibile. În urma acestui vot,
                        iar candidații <span className="name">{first.name}</span> și <span className="name">{second.name}</span> vor
                        fi selectați pentru turul doi. Alege mai jos cum preconizezi că se vor împărți voturile în turul doi
                        pentru fiecare candidat în parte.
                    </div>
                </div>

                <div className="b row section-subtitle">
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

                <div className="b row section-subtitle">
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
