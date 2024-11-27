import React from "react";
import Summary from "./Summary";
import QualifiedCandidate from "./QualifiedCandidate";
import DropoutCandidate from "./DropoutCandidate";
import SectionSubtitle from "./SectionSubtitle";
import SectionTitle from "./SectionTitle";
import NewVoters from "./NewVoters";
import { data } from "../data/data";
import { formatNumber } from "../utils/formatNumbers";
import { calculateVotingPresence } from "../utils/calculateVotes";
import { useAtom } from "jotai";
import { newVotersAtom } from "../atoms/allocationAtoms";


const Candidates: React.FC = () => {
    // Get the global state of new voters.
    const [ newVoters ] = useAtom(newVotersAtom);

    // Extract relevant information from the data array.
    const { first, second, dropouts, statistics } = data;

    // Construct the array of qualified candidates.
    const qualified = [first, second];

    // Extract the votes for the first round.
    const votesRoundOne = statistics.votesRoundOne;

    // Extract the eligible voters for the first round.
    const voters = statistics.voters;

    // Calculate the vote percentage for the first round.
    const presenceRoundOne = calculateVotingPresence(voters, votesRoundOne);

    return (
        <section id="controls" className="row">
            <div className="col-12 shadow controls-wrapper">
                {/* <Debug
                    voters={statistics.voters}
                    votesRoundOne={statistics.votesRoundOne}
                /> */}

                {/* Render the section title. */}
                <SectionTitle title="Împarte Voturile " />

                {/* Render the summary. */}
                <Summary>
                    Pe baza celor mai recente date de la ROAEP, <span className="fw-bold text-success">{formatNumber(votesRoundOne)}</span> de voturi au fost valide în primul tur din <span className="fw-bold text-danger">{formatNumber(voters)}</span> câte erau eligibile, indicând astfel o prezență la vot de <span className="fw-bold text-muted">{presenceRoundOne.toFixed(2)}%</span>.
                    În urma acestui vot, candidații <span className="name text-muted">{first.name}</span> și <span className="name flag-animation">{second.name}</span> vor fi selectați pentru turul doi.
                    Folosind câmpurile de mai jos, alege cum preconizezi că se vor <span className="fst-italic">redistribui</span> voturile candidaților pentru turul doi.
                </Summary>

                {/* Render section subtitle. */}
                <SectionSubtitle subtitle="Candidații Din Turul Doi" />

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

                {/* Render section subtitle. */}
                <SectionSubtitle subtitle="Candidații Eliminați" />

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

                {/* Render section subtitle. */}
                <SectionSubtitle subtitle="Votanți Noi" />

                <Summary>
                    În primul tur, prezența la vot a fost de <span className="fw-bold text-muted">{presenceRoundOne.toFixed(2)}%</span>.
                    Estimarea de mai jos pleacă de la presupunerea că <span className="fw-bold text-muted">{(presenceRoundOne + 0.01).toFixed(2)}%</span> si <span className="fw-bold text-muted">90%</span> de personae vor vota și în turul doi.
                    Estimarea ta curentă privind prezenta la vot din turul doi este de <span className="fw-bold flag-animation">{ newVoters.presence.toFixed(2) }%</span>.
                </Summary>

                {/* Render new voters. */}
                <NewVoters
                    statistics={statistics}
                    firstCandidate={first}
                    secondCandidate={second}
                />
            </div>
        </section>
    );
};

export default Candidates;
