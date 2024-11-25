import React from "react";

const Header: React.FC = () => {
    return (
        <header className="row text-center">
            <div className="col-12">
                <h1 className="display-6">
                    La <span className="flag-blue">V</span>
                    <span className="flag-yellow">O</span>
                    <span className="flag-red">T</span>
                </h1>
                <h3 className="display-6 text-muted">
                    Romania <span className="text-underscore">Mai Poate</span>{" "}
                    Decide
                </h3>
            </div>
        </header>
    );
};

export default Header;
