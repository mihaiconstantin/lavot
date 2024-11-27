import React from "react";


const Header: React.FC = () => {
    return (
        <header className="row text-center">
            <div className="col-12">
                <h1 className="display-1 fw-lighter">
                    <span className="header-logo-preposition cursive">La</span>{" "}
                    <span className="logo-letter cursive flag-blue">V</span>
                    <span className="logo-letter cursive flag-yellow">O</span>
                    <span className="logo-letter cursive flag-red">T</span>
                </h1>
                <div className="header-subtitle display-6 fw-lighter">
                    Romania <span className="flag-animation">Mai Poate</span> Decide
                </div>
            </div>
        </header>
    );
};

export default Header;
