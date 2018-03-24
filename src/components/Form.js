import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     strSearch: ''
        // }
        this.handleShow = this.handleShow.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleShow(e) {
        e.preventDefault();
        this.props.onClickShow();
    }
    // handleChange(e) {
    //     this.setState({ strSearch: e.target.value });
    // }
    // handleSubmit() {
    //     console.log("this.state.strSearch")
    // }
    render() {
        let { isShowForm } = this.props;
        // let { strSearch } = this.state;
        if (isShowForm) {
            return (
                <div className="row">
                    <div className="offset-6 col-6 ">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-row align-items-center">
                                <div className="col-auto">
                                    <label className="sr-only" htmlFor="inlineFormInput">Name</label>
                                    <input type="text" className="form-control mb-2" id="inlineFormInput" placeholder="Task Name" />
                                </div>
                                <div className="col-auto">
                                    <div className="form-group">
                                        <select className="form-control" id="sel1">
                                            <option>Small</option>
                                            <option>Medium</option>
                                            <option>High</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
                                    <button onClick={this.handleShow} type="button" className="btn btn-primary mb-2">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            );
        } else return null
    }
}

export default Form;
