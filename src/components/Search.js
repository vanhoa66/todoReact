import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            strSearch: ''
        }
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(e) {
        this.setState({ strSearch: e.target.value });
    }
    handleGo = () => {
        this.props.onClickSearch(this.state.strSearch);
    }
    handleClear = () => {
        this.setState({ strSearch: "" });
        this.props.onClickSearch("");
    }
    render() {
        let { strSearch } = this.state;
        return (
            <div className="col-3">
                <div className="input-group mb-3">
                    <input value={strSearch} onChange={this.handleChange} type="text" className="form-control" placeholder="Search for ..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button onClick={this.handleGo} className="btn btn-primary" type="button">Go</button>
                        <button onClick={this.handleClear} className="btn btn-warning" type="button">Clear</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
