import React from "react";
import { useAtom } from "jotai";
import { newVotersAtom, votesAtom } from "../atoms/allocationAtoms";
import { CandidateProps } from "../types/CandidateProps";
import { formatNumber } from "../utils/formatNumbers";
import { calculateNewVotes, calculateVotingPresence } from "../utils/calculateVotes";
import { data } from "../data/data";


const Forecast: React.FC = () => {
    // Get the statistics.
    const { voters, votesRoundOne } = data.statistics;

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

    // Calculate votes allocated to the first candidate.
    // Determine the number of votes to be reallocated to the first candidate.
    const secondRoundFirstCandidate = newVoters.to === firstCandidate.id
        ? {
            votes: Math.round(newVotes * newVoters.proportion),
            percentage: newVoters.percentage
        }
        : {
            votes: newVotes - Math.round(newVotes * newVoters.proportion),
            percentage: 100 - newVoters.percentage
        };

    // Determine the number of votes to be reallocated to the second candidate.
    const secondRoundSecondCandidate = newVoters.to === secondCandidate.id
        ? {
            votes: Math.round(newVotes * newVoters.proportion),
            percentage: newVoters.percentage
        }
        : {
            votes: newVotes - Math.round(newVotes * newVoters.proportion),
            percentage: 100 - newVoters.percentage
        };


    return (
        <div className="row control output-forecast justify-content-center">
            <div className="col-12">

                <div className="row text-muted">
                    <div className="col-12">
                        Total voturi <span className="name">{firstCandidate.name}</span> : {formatNumber(firstCandidate.votes)} <span className="votes-added">({ firstCandidate.percentage.toFixed(2) }%)</span>
                    </div>
                </div>

                <div className="row text-muted">
                    <div className="col-12">
                        Total voturi <span className="name">{secondCandidate.name}</span> : <span className="flag-animation">{formatNumber(secondCandidate.votes)}</span> <span className="votes-added">({ secondCandidate.percentage.toFixed(2) }%)</span>
                    </div>
                </div>

                <div className="row forecast-second-round text-muted">
                    <div className="col-12">
                        <div>
                            Prezență la vot în turul întâi : {presenceRoundOne.toFixed(2)}%
                        </div>
                        <div>
                            Prezență la vot estimată pentru turul doi : {(newVoters.presence).toFixed(2)}%
                        </div>
                        <div>
                            Voturi noi acordate în turul doi: {formatNumber(newVotes)}
                        </div>
                        <div className="new-votes-second-round">
                            Voturi din turul doi realocate către <span className="name">{firstCandidate.name}</span> : {formatNumber(secondRoundFirstCandidate.votes)} ({secondRoundFirstCandidate.percentage.toFixed(2)}%)
                        </div>
                        <div>
                            Voturi din turul doi realocate către <span className="name">{secondCandidate.name}</span> : {formatNumber(secondRoundSecondCandidate.votes)} ({secondRoundSecondCandidate.percentage.toFixed(2)}%)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forecast;
