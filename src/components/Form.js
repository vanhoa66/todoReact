import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            level: 0
        }

        this.handleShow = this.handleShow.bind(this);

    }
    componentWillMount() {
        let { itemSelected } = this.props;
        if (itemSelected !== null) {
            this.setState({
                id: itemSelected.id,
                name: itemSelected.name,
                level: itemSelected.level
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        let { itemSelected } = nextProps;
        if (itemSelected !== null) {
            this.setState({
                id: itemSelected.id,
                name: itemSelected.name,
                level: itemSelected.level
            })
        }
    }
    handleShow(e) {
        e.preventDefault();
        this.props.onClickShow();
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let item = {
            id: this.state.id,
            name: this.state.name,
            level: this.state.level
        }
        this.props.onClickSubmit(item);
    }

    render() {
        return (
            <div className="row">
                <div className="offset-6 col-6 ">
                    <form onSubmit={this.handleSubmit}>
                        <div class="form-row">
                            <div class="form-row">
                                <div className="form-group col-12">
                                    <input value={this.state.name} name="name" onChange={this.handleChange} type="text" className="form-control mb-2" id="inlineFormInput" placeholder="Task Name" />
                                </div>
                            </div>
                            <div class="form-group col-3">
                                <select value={this.state.level} name="level" onChange={this.handleChange} className="form-control" id="sel1">
                                    <option value={0}>Easy</option>
                                    <option value={1}>Medium</option>
                                    <option value={2}>Hard</option>
                                </select>
                            </div>
                            <div class="form-group col-4">
                                <button type="submit" className="btn btn-primary">Submit</button>
                                <button onClick={this.handleShow} type="button" className="btn btn-info">Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;
