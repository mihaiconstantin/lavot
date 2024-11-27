import React from "react";
import Summary from "./Summary";
import QualifiedCandidate from "./QualifiedCandidate";
import DropoutCandidate from "./DropoutCandidate";
import { data } from "../data/data";
import Debug from "./Debug";
import SectionSubtitle from "./SectionSubtitle";
import SectionTitle from "./SectionTitle";


const Candidates: React.FC = () => {
    // Extract relevant information from the data array.
    const { first, second, dropouts } = data;

    // Construct the array of qualified candidates.
    const qualified = [first, second];

    return (
        <section id="controls" className="row">
            <div className="col-12 shadow controls-wrapper">
                <Debug />

                {/* Render the section title. */}
                <SectionTitle title="Împarte Voturile " />

                {/* Render the summary. */}
                <Summary />

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
            </div>
        </section>
    );
};

export default Candidates;
