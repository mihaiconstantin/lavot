import React from "react";
import { useAtom } from "jotai";
import { newVotersAtom, votesAtom } from "../atoms/allocationAtoms";
import { CandidateProps } from "../types/CandidateProps";
import { formatNumber } from "../utils/formatNumbers";
import { calculateNewVotes, calculateVotingPresence } from "../utils/calculateVotes";
import { Statistics } from "../types/Statistics";


const Debug:  React.FC<Statistics> = ({ voters, votesRoundOne }) => {
    // Get the global state of vote calculations.
    const [candidateTotals] = useAtom(votesAtom);

    // Get the global state of the new votes.
    const [ newVoters ] = useAtom(newVotersAtom);

    // Extract the first and second candidate.
    const firstCandidate: CandidateProps = candidateTotals[0];
    const secondCandidate: CandidateProps = candidateTotals[1];

    // Calculate voting presence in the first round.
    const presenceRoundOne = calculateVotingPresence(voters, votesRoundOne);

    // Calculate new votes.
    const newVotes = calculateNewVotes(voters, votesRoundOne, newVoters.presence);

    // Determine the recipient of the new votes.
    const recipient = newVoters.to === firstCandidate.id ? firstCandidate : secondCandidate;

    return (
        <div className="row control justify-content-center mb-4 small">
            <div className="col-lg-6 col-md-8 col-sm-12 text-danger shadow p-3">
                <div className="row div col-12 text-center mb-1">
                    <b>Debug</b>
                </div>

                <div className="row text-secondary">
                    <div className="col-12">
                        Total voturi <span className="name">{firstCandidate.name}</span> : {formatNumber(firstCandidate.votes)} <span className="votes-added">({ firstCandidate.percentage.toFixed(2) }%)</span>
                    </div>
                </div>

                <div className="row text-secondary">
                    <div className="col-12">
                        Total voturi <span className="name">{secondCandidate.name}</span> : {formatNumber(secondCandidate.votes)} <span className="votes-added">({ secondCandidate.percentage.toFixed(2) }%)</span>
                    </div>
                </div>

                <hr className="text-muted" />

                <div className="row text-secondary">
                    <div className="col-12">
                        <div>
                            Prezență la vot în turul întâi : {presenceRoundOne.toFixed(2)}%
                        </div>
                        <div>
                            Prezență la vot estimată pentru turul doi : {(newVoters.presence).toFixed(2)}%
                        </div>
                        <div>
                            Voturi noi: {formatNumber(newVotes)}
                        </div>
                        <div>
                            Voturi realocate către <span className="name">{recipient.name}</span> : {formatNumber(newVotes * newVoters.proportion)} ({newVoters.percentage.toFixed(2)}%)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Debug;
