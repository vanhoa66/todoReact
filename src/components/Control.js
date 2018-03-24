import React, { Component } from 'react';
import Search from "./Search";
import Sort from "./Sort";

class Control extends Component {

    handleShow() {
        this.props.onClickShow();
    }
    render() {
        let {onClickSearch} = this.props;
        return (
            <div className="row">
                <Search  onClickSearch={onClickSearch} />
                <Sort />
                <div className="col-5">
                    <button onClick={this.handleShow.bind(this)} type="button" className="btn btn-primary">Add Task</button>
                </div>
            </div>
        );
    }
}

export default Control;
