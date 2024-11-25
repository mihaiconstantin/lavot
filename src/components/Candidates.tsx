import React from "react";
import Candidate from "./Candidate";

const Candidates: React.FC = () => {
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
                        Pe baza datelor încărcate{" "}
                        <span className="total-votes-round-one">12312313</span>{" "}
                        persoane au votat, iar candidații{" "}
                        <span className="name">Nume Prenume</span> și{" "}
                        <span className="name">Nume Prenume</span> vor fi
                        selectați pentru turul doi. Alege mai jos cum estimezi
                        că se vor împărți voturile în turul doi pentru fiecare
                        candidat în parte.
                    </div>
                </div>

                <div className="b row section-subtitle">
                    <div className="col-12">Candidații Din Turul Doi</div>
                </div>

                <div className="row align-items-top control candidate justify-content-between">
                    <div className="b col-3 candidate-information">
                        <div className="row identification">
                            <div className="col-12">
                                <span className="annotation">🇷🇺</span>
                                <span className="name">Nume Prenume</span>
                            </div>
                        </div>

                        <div className="row votes">
                            <div className="col-12">
                                <span className="count">2306090</span> voturi (
                                <span className="percentage">25%</span>)
                            </div>
                        </div>
                    </div>

                    <div className="b col-4 candidate-slider">
                        <div className="form-group">
                            <label htmlFor="candidateRange1">
                                Câte voturi crezi că va reține candidatul?
                            </label>
                            <input
                                type="range"
                                className="form-range"
                                id="candidateRange1"
                            />
                        </div>
                    </div>

                    <div className="b col-4 candidate-receiver">
                        <div className="row">
                            <div className="col-12 feedback">
                                <span className="name gain">Nume Prenume</span>{" "}
                                va retine <span className="gain">23%</span> din
                                voturi (<span className="gain">20123122</span>),
                                iar restul de <span className="loss">77%</span>{" "}
                                (<span className="loss">21323123</span>) vor
                                merge către
                                <span className="name loss">Nume Prenume</span>.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row align-items-top control candidate justify-content-between">
                    <div className="b col-3 candidate-information">
                        <div className="row identification">
                            <div className="col-12">
                                <span className="annotation">🇷🇴</span>
                                <span className="name">Nume Prenume</span>
                            </div>
                        </div>

                        <div className="row votes">
                            <div className="col-12">
                                <span className="count">2306090</span> voturi (
                                <span className="percentage">25%</span>)
                            </div>
                        </div>
                    </div>

                    <div className="b col-4 candidate-slider">
                        <div className="form-group">
                            <label htmlFor="candidateRange1">
                                Câte voturi crezi că va reține candidatul?
                            </label>
                            <input
                                type="range"
                                className="form-range"
                                id="candidateRange1"
                            />
                        </div>
                    </div>

                    <div className="b col-4 candidate-receiver">
                        <div className="row">
                            <div className="col-12 feedback">
                                <span className="name gain">Nume Prenume</span>{" "}
                                va retine <span className="gain">23%</span> din
                                voturi (<span className="gain">20123122</span>),
                                iar restul de <span className="loss">77%</span>{" "}
                                (<span className="loss">21323123</span>) vor
                                merge către
                                <span className="name loss">Nume Prenume</span>.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="b row section-subtitle">
                    <div className="col-12">Candidații Eliminați</div>
                </div>

                <Candidate />

                <div className="row align-items-top control candidate justify-content-between">
                    <div className="b col-3 candidate-information">
                        <div className="row identification">
                            <div className="col-12">
                                <span className="name">Nume Prenume</span>
                            </div>
                        </div>

                        <div className="row votes">
                            <div className="col-12">
                                <span className="count">2306090</span> voturi (
                                <span className="percentage">25%</span>)
                            </div>
                        </div>
                    </div>

                    <div className="b col-4 candidate-slider">
                        <div className="form-group">
                            <label htmlFor="candidateRange1">
                                Cate voturi ale candidatului...
                            </label>
                            <input
                                type="range"
                                className="form-range"
                                id="candidateRange1"
                            />
                        </div>
                    </div>

                    <div className="b col-4 candidate-receiver">
                        <div className="form-group">
                            <label
                                className="control-label"
                                id="selection-label"
                                htmlFor="selection-selectized"
                            >
                                ...vor merge catre cine?
                            </label>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                            >
                                <option selected>Selecteaza candidatul</option>
                                <option value="1">Nume Prenume</option>
                                <option value="2">Nume Prenume</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="row align-items-top control candidate justify-content-between">
                    <div className="b col-3 candidate-information">
                        <div className="row identification">
                            <div className="col-12">
                                <span className="name">Nume Prenume</span>
                            </div>
                        </div>

                        <div className="row votes">
                            <div className="col-12">
                                <span className="count">2306090</span> voturi (
                                <span className="percentage">25%</span>)
                            </div>
                        </div>
                    </div>

                    <div className="b col-4 candidate-slider">
                        <div className="form-group">
                            <label htmlFor="candidateRange1">
                                Cate voturi ale candidatului...
                            </label>
                            <input
                                type="range"
                                className="form-range"
                                id="candidateRange1"
                            />
                        </div>
                    </div>

                    <div className="b col-4 candidate-receiver">
                        <div className="form-group">
                            <label
                                className="control-label"
                                id="selection-label"
                                htmlFor="selection-selectized"
                            >
                                ...vor merge catre cine?
                            </label>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                            >
                                <option selected>Selecteaza candidatul</option>
                                <option value="1">Nume Prenume</option>
                                <option value="2">Nume Prenume</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="row align-items-top control candidate justify-content-between">
                    <div className="b col-3 candidate-information">
                        <div className="row identification">
                            <div className="col-12">
                                <span className="name">Nume Prenume</span>
                            </div>
                        </div>

                        <div className="row votes">
                            <div className="col-12">
                                <span className="count">2306090</span> voturi (
                                <span className="percentage">25%</span>)
                            </div>
                        </div>
                    </div>

                    <div className="b col-4 candidate-slider">
                        <div className="form-group">
                            <label htmlFor="candidateRange1">
                                Cate voturi ale candidatului...
                            </label>
                            <input
                                type="range"
                                className="form-range"
                                id="candidateRange1"
                            />
                        </div>
                    </div>

                    <div className="b col-4 candidate-receiver">
                        <div className="form-group">
                            <label
                                className="control-label"
                                id="selection-label"
                                htmlFor="selection-selectized"
                            >
                                ...vor merge catre cine?
                            </label>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                            >
                                <option selected>Selecteaza candidatul</option>
                                <option value="1">Nume Prenume</option>
                                <option value="2">Nume Prenume</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Candidates;
