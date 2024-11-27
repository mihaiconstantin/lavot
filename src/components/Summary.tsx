import React from "react";


interface SummaryProps {
    children: React.ReactNode;
}


const Summary: React.FC<SummaryProps> = ({ children }) => {

    return (
        <div className="row control">
            <div className="col-12 section-description lead">
                {children}
            </div>
        </div>
    );
};

export default Summary;
