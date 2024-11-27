import React from "react";
import { data } from "../data/data";
import { formatNumber } from "../utils/formatNumbers";

const Summary: React.FC = () => {
    // Extract relevant information from the data array.
    const { first, second, statistics } = data;

    // Extract the votes for the first round.
    const roundOneVotes = statistics.roundOne;

    // Extract the eligible voters for the first round.
    const eligibleVoters = statistics.eligible;

    // Calculate the vote percentage for the first round.
    const votePercentage = Math.round((roundOneVotes / eligibleVoters) * 100);

    return (
        <div className="row control">
            <div className="section-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bar-chart-steps" viewBox="0 0 16 16">
                    <path d="M.5 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 .5 0M2 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z" />
                </svg>
                <span className="display-6">Împarte Voturile</span>
            </div>

            <div className="section-description lead">
                Pe baza celor mai recente date de la ROAEP, <span className="fw-bold text-success">{formatNumber(roundOneVotes)}</span> persoane au votat în primul tur din <span className="fw-bold text-danger">{formatNumber(eligibleVoters)}</span> câte erau eligibile, indicând astfel o prezență la vot de <span className="fw-bold text-muted">{votePercentage}%</span>.

                În urma acestui vot, candidații <span className="name">{first.name}</span> și <span className="name">{second.name}</span> vor fi selectați pentru turul doi.

                Folosind câmpurile de mai jos, alege cum preconizezi că se vor <span className="fst-italic">redistribui</span> voturile candidaților pentru turul doi.
            </div>
        </div>
    );
};

export default Summary;
