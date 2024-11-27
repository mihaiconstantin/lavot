import React from "react";
import { useAtom } from "jotai";
import { votesAtom } from "../atoms/allocationAtoms";
import { CandidateProps } from "../types/CandidateProps";
import { formatNumber } from "../utils/formatNumbers";


const Debug: React.FC = () => {
    // Get the global state of vote calculations.
    const [candidateTotals] = useAtom(votesAtom);

    // Extract the first and second candidate.
    const firstCandidate: CandidateProps = candidateTotals[0];
    const secondCandidate: CandidateProps = candidateTotals[1];

    return (
        <div className="row control justify-content-center mb-4">
            <div className="col-6 text-danger shadow p-3">
                <div className="row div col-12 text-center mb-1">
                    <b>Debug</b>
                </div>
                <div className="row text-secondary">
                    <div className="col-12">
                        Voturi <span className="name">{firstCandidate.name}</span> : {formatNumber(firstCandidate.votes)}
                    </div>
                </div>
                <div className="row text-secondary">
                    <div className="col-12">
                        Voturi <span className="name">{secondCandidate.name}</span> : {formatNumber(secondCandidate.votes)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Debug;
