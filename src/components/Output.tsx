import React from 'react';
import Forecast from './Forecast';
import SankeyChart from './SankeyChart';
import { data } from "../data/data";


const Output: React.FC = () => {
    return (
        <section id="outputs" className="row">
            <div className="col-12 shadow outputs-wrapper">

                <div className="b row section-title">
                    <div className="col-12">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-graph-up" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07"/>
                        </svg>
                        <span className="display-6">Prognoza Pentru Turul Doi</span>
                    </div>
                </div>

                <Forecast
                    statistics={data.statistics}
                />

                <div className="row output-information">
                    <div className="col-12">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                        </svg>
                        <span>
                            Poți interacționa cu prognoza ta folosind graficul de mai jos.
                        </span>
                    </div>
                </div>

                <SankeyChart/>
            </div>
        </section>
    );
};

export default Output;
