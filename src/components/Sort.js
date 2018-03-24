import React, { Component } from 'react';

class Sort extends Component {
    render() {
        return (
            <div className="col-3">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sort by
    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" role="button">Name ASC</a>
                        <a className="dropdown-item" role="button">Name DESC</a>
                        <a className="dropdown-item" role="button">Level ASC</a>
                        <a className="dropdown-item" role="button">Level DESC</a>
                    </div>
                    <span className="label success">Name ASC</span>
                </div>
            </div>
        );
    }
}

export default Sort;
