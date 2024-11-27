import React from "react";

const Header: React.FC = () => {
    return (
        <header className="row text-center">
            <div className="col-12">
                <h1 className="display-1 fw-lighter">
                    La <span className="flag-blue">V</span>
                    <span className="flag-yellow">O</span>
                    <span className="flag-red">T</span>
                </h1>
                <div className="header-subtitle display-6 fw-lighter text-secondary">
                    Romania <span className="text-underscore">Mai Poate</span> Decide
                </div>
            </div>
        </header>
    );
};

export default Header;
