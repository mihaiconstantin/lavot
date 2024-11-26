import React from "react";
import { useData } from "../hooks/useData";

const Summary: React.FC = () => {
    // Extract relevant information from the data array.
    const { first, second, statistics } = useData();;

    return (
        <div className="row control">
            <div className="section-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bar-chart-steps" viewBox="0 0 16 16">
                    <path d="M.5 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 .5 0M2 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z" />
                </svg>
                <span>Împarte Voturile</span>
            </div>

            <div className="section-description">
                Pe baza ultimelor date de la ROAEP, <span className="total-votes-round-one">{statistics.roundOne}</span> persoane
                au votat în primul tur din {statistics.eligible} câte erau eligibile. În urma acestui vot,
                candidații <span className="name">{first.name}</span> și <span className="name">{second.name}</span> vor
                fi selectați pentru turul doi. Alege mai jos cum preconizezi că se vor împărți voturile în turul doi
                pentru fiecare candidat în parte.
            </div>
        </div>
    );
};

export default Summary;
