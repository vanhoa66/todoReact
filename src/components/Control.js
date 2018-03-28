import React, { Component } from 'react';
import Search from "./Search";
import Sort from "./Sort";

class Control extends Component {

    handleShow() {
        this.props.onClickShow();
    }
    render() {
        let { onClickSearch, isShowForm } = this.props;
        let elmBtn = "Add Task";
        let btnClass = "btn-primary"
        if (isShowForm) {
            elmBtn = "Close Task";
            btnClass = "btn-success"
        }
        return (
            <div className="row">
                <Search onClickSearch={onClickSearch} />
                <Sort
                    orderBy={this.props.orderBy}
                    orderDir={this.props.orderDir}
                    onClickSort={this.props.onClickSort}
                />
                <div className="col-6">
                    <button onClick={this.handleShow.bind(this)} type="button" className={`btn btn-primary btn-block ${btnClass}`}>{elmBtn}</button>
                </div>
            </div>
        );
    }
}

export default Control;
